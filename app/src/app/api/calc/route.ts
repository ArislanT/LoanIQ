import { calculateLoan, LoanInput } from "@/lib/loanEngine";

export async function POST(req: Request) {
  const body = (await req.json()) as LoanInput;
  const result = calculateLoan(body);
  return Response.json(result);
}
