import { tools } from "@/data/tools";
import Link from "next/link";
import Container from "@/components/site/Container";

export const metadata = {
  title: "Reflective Tools, Creative Systems, and Workshop Formats | Collectividual",
  description:
    "Explore reflective tools, prompt kits, printable formats, and workshop systems designed to turn ideas into usable forms.",
};

export default function ToolsPage() {
  const featuredTool = tools[0];
  const otherTools = tools.slice(1);

  return (
    <main className="overflow-hidden pb-24">
      <section className="border-b border-[var(--border)] py-14 md:py-20">
        <Container>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            Tools layer
          </p>
          <h1 className="max-w-6xl text-[4.5rem] font-semibold leading-[0.88] text-[var(--accent)] md:text-[6.8rem] lg:text-[8rem]">
            A growing set of reflective practical instruments.
          </h1>
          <p className="mt-10 max-w-4xl text-[20px] leading-9 text-[var(--muted)] md:text-[24px] md:leading-10">
            The tools layer gathers structured formats that can be used directly. Some are already available;
            others are still being shaped.
          </p>
        </Container>
      </section>

      {featuredTool && (
        <section className="py-16 md:py-24">
          <Container>
            <Link
              href={featuredTool.href}
              className="block rounded-[2.5rem] bg-[var(--accent)] p-8 text-white shadow-[0_26px_70px_rgba(31,58,47,0.18)] transition hover:bg-[var(--accent-light)] md:p-12 lg:p-14"
            >
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-4 text-[12px] font-bold uppercase tracking-[0.28em] text-white/80">
                Featured tool
              </span>

              <h2 className="mt-8 text-5xl font-semibold leading-tight md:text-6xl">
                {featuredTool.title}
              </h2>

              <p className="mt-7 max-w-4xl text-[20px] leading-9 text-white/80 md:text-[22px] md:leading-10">
                {featuredTool.description}
              </p>

              <div className="mt-10 rounded-[2rem] border border-white/20 bg-white/10 p-7 md:p-9">
                <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.24em] text-white/70">
                  Status
                </p>
                <h3 className="text-3xl font-semibold text-white">In development</h3>
                <p className="mt-5 max-w-3xl text-[18px] leading-8 text-white/75">
                  A card-based thinking format for reflection, facilitation, conversation, and creative development.
                </p>
                <span className="mt-8 inline-flex rounded-full bg-[#dfe7e2] px-7 py-4 text-[15px] font-bold text-[var(--accent)]">
                  Open {featuredTool.title}
                </span>
              </div>
            </Link>
          </Container>
        </section>
      )}

      <section className="pb-10 md:pb-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {otherTools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.href}
                className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 transition hover:border-[var(--accent)] hover:bg-white"
              >
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Tool
                </p>
                <h2 className="text-4xl leading-tight text-[var(--accent)]">{tool.title}</h2>
                <p className="mt-5 text-[15px] leading-8 text-[var(--muted)]">
                  {tool.description}
                </p>
                <span className="mt-8 inline-flex text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
