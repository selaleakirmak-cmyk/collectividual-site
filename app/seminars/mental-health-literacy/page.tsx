import Link from "next/link";
import Container from "@/components/site/Container";

const flow = [
  ["0–10 min", "Opening frame", "Why good intentions need literacy."],
  ["10–25 min", "Awareness vs literacy", "What awareness can and cannot do."],
  ["25–40 min", "Distress, context, and stigma", "Why psychological distress needs nuance."],
  ["40–60 min", "CARE framework", "Context, Acknowledge, Role, Extend."],
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
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">90-minute workshop</p>
          <h1 className="poster-title poster-title--wide">Mental Health Literacy for Non-Clinicians</h1>
          <p className="poster-lede mt-9">A practical, careful workshop for people who want to support others without diagnosing, rescuing, minimizing, or carrying everything alone.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/join" className="poster-button">Request this workshop</Link>
            <Link href="/workshops" className="poster-button poster-button--secondary">View all workshops</Link>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="poster-title poster-title--medium">Because “we care about mental health” is not yet a practice.</h2>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>Many groups care about mental health but still struggle when distress becomes visible.</p>
            <p>People may not know what to say. They may say too much. They may avoid the person. They may use labels too quickly. They may become the only support person.</p>
            <p>This workshop gives people a shared starting point: language, limits, support pathways, and practical response skills.</p>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <h2 className="poster-title poster-title--medium mb-10">90 minutes, clearly held.</h2>
          <div className="space-y-4">
            {flow.map(([time, title, description]) => (
              <div key={time} className="grid gap-4 border-2 border-[var(--accent)] bg-[var(--surface)] p-5 md:grid-cols-[120px_0.8fr_1.2fr]">
                <p className="text-[12px] uppercase tracking-[0.1em] text-[var(--muted)]">{time}</p>
                <h3 className="text-2xl leading-tight text-[var(--accent)]">{title}</h3>
                <p className="text-[13px] leading-7 text-[var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7">
            <h2 className="text-4xl leading-tight text-[var(--accent)] md:text-5xl">This is</h2>
            <ul className="mt-6 space-y-3 text-[13px] leading-7 text-[var(--muted)]">
              <li>Psychoeducation</li>
              <li>Communication training</li>
              <li>Mental health literacy</li>
              <li>Boundary-supportive learning</li>
              <li>A shared language for groups</li>
            </ul>
          </div>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7">
            <h2 className="text-4xl leading-tight text-[var(--accent)] md:text-5xl">This is not</h2>
            <ul className="mt-6 space-y-3 text-[13px] leading-7 text-[var(--muted)]">
              <li>Therapy</li>
              <li>Diagnosis</li>
              <li>Crisis training</li>
              <li>Clinical supervision</li>
              <li>A replacement for professional care</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Bring this to your group</p>
            <h2 className="poster-title poster-title--medium">Start with a clear inquiry.</h2>
            <p className="poster-lede mt-8">Tell us who the workshop is for, what kind of setting you are working in, and whether you want a one-time session or a longer training pathway.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="poster-button">Send an inquiry</Link>
              <Link href="/tools/mental-health-literacy-checklists" className="poster-button poster-button--secondary">Download participant tools</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
