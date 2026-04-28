import Link from "next/link";
import Container from "@/components/site/Container";

const resources = [
  "Is This Mine to Hold Alone?",
  "Green / Yellow / Red Support Checklist",
  "Before You Respond Checklist",
  "Wellbeing Question Checklist",
  "Boundary Safety Checklist",
];

export const metadata = {
  title: "Campaign Resources | Collectividual",
  description: "Download Collectividual campaign resources for mental health literacy.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-24 md:py-32">
        <Container>
          <p className="mb-5 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">Free resources</p>
          <h1 className="max-w-5xl text-5xl leading-tight md:text-7xl">Mental Health Literacy Checklists</h1>
          <p className="mt-6 max-w-3xl text-[14px] leading-8 text-[var(--muted)]">Five practical resources for people and groups who want clearer communication, better boundaries, and more thoughtful support.</p>
          <div className="mt-8"><a href="#download" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white">Get the resources by email</a></div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
        <Container>
          <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">Simple enough to use. Serious enough not to flatten the moment.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {resources.map((title, index) => (
              <div key={title} className="border border-[var(--border)] bg-[var(--bg)] p-6">
                <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Resource 0{index + 1}</p>
                <h3 className="text-3xl leading-tight text-[var(--accent)]">{title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="download" className="py-20 md:py-28">
        <Container>
          <div className="border border-[var(--border)] p-8 md:p-12">
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">Send me the resources.</h2>
            <p className="mt-5 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">Enter your email and we’ll send the resources. We may also send occasional Collectividual updates. You can unsubscribe at any time.</p>
            <form className="mt-8 grid gap-4 md:grid-cols-[1fr_auto]" action="#">
              <input aria-label="Email address" name="email" type="email" placeholder="you@example.com" className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[14px] outline-none" />
              <button type="submit" className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white">Send me the resources</button>
              <label className="md:col-span-2 flex gap-3 text-[12px] leading-6 text-[var(--muted)]"><input type="checkbox" required className="mt-1" /><span>I agree to receive these resources and occasional related emails from Collectividual. I understand I can unsubscribe at any time.</span></label>
            </form>
            <p className="mt-6 text-[12px] leading-6 text-[var(--muted)]">This form is visual for now. Connect it to your chosen email service before launch.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/assessment/mental-health-literacy" className="text-[12px] tracking-[0.06em] text-[var(--accent)]">Assess your organization →</Link>
            <Link href="/book/free-consultation" className="text-[12px] tracking-[0.06em] text-[var(--accent)]">Book a consultation →</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
