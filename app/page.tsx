import Link from "next/link";
import Container from "@/components/site/Container";

const labs = [
  {
    title: "Think Lab",
    description:
      "Essays, concepts, guides, and editorial experiments for turning reflection into shared language.",
    href: "/labs#think-lab",
  },
  {
    title: "Creative Lab",
    description:
      "Card decks, printable tools, prompt kits, and visual formats that help ideas take form.",
    href: "/labs#creative-lab",
  },
  {
    title: "Community Lab",
    description:
      "Formats for participation, workshops, collective thinking, and small-group cultural work.",
    href: "/labs#community-lab",
  },
  {
    title: "Kapital Zero Lab",
    description:
      "Low-budget experiments, playful entrepreneurship, and practical systems for building from almost nothing.",
    href: "/labs#kapital-zero-lab",
  },
];

const tools = [
  "Mental health literacy seminars for non-clinicians",
  "Downloadable checklists and reflective tools",
  "Assessment formats for organizations and communities",
  "Card decks, prompt kits, and printable psycho-social resources",
];

const spotifyUrl = "https://open.spotify.com/show/3gT7ckVNmUhjfaDjIIJpUX?si=ec02353c530f483a";

export default function HomePage() {
  return (
    <>
      <section className="poster-section">
        <Container>
          <p className="poster-kicker mb-7">Collectividual</p>
          <h1 className="poster-title poster-title--wide">
            We are on a mission for mental health.
          </h1>
          <p className="poster-lede mt-9">
            Collectividual creates psycho-social tools, public campaigns, seminars, and printable resources that help people move beyond shallow awareness toward careful communication, clearer boundaries, and more useful support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/campaigns/good-intentions-are-not-enough" className="poster-button">
              See current campaign
            </Link>
            <Link href="/tools/mental-health-literacy-checklists" className="poster-button poster-button--secondary">
              Download free tools
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] poster-section">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="poster-kicker mb-6">Current public campaign</p>
            <h2 className="poster-title poster-title--medium">
              Good Intentions Are Not Enough
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
              Mental health awareness has opened important conversations. But awareness alone does not teach us how to respond when someone is actually struggling.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
              This campaign helps non-clinicians move from good intentions to careful support: clearer language, better boundaries, less stigma, and more useful next steps.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/campaigns/good-intentions-are-not-enough" className="poster-button">
                Enter the campaign
              </Link>
              <Link href="/assessment/mental-health-literacy" className="poster-button poster-button--secondary">
                Assess your organization
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <p className="poster-kicker mb-8">What this is</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "A public campaign for moving from awareness to literacy.",
              "A home for tools, seminars, assessments, campaigns, and printable formats.",
              "A way of turning psychological knowledge into careful everyday practice.",
            ].map((item) => (
              <div key={item} className="border-2 border-[var(--accent)] p-6 text-[15px] font-semibold leading-8 text-[var(--text)] md:text-[17px]">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section bg-[var(--surface-soft)]">
        <Container>
          <p className="poster-kicker mb-6 bg-[var(--bg)]">Labs</p>
          <h2 className="poster-title poster-title--medium">
            Four working rooms for thinking, making, gathering, and building from zero.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {labs.map((lab) => (
              <Link
                key={lab.title}
                href={lab.href}
                className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]"
              >
                <h3 className="text-4xl leading-none text-[var(--accent)] md:text-5xl">{lab.title}</h3>
                <p className="mt-4 text-[14px] leading-7 text-[var(--muted)] md:text-[15px]">{lab.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="poster-kicker mb-6">Tools & Resources</p>
            <h2 className="poster-title poster-title--medium">Useful forms, not generic content.</h2>
          </div>
          <div className="grid gap-4">
            {tools.map((tool) => (
              <div key={tool} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 text-[15px] font-semibold leading-8 text-[var(--text)]">
                {tool}
              </div>
            ))}
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]"
            >
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
                Audio Library / Access to Knowledge
              </p>
              <h3 className="text-4xl leading-none text-[var(--accent)] md:text-5xl">
                Psikanalizin 30 Günü
              </h3>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[var(--muted)] md:text-[15px]">
                Psikanalitik düşünceyi daha erişilebilir, dinlenebilir ve kamusal hale getiren bir Collectividual ses serisi.
              </p>
              <p className="mt-5 text-[13px] font-bold text-[var(--accent)]">
                Spotify’da dinle →
              </p>
            </a>
            <Link href="/seminars/mental-health-literacy" className="mt-3 inline-flex text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">
              View the mental health literacy seminar →
            </Link>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Start here</p>
            <h2 className="poster-title poster-title--medium">
              We are on a mission to spread mental health literacy.
            </h2>
            <p className="poster-lede mt-8">
              Move beyond shallow awareness toward careful communication, clearer boundaries, and more useful support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/campaigns/good-intentions-are-not-enough" className="poster-button">
                Explore the campaign
              </Link>
              <Link href="/join" className="poster-button poster-button--secondary">
                Send inquiry
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
