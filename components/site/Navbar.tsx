"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

export default function Navbar() {
  const pathname = usePathname();
  const isTurkish = pathname?.startsWith("/tr");

  const labels = isTurkish
    ? {
        project: "Proje",
        seminar: "Seminer",
        tools: "Araçlar",
        assessment: "Değerlendirme",
        about: "Hakkında",
        join: "İletişim",
        homeLabel: "Collectividual ana sayfa",
      }
    : {
        project: "Project",
        seminar: "Seminar",
        tools: "Free Tools",
        assessment: "Assessment",
        about: "About",
        join: "Join",
        homeLabel: "Collectividual home",
      };

  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]">
      <Container className="flex items-center justify-between gap-5 py-4">
        <Link href={isTurkish ? "/tr" : "/"} className="block w-[190px] shrink-0 md:w-[240px]" aria-label={labels.homeLabel}>
          <Image
            src="/collectividual-logo.svg"
            alt="Collectividual"
            width={1200}
            height={320}
            priority
            className="h-auto w-full"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex text-[13px] tracking-[0.03em] text-[var(--muted)]">
          <Link href="/campaigns/good-intentions-are-not-enough">{labels.project}</Link>
          <Link href="/seminars/mental-health-literacy">{labels.seminar}</Link>
          <Link href="/tools/mental-health-literacy-checklists">{labels.tools}</Link>
          <Link href="/assessment/mental-health-literacy">{labels.assessment}</Link>
          <Link href="/about">{labels.about}</Link>
          <div className="flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--accent)]">
            <Link href="/">EN</Link>
            <span className="text-[var(--muted)]">/</span>
            <Link href="/tr">TR</Link>
          </div>
          <Link
            href="/join"
            className="border border-[var(--accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            {labels.join}
          </Link>
        </nav>
      </Container>
    </header>
  );
}
