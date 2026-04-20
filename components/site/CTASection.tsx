import Link from "next/link";
import Container from "./Container";

export default function CTASection({
  title,
  description,
  buttonLabel = "Book a Conversation",
  buttonHref = "/book",
}: {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-4xl border-t border-[var(--border)] pt-12">
        <h2 className="text-4xl leading-tight md:text-5xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-[14px] leading-8 text-[var(--muted)]">{description}</p>
        <Link
          href={buttonHref}
          className="mt-8 inline-block border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white transition hover:bg-[var(--accent-light)]"
        >
          {buttonLabel}
        </Link>
      </Container>
    </section>
  );
}
