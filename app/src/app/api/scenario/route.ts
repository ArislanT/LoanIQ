import { applyScenario, LoanInput, ScenarioType } from "@/lib/loanEngine";

export async function POST(req: Request) {
  const body = await req.json();

  const { scenario, ...loan } = body as LoanInput & { scenario: ScenarioType };

  if (!scenario || !scenario.type) {
    return Response.json({ error: "Missing scenario" }, { status: 400 });
  }

  try {
    const result = applyScenario(loan, scenario);
    return Response.json(result);
  } catch (e: any) {
    return Response.json({ error: e.message ?? "Bad request" }, { status: 400 });
  }
}
