"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const prompts = [
  "People here understand that mental health literacy is more than awareness or positive messaging.",
  "We have shared language for talking about distress without reducing people to labels.",
  "We avoid casual diagnostic language as shorthand for difficult behavior.",
  "People know the difference between listening, supporting, advising, referring, and treating.",
  "No one is implicitly expected to become the therapist of the group.",
  "People know what to do when someone needs more support than one person can provide.",
  "We have visible and realistic support pathways for different levels of concern.",
  "People can express difficulty without gossip, minimization, or pressure to disclose more.",
  "We do not confuse psychological safety with unlimited emotional availability.",
  "People are encouraged to validate before giving advice.",
  "We have norms for responding to worrying messages, emotional disclosures, absences, or conflict.",
  "We understand that distress is shaped by social, economic, cultural, institutional, and relational conditions.",
];

function getResult(average: number) {
  if (average < 2) {
    return {
      title: "Awareness-heavy, literacy-light",
      body: "Your group may care about the topic, but the practices around language, boundaries, and next steps are still unclear.",
      cta: "Start with the seminar",
      href: "/seminars/mental-health-literacy",
    };
  }

  if (average < 3) {
    return {
      title: "Caring but informal",
      body: "Support exists, but it may depend too much on individual sensitivity, personal relationships, or a few emotionally skilled people.",
      cta: "Send an inquiry",
      href: "/join",
    };
  }

  if (average < 4) {
    return {
      title: "Developing literacy",
      body: "Your group has a useful foundation. The next step is to strengthen shared norms, role clarity, and support pathways.",
      cta: "Download the tools",
      href: "/tools/mental-health-literacy-checklists",
    };
  }

  return {
    title: "Structurally prepared",
    body: "Your group appears to have a stronger foundation. A next step could be deeper scenario work or a tailored training format.",
    cta: "Discuss a next step",
    href: "/join",
  };
}

export default function AssessmentTool() {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === prompts.length;

  const total = useMemo(
    () => Object.values(answers).reduce((sum, value) => sum + value, 0),
    [answers],
  );

  const average = isComplete ? total / prompts.length : 0;
  const result = isComplete ? getResult(average) : null;

  function setScore(index: number, score: number) {
    setAnswers((current) => ({ ...current, [index]: score }));
  }

  function reset() {
    setAnswers({});
  }

  return (
    <div className="mt-10 space-y-4">
      {prompts.map((prompt, index) => (
        <div
          key={prompt}
          className="grid gap-4 border border-[var(--border)] bg-[var(--bg)] p-5 md:grid-cols-[60px_1fr_220px] md:items-center"
        >
          <p className="font-serif text-3xl text-[var(--accent)]">{index + 1}</p>
          <p className="text-[13px] leading-7 text-[var(--text)]">{prompt}</p>
          <div className="flex gap-2" aria-label={`Question ${index + 1} score`}>
            {[1, 2, 3, 4, 5].map((score) => {
              const selected = answers[index] === score;
              return (
                <button
                  key={score}
                  type="button"
                  onClick={() => setScore(index, score)}
                  className={
                    selected
                      ? "flex h-9 w-9 items-center justify-center border border-[var(--accent)] bg-[var(--accent)] text-[12px] font-bold text-white"
                      : "flex h-9 w-9 items-center justify-center border border-[var(--border)] bg-[var(--surface)] text-[12px] font-bold text-[var(--text)] transition hover:border-[var(--accent)]"
                  }
                >
                  {score}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-10 border border-[var(--border)] bg-[var(--surface)] p-8">
        <p className="text-[12px] uppercase tracking-[0.12em] text-[var(--muted)]">
          Progress: {answeredCount}/{prompts.length}
        </p>

        {!isComplete && (
          <p className="mt-4 text-[14px] leading-8 text-[var(--muted)]">
            Answer all questions to see a reflective result and suggested next step.
          </p>
        )}

        {result && (
          <div className="mt-6">
            <p className="text-[12px] uppercase tracking-[0.12em] text-[var(--muted)]">
              Average score: {average.toFixed(1)} / 5
            </p>
            <h3 className="mt-4 text-4xl leading-tight text-[var(--accent)]">{result.title}</h3>
            <p className="mt-4 max-w-2xl text-[14px] leading-8 text-[var(--muted)]">{result.body}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href={result.href}
                className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white"
              >
                {result.cta}
              </Link>
              <button
                type="button"
                onClick={reset}
                className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]"
              >
                Reset assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
