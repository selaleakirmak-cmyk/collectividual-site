import Link from "next/link";
import Container from "@/components/site/Container";

const tools = [
  {
    title: "Is This Mine to Hold Alone?",
    body: "For moments when support starts to feel too private, too heavy, or too dependent on one person. This checklist helps the reader pause and consider whether the circle of support should become wider.",
  },
  {
    title: "Green / Yellow / Red Support Checklist",
    body: "A simple reflective scale for noticing whether a situation feels steady, concerning, or outside everyday support. It helps people choose a next step without pretending the categories are clinical." ,
  },
  {
    title: "Before You Respond Checklist",
    body: "A pause tool for messages, disclosures, tense conversations, and emotionally charged moments. It supports validation before advice and listening before fixing.",
  },
  {
    title: "Should I Ask About Safety?",
    body: "A careful prompt for moments when the topic of immediate wellbeing may need to be named directly, while also reminding non-clinicians not to hold serious concerns alone.",
  },
  {
    title: "Boundary Safety Checklist",
    body: "For offering support without becoming the only container. It helps clarify role, time, capacity, and appropriate next steps.",
  },
];

export const metadata = {
  title: "Mental Health Literacy Checklists | Collectividual",
  description:
    "Download five mental health literacy checklists for non-clinicians: communication, boundaries, role clarity, and support pathways.",
};

export default function ToolsPage() {
  return (
    <>
      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Free downloadable tools
          </p>
          <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] text-[var(--accent)] md:text-8xl">
            Mental Health Literacy Safety Checklists
          </h1>
          <p className="mt-8 max-w-4xl border-l-4 border-[var(--accent)] pl-6 text-[18px] font-medium leading-9 text-[var(--text)] md:text-[21px] md:leading-10">
            Five practical tools for people who want to support others with more care, more role clarity, and better boundaries.
          </p>
          <div className="mt-10">
            <a href="#download" className="inline-flex border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]">
              Get the tools by email
            </a>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface)] py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            Simple enough to use. Serious enough not to flatten the moment.
          </h2>
          <div className="space-y-5 text-[18px] font-medium leading-9 text-[var(--text)]">
            <p>These checklists are designed for everyday non-clinical support situations.</p>
            <p>They help people pause before responding, understand their role, protect boundaries, and decide when more support may be needed.</p>
            <p>They are intentionally simple. Not because distress is simple, but because difficult moments need tools people can actually use.</p>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-14 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {tools.map((tool, index) => (
              <div key={tool.title} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7">
                <p className="mb-5 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">Tool 0{index + 1}</p>
                <h2 className="text-4xl font-black uppercase leading-none text-[var(--accent)]">{tool.title}</h2>
                <p className="mt-5 text-[15px] font-medium leading-8 text-[var(--text)]">{tool.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="download" className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-14 md:py-20">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-8 shadow-[0_14px_0_var(--accent)] md:p-10">
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              Send me the checklists.
            </h2>
            <p className="mt-6 max-w-3xl text-[17px] font-medium leading-8 text-[var(--text)]">
              Enter your email and we’ll send the five tools. We may also send occasional Collectividual resources about mental health literacy, communication, and psycho-social tools. You can unsubscribe at any time.
            </p>
            <form className="mt-8 grid gap-4 md:grid-cols-[1fr_auto]" action="#">
              <label className="sr-only" htmlFor="download-email">Email address</label>
              <input id="download-email" name="email" type="email" placeholder="you@example.com" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <button type="submit" className="border-2 border-[var(--accent)] bg-[var(--accent)] px-6 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-white">
                Send me the checklists
              </button>
              <label className="md:col-span-2 flex gap-3 text-[12px] leading-6 text-[var(--muted)]">
                <input type="checkbox" required className="mt-1" />
                <span>I agree to receive these downloadable tools and occasional related emails from Collectividual. I understand I can unsubscribe at any time.</span>
              </label>
              <label className="md:col-span-2 flex gap-3 text-[12px] leading-6 text-[var(--muted)]">
                <input type="checkbox" className="mt-1" />
                <span>I am interested in seminars, trainings, and organizational resources.</span>
              </label>
            </form>
            <p className="mt-6 text-[12px] leading-6 text-[var(--muted)]">
              We ask for your email so we can send the tools and related resources. We do not use this form to assess your mental health. These tools are educational reflection aids, not clinical assessment instruments.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-14 md:py-20">
        <Container>
          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            After you download.
          </h2>
          <p className="mt-6 max-w-3xl text-[18px] font-medium leading-9 text-[var(--text)]">
            Use the tools individually, share them in a group conversation, bring them to a seminar, or use them as a starting point for assessing your organization’s mental health literacy.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/assessment/mental-health-literacy" className="border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]">
              Assess your organization
            </Link>
            <Link href="/book/free-consultation" className="border-2 border-[var(--accent)] bg-[var(--surface)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--accent)]">
              Book a 15-minute call
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
