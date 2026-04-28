import Link from "next/link";
import Container from "@/components/site/Container";

const flow = [
  ["0–10 min", "Opening frame", "Why good intentions need literacy."],
  ["10–25 min", "Awareness vs literacy", "What awareness can and cannot do."],
  ["25–40 min", "Distress, context, and stigma", "Why psychological distress needs nuance."],
  ["40–60 min", "CARE framework", "Context, Acknowledge, Role, Extend Support."],
  ["60–75 min", "Practical response moments", "What to say, what not to say, when to pause."],
  ["75–85 min", "Five safety checklists", "How participants can use the tools after the seminar."],
  ["85–90 min", "Closing and next steps", "Boundaries, support pathways, and further learning."],
];

export const metadata = {
  title: "Mental Health Literacy Seminar | Collectividual",
  description: "A 90-minute introductory seminar for non-clinicians on mental health literacy, communication, boundaries, and useful support.",
};

export default function SeminarPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-24 md:py-32">
        <Container>
          <p className="mb-5 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">90-minute seminar</p>
          <h1 className="max-w-5xl text-5xl leading-tight md:text-7xl">Mental Health Literacy for Non-Clinicians</h1>
          <p className="mt-6 max-w-3xl text-[14px] leading-8 text-[var(--muted)]">A practical, careful seminar for people who want to support others without diagnosing, rescuing, minimizing, or carrying everything alone.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book/seminar" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white">Book the seminar</Link>
            <Link href="/book/free-consultation" className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]">Book a 15-minute call</Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl leading-tight md:text-5xl">Because “we care about mental health” is not yet a practice.</h2>
          <div className="space-y-5 text-[14px] leading-8 text-[var(--muted)]">
            <p>Many groups care about mental health but still struggle when distress becomes visible.</p>
            <p>People may not know what to say. They may say too much. They may avoid the person. They may use labels too quickly. They may become the only support person.</p>
            <p>This seminar gives people a shared starting point.</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] py-20 md:py-28">
        <Container>
          <h2 className="mb-10 max-w-4xl text-4xl leading-tight md:text-5xl">90 minutes, clearly held.</h2>
          <div className="space-y-4">
            {flow.map(([time, title, description]) => (
              <div key={time} className="grid gap-4 border border-[var(--border)] bg-[var(--surface)] p-5 md:grid-cols-[120px_0.8fr_1.2fr]">
                <p className="text-[12px] uppercase tracking-[0.1em] text-[var(--muted)]">{time}</p>
                <h3 className="text-2xl leading-tight text-[var(--accent)]">{title}</h3>
                <p className="text-[13px] leading-7 text-[var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="border border-[var(--border)] bg-[var(--bg)] p-7">
            <h2 className="text-4xl leading-tight">This is</h2>
            <ul className="mt-6 space-y-3 text-[13px] leading-7 text-[var(--muted)]">
              <li>Psychoeducation</li><li>Communication training</li><li>Mental health literacy</li><li>Boundary-supportive learning</li><li>A shared language for groups</li>
            </ul>
          </div>
          <div className="border border-[var(--border)] bg-[var(--bg)] p-7">
            <h2 className="text-4xl leading-tight">This is not</h2>
            <ul className="mt-6 space-y-3 text-[13px] leading-7 text-[var(--muted)]">
              <li>Therapy</li><li>Diagnosis</li><li>Crisis training</li><li>Clinical supervision</li><li>A replacement for professional care</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="border border-[var(--border)] p-8 md:p-12">
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">Bring this seminar to your group.</h2>
            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">Tell us who the seminar is for, what kind of setting you are working in, and whether you want a one-time session or a longer training pathway.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book/seminar" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white">Request seminar booking</Link>
              <Link href="/tools/mental-health-literacy-checklists" className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]">Download participant tools</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
