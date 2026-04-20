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
          <Link href="/products">Products</Link>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/results">Results</Link>
          <Link href="/about">About</Link>
          <Link
            href="/book"
            className="border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-white transition hover:bg-[var(--accent-light)]"
          >
            Book a Conversation
          </Link>
        </nav>
      </Container>
    </header>
  );
}
