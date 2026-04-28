import Link from "next/link";
import Container from "@/components/site/Container";

const labs = [
  {
    id: "creative-lab",
    title: "Creative Lab",
    description:
      "A working room for editorial thinking and tangible production: essays, concepts, card decks, printable tools, prompt kits, visual formats, and psycho-social resources.",
    outputs: ["Essays", "Concept maps", "Card decks", "Printable tools", "Prompt kits", "Visual systems"],
  },
  {
    id: "community-lab",
    title: "Community Lab",
    description:
      "Participatory formats for workshops, small groups, collective thinking, and shared practices that help people learn together.",
    outputs: ["Workshops", "Group formats", "Reflection sessions", "Community tools"],
  },
];

export const metadata = {
  title: "Labs | Collectividual",
  description: "Collectividual labs for making ideas usable and learning together through practical psycho-social tools.",
};

export default function LabsPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Labs</p>
          <h1 className="poster-title poster-title--wide">Two working rooms for ideas that need form.</h1>
          <p className="poster-lede mt-9">Collectividual Labs are not departments. They are working modes: one for turning ideas into usable forms, and one for learning, gathering, and practicing together.</p>
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
