import Container from "../shared/Container";
import ProductCard from "./ProductCard";
import { shopProducts } from "@/data/shopProducts";

export default function ProductsSection() {
  return (
    <section className="py-24">
      <Container>

        {/* Heading */}
        <div className="text-center space-y-4 mb-14">
          <p className="text-sm tracking-[4px] uppercase text-neutral-400">
            Featured Collection
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Premium Chocolate Boxes
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopProducts.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              subtitle={item.subtitle}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}