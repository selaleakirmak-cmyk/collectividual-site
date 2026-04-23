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
      "A small group moves through the question with a structured practice.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Something is made: a text, object, or document that remains.",
  },
];

export const metadata = {
  title: "Collectividual | Question Practice Create",
  description:
    "A cultural practice that opens questions, explores them collectively, and creates artifacts that remain.",
};

export default function HomePage() {
  return (
    <>
      <section className="border-b-2 border-[var(--accent)] py-20">
        <Container>
          <h1 className="text-[5rem] font-black uppercase leading-[0.85] tracking-[-0.05em] text-[var(--accent)] md:text-[8rem]">
            Question. Practice. Create.
          </h1>
          <p className="mt-10 max-w-3xl border-l-4 border-[var(--accent)] pl-6 text-[20px] leading-9">
            A small group meets. A question is held. Something is made that remains.
          </p>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--accent)] py-16 text-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {layers.map((layer) => (
              <div key={layer.title} className="border-2 border-white p-6">
                <h2 className="text-4xl font-black uppercase">{layer.title}</h2>
                <p className="mt-4 text-[15px]">{layer.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="border-2 border-[var(--accent)] p-8">
            <h2 className="text-4xl font-black uppercase text-[var(--accent)]">
              The artifact is the proof.
            </h2>
            <p className="mt-6 text-[16px] leading-8">
              Not documentation. Not memory. A thing with form that can be read, held, and returned to.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Link
            href="/join"
            className="border-2 border-[var(--accent)] bg-[var(--accent)] px-8 py-4 text-white font-black uppercase"
          >
            Signal interest
          </Link>
        </Container>
      </section>
    </>
  );
}
