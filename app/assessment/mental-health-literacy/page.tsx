import Link from "next/link";
import Container from "@/components/site/Container";
import AssessmentTool from "@/components/site/AssessmentTool";

const domains = [
  "Awareness vs literacy",
  "Stigma and language",
  "Boundaries and role clarity",
  "Referral pathways",
  "Psychological safety",
  "Communication norms",
  "Crisis readiness",
  "Inclusion and structural context",
];

export const metadata = {
  title: "Assess Mental Health Literacy | Collectividual",
  description: "A reflective assessment for organizations and communities to explore language, boundaries, communication norms, and support pathways.",
};

export default function AssessmentPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-24 md:py-32">
        <Container>
          <p className="mb-5 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">Reflective assessment</p>
          <h1 className="max-w-5xl text-5xl leading-tight md:text-7xl">Assess the Mental Health Literacy of Your Organization</h1>
          <p className="mt-6 max-w-3xl text-[14px] leading-8 text-[var(--muted)]">A structured mirror for teams, institutions, and communities that want to understand whether they have the language, boundaries, and support pathways needed when distress appears.</p>
          <div className="mt-8"><a href="#questions" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white">Start assessment</a></div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <Container>
          <h2 className="mb-10 max-w-4xl text-4xl leading-tight md:text-5xl">What it measures.</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {domains.map((domain) => <div key={domain} className="border border-[var(--border)] bg-[var(--bg)] p-5 text-[12px] leading-6 text-[var(--text)]">{domain}</div>)}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl leading-tight md:text-5xl">Not a fake quiz. A conversation starter.</h2>
          <div className="space-y-5 text-[14px] leading-8 text-[var(--muted)]">
            <p>This assessment does not grade your morality, diagnose your culture, or certify your organization as safe.</p>
            <p>It helps you see where support may be too vague, too informal, too individual-dependent, or too unclear.</p>
            <p>It works best when answered honestly, not aspirationally.</p>
          </div>
        </Container>
      </section>

      <section id="questions" className="border-b border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <Container>
          <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">Use a 1–5 scale.</h2>
          <p className="mt-5 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">1 = Not yet true. 2 = Somewhat true. 3 = Mostly true. 4 = Strongly true. 5 = Clearly embedded in practice.</p>
          <AssessmentTool />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="border border-[var(--border)] p-8 md:p-12">
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">Turn the result into a next step.</h2>
            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">The useful question is not only whether your organization cares. It is whether care has language, boundaries, and pathways.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white">Send an inquiry</Link>
              <Link href="/seminars/mental-health-literacy" className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]">View the seminar</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
