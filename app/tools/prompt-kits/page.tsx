export const metadata = {
  title: "Prompt Kits for Reflection, Creativity, and Workshops | Collectividual",
  description:
    "Structured prompt kits designed to support reflection, idea development, workshops, and creative thinking processes.",
};

export default function PromptKitsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-4xl font-medium mb-6">
          Prompt kits as structured thinking tools
        </h1>

        <p className="text-lg text-neutral-600 leading-relaxed">
          Prompt kits are not random questions. They are designed sequences
          that help you move through a thought, a problem, or a project with
          clarity and direction.
        </p>
      </section>

      {/* WHAT IT IS */}
      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-4">
          What makes a prompt kit work
        </h2>

        <p className="text-neutral-600 leading-relaxed mb-4">
          A good prompt does not just ask. It positions you. It creates a
          perspective, a constraint, or a shift that allows something new to
          emerge.
        </p>

        <ul className="list-disc pl-5 text-neutral-600 space-y-2">
          <li>It creates direction without over-determining answers</li>
          <li>It supports both individual and group thinking</li>
          <li>It moves from vague to structured</li>
          <li>It is reusable across different contexts</li>
        </ul>
      </section>

      {/* USE CASES */}
      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-4">
          Where prompt kits are used
        </h2>

        <ul className="list-disc pl-5 text-neutral-600 space-y-2">
          <li>Idea development and project design</li>
          <li>Workshops and facilitation</li>
          <li>Reflection and journaling</li>
          <li>Group discussions</li>
          <li>Learning environments</li>
        </ul>
      </section>

      {/* TYPES */}
      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-4">
          Types of prompt kits
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-5">
            <h3 className="font-medium mb-2">Reflection Kits</h3>
            <p className="text-sm text-neutral-600">
              Designed to deepen individual thinking and awareness.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-medium mb-2">Project Kits</h3>
            <p className="text-sm text-neutral-600">
              Help turn ideas into structured, buildable projects.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-medium mb-2">Facilitation Kits</h3>
            <p className="text-sm text-neutral-600">
              Support group processes and structured conversations.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-medium mb-2">Creative Kits</h3>
            <p className="text-sm text-neutral-600">
              Designed to unlock and expand creative thinking.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <h2 className="text-2xl font-medium mb-4">
          Coming soon
        </h2>

        <p className="text-neutral-600 leading-relaxed">
          Collectividual is developing prompt-based tools that can be used
          across different contexts, from individual reflection to group work.
        </p>
      </section>
    </main>
  );
}
