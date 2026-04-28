import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="font-serif text-2xl text-[var(--text)]">
          Collectividual
        </Link>

        <nav className="hidden items-center gap-7 md:flex text-[13px] tracking-[0.03em] text-[var(--muted)]">
          <Link href="/campaigns/good-intentions-are-not-enough">Campaign</Link>
          <Link href="/seminars/mental-health-literacy">Seminar</Link>
          <Link href="/tools/mental-health-literacy-checklists">Free Tools</Link>
          <Link href="/assessment/mental-health-literacy">Assessment</Link>
          <Link href="/about">About</Link>
          <Link
            href="/book/free-consultation"
            className="border border-[var(--accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            Book a call
          </Link>
        </nav>
      </Container>
    </header>
  );
}
