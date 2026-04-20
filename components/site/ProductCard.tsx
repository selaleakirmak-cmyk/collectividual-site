import Link from "next/link";

export default function ProductCard({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <article className="border border-[var(--border)] p-6 transition hover:border-[var(--accent)] hover:bg-[#f0ead8]">
      <h3 className="text-2xl leading-tight">{name}</h3>
      <p className="mt-4 text-[13px] leading-7 text-[var(--muted)]">{description}</p>
      <Link href={href} className="mt-6 inline-block text-[12px] tracking-[0.04em] text-[var(--accent)]">
        Learn more →
      </Link>
    </article>
  );
}
