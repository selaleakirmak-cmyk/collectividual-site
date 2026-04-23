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
      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Collectividual
          </p>
          <h1 className="max-w-6xl text-[4.3rem] font-black uppercase leading-[0.82] tracking-[-0.05em] text-[var(--accent)] md:text-[7rem] lg:text-[9rem]">
            Do you have an idea? Let’s give it a life.
          </h1>
          <p className="mt-10 max-w-4xl border-l-4 border-[var(--accent)] pl-6 text-[20px] font-medium leading-9 text-[var(--text)] md:text-[24px] md:leading-10">
            Collectividual is a lab-based space for reflective tools, guided sessions, creative formats,
            and practical systems that help ideas become usable without flattening their meaning.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/join"
              className="border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]"
            >
              Join the list
            </Link>
            <Link
              href="/labs"
              className="border-2 border-[var(--accent)] bg-[var(--surface)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--accent)]"
            >
              Explore the labs
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-14 md:py-20">
        <Container>
          <p className="mb-5 inline-flex border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent)]">
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
                className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 text-[16px] font-semibold leading-8 text-[var(--text)] transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--accent)] py-16 text-white md:py-24">
        <Container>
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex border-2 border-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/80">
              Lab-first architecture
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
              Labs come first. Tools and sessions grow from them.
            </h2>
            <p className="mt-8 max-w-4xl border-l-4 border-white/70 pl-6 text-[18px] font-medium leading-9 text-white/80">
              Each lab is a working room. Inside it, ideas become sessions, card decks, prompt kits,
              printable tools, workshop formats, essays, and small experiments.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-14 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {labs.map((lab, index) => (
              <Link
                key={lab.title}
                id={lab.href.split("#")[1]}
                href={lab.href}
                className="group border-2 border-[var(--accent)] bg-[var(--surface)] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_0_var(--accent)] md:p-10"
              >
                <div className="mb-8 flex items-center justify-between border-b-2 border-[var(--accent)] pb-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
                    Lab
                  </p>
                  <span className="font-serif text-5xl leading-none text-[var(--accent)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-[var(--accent)] md:text-6xl">
                  {lab.title}
                </h3>
                <p className="mt-6 text-[16px] font-medium leading-8 text-[var(--text)]">{lab.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {lab.items.map((item) => (
                    <span
                      key={item}
                      className="border border-[var(--accent)] bg-[var(--surface-soft)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.08em] text-[var(--accent)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <span className="mt-9 inline-flex text-[12px] font-black uppercase tracking-[0.14em] text-[var(--accent)]">
                  Enter {lab.title} →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 md:py-24">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--accent)] p-8 text-white shadow-[0_18px_0_var(--text)] md:p-12 lg:p-14">
            <p className="mb-5 inline-flex border-2 border-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/80">
              Membership
            </p>
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Join before the formats become finished products.
            </h2>
            <p className="mt-8 max-w-3xl border-l-4 border-white/70 pl-6 text-[18px] font-medium leading-9 text-white/75">
              Members get early notes, tool previews, session invitations, printable experiments, and behind-the-scenes
              development updates from the labs.
            </p>
            <Link
              href="/join"
              className="mt-10 inline-flex border-2 border-white bg-[#dfe7e2] px-7 py-4 text-[15px] font-black uppercase tracking-[0.1em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_white]"
            >
              Join the list
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
