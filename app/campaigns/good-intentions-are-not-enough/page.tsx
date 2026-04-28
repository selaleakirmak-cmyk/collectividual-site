import Link from "next/link";
import Container from "@/components/site/Container";

const care = [
  ["Context", "What might make this understandable?"],
  ["Acknowledge", "Can I validate before advising?"],
  ["Role", "What is mine to do, and what is not?"],
  ["Extend Support", "Does this need more support than I can offer?"],
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

export default function CampaignPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-24 md:py-32">
        <Container>
          <p className="mb-5 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">Collectividual public campaign</p>
          <h1 className="max-w-5xl text-5xl leading-tight md:text-7xl">Good Intentions Are Not Enough</h1>
          <p className="mt-4 max-w-3xl text-xl leading-9 text-[var(--accent)]">Mental Health Literacy for Non-Clinicians</p>
          <p className="mt-6 max-w-3xl text-[14px] leading-8 text-[var(--muted)]">
            Most people want to respond well when someone is struggling. But care becomes harder when we do not have the language, boundaries, or shared understanding to know what is ours to hold — and what is not.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/seminars/mental-health-literacy" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white">Book the 90-minute seminar</Link>
            <Link href="/tools/mental-health-literacy-checklists" className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]">Download free tools</Link>
            <Link href="/assessment/mental-health-literacy" className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]">Assess your organization</Link>
          </div>
          <p className="mt-8 max-w-2xl text-[12px] leading-6 text-[var(--muted)]">Psychoeducation and communication training for non-clinicians. Not therapy, diagnosis, crisis training, or clinical supervision.</p>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl leading-tight md:text-5xl">Awareness opens the door. Literacy teaches us how to enter carefully.</h2>
          <div className="space-y-5 text-[14px] leading-8 text-[var(--muted)]">
            <p>Distress appears in ordinary life: at work, in universities, in friendships, in communities, in group chats, and in small organizations.</p>
            <p>Good intentions can help. Without literacy, they can also become pressure, silence, rescuing, casual labeling, or advice that arrives too quickly.</p>
            <p>This campaign helps people move from awareness to literacy, from stigma to dignity, from fixing to listening, from labeling to understanding, and from rescuing to boundaried care.</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] py-20 md:py-28">
        <Container>
          <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">CARE framework</p>
          <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">A simple structure for difficult moments.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {care.map(([title, question]) => (
              <div key={title} className="border border-[var(--border)] p-6">
                <h3 className="text-3xl leading-tight text-[var(--accent)]">{title}</h3>
                <p className="mt-4 text-[13px] leading-7 text-[var(--muted)]">{question}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Free tools</p>
            <h2 className="text-4xl leading-tight md:text-5xl">Five checklists for careful support.</h2>
            <p className="mt-5 text-[13px] leading-7 text-[var(--muted)]">Pause tools for non-clinicians. They are educational resources, not clinical assessment instruments.</p>
          </div>
          <div className="grid gap-3">
            {tools.map((tool) => <div key={tool} className="border border-[var(--border)] bg-[var(--bg)] p-4 text-[13px] leading-7">{tool}</div>)}
            <Link href="/tools/mental-health-literacy-checklists" className="mt-3 text-[12px] tracking-[0.06em] text-[var(--accent)]">Get the tools by email →</Link>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="border border-[var(--border)] p-8 md:p-12">
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">Not sure where to begin?</h2>
            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">Book a free 15-minute consultation to discuss whether the seminar, tools, assessment, or longer training format fits your group.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book/free-consultation" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white">Book a free call</Link>
              <Link href="/book/seminar" className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]">Request seminar booking</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
