import Link from "next/link";
import Container from "@/components/site/Container";

const formats = [
  ["90-minute introductory seminar", "Best for groups who need a clear, accessible foundation."],
  ["Half-day workshop", "Best for groups who want discussion, examples, and applied scenarios."],
  ["Longer training pathway", "Best for organizations that want to build shared practices and communication norms over time."],
];

const adaptations = [
  "Audience type",
  "Sector or setting",
  "Language",
  "Examples and scenarios",
  "Organizational context",
  "Sensitivity level",
  "Desired depth",
  "Follow-up resources",
];

export const metadata = {
  title: "Book the Mental Health Literacy Seminar | Collectividual",
  description:
    "Request a booking for Good Intentions Are Not Enough, Collectividual’s 90-minute mental health literacy seminar for non-clinicians.",
};

export default function BookSeminarPage() {
  return (
    <>
      <section className="border-b-2 border-[var(--accent)] bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Booking inquiry
          </p>
          <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] text-[var(--accent)] md:text-8xl">
            Bring Good Intentions Are Not Enough to your group.
          </h1>
          <p className="mt-8 max-w-4xl border-l-4 border-[var(--accent)] pl-6 text-[18px] font-medium leading-9 text-[var(--text)] md:text-[21px] md:leading-10">
            Book the introductory seminar on mental health literacy for non-clinicians. For workplaces, universities, NGOs, communities, collectives, and groups that want clearer language, better boundaries, and more useful support.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#booking-form" className="inline-flex border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]">
              Request seminar booking
            </a>
            <Link href="/book/free-consultation" className="inline-flex border-2 border-[var(--accent)] bg-[var(--surface)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-[var(--accent)] transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--accent)]">
              Book a call first
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface)] py-14 md:py-20">
        <Container>
          <h2 className="mb-10 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            Choose the format.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {formats.map(([title, body]) => (
              <div key={title} className="border-2 border-[var(--accent)] bg-[var(--bg)] p-7">
                <h3 className="text-4xl font-black uppercase leading-none text-[var(--accent)]">{title}</h3>
                <p className="mt-5 text-[15px] font-medium leading-8 text-[var(--text)]">{body}</p>
                <a href="#booking-form" className="mt-6 inline-flex text-[12px] font-black uppercase tracking-[0.12em] text-[var(--accent)] underline underline-offset-4">
                  Request this format
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
            Adaptable, but still ethically boundaried.
          </h2>
          <div>
            <p className="text-[18px] font-medium leading-9 text-[var(--text)]">
              The seminar can be adapted by setting, audience, language, examples, and desired depth. It will not be adapted by removing ethical limits around role clarity, diagnosis, treatment, or crisis support.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {adaptations.map((item) => (
                <div key={item} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-4 text-[13px] font-black uppercase tracking-[0.08em] text-[var(--accent)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="booking-form" className="bg-[var(--bg)] py-16 md:py-24">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-8 shadow-[0_18px_0_var(--accent)] md:p-10">
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-[var(--accent)] md:text-7xl">
              Send booking inquiry.
            </h2>
            <form className="mt-8 grid gap-4 md:grid-cols-2" action="#">
              <input placeholder="Name" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <input placeholder="Email" type="email" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <input placeholder="Organization / group" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <input placeholder="Website, optional" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <input placeholder="Audience type" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <input placeholder="Estimated number of participants" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <select className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none">
                <option>Preferred format</option>
                <option>90-minute seminar</option>
                <option>Half-day workshop</option>
                <option>Longer training pathway</option>
              </select>
              <select className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none">
                <option>Online or in-person</option>
                <option>Online</option>
                <option>In-person</option>
                <option>Not sure yet</option>
              </select>
              <input placeholder="Preferred dates" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none" />
              <select className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none">
                <option>Language</option>
                <option>English</option>
                <option>Turkish</option>
              </select>
              <textarea placeholder="What made you interested in this seminar?" className="min-h-36 border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-4 text-[15px] outline-none md:col-span-2" />
              <label className="flex gap-3 text-[12px] leading-6 text-[var(--muted)] md:col-span-2">
                <input type="checkbox" required className="mt-1" />
                <span>I understand this inquiry is about psychoeducation and communication training, not therapy, diagnosis, crisis response, or clinical supervision.</span>
              </label>
              <button type="submit" className="border-2 border-[var(--accent)] bg-[var(--accent)] px-7 py-4 text-[13px] font-black uppercase tracking-[0.12em] text-white md:w-fit">
                Send booking inquiry
              </button>
            </form>
            <p className="mt-6 text-[12px] leading-6 text-[var(--muted)]">
              Form submission is prepared visually in this build. Connect this form to your preferred booking, CRM, or email service before launch.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
