import Link from "next/link";
import Container from "@/components/site/Container";

const layers = [
  {
    number: "01",
    title: "Question",
    description:
      "A live question is named with enough precision to be workable and enough openness to stay alive.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "A session, tool, or group format gives the question a structure to move through.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Something is made: a text, deck, worksheet, guide, object, or document that remains.",
  },
];

const labs = [
  {
    title: "Question Lab",
    description: "Live questions, editorial frames, prompts, and guides.",
    items: ["Questions", "Guides", "Frameworks"],
  },
  {
    title: "Practice Lab",
    description: "Sessions, workshops, facilitation tools, and structured encounters.",
    items: ["Sessions", "Workshops", "Practices"],
  },
  {
    title: "Artifact Lab",
    description: "Card decks, printable tools, prompt kits, documents, and designed outputs.",
    items: ["Decks", "Printables", "Toolkits"],
  },
];

const products = [
  "Card decks for reflection, facilitation, and creative development",
  "Prompt kits that turn vague ideas into workable directions",
  "Printable tools and worksheets for sessions, workshops, and learning",
  "Guided session formats for small groups and collective thinking",
];

export const metadata = {
  title: "Collectividual | Question Practice Create",
  description:
    "Collectividual creates labs, tools, sessions, card decks, prompt kits, and artifacts that help ideas take form.",
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
            Question. Practice. Create.
          </h1>
          <p className="mt-10 max-w-4xl border-l-4 border-[var(--accent)] pl-6 text-[20px] font-medium leading-9 text-[var(--text)] md:text-[24px] md:leading-10">
            Collectividual is a lab-based system for turning live questions into sessions, tools,
            and designed artifacts that remain after the encounter ends.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/join"
              className="border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]"
            >
              Signal interest
            </Link>
            <Link
              href="/labs"
              className="border-2 border-[var(--accent)] bg-[var(--surface)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--accent)]"
            >
              Explore the system
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--accent)] py-16 text-white md:py-24">
        <Container>
          <p className="mb-6 inline-flex border-2 border-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/80">
            The operating format
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {layers.map((layer) => (
              <div key={layer.title} className="border-2 border-white/70 p-7 md:p-8">
                <div className="mb-7 flex items-center justify-between border-b-2 border-white/70 pb-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">
                    Layer
                  </p>
                  <span className="font-serif text-5xl leading-none text-white">{layer.number}</span>
                </div>
                <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white">
                  {layer.title}
                </h2>
                <p className="mt-6 text-[16px] font-medium leading-8 text-white/78">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-14 md:py-20">
        <Container>
          <div className="mb-10 max-w-4xl">
            <p className="mb-5 inline-flex border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
              Labs
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              The labs hold the system.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {labs.map((lab, index) => (
              <Link
                key={lab.title}
                href="/labs"
                className="group border-2 border-[var(--accent)] bg-[var(--surface)] p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_0_var(--accent)]"
              >
                <div className="mb-8 flex items-center justify-between border-b-2 border-[var(--accent)] pb-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
                    Lab
                  </p>
                  <span className="font-serif text-5xl leading-none text-[var(--accent)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-[var(--accent)]">
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
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
              Tools and products
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              Useful forms, not generic content.
            </h2>
            <Link
              href="/tools"
              className="mt-8 inline-flex border-2 border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-[12px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]"
            >
              Browse tools
            </Link>
          </div>
          <div className="grid gap-4">
            {products.map((product) => (
              <div
                key={product}
                className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6 text-[16px] font-semibold leading-8 text-[var(--text)] transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]"
              >
                {product}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 md:py-24">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--accent)] p-8 text-white shadow-[0_18px_0_var(--text)] md:p-12 lg:p-14">
            <p className="mb-5 inline-flex border-2 border-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/80">
              Participate
            </p>
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Join before the formats become finished products.
            </h2>
            <p className="mt-8 max-w-3xl border-l-4 border-white/70 pl-6 text-[18px] font-medium leading-9 text-white/75">
              Signal interest if you want early notes, tool previews, session invitations, printable experiments,
              and unfinished questions before they become public artifacts.
            </p>
            <Link
              href="/join"
              className="mt-10 inline-flex border-2 border-white bg-[#dfe7e2] px-7 py-4 text-[15px] font-black uppercase tracking-[0.1em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_white]"
            >
              Signal interest
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
