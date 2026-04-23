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
  "Card-based thinking tools",
  "Prompt kits for reflection and project development",
  "Printable formats for workshops and learning",
  "Small systems for creative production",
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
            Do you have an idea? Let’s give it a life.
          </h1>
          <p className="mt-6 max-w-3xl text-[14px] leading-8 text-[var(--muted)]">
            Collectividual is a place where one person can become a whole team: a lab for reflective tools,
            creative formats, small experiments, and ideas that need structure before they can meet the world.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/labs"
              className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white transition hover:bg-[var(--accent-light)]"
            >
              Enter the Labs
            </Link>
            <Link
              href="/tools"
              className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]"
            >
              Explore Tools
            </Link>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
            What this is
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "A quiet structure for ideas before they become products.",
              "A home for tools, decks, prompts, workshops, and printable formats.",
              "A way of building with low resources, high imagination, and collective intelligence.",
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
            <h2 className="text-4xl leading-tight md:text-5xl">A growing set of reflective practical instruments.</h2>
          </div>
          <div className="grid gap-4">
            {tools.map((tool) => (
              <div key={tool} className="border border-[var(--border)] p-5 text-[13px] leading-7 text-[var(--text)]">
                {tool}
              </div>
            ))}
            <Link href="/tools" className="mt-3 inline-flex text-[12px] tracking-[0.06em] text-[var(--accent)]">
              Browse the tools →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="border border-[var(--border)] p-8 md:p-12">
            <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Invitation</p>
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">
              Bring an idea, a question, a half-shaped format, or a small impossible thing.
            </h2>
            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">
              Collectividual is for people who want to make something with meaning but do not want to turn
              everything into a company, a course, or a performance of productivity.
            </p>
            <Link
              href="/join"
              className="mt-8 inline-flex border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white transition hover:bg-[var(--accent-light)]"
            >
              Join the list
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
