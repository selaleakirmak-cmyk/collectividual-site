import Container from "@/components/site/Container";

export const metadata = {
  title: "Join | Collectividual",
  description:
    "Signal interest in future encounters, early artifacts, evolving formats, and small-group sessions from Collectividual.",
};

export default function JoinPage() {
  return (
    <main>
      <section className="border-b-2 border-[var(--accent)] py-20">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            Participate
          </p>

          <h1 className="max-w-5xl text-[4rem] font-black uppercase leading-[0.85] tracking-[-0.05em] text-[var(--accent)] md:text-[7rem]">
            The first move is not to join. It is to return.
          </h1>

          <p className="mt-10 max-w-3xl border-l-4 border-[var(--accent)] pl-6 text-[20px] font-medium leading-9 text-[var(--text)]">
            Collectividual does not begin as a community. It begins as a series
            of encounters, tools, and artifacts worth returning to.
          </p>
        </Container>
      </section>

      <section className="border-b-2 border-[var(--accent)] bg-[var(--surface-soft)] py-16">
        <Container>
          <p className="mb-6 inline-flex border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
            What you may receive
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Early invitations to small-group encounters and sessions.",
              "Access to artifacts before they are publicly shared.",
              "Signals about questions, tools, and formats currently being shaped.",
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
          <div className="max-w-xl border-2 border-[var(--accent)] bg-[var(--surface)] p-8 shadow-[0_14px_0_var(--accent)]">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
              Signal interest
            </p>

            <h2 className="text-3xl font-black uppercase leading-tight text-[var(--accent)]">
              Leave a way to reach you.
            </h2>

            <form className="mt-8 flex flex-col gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-3 text-[14px] font-medium outline-none"
              />

              <button
                type="submit"
                className="border-2 border-[var(--accent)] bg-[var(--accent)] px-6 py-3 font-black uppercase tracking-[0.1em] text-white transition hover:-translate-y-1 hover:shadow-[0_8px_0_var(--text)]"
              >
                Signal
              </button>
            </form>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl border-l-4 border-[var(--accent)] pl-6 text-[15px] font-medium leading-8 text-[var(--muted)]">
            This is not a newsletter. You will not receive regular updates. You
            will hear when something is actually happening.
          </div>
        </Container>
      </section>
    </main>
  );
}
