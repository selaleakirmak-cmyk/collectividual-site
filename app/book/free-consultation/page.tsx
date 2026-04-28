import Link from "next/link";
import Container from "@/components/site/Container";

const usefulIf = [
  "You are considering the 90-minute seminar",
  "You are responsible for a group, team, class, community, or organization",
  "You want to move beyond awareness messaging",
  "You need practical tools without turning people into therapists",
  "You are wondering whether your context needs a longer pathway",
];

const callQuestions = [
  "Who is this for?",
  "What made this topic relevant now?",
  "What kind of setting are you working in?",
  "Are there existing support structures?",
  "Would a seminar, tools, assessment, or longer pathway fit best?",
];

export const metadata = {
  title: "Book a Free Consultation | Collectividual",
  description:
    "Book a free 15-minute consultation about the Collectividual mental health literacy seminar, tools, assessment, or longer training pathway.",
};

export default function ConsultationPage() {
  return (
    <>
      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Free 15-minute consultation
          </p>
          <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] text-[var(--accent)] md:text-8xl">
            A careful fit conversation.
          </h1>
          <p className="mt-8 max-w-4xl border-l-4 border-[var(--accent)] pl-6 text-[18px] font-medium leading-9 text-[var(--text)] md:text-[21px] md:leading-10">
            A short, focused conversation about whether this campaign, seminar, assessment, or longer training format fits your group.
          </p>
          <div className="mt-10">
            <a href="#booking-form" className="inline-flex border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]">
              Choose a time
            </a>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface)] py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              This call may be useful if:
            </h2>
          </div>
          <div className="space-y-3">
            {usefulIf.map((item) => (
              <div key={item} className="border-2 border-[var(--accent)] bg-[var(--bg)] p-5 text-[14px] font-black uppercase tracking-[0.08em] text-[var(--accent)]">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-14 md:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7">
            <h2 className="text-5xl font-black uppercase leading-none text-[var(--accent)]">What happens</h2>
            <div className="mt-7 space-y-3">
              {callQuestions.map((question) => (
                <p key={question} className="border-b border-[var(--border)] pb-3 text-[15px] font-semibold leading-7 text-[var(--text)]">{question}</p>
              ))}
            </div>
          </div>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7">
            <h2 className="text-5xl font-black uppercase leading-none text-[var(--accent)]">What does not happen</h2>
            <p className="mt-7 text-[16px] font-medium leading-8 text-[var(--text)]">
              This is not therapy, diagnosis, clinical supervision, crisis support, HR/legal advice, assessment of a specific person, or a place to process private mental health details.
            </p>
            <p className="mt-5 text-[14px] font-medium leading-7 text-[var(--muted)]">
              You do not need to disclose sensitive personal information to discuss training fit.
            </p>
          </div>
        </Container>
      </section>

      <section id="booking-form" className="bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-8 shadow-[0_18px_0_var(--accent)] md:p-10">
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              Book my 15-minute call.
            </h2>
            <form className="mt-8 grid gap-4 md:grid-cols-2" action="#">
              <input placeholder="Name" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <input placeholder="Email" type="email" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <input placeholder="Organization / group" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <input placeholder="Role" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <input placeholder="Country / time zone" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <select className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none">
                <option>Preferred language</option>
                <option>English</option>
                <option>Turkish</option>
              </select>
              <textarea placeholder="What are you hoping to discuss?" className="min-h-36 border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none md:col-span-2" />
              <label className="flex gap-3 text-[12px] leading-6 text-[var(--muted)] md:col-span-2">
                <input type="checkbox" required className="mt-1" />
                <span>I understand this is a consultation about training fit, not therapy, diagnosis, or crisis support.</span>
              </label>
              <button type="submit" className="border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white md:w-fit">
                Book my 15-minute call
              </button>
            </form>
            <p className="mt-6 text-[12px] leading-6 text-[var(--muted)]">
              Form submission is prepared visually in this build. Connect this form to your preferred booking or email service before launch.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/seminars/mental-health-literacy" className="text-sm font-bold text-[var(--accent)] underline underline-offset-4">View seminar details</Link>
            <Link href="/tools/mental-health-literacy-checklists" className="text-sm font-bold text-[var(--accent)] underline underline-offset-4">Download tools first</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
