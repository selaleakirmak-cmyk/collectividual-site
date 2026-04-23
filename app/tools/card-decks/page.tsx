export const metadata = {
  title: "Card Decks for Reflection, Facilitation, and Creative Thinking | Collectividual",
  description:
    "Explore card decks designed as thinking tools for reflection, workshops, facilitation, and creative development.",
};

export default function CardDecksPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-medium mb-6">
          Card decks as thinking tools
        </h1>

        <p className="text-lg text-neutral-600 leading-relaxed">
          These are not games. They are structured systems that help people think,
          reflect, and work through ideas — individually or together.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-4">
          What makes a card deck useful
        </h2>

        <p className="text-neutral-600 leading-relaxed mb-4">
          A good card deck does not give answers. It organizes attention.
          It breaks a complex field into smaller, workable pieces.
        </p>

        <ul className="list-disc pl-5 text-neutral-600 space-y-2">
          <li>It creates structure without rigidity</li>
          <li>It enables reflection without forcing interpretation</li>
          <li>It works in individual and group settings</li>
          <li>It turns abstract thinking into something usable</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-4">
          Where these decks are used
        </h2>

        <ul className="list-disc pl-5 text-neutral-600 space-y-2">
          <li>Workshops and facilitation</li>
          <li>Creative project development</li>
          <li>Reflection and journaling</li>
          <li>Group conversations</li>
          <li>Learning environments</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-4">Types of decks</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-5">
            <h3 className="font-medium mb-2">Prompt Decks</h3>
            <p className="text-sm text-neutral-600">
              Question-based cards that guide reflection and thinking.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-medium mb-2">Process Decks</h3>
            <p className="text-sm text-neutral-600">
              Cards that structure a process step by step.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-medium mb-2">Facilitation Decks</h3>
            <p className="text-sm text-neutral-600">
              Tools designed for group dynamics and workshops.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-medium mb-2">Creative Decks</h3>
            <p className="text-sm text-neutral-600">
              Systems that help generate and develop ideas.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-4">Coming soon</h2>

        <p className="text-neutral-600 leading-relaxed">
          Collectividual is developing a series of card-based tools designed for
          reflection, facilitation, and creative work.
        </p>
      </section>
    </main>
  );
}
