import Link from "next/link";
import Container from "@/components/site/Container";

const care = [
  ["Context", "What might make this understandable?"],
  ["Acknowledge", "Can I validate before advising?"],
  ["Role", "What is mine to do, and what is not?"],
  ["Extend", "Does this need more support than I can offer?"],
];

const tools = [
  "Is This Mine to Hold Alone?",
  "Green / Yellow / Red Support Checklist",
  "Before You Respond Checklist",
  "Should I Ask About Safety?",
  "Boundary Safety Checklist",
];

export const metadata = {
  title: "Good Intentions Are Not Enough | Collectividual",
  description: "Mental health literacy for non-clinicians: careful communication, clearer boundaries, and more useful support.",
};

export default function ProjectPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Collectividual public project</p>
          <h1 className="poster-title poster-title--wide">Good Intentions Are Not Enough</h1>
          <p className="poster-lede mt-9">Mental health literacy for non-clinicians: practical language, clearer limits, and more careful support when someone is struggling.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/workshops" className="poster-button">Explore workshops</Link>
            <Link href="/tools/mental-health-literacy-checklists" className="poster-button poster-button--secondary">Download free tools</Link>
            <Link href="/assessment/mental-health-literacy" className="poster-button poster-button--secondary">Assess your organization</Link>
          </div>
          <p className="mt-8 max-w-2xl text-[12px] leading-6 text-[var(--muted)]">Psychoeducation and communication training for non-clinicians. Not therapy, diagnosis, crisis training, or clinical supervision.</p>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="poster-title poster-title--medium">Awareness opens the door. Literacy teaches us how to enter carefully.</h2>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>Distress appears in ordinary life: at work, in universities, in friendships, in communities, in group chats, and in small organizations.</p>
            <p>Good intentions can help. Without literacy, they can also become pressure, silence, rescuing, casual labeling, or advice that arrives too quickly.</p>
            <p>This project helps people move from awareness to literacy, from stigma to dignity, from fixing to listening, from labeling to understanding, and from rescuing to boundaried care.</p>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-8">CARE framework</p>
          <h2 className="poster-title poster-title--medium">A simple structure for difficult moments.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {care.map(([title, question]) => (
              <div key={title} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6">
                <h3 className="text-3xl leading-tight text-[var(--accent)] md:text-4xl">{title}</h3>
                <p className="mt-4 text-[13px] leading-7 text-[var(--muted)]">{question}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="poster-kicker mb-6 bg-[var(--bg)]">Free tools</p>
            <h2 className="poster-title poster-title--medium">Five checklists for careful support.</h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)]">Pause tools for non-clinicians. They are educational resources, not clinical assessment instruments.</p>
          </div>
          <div className="grid gap-3">
            {tools.map((tool) => (
              <div key={tool} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-4 text-[13px] font-semibold leading-7">{tool}</div>
            ))}
            <Link href="/tools/mental-health-literacy-checklists" className="mt-3 text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">Get the tools by email →</Link>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Start here</p>
            <h2 className="poster-title poster-title--medium">Not sure where to begin?</h2>
            <p className="poster-lede mt-8">Tell us about your group and we will help you decide whether the workshop, tools, assessment, or longer training format is the right next step.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="poster-button">Send an inquiry</Link>
              <Link href="/workshops" className="poster-button poster-button--secondary">View workshops</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
