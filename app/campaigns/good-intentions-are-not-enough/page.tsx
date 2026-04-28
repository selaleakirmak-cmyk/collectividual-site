import Link from "next/link";
import Container from "@/components/site/Container";

const meanings = [
  ["Recognizing distress", "Noticing when someone may be struggling without turning a moment into a diagnosis."],
  ["Understanding context", "Asking what may make a reaction understandable before judging or labeling it."],
  ["Reducing stigma", "Changing not only words, but also patterns of shame, silence, gossip, and exclusion."],
  ["Communicating supportively", "Validating before advising. Listening before fixing. Pausing before responding."],
  ["Knowing your role", "Understanding the difference between support, treatment, referral, and rescue."],
  ["Extending support", "Knowing when a situation should not be held by one person alone."],
];

const care = [
  {
    letter: "C",
    title: "Context",
    question: "What might make this understandable?",
    body:
      "Before naming someone as difficult, dramatic, lazy, unstable, or broken, pause. What pressure, exclusion, grief, conflict, fear, exhaustion, or uncertainty might be part of this?",
  },
  {
    letter: "A",
    title: "Acknowledge",
    question: "Can I validate before advising?",
    body:
      "Support often begins with recognition. Not everything needs instant advice. Sometimes the first useful act is letting the person know they have been heard.",
  },
  {
    letter: "R",
    title: "Role",
    question: "What is mine to do, and what is not?",
    body:
      "You can listen, ask, support, accompany, and help someone connect to further help. You are not required to diagnose, treat, investigate, rescue, or carry everything alone.",
  },
  {
    letter: "E",
    title: "Extend Support",
    question: "Does this need more support than I can offer?",
    body:
      "Some situations need a conversation. Some need practical help. Some need organizational support, professional care, or urgent intervention. Care includes knowing when to widen the circle.",
  },
];

const tools = [
  "Is This Mine to Hold Alone?",
  "Green / Yellow / Red Support Checklist",
  "Before You Respond Checklist",
  "Should I Ask About Safety?",
  "Boundary Safety Checklist",
];

const audiences = [
  "Workplaces and teams",
  "Universities and student groups",
  "NGOs and community organizations",
  "LGBTQIA+ communities",
  "Migrant and neighborhood spaces",
  "Creative collectives",
  "Peer groups",
  "Families, friends, and informal support networks",
];

export const metadata = {
  title: "Good Intentions Are Not Enough | Mental Health Literacy | Collectividual",
  description:
    "A Collectividual campaign, seminar, and toolkit for mental health literacy for non-clinicians: careful communication, clearer boundaries, and useful support.",
};

function CTAButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? "inline-flex border-2 border-[var(--accent)] bg-[var(--accent)] px-6 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]"
          : "inline-flex border-2 border-[var(--accent)] bg-[var(--surface)] px-6 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--accent)]"
      }
    >
      {children}
    </Link>
  );
}

export default function CampaignPage() {
  return (
    <>
      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Collectividual public campaign
          </p>
          <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] text-[var(--accent)] md:text-8xl lg:text-[8.8rem]">
            Good Intentions Are Not Enough
          </h1>
          <p className="mt-7 max-w-3xl text-2xl font-semibold leading-9 text-[var(--text)] md:text-3xl md:leading-10">
            Mental Health Literacy for Non-Clinicians
          </p>
          <p className="mt-8 max-w-4xl border-l-4 border-[var(--accent)] pl-6 text-[18px] font-medium leading-9 text-[var(--text)] md:text-[21px] md:leading-10">
            Most people want to respond well when someone is struggling. But care becomes harder when we do not have the language, boundaries, or shared understanding to know what is ours to hold — and what is not.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="/seminars/mental-health-literacy">Book the 90-minute seminar</CTAButton>
            <CTAButton href="/tools/mental-health-literacy-checklists" variant="secondary">Download free tools</CTAButton>
          </div>
          <Link href="/assessment/mental-health-literacy" className="mt-6 inline-flex text-sm font-bold text-[var(--accent)] underline underline-offset-4">
            Assess your organization’s mental health literacy
          </Link>
          <p className="mt-10 max-w-3xl text-[13px] leading-7 text-[var(--muted)]">
            Psychoeducation and communication training for non-clinicians. Not therapy, diagnosis, crisis training, or clinical supervision.
          </p>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface)] py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
              The problem
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              Distress does not only appear in clinical rooms.
            </h2>
          </div>
          <div className="space-y-5 text-[18px] font-medium leading-9 text-[var(--text)]">
            <p>It appears in a message from a student. In a colleague who suddenly disappears from conversation. In a friend who says something worrying late at night.</p>
            <p>These moments are ordinary. That does not make them simple.</p>
            <p>Good intentions can help. But without literacy, they can also become pressure, silence, rescuing, casual labeling, or advice that arrives too quickly.</p>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--accent)] py-14 text-white md:py-20">
        <Container>
          <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-7xl">
            Awareness says mental health matters. Literacy asks what we do with that knowledge.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="border-2 border-white/70 p-7">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-white/70">Awareness</p>
              <p className="text-[17px] leading-8 text-white/80">Opens the door, reduces silence, and names that mental health matters.</p>
            </div>
            <div className="border-2 border-white/70 bg-white/10 p-7">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-white/70">Literacy</p>
              <p className="text-[17px] leading-8 text-white/80">Helps people listen, pause, avoid labels, know their role, notice risk, and extend support when needed.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Mission
          </p>
          <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            We are on a mission to spread mental health literacy.
          </h2>
          <p className="mt-8 max-w-4xl text-[19px] font-medium leading-9 text-[var(--text)]">
            Not as a seasonal campaign. Not as a motivational slogan. Not as a way to make ordinary people responsible for everyone else’s pain. We mean mental health literacy as a social capacity: the ability to notice distress without reducing someone to it, offer support without taking over, and know when more support is needed.
          </p>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-14 md:py-20">
        <Container>
          <div className="mb-10 max-w-4xl">
            <p className="mb-5 inline-flex border-2 border-[var(--accent)] bg-[var(--surface)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
              Definition
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              What mental health literacy means here.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {meanings.map(([title, description]) => (
              <div key={title} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6">
                <h3 className="text-3xl font-black uppercase leading-none text-[var(--accent)]">{title}</h3>
                <p className="mt-5 text-[15px] font-medium leading-7 text-[var(--text)]">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="care" className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-14 md:py-20">
        <Container>
          <div className="mb-10 max-w-4xl">
            <p className="mb-5 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
              Method
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              The CARE framework
            </h2>
            <p className="mt-6 text-[18px] font-medium leading-9 text-[var(--text)]">
              A simple structure for difficult moments. CARE is not a script. It is a way to slow down.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {care.map((item) => (
              <div key={item.letter} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]">
                <div className="mb-5 flex items-center justify-between border-b-2 border-[var(--accent)] pb-4">
                  <span className="font-serif text-6xl leading-none text-[var(--accent)]">{item.letter}</span>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">CARE</p>
                </div>
                <h3 className="text-4xl font-black uppercase leading-none text-[var(--accent)]">{item.title}</h3>
                <p className="mt-4 text-[17px] font-bold leading-8 text-[var(--text)]">{item.question}</p>
                <p className="mt-4 text-[15px] font-medium leading-8 text-[var(--text)]">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="/tools/mental-health-literacy-checklists">Download the CARE tools</CTAButton>
            <CTAButton href="/seminars/mental-health-literacy" variant="secondary">Book the seminar</CTAButton>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface)] py-14 md:py-20">
        <Container>
          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            For people who meet distress, but are not there to treat it.
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {audiences.map((audience) => (
              <div key={audience} className="border-2 border-[var(--accent)] bg-[var(--bg)] p-4 text-[13px] font-black uppercase tracking-[0.08em] text-[var(--accent)]">
                {audience}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-5 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
              Bookable format
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              The 90-minute introductory seminar
            </h2>
            <p className="mt-6 text-[18px] font-medium leading-9 text-[var(--text)]">
              A grounded, science-informed seminar for people who want to respond to distress with more care, more clarity, and better boundaries.
            </p>
          </div>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface-soft)] p-7">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">Seminar covers</p>
            <ul className="space-y-3 text-[15px] font-semibold leading-7 text-[var(--text)]">
              <li>Awareness vs literacy</li>
              <li>Distress, nuance, and stigma</li>
              <li>Supportive communication</li>
              <li>Role boundaries for non-clinicians</li>
              <li>The CARE framework</li>
              <li>Five safety checklists</li>
            </ul>
            <div className="mt-7">
              <CTAButton href="/seminars/mental-health-literacy">See seminar details</CTAButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-14 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-5 inline-flex border-2 border-[var(--accent)] bg-[var(--surface)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
                Free tools
              </p>
              <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
                Five checklists for careful support.
              </h2>
              <p className="mt-6 text-[17px] font-medium leading-8 text-[var(--text)]">
                These are pause tools, not scripts. They help you think before you respond, notice your limits, and understand when support needs to extend beyond you.
              </p>
            </div>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div key={tool} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 text-[15px] font-black uppercase tracking-[0.08em] text-[var(--accent)]">
                  {index + 1}. {tool}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-8">
            <h3 className="text-4xl font-black uppercase leading-none text-[var(--accent)]">Send me the tools</h3>
            <p className="mt-4 max-w-3xl text-[15px] font-medium leading-7 text-[var(--text)]">
              Enter your email and receive the five checklists. We may also send occasional Collectividual resources about mental health literacy, communication, and psycho-social tools. You can unsubscribe at any time.
            </p>
            <form className="mt-6 grid gap-4 md:grid-cols-[1fr_auto]" action="#">
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <button className="border-2 border-[var(--accent)] bg-[var(--accent)] px-6 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-white" type="submit">
                Send me the tools
              </button>
              <label className="md:col-span-2 flex gap-3 text-[12px] leading-6 text-[var(--muted)]">
                <input type="checkbox" required className="mt-1" />
                <span>I agree to receive these tools and occasional related emails from Collectividual. I understand I can unsubscribe at any time.</span>
              </label>
            </form>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--accent)] py-14 text-white md:py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-5 inline-flex border-2 border-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/75">
              Assessment
            </p>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-7xl">
              Is your organization aware — or actually prepared?
            </h2>
            <p className="mt-6 text-[18px] font-medium leading-9 text-white/80">
              The assessment helps you reflect on language, stigma, boundaries, referral pathways, psychological safety, communication norms, crisis readiness, and structural context.
            </p>
          </div>
          <div className="border-2 border-white/70 p-7">
            <p className="text-[17px] font-medium leading-8 text-white/80">
              It is not a fake quiz. It is not a diagnosis of your culture. It is a structured conversation starter.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <Link href="/assessment/mental-health-literacy" className="border-2 border-white bg-[#dfe7e2] px-6 py-4 text-center text-[12px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_white]">
                Assess your organization
              </Link>
              <Link href="/book/free-consultation" className="border-2 border-white/70 px-6 py-4 text-center text-[12px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_white]">
                Book a free 15-minute call
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-16 md:py-24">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--bg)] p-8 shadow-[0_18px_0_var(--accent)] md:p-12">
            <p className="mb-5 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
              Next step
            </p>
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              Not sure where to begin?
            </h2>
            <p className="mt-7 max-w-3xl text-[18px] font-medium leading-9 text-[var(--text)]">
              Book a free 15-minute consultation to discuss whether the seminar, tools, assessment, or longer training format fits your group. It is a short fit conversation — not therapy, supervision, crisis consultation, or a sales performance.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="/book/free-consultation">Book a free 15-minute call</CTAButton>
              <CTAButton href="/book/seminar" variant="secondary">Request seminar booking</CTAButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
