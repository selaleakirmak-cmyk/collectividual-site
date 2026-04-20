import Container from "./Container";

export default function PageHeader({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-4xl">
        {label ? (
          <p className="mb-5 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">{label}</p>
        ) : null}
        <h1 className="max-w-4xl text-5xl leading-tight text-[var(--text)] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-[14px] leading-8 text-[var(--muted)]">{description}</p>
      </Container>
    </section>
  );
}
