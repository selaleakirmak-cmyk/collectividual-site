import Link from "next/link";
import Container from "@/components/site/Container";

const principles = [
  "Psychological knowledge should become usable without becoming shallow.",
  "Care needs language, boundaries, and forms — not only good intention.",
  "Tools can carry complex ideas into everyday life more gently than lectures alone.",
  "Collective life improves when people have shared ways to pause, speak, and respond.",
];

export const metadata = {
  title: "About | Collectividual",
  description: "About Collectividual: psycho-social tools, workshops, and public projects for careful communication and mental health literacy.",
};

export default function AboutPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">About</p>
          <h1 className="poster-title poster-title--wide">One person can become a whole team.</h1>
          <p className="poster-lede mt-9">Collectividual is a psycho-social studio for turning psychological, cultural, and collective questions into tools, workshops, projects, and public learning formats.</p>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="poster-title poster-title--medium">What we make is not only content. It is structure.</h2>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>Collectividual creates practical forms for ideas that are often left abstract: mental health literacy, support, boundaries, stigma, collective care, reflective practice, and meaning-making.</p>
            <p>Some outputs are workshops. Some are assessment tools, printable guides, card decks, audio formats, or public projects. The shared aim is to make complex human knowledge easier to use without making it simplistic.</p>
            <p>The tone is serious but accessible, evidence-informed but not cold, creative but not decorative.</p>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-8">Principles</p>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6 text-[15px] font-semibold leading-8 text-[var(--text)]">
                {principle}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Work with us</p>
            <h2 className="poster-title poster-title--medium">Bring a question, a group, or an idea.</h2>
            <p className="poster-lede mt-8">We can help shape it into a workshop, tool, public project, or practical format that people can actually use.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="poster-button">Send an inquiry</Link>
              <Link href="/workshops" className="poster-button poster-button--secondary">Explore workshops</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
