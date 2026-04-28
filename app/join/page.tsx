import Container from "@/components/site/Container";

const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "";

export const metadata = {
  title: "Inquiry | Collectividual",
  description: "Send an inquiry to Collectividual about campaigns, seminars, tools, and formats.",
};

export default function JoinPage() {
  return (
    <main>
      <section className="border-b-2 border-[var(--accent)] py-20">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Inquiry
          </p>

          <h1 className="max-w-5xl text-[4rem] font-black uppercase leading-[0.85] tracking-[-0.05em] text-[var(--accent)] md:text-[7rem]">
            Tell us what you are trying to shape.
          </h1>

          <p className="mt-10 max-w-3xl border-l-4 border-[var(--accent)] pl-6 text-[20px] font-medium leading-9 text-[var(--text)]">
            Use this form for campaign, seminar, tool, assessment, workshop, or collaboration inquiries.
          </p>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-16">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            What to include
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Who the format is for and where it will take place.",
              "Which campaign, seminar, or tool you are interested in.",
              "What kind of next step would be useful for your group.",
            ].map((item) => (
              <div
                key={item}
                className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6 text-[15px] font-semibold leading-8 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] py-20">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 shadow-[0_14px_0_var(--accent)] md:p-8">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
              Inquiry form
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight text-[var(--accent)] md:text-5xl">
              Start here.
            </h2>

            {formUrl ? (
              <div className="mt-8 overflow-hidden border-2 border-[var(--accent)] bg-[var(--bg)]">
                <iframe title="Collectividual inquiry form" src={formUrl} className="h-[820px] w-full" />
              </div>
            ) : (
              <div className="mt-8 border-2 border-[var(--accent)] bg-[var(--bg)] p-8">
                <p className="text-[15px] font-semibold leading-8 text-[var(--text)]">
                  Add your Google Form embed URL as NEXT_PUBLIC_GOOGLE_FORM_URL in Vercel to show the form here.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
