import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-14">
      <Container className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="mb-4 font-serif text-2xl">Collectividual</p>
          <p className="max-w-xl text-[13px] leading-7 text-[var(--muted)]">
            Psycho-social tools, campaigns, seminars, and printable resources for more careful communication and collective life.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-[var(--muted)] md:justify-end">
          <Link href="/campaigns/good-intentions-are-not-enough">Campaign</Link>
          <Link href="/seminars/mental-health-literacy">Seminar</Link>
          <Link href="/tools/mental-health-literacy-checklists">Free Tools</Link>
          <Link href="/assessment/mental-health-literacy">Assessment</Link>
          <Link href="/join">Inquiry</Link>
        </nav>
      </Container>
    </footer>
  );
}
