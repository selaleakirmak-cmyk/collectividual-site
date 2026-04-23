import { tools } from "@/data/tools";
import Link from "next/link";

export const metadata = {
  title: "Reflective Tools, Creative Systems, and Workshop Formats | Collectividual",
  description:
    "Explore reflective tools, prompt kits, printable formats, and workshop systems designed to turn ideas into usable forms.",
};

export default function ToolsPage() {
  return (
    <main className="container max-w-5xl mx-auto px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-medium mb-6">
          Tools that help ideas take form
        </h1>

        <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
          Collectividual develops tools, formats, and systems that turn thinking
          into something usable. Not templates to follow, but structures you can
          think with.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.href}
            className="group border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 hover:bg-neutral-50 transition"
          >
            <h2 className="text-xl font-medium mb-3 group-hover:underline">
              {tool.title}
            </h2>

            <p className="text-neutral-600 leading-relaxed">
              {tool.description}
            </p>

            <div className="mt-6 text-sm text-neutral-400">Explore →</div>
          </Link>
        ))}
      </section>

      <section className="mt-20 max-w-2xl">
        <p className="text-sm text-neutral-500 leading-relaxed">
          These are not productivity tools. They are structures for reflection,
          participation, and creative development — built to move ideas toward
          form without flattening them.
        </p>
      </section>
    </main>
  );
}
