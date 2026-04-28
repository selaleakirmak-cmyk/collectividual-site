"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

export default function Footer() {
  const pathname = usePathname();
  const isTurkish = pathname?.startsWith("/tr");

  const copy = isTurkish
    ? {
        description:
          "Daha dikkatli iletişim, kolektif yaşam ve ruh sağlığı okuryazarlığı için psiko-sosyal araçlar, projeler, atölyeler ve çıktı alınabilir kaynaklar.",
        project: "Proje",
        workshops: "Atölyeler",
        tools: "Araçlar",
        assessment: "Değerlendirme",
        about: "Hakkında",
        inquiry: "İletişim",
        projectHref: "/tr/campaigns/good-intentions-are-not-enough",
        workshopsHref: "/tr/workshops",
        toolsHref: "/tr/tools/mental-health-literacy-checklists",
        assessmentHref: "/tr/assessment/mental-health-literacy",
        aboutHref: "/tr/about",
        inquiryHref: "/tr/join",
      }
    : {
        description:
          "Psycho-social tools, projects, workshops, and printable resources for more careful communication and collective life.",
        project: "Project",
        workshops: "Workshops",
        tools: "Free Tools",
        assessment: "Assessment",
        about: "About",
        inquiry: "Inquiry",
        projectHref: "/campaigns/good-intentions-are-not-enough",
        workshopsHref: "/workshops",
        toolsHref: "/tools/mental-health-literacy-checklists",
        assessmentHref: "/assessment/mental-health-literacy",
        aboutHref: "/about",
        inquiryHref: "/join",
      };

  return (
    <footer className="border-t border-[var(--border)] py-14">
      <Container className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="mb-4 font-serif text-2xl">Collectividual</p>
          <p className="max-w-xl text-[13px] leading-7 text-[var(--muted)]">
            {copy.description}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-[var(--muted)] md:justify-end">
          <Link href={copy.projectHref}>{copy.project}</Link>
          <Link href={copy.workshopsHref}>{copy.workshops}</Link>
          <Link href={copy.toolsHref}>{copy.tools}</Link>
          <Link href={copy.assessmentHref}>{copy.assessment}</Link>
          <Link href={copy.aboutHref}>{copy.about}</Link>
          <Link href={copy.inquiryHref}>{copy.inquiry}</Link>
        </nav>
      </Container>
    </footer>
  );
}
