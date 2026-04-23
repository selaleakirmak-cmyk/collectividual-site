import Link from "next/link";
import Container from "@/components/site/Container";

const labs = [
  {
    title: "Think Lab",
    description:
      "Concepts, essays, guides, and editorial experiments for turning reflection into shared language.",
    href: "/labs#think-lab",
    items: ["Essays", "Guides", "Frameworks"],
  },
  {
    title: "Creative Lab",
    description:
      "Card decks, prompt kits, printable tools, and visual formats that help ideas take form.",
    href: "/labs#creative-lab",
    items: ["Card decks", "Prompt kits", "Printable tools"],
  },
  {
    title: "Community Lab",
    description:
      "Sessions, workshops, and participation formats for collective thinking and small-group work.",
    href: "/labs#community-lab",
    items: ["Workshops", "Session formats", "Facilitation tools"],
  },
  {
    title: "Kapital Zero Lab",
    description:
      "Low-budget experiments, playful entrepreneurship, and practical systems for building from almost nothing.",
    href: "/labs#kapital-zero-lab",
    items: ["Micro systems", "Experiments", "Playable formats"],
  },
];

export const metadata = {
  title: "Collectividual | Labs, Sessions, and Reflective Tools for Ideas",
  description:
    "Collectividual helps ideas take form through labs, guided sessions, reflective tools, prompt kits, printable formats, and collective creative systems.",
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-28">
        <Container>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Collectividual
          </p>
          <h1 className="max-w-6xl text-[4.6rem] font-semibold leading-[0.88] text-[var(--accent)] md:text-[6.8rem] lg:text-[8rem]">
            Do you have an idea? Let’s give it a life.
          </h1>
          <p className="mt-10 max-w-4xl text-[20px] leading-9 text-[var(--muted)] md:text-[24px] md:leading-10">
            Collectividual is a lab-based space for reflective tools, guided sessions, creative formats,
            and practical systems that help ideas become usable without flattening their meaning.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/join"
              className="rounded-full border border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-semibold tracking-[0.04em] text-white transition hover:bg-[var(--accent-light)]"
            >
              Join the list
            </Link>
            <Link
              href="/labs"
              className="rounded-full border border-[var(--border)] px-7 py-4 text-[13px] font-semibold tracking-[0.04em] text-[var(--accent)]"
            >
              Explore the labs
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            What this is
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "A structure for ideas before they become products, sessions, or public formats.",
              "A home for labs, tools, decks, prompts, workshops, and printable materials.",
              "A way of building with low resources, high imagination, and collective intelligence.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 text-[15px] leading-8 text-[var(--text)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Lab-first architecture
            </p>
            <h2 className="text-5xl font-semibold leading-[0.95] text-[var(--accent)] md:text-7xl">
              Labs come first. Tools and sessions grow from them.
            </h2>
            <p className="mt-8 text-[18px] leading-9 text-[var(--muted)]">
              Each lab is a working room. Inside it, ideas become sessions, card decks, prompt kits,
              printable tools, workshop formats, essays, and small experiments.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {labs.map((lab) => (
              <Link
                key={lab.title}
                id={lab.href.split("#")[1]}
                href={lab.href}
                className="rounded-[2.2rem] border border-[var(--border)] bg-[var(--surface)] p-8 transition hover:border-[var(--accent)] hover:bg-white md:p-10"
              >
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Lab
                </p>
                <h3 className="text-5xl leading-tight text-[var(--accent)]">{lab.title}</h3>
                <p className="mt-5 text-[15px] leading-8 text-[var(--muted)]">{lab.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {lab.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] px-4 py-2 text-[12px] text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="rounded-[2.5rem] bg-[var(--accent)] p-8 text-white md:p-12 lg:p-14">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
              Membership
            </p>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] md:text-7xl">
              Join before the formats become finished products.
            </h2>
            <p className="mt-8 max-w-3xl text-[18px] leading-9 text-white/75">
              Members get early notes, tool previews, session invitations, printable experiments, and behind-the-scenes
              development updates from the labs.
            </p>
            <Link
              href="/join"
              className="mt-10 inline-flex rounded-full bg-[#dfe7e2] px-7 py-4 text-[15px] font-bold text-[var(--accent)]"
            >
              Join the list
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
