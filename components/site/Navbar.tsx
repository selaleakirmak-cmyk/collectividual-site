"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const enRoutes = {
  home: "/",
  project: "/campaigns/good-intentions-are-not-enough",
  workshops: "/workshops",
  tools: "/tools/mental-health-literacy-checklists",
  assessment: "/assessment/mental-health-literacy",
  about: "/about",
  join: "/join",
};

const trRoutes = {
  home: "/tr",
  project: "/tr/campaigns/good-intentions-are-not-enough",
  workshops: "/tr/workshops",
  tools: "/tr/tools/mental-health-literacy-checklists",
  assessment: "/tr/assessment/mental-health-literacy",
  about: "/tr/about",
  join: "/tr/join",
};

function withoutTurkishPrefix(pathname: string | null) {
  if (!pathname || pathname === "/tr") return "/";
  if (pathname.startsWith("/tr/")) return pathname.replace(/^\/tr/, "") || "/";
  return pathname;
}

export default function Navbar() {
  const pathname = usePathname();
  const isTurkish = pathname?.startsWith("/tr");
  const routes = isTurkish ? trRoutes : enRoutes;
  const alternateBase = withoutTurkishPrefix(pathname);
  const enHref = alternateBase;
  const trHref = alternateBase === "/" ? "/tr" : `/tr${alternateBase}`;

  const labels = isTurkish
    ? {
        project: "Proje",
        workshops: "Atölyeler",
        tools: "Araçlar",
        assessment: "Değerlendirme",
        about: "Hakkında",
        join: "İletişim",
        homeLabel: "Collectividual ana sayfa",
      }
    : {
        project: "Project",
        workshops: "Workshops",
        tools: "Free Tools",
        assessment: "Assessment",
        about: "About",
        join: "Inquiry",
        homeLabel: "Collectividual home",
      };

  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]">
      <Container className="flex items-center justify-between gap-5 py-4">
        <Link href={routes.home} className="block w-[190px] shrink-0 md:w-[240px]" aria-label={labels.homeLabel}>
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
          <Link href={routes.project}>{labels.project}</Link>
          <Link href={routes.workshops}>{labels.workshops}</Link>
          <Link href={routes.tools}>{labels.tools}</Link>
          <Link href={routes.assessment}>{labels.assessment}</Link>
          <Link href={routes.about}>{labels.about}</Link>
          <div className="flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--accent)]">
            <Link href={enHref}>EN</Link>
            <span className="text-[var(--muted)]">/</span>
            <Link href={trHref}>TR</Link>
          </div>
          <Link
            href={routes.join}
            className="border border-[var(--accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            {labels.join}
          </Link>
        </nav>
      </Container>
    </header>
  );
}
