import { DiagnosticQuestion, DiagnosticResultState } from "@/types/diagnostic";

export function computeResult(
  answers: Record<number, number>,
  questions: DiagnosticQuestion[]
): DiagnosticResultState {
  const total = Object.entries(answers).reduce((sum, [questionIndex, optionIndex]) => {
    const q = questions[Number(questionIndex)];
    const opt = q?.options[optionIndex];
    return sum + (opt?.weight ?? 0);
  }, 0);

  if (total <= 4) return "low";
  if (total <= 8) return "medium";
  return "strong";
}
