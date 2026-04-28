import Link from "next/link";
import Container from "@/components/site/Container";

const labs = [
  {
    id: "think-lab",
    title: "Think Lab",
    description: "Editorial thinking, essays, concepts, frameworks, and public language for ideas that need form before they become products.",
    outputs: ["Essays", "Concept maps", "Editorial guides", "Public learning formats"],
  },
  {
    id: "creative-lab",
    title: "Creative Lab",
    description: "A production room for card decks, printable tools, prompt kits, visual formats, and tangible psycho-social resources.",
    outputs: ["Card decks", "Printable tools", "Prompt kits", "Visual systems"],
  },
  {
    id: "community-lab",
    title: "Community Lab",
    description: "Participatory formats for workshops, small groups, collective thinking, and shared practices that help people learn together.",
    outputs: ["Workshops", "Group formats", "Reflection sessions", "Community tools"],
  },
  {
    id: "kapital-zero-lab",
    title: "Kapital Zero Lab",
    description: "Low-budget experiments and practical systems for turning almost no capital into small, testable, meaningful ventures.",
    outputs: ["Zero-budget experiments", "Micro-products", "Business games", "Starter systems"],
  },
];

export const metadata = {
  title: "Labs | Collectividual",
  description: "Collectividual labs for thinking, making, gathering, and building practical psycho-social tools.",
};

export default function LabsPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Labs</p>
          <h1 className="poster-title poster-title--wide">Working rooms for ideas that need structure.</h1>
          <p className="poster-lede mt-9">Collectividual Labs are not departments. They are working modes: ways of thinking, making, gathering, and testing ideas until they become usable forms.</p>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {labs.map((lab) => (
              <section id={lab.id} key={lab.id} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-9">
                <p className="poster-kicker mb-6">{lab.title}</p>
                <h2 className="text-4xl leading-none text-[var(--accent)] md:text-5xl">{lab.title}</h2>
                <p className="mt-5 text-[15px] leading-8 text-[var(--muted)]">{lab.description}</p>
                <div className="mt-7 grid gap-3">
                  {lab.outputs.map((output) => (
                    <div key={output} className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[13px] font-semibold leading-6 text-[var(--text)]">{output}</div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/join" className="poster-button">Bring an idea</Link>
            <Link href="/workshops" className="poster-button poster-button--secondary">Explore workshops</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
