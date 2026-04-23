import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="font-serif text-2xl text-[var(--text)]">
          Collectividual
        </Link>

        <nav className="hidden items-center gap-8 md:flex text-[13px] tracking-[0.03em] text-[var(--muted)]">
          <Link href="/manifesto">Manifesto</Link>
          <Link href="/labs">Labs</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/join">Join</Link>
        </nav>
      </Container>
    </header>
  );
}
