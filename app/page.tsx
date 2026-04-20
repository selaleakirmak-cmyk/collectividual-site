import Link from "next/link";
import Container from "@/components/site/Container";
import CTASection from "@/components/site/CTASection";
import ProductCard from "@/components/site/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <p className="mb-5 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">Collectividual</p>
          <h1 className="max-w-5xl text-5xl leading-tight md:text-7xl">
            When work starts to feel heavy, it usually isn’t the work.
          </h1>
          <p className="mt-6 max-w-2xl text-[14px] leading-8 text-[var(--muted)]">
            Structured facilitated products for the moments distributed work gets stuck.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-[12px] tracking-[0.04em] text-white transition hover:bg-[var(--accent-light)]"
            >
              Book a Conversation
            </Link>
            <Link
              href="/products"
              className="border border-[var(--border)] px-5 py-3 text-[12px] tracking-[0.04em] text-[var(--text)]"
            >
              See our products
            </Link>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            "Meetings continue, but decisions do not settle.",
            "Managers delay conversations they know they need to have.",
            "Teams drift after pressure without a clear break.",
            "Change is announced, but not actually carried.",
          ].map((item) => (
            <div key={item} className="border border-[var(--border)] p-6 text-[13px] leading-7 text-[var(--text)]">
              {item}
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <p className="mb-4 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Products</p>
          <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">
            Five structured products for the moments distributed work starts to break down.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                name={product.name}
                description={product.shortDescription}
                href={`/products/${product.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Start with a real situation, not a generic conversation."
        description="We will look at what is happening, clarify whether one of the products is relevant, and tell you honestly if it is not."
      />
    </>
  );
}
