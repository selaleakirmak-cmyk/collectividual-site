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
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Reflective assessment</p>
          <h1 className="poster-title poster-title--wide">Assess the Mental Health Literacy of Your Organization</h1>
          <p className="poster-lede mt-9">A structured mirror for teams, institutions, and communities that want to understand whether they have the language, boundaries, and support pathways needed when distress appears.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#questions" className="poster-button">Start assessment</a>
            <Link href="/workshops" className="poster-button poster-button--secondary">Explore workshops</Link>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container>
          <h2 className="poster-title poster-title--medium mb-10">What it reflects.</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {domains.map((domain) => <div key={domain} className="border-2 border-[var(--accent)] bg-[var(--bg)] p-5 text-[12px] font-semibold leading-6 text-[var(--text)]">{domain}</div>)}
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="poster-title poster-title--medium">Not a fake quiz. A conversation starter.</h2>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>This assessment does not grade your values, label your culture, or certify your organization as safe.</p>
            <p>It helps you see where support may be too vague, too informal, too individual-dependent, or too unclear.</p>
            <p>It works best when answered honestly, not aspirationally.</p>
          </div>
        </Container>
      </section>

      <section id="questions" className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container>
          <h2 className="poster-title poster-title--medium">Use a 1–5 scale.</h2>
          <p className="mt-6 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">1 = Not yet true. 2 = Somewhat true. 3 = Mostly true. 4 = Strongly true. 5 = Clearly embedded in practice.</p>
          <AssessmentTool />
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Next step</p>
            <h2 className="poster-title poster-title--medium">Turn the result into a plan.</h2>
            <p className="poster-lede mt-8">The useful question is not only whether your organization cares. It is whether care has language, boundaries, and pathways.</p>
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
