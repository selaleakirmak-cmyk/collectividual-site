import Link from "next/link";
import Container from "@/components/site/Container";

const mailerLiteAction = "https://assets.mailerlite.com/jsonp/2302300/forms/186075762341709206/subscribe";

const resources = [
  ["Is This Mine to Hold Alone?", "A pause tool for deciding whether a support moment needs more than one person."],
  ["Green / Yellow / Red Support Checklist", "A simple way to distinguish ordinary support, concern, and urgent escalation."],
  ["Before You Respond Checklist", "A short reflection before advice, reassurance, or problem-solving takes over."],
  ["Should I Ask About Safety?", "A guide for approaching worrying language calmly and directly."],
  ["Boundary Safety Checklist", "A tool for naming limits without withdrawing care."],
];

export const metadata = {
  title: "Ultimate Mental Health Literacy Toolkit | Collectividual",
  description: "Download the Ultimate Mental Health Literacy Toolkit by Collectividual: practical tools for careful communication, boundaries, and sustainable support.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Free toolkit</p>
          <h1 className="poster-title poster-title--wide">Ultimate Mental Health Literacy Toolkit</h1>
          <p className="poster-lede mt-9">Practical resources for people and groups who want clearer communication, better boundaries, and more thoughtful support.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#download" className="poster-button">Get the toolkit by email</a>
            <Link href="/workshops" className="poster-button poster-button--secondary">Explore workshops</Link>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container>
          <h2 className="poster-title poster-title--medium">Simple enough to use. Serious enough not to flatten the moment.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {resources.map(([title, description], index) => (
              <div key={title} className="border-2 border-[var(--accent)] bg-[var(--bg)] p-6">
                <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Tool 0{index + 1}</p>
                <h3 className="text-3xl leading-tight text-[var(--accent)] md:text-4xl">{title}</h3>
                <p className="mt-4 text-[13px] leading-7 text-[var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="download" className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Download</p>
            <h2 className="poster-title poster-title--medium">Send me the toolkit.</h2>
            <p className="poster-lede mt-8">Enter your email and we’ll send the Ultimate Mental Health Literacy Toolkit. We may also send occasional Collectividual updates. You can unsubscribe at any time.</p>
            <form className="mt-8 grid gap-4 md:grid-cols-[1fr_auto]" action={mailerLiteAction} method="post" target="_blank">
              <input aria-label="Email address" aria-required="true" name="fields[email]" type="email" placeholder="you@example.com" autoComplete="email" required className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-3 text-[14px] outline-none" />
              <button type="submit" className="poster-button">Send me the toolkit</button>
              <label className="md:col-span-2 flex gap-3 text-[12px] leading-6 text-[var(--muted)]"><input type="checkbox" required className="mt-1" /><span>I agree to receive this toolkit and occasional related emails from Collectividual. I understand I can unsubscribe at any time.</span></label>
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />
            </form>
            <p className="mt-6 text-[12px] leading-6 text-[var(--muted)]">After submitting, check your inbox for an email from Collectividual with the download link.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/assessment/mental-health-literacy" className="text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">Assess your organization →</Link>
            <Link href="/join" className="text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">Send an inquiry →</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
