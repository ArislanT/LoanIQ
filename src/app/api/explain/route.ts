import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ExplainRequest {
  userQuestion: string;
  language?: "en" | "es";
  loans?: any[];
}

const SYSTEM_PROMPT = `You are a friendly financial literacy assistant for LoanIQ+, an app helping students understand student loans.

Your role:
- Explain loan concepts in simple, plain language
- Avoid jargon - if you must use a term, define it immediately
- Use relatable examples (comparing to everyday things students understand)
- Be encouraging and non-judgmental
- Keep responses concise (2-3 short paragraphs max)
- Focus on what matters most for the student's situation

Topics you can explain:
- Interest rates (fixed vs variable, APR, how interest accrues)
- Loan types (subsidized, unsubsidized, PLUS, private)
- Repayment plans (standard, income-driven, graduated)
- Consequences (missed payments, default, credit impact)
- Benefits (forgiveness programs, deferment, forbearance)
- Comparisons between loan options`;

export async function POST(req: Request) {
  try {
    const body: ExplainRequest = await req.json();
    const { userQuestion, language = "en", loans } = body;

    if (!userQuestion || userQuestion.trim() === "") {
      return Response.json({ error: "Topic is required" }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const languageInstruction =
      language === "es"
        ? "Respond in Spanish. Use simple, conversational Spanish appropriate for students."
        : "Respond in English.";

    const loansContext = loans && loans.length > 0
      ? `The user has these loan options available:\n${JSON.stringify(loans, null, 2)}`
      : "";

    const userPrompt = `${languageInstruction}
${loansContext}

User question: ${userQuestion}

Provide a clear, helpful explanation:`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const text = completion.choices[0]?.message?.content || "";

    return Response.json({
      success: true,
      explanation: text,
      userQuestion,
      language,
    });
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    return Response.json(
      {
        error: "Failed to generate response",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
