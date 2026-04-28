import Link from "next/link";
import Container from "@/components/site/Container";

const labs = [
  {
    title: "Think Lab",
    description:
      "Essays, concepts, guides, and editorial experiments for turning reflection into shared language.",
    href: "/labs#think-lab",
  },
  {
    title: "Creative Lab",
    description:
      "Card decks, printable tools, prompt kits, and visual formats that help ideas take form.",
    href: "/labs#creative-lab",
  },
  {
    title: "Community Lab",
    description:
      "Formats for participation, workshops, collective thinking, and small-group cultural work.",
    href: "/labs#community-lab",
  },
  {
    title: "Kapital Zero Lab",
    description:
      "Low-budget experiments, playful entrepreneurship, and practical systems for building from almost nothing.",
    href: "/labs#kapital-zero-lab",
  },
];

const tools = [
  "Mental health literacy seminars for non-clinicians",
  "Downloadable checklists and reflective tools",
  "Assessment formats for organizations and communities",
  "Card decks, prompt kits, and printable psycho-social resources",
];

export default function HomePage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <p className="mb-5 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
            Collectividual
          </p>
          <h1 className="max-w-5xl text-5xl leading-tight md:text-7xl">
            We are on a mission for mental health.
          </h1>
          <p className="mt-6 max-w-3xl text-[14px] leading-8 text-[var(--muted)]">
            Collectividual creates psycho-social tools, public campaigns, seminars, and printable resources that help people move beyond shallow awareness toward careful communication, clearer boundaries, and more useful support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/campaigns/good-intentions-are-not-enough"
              className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white transition hover:bg-[var(--accent-light)]"
            >
              See current campaign
            </Link>
            <Link
              href="/tools/mental-health-literacy-checklists"
              className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]"
            >
              Download free tools
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
              Current public campaign
            </p>
            <h2 className="max-w-4xl text-4xl leading-tight md:text-6xl">
              Good Intentions Are Not Enough
            </h2>
          </div>
          <div>
            <p className="text-[14px] leading-8 text-[var(--muted)]">
              Mental health awareness has opened important conversations. But awareness alone does not teach us how to respond when someone is actually struggling.
            </p>
            <p className="mt-4 text-[14px] leading-8 text-[var(--muted)]">
              This campaign helps non-clinicians move from good intentions to careful support: clearer language, better boundaries, less stigma, and more useful next steps.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/campaigns/good-intentions-are-not-enough"
                className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white transition hover:bg-[var(--accent-light)]"
              >
                Enter the campaign
              </Link>
              <Link
                href="/assessment/mental-health-literacy"
                className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]"
              >
                Assess your organization
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-20 md:pb-28 md:pt-28">
        <Container>
          <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
            What this is
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "A public campaign for moving from awareness to literacy.",
              "A home for tools, seminars, assessments, campaigns, and printable formats.",
              "A way of turning psychological knowledge into careful everyday practice.",
            ].map((item) => (
              <div key={item} className="border border-[var(--border)] p-6 text-[13px] leading-7 text-[var(--text)]">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Labs</p>
          <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">
            Four working rooms for thinking, making, gathering, and building from zero.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {labs.map((lab) => (
              <Link
                key={lab.title}
                href={lab.href}
                className="border border-[var(--border)] p-7 transition hover:border-[var(--accent)]"
              >
                <h3 className="text-3xl leading-tight">{lab.title}</h3>
                <p className="mt-4 text-[13px] leading-7 text-[var(--muted)]">{lab.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Tools layer</p>
            <h2 className="text-4xl leading-tight md:text-5xl">Useful forms, not generic content.</h2>
          </div>
          <div className="grid gap-4">
            {tools.map((tool) => (
              <div key={tool} className="border border-[var(--border)] p-5 text-[13px] leading-7 text-[var(--text)]">
                {tool}
              </div>
            ))}
            <Link href="/seminars/mental-health-literacy" className="mt-3 inline-flex text-[12px] tracking-[0.06em] text-[var(--accent)]">
              View the mental health literacy seminar →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="border border-[var(--border)] p-8 md:p-12">
            <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Start here</p>
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">
              We are on a mission to spread mental health literacy.
            </h2>
            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">
              Move beyond shallow awareness toward careful communication, clearer boundaries, and more useful support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/campaigns/good-intentions-are-not-enough"
                className="inline-flex border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white transition hover:bg-[var(--accent-light)]"
              >
                Explore the campaign
              </Link>
              <Link
                href="/book/free-consultation"
                className="inline-flex border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]"
              >
                Book a call
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
