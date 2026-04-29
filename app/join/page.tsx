import Container from "@/components/site/Container";

const defaultFormBase = "https://docs.google.com/forms/d/e/1FAIpQLSf6FplfzpOPTaelmNrnJf28a0Z8_GW9NkRd23PP01nupW38_Q/viewform";
const defaultEmbedUrl = `${defaultFormBase}?embedded=true`;

const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || defaultEmbedUrl;
const formOpenUrl = formUrl.replace("?embedded=true", "");

const joinOptions = [
  {
    title: "Join as a Practitioner",
    description:
      "For psychologists, therapists, facilitators, coaches, educators, and human-science practitioners who want to collaborate, contribute, or develop tools with Collectividual.",
    cta: "Continue as practitioner",
  },
  {
    title: "Join as an Institution",
    description:
      "For organizations, universities, communities, teams, NGOs, and companies interested in workshops, assessments, projects, or partnership formats.",
    cta: "Continue as institution",
  },
  {
    title: "Join as an Individual Representative",
    description:
      "For people reaching out on behalf of a group, collective, informal community, student club, workplace team, or emerging initiative.",
    cta: "Continue as representative",
  },
];

export const metadata = {
  title: "Join | Collectividual",
  description: "Join or contact Collectividual as a practitioner, institution, or individual representative.",
};

export default function JoinPage() {
  return (
    <main>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Join Collectividual</p>
          <h1 className="poster-title poster-title--wide">Tell us where you are entering from.</h1>
          <p className="poster-lede mt-9">
            Use this page for workshop, assessment, project, tool, collaboration, or community inquiries. Start by choosing the role that best describes your context.
          </p>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Container>
          <p className="poster-kicker mb-8 bg-[var(--bg)]">Choose a path</p>
          <div className="grid gap-6 md:grid-cols-3">
            {joinOptions.map((option) => (
              <a
                key={option.title}
                href="#form"
                className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]"
              >
                <h2 className="text-3xl leading-tight text-[var(--accent)] md:text-4xl">{option.title}</h2>
                <p className="mt-5 text-[13px] leading-7 text-[var(--muted)]">{option.description}</p>
                <p className="mt-6 text-[12px] font-black uppercase tracking-[0.1em] text-[var(--accent)]">{option.cta} →</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-8">What to include</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Choose your role in the form: practitioner, institution, or individual representative.",
              "Tell us which project, workshop, tool, assessment, or collaboration you are interested in.",
              "Tell us what kind of next step would be useful: conversation, proposal, workshop, or co-design.",
            ].map((item) => (
              <div key={item} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6 text-[15px] font-semibold leading-8 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="form" className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 shadow-[0_14px_0_var(--accent)] md:p-8">
            <p className="poster-kicker mb-6">Inquiry form</p>
            <h2 className="poster-title poster-title--medium">Start here.</h2>
            <p className="mt-6 max-w-2xl text-[15px] font-semibold leading-8 text-[var(--muted)]">
              If the embedded form does not load on your device, open it directly in a new tab. In the form, choose whether you are joining as a practitioner, institution, or individual representative.
            </p>
            <a href={formOpenUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex poster-button">
              Open the form
            </a>
            <div className="mt-8 overflow-hidden border-2 border-[var(--accent)] bg-[var(--bg)]">
              <iframe title="Collectividual inquiry form" src={formUrl} className="h-[900px] w-full" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
