import Link from "next/link";
import Container from "@/components/site/Container";

const outcomes = [
  "Understand mental health literacy beyond awareness",
  "Recognize why casual labels can harm",
  "Respond with validation before advice",
  "Understand role boundaries as non-clinicians",
  "Use boundaries as part of care",
  "Notice when support should be extended",
  "Use five practical safety checklists",
];

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
  description:
    "A 90-minute introductory seminar for non-clinicians on mental health literacy, careful communication, boundaries, and useful support.",
};

export default function SeminarPage() {
  return (
    <>
      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            90-minute seminar
          </p>
          <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] text-[var(--accent)] md:text-8xl">
            Mental Health Literacy for Non-Clinicians
          </h1>
          <p className="mt-8 max-w-4xl border-l-4 border-[var(--accent)] pl-6 text-[18px] font-medium leading-9 text-[var(--text)] md:text-[21px] md:leading-10">
            A practical, careful seminar for people who want to support others without diagnosing, rescuing, minimizing, or carrying everything alone.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/book/seminar" className="border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]">
              Book the seminar
            </Link>
            <Link href="/book/free-consultation" className="border-2 border-[var(--accent)] bg-[var(--surface)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--accent)]">
              Book a 15-minute call
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface)] py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            Because “we care about mental health” is not yet a practice.
          </h2>
          <div className="space-y-5 text-[18px] font-medium leading-9 text-[var(--text)]">
            <p>Many groups care about mental health but still struggle when distress becomes visible.</p>
            <p>People may not know what to say. They may say too much. They may avoid the person. They may use labels too quickly. They may become the only support person. They may confuse kindness with unlimited availability.</p>
            <p>This seminar gives people a shared starting point.</p>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-14 md:py-20">
        <Container>
          <h2 className="mb-10 text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            Participants will be better able to:
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 text-[15px] font-black uppercase tracking-[0.08em] text-[var(--accent)]">
                {outcome}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-14 md:py-20">
        <Container>
          <p className="mb-5 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Session flow
          </p>
          <h2 className="mb-10 text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            90 minutes, clearly held.
          </h2>
          <div className="space-y-4">
            {flow.map(([time, title, description]) => (
              <div key={time} className="grid gap-4 border-2 border-[var(--accent)] bg-[var(--surface)] p-5 md:grid-cols-[140px_0.8fr_1.2fr] md:items-center">
                <p className="text-[12px] font-black uppercase tracking-[0.12em] text-[var(--muted)]">{time}</p>
                <h3 className="text-3xl font-black uppercase leading-none text-[var(--accent)]">{title}</h3>
                <p className="text-[15px] font-medium leading-7 text-[var(--text)]">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--accent)] py-14 text-white md:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="border-2 border-white/70 p-7">
            <h2 className="text-5xl font-black uppercase leading-none">This is</h2>
            <ul className="mt-7 space-y-3 text-[16px] font-medium leading-8 text-white/80">
              <li>Psychoeducation</li>
              <li>Communication training</li>
              <li>Mental health literacy</li>
              <li>Boundary-supportive learning</li>
              <li>A shared language for groups</li>
            </ul>
          </div>
          <div className="border-2 border-white/70 p-7">
            <h2 className="text-5xl font-black uppercase leading-none">This is not</h2>
            <ul className="mt-7 space-y-3 text-[16px] font-medium leading-8 text-white/80">
              <li>Therapy</li>
              <li>Diagnosis</li>
              <li>Crisis training</li>
              <li>Clinical supervision</li>
              <li>A replacement for professional care</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--bg)] p-8 shadow-[0_18px_0_var(--accent)] md:p-12">
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              Bring this seminar to your group.
            </h2>
            <p className="mt-7 max-w-3xl text-[18px] font-medium leading-9 text-[var(--text)]">
              Tell us who the seminar is for, what kind of setting you are working in, and whether you want a one-time session or a longer training pathway.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/book/seminar" className="border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]">
                Request seminar booking
              </Link>
              <Link href="/tools/mental-health-literacy-checklists" className="border-2 border-[var(--accent)] bg-[var(--surface)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--accent)]">
                Download participant tools
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
