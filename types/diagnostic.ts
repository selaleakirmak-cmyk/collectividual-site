export type DiagnosticResultState = "low" | "medium" | "strong";

export type DiagnosticOption = {
  label: string;
  weight: 0 | 1 | 2;
};

export type DiagnosticQuestion = {
  text: string;
  options: [DiagnosticOption, DiagnosticOption, DiagnosticOption];
};

export type DiagnosticResult = {
  headline: string;
  interpretation: string;
  note: string;
  cta: string;
  ctaNote: string;
  ctaHref: string;
};

export type DiagnosticConfig = {
  id: string;
  tileLabel: string;
  tileDesc: string;
  label: string;
  toolName: string;
  intro: string;
  questions: DiagnosticQuestion[];
  results: Record<DiagnosticResultState, DiagnosticResult>;
};
