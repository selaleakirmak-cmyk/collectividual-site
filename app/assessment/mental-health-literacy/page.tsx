import Link from "next/link";
import Container from "@/components/site/Container";

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

const questions = [
  "People here understand that mental health literacy is more than awareness or positive messaging.",
  "We have shared language for talking about distress without reducing people to labels.",
  "We avoid casual diagnostic language as shorthand for difficult behavior.",
  "We recognize that stigma can appear in jokes, silence, policies, gossip, and informal expectations.",
  "People know the difference between listening, supporting, advising, referring, and treating.",
  "No one is implicitly expected to become the therapist of the group.",
  "People know what to do when someone needs more support than a peer, colleague, teacher, or manager can provide.",
  "We have visible and realistic support pathways for different levels of concern.",
  "People can express difficulty without immediate punishment, gossip, minimization, or pressure to disclose more.",
  "We do not confuse psychological safety with unlimited emotional availability.",
  "People are encouraged to validate before giving advice.",
  "We have norms for responding to worrying messages, emotional disclosures, absences, or conflict.",
  "People know that possible safety concerns should not be held alone.",
  "We have a basic understanding of when urgent professional or emergency support may be needed.",
  "We understand that distress is shaped by social, economic, cultural, institutional, and relational conditions — not only individual mindset.",
];

const results = [
  ["Awareness-heavy, literacy-light", "Your group may care about mental health, but the practices around support are still unclear. The next step is to move from values to usable structure."],
  ["Caring but informal", "Support exists, but it may depend too much on individual sensitivity, personal relationships, or emotionally skilled people. This can create uneven care and hidden burden."],
  ["Developing literacy", "Your group has some useful practices, but there may still be gaps in role clarity, referral pathways, or communication norms."],
  ["Structurally prepared", "Your group appears to have a stronger foundation. The next step may be deeper scenario work, adaptation, or longer training."],
];

export const metadata = {
  title: "Assess Mental Health Literacy | Collectividual",
  description:
    "A reflective assessment for organizations and communities to explore mental health literacy, support boundaries, language, and referral pathways.",
};

export default function AssessmentPage() {
  return (
    <>
      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Reflective assessment
          </p>
          <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] text-[var(--accent)] md:text-8xl">
            Assess the Mental Health Literacy of Your Organization
          </h1>
          <p className="mt-8 max-w-4xl border-l-4 border-[var(--accent)] pl-6 text-[18px] font-medium leading-9 text-[var(--text)] md:text-[21px] md:leading-10">
            A structured mirror for teams, institutions, and communities that want to understand whether they have the language, boundaries, and support pathways needed when distress appears.
          </p>
          <div className="mt-10">
            <a href="#questions" className="inline-flex border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]">
              Start assessment
            </a>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface)] py-14 md:py-20">
        <Container>
          <h2 className="mb-10 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            What it measures.
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {domains.map((domain) => (
              <div key={domain} className="border-2 border-[var(--accent)] bg-[var(--bg)] p-5 text-[13px] font-black uppercase tracking-[0.08em] text-[var(--accent)]">
                {domain}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            Not a fake quiz. A conversation starter.
          </h2>
          <div className="space-y-5 text-[18px] font-medium leading-9 text-[var(--text)]">
            <p>This assessment does not grade your morality, diagnose your culture, or certify your organization as safe.</p>
            <p>It helps you see where support may be too vague, too informal, too individual-dependent, or too risky.</p>
            <p>It works best when answered honestly, not aspirationally.</p>
          </div>
        </Container>
      </section>

      <section id="questions" className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-14 md:py-20">
        <Container>
          <p className="mb-5 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Assessment flow
          </p>
          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            Use a 1–5 scale.
          </h2>
          <p className="mt-6 max-w-3xl text-[16px] font-medium leading-8 text-[var(--text)]">
            1 = Not yet true. 2 = Somewhat true. 3 = Mostly true. 4 = Strongly true. 5 = Clearly embedded in practice.
          </p>
          <div className="mt-10 space-y-4">
            {questions.map((question, index) => (
              <div key={question} className="grid gap-4 border-2 border-[var(--accent)] bg-[var(--surface)] p-5 md:grid-cols-[70px_1fr_180px] md:items-center">
                <p className="font-serif text-4xl leading-none text-[var(--accent)]">{index + 1}</p>
                <p className="text-[15px] font-semibold leading-7 text-[var(--text)]">{question}</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <span key={score} className="flex h-8 w-8 items-center justify-center border-2 border-[var(--accent)] text-[12px] font-black text-[var(--accent)]">
                      {score}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface)] py-14 md:py-20">
        <Container>
          <h2 className="mb-10 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            Possible result categories.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {results.map(([title, body]) => (
              <div key={title} className="border-2 border-[var(--accent)] bg-[var(--bg)] p-7">
                <h3 className="text-4xl font-black uppercase leading-none text-[var(--accent)]">{title}</h3>
                <p className="mt-5 text-[15px] font-medium leading-8 text-[var(--text)]">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--accent)] py-16 text-white md:py-24">
        <Container className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-7xl">
              Turn the result into a next step.
            </h2>
            <p className="mt-7 text-[18px] font-medium leading-9 text-white/80">
              The useful question is not whether your organization cares. It is whether care has language, boundaries, and pathways.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/book/free-consultation" className="border-2 border-white bg-[#dfe7e2] px-6 py-4 text-center text-[12px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_white]">
              Book a 15-minute consultation
            </Link>
            <Link href="/seminars/mental-health-literacy" className="border-2 border-white/70 px-6 py-4 text-center text-[12px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_white]">
              View the seminar
            </Link>
            <Link href="/tools/mental-health-literacy-checklists" className="border-2 border-white/70 px-6 py-4 text-center text-[12px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_white]">
              Download the tools
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
