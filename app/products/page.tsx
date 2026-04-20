import PageHeader from "@/components/site/PageHeader";
import Container from "@/components/site/Container";
import ProductCard from "@/components/site/ProductCard";
import CTASection from "@/components/site/CTASection";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        label="Products"
        title="Five structured products for the moments distributed work starts to fail at the human level."
        description="These products are not interchangeable. They address different organizational layers, different trigger moments, and different kinds of distributed-work friction."
      />

      <section className="pb-20 md:pb-28">
        <Container className="max-w-4xl">
          <p className="text-[14px] leading-8 text-[var(--muted)]">
            Most clients begin with visible friction. That is why many organizations start with Meeting Friction.
            From there, the work usually leads toward manager conversations, team repair, change communication,
            or, for mature clients, system design.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              description={product.shortDescription}
              href={`/products/${product.slug}`}
            />
          ))}
        </Container>
      </section>

      <CTASection
        title="Not sure where to start?"
        description="Bring the situation as you see it. We will help determine which product, if any, is the relevant one."
      />
    </>
  );
}
