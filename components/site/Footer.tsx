import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-14">
      <Container className="grid gap-10 md:grid-cols-4">
        <div>
          <p className="mb-4 font-serif text-2xl">Collectividual</p>
          <p className="text-[13px] leading-7 text-[var(--muted)]">
            Structured facilitated products for the moments distributed work gets stuck.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">Products</p>
          <div className="space-y-3 text-[13px]">
            <Link href="/products/coordination-friction">Meeting Friction</Link>
            <Link href="/products/manager-conversations">Manager Conversations</Link>
            <Link href="/products/team-climate-reset">Team Climate Reset</Link>
            <Link href="/products/change-communication">Change Communication</Link>
            <Link href="/products/distributed-operating-system">Distributed Operating System</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">Company</p>
          <div className="space-y-3 text-[13px]">
            <Link href="/about">About</Link>
            <Link href="/how-we-work">How We Work</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">Legal</p>
          <div className="space-y-3 text-[13px]">
            <Link href="/privacy">Privacy</Link>
            <Link href="/imprint">Imprint</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
