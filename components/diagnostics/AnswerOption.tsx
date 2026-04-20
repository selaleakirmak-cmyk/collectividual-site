type Props = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export default function AnswerOption({ label, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={[
        "w-full border px-4 py-4 text-left text-[13px] leading-7 transition",
        selected
          ? "border-[var(--accent)] bg-[var(--accent)] text-white"
          : "border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:bg-[#ede7d8]",
      ].join(" ")}
    >
      <span className="flex items-start gap-3">
        <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full border border-current" />
        <span>{label}</span>
      </span>
    </button>
  );
}
