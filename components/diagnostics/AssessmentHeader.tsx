export default function AssessmentHeader({
  label,
  toolName,
  intro,
  answered,
  total,
}: {
  label: string;
  toolName: string;
  intro: string;
  answered: number;
  total: number;
}) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Quick check — {label}</p>
      <h2 className="text-4xl italic leading-tight md:text-5xl">{toolName}</h2>
      <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">{intro}</p>
      <div className="mt-5 border-t border-[var(--border)] pt-4 text-[11px] leading-6 text-[var(--muted)]">
        Choose the option that most closely reflects what you are observing.
        {answered > 0 && answered < total ? (
          <span className="ml-3 text-[var(--accent)]">
            {answered} of {total} answered
          </span>
        ) : null}
      </div>
    </div>
  );
}
