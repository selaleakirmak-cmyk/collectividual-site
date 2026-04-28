import Link from "next/link";
import Container from "@/components/site/Container";

const formats = [
  {
    title: "90-minute interactive seminar",
    subtitle: "Good Intentions Are Not Enough",
    description:
      "A compact, high-impact introduction for organizations, teams, universities, and communities that want to move from mental health awareness to practical literacy.",
    items: [
      "The difference between awareness and literacy",
      "A non-diagnostic map of psychological distress",
      "Stigma, language, and structural context",
      "Validation, reflective listening, and consent-checking",
      "Role clarity, boundaries, and crisis signals",
      "The CARE framework: Context, Acknowledge, Role, Extend",
    ],
    href: "/seminars/mental-health-literacy",
    cta: "View seminar detail",
  },
  {
    title: "4-session applied program",
    subtitle: "Mental Health Literacy for Non-Clinicians",
    description:
      "A deeper learning format with practice, recurring scenarios, structured reflection, and tools participants can keep using after the sessions end.",
    items: [
      "Session 1: How distress works",
      "Session 2: Stigma, structure, and language",
      "Session 3: Supportive communication skills",
      "Session 4: Boundaries, safety, and integration",
      "Scenario-based practice with fictional characters",
      "Participant workbook and practical support tools",
    ],
    href: "/join",
    cta: "Ask about the program",
  },
];

const principles = [
  "Skills practice over information transfer",
  "Validation before advice",
  "Boundaries as care, not withdrawal",
  "Context before judgment",
  "Professional referral without coercion",
  "Cultural humility instead of one-size-fits-all scripts",
];

export const metadata = {
  title: "Workshops | Collectividual",
  description:
    "Mental health literacy workshops and programs for non-clinicians, organizations, teams, and communities.",
};

export default function WorkshopsPage() {
  return (
    <>
      <section className="poster-section">
        <Container>
          <p className="poster-kicker mb-7">Workshops</p>
          <h1 className="poster-title poster-title--wide">
            Mental health literacy, practiced.
          </h1>
          <p className="poster-lede mt-9">
            Collectividual workshops help non-clinicians respond more carefully when someone is struggling. Participants do not become therapists. They learn what to notice, what to say, what not to say, where their role ends, and when more support is needed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/join" className="poster-button">
              Plan a 15-minute conversation
            </Link>
            <Link href="/assessment/mental-health-literacy" className="poster-button poster-button--secondary">
              Assess your organization
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] poster-section">
        <Container className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <p className="poster-kicker mb-6">Core idea</p>
            <h2 className="poster-title poster-title--medium">
              Good intentions are not enough.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>
              Most of us already care. The harder question is whether we know how to respond when care meets distress.
            </p>
            <p>
              These workshops move beyond shallow awareness toward usable everyday skills: validation, reflective listening, consent-checking before advice, shame-reducing language, clear limits, and safe referral.
            </p>
            <p>
              The aim is not to make participants clinically responsible for anyone else. The aim is to make ordinary support moments less harmful, more honest, and more useful.
            </p>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <p className="poster-kicker mb-8">Formats</p>
          <div className="grid gap-6 md:grid-cols-2">
            {formats.map((format) => (
              <div key={format.title} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-9">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
                  {format.title}
                </p>
                <h2 className="text-4xl leading-none text-[var(--accent)] md:text-5xl">
                  {format.subtitle}
                </h2>
                <p className="mt-5 text-[15px] leading-8 text-[var(--muted)]">
                  {format.description}
                </p>
                <div className="mt-7 grid gap-3">
                  {format.items.map((item) => (
                    <div key={item} className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[13px] font-semibold leading-6 text-[var(--text)]">
                      {item}
                    </div>
                  ))}
                </div>
                <Link href={format.href} className="mt-7 inline-flex text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">
                  {format.cta} →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section bg-[var(--surface-soft)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="poster-kicker mb-6 bg-[var(--bg)]">Method</p>
            <h2 className="poster-title poster-title--medium">
              Awareness becomes literacy only when people practice.
            </h2>
          </div>
          <div className="grid gap-4">
            {principles.map((principle) => (
              <div key={principle} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 text-[15px] font-semibold leading-8 text-[var(--text)]">
                {principle}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">What this is not</p>
            <h2 className="poster-title poster-title--medium">
              Not therapy. Not clinical training. Not crisis certification.
            </h2>
            <p className="poster-lede mt-8">
              These workshops do not teach people to diagnose, treat, or become responsible for someone else’s recovery. They teach a more careful everyday posture: see context, acknowledge before acting, know your role, and extend what you can while referring what you cannot.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="poster-button">
                Talk to us
              </Link>
              <Link href="/tools/mental-health-literacy-checklists" className="poster-button poster-button--secondary">
                Download free tools
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
