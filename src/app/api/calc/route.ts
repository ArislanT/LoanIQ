import { calculateLoan, LoanInput } from "@/app/lib/loanEngine";

export async function POST(req: Request) {
  const body = (await req.json()) as LoanInput;
  const result = calculateLoan(body);
  return Response.json(result);
}
