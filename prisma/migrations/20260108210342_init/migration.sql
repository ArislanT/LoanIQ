-- CreateTable
CREATE TABLE "ExplanationLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "loanType" TEXT NOT NULL,
    "loanName" TEXT,
    "question" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "LoanOffer" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "loanType" TEXT NOT NULL,        -- e.g., "FGLI", "personal", etc.
  "loanName" TEXT,
  "principal" REAL NOT NULL,
  "apr" REAL NOT NULL,
  "termMonths" INTEGER NOT NULL,
  "monthlyPayment" REAL,           -- optional if you compute it
  "fees" REAL DEFAULT 0,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "SecondLookEvent" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "loanOfferId" TEXT NOT NULL,
  "insightText" TEXT NOT NULL,
  "dataSources" TEXT NOT NULL, -- JSON: principal, apr, term, etc.
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY ("loanOfferId") REFERENCES "LoanOffer"("id")
);
