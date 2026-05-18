import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import Link from "next/link";

const classicProducts = [
  {
    id: 1,
    name: "Classic Box — 6 pcs",
    price: "PKR 4,500",
    image: "/images/classic-products/classic-6pcs.jpg",
  },
  {
    id: 2,
    name: "Classic Box — 9 pcs",
    price: "PKR 6,500",
    image: "/images/classic-products/classic-9pcs.jpg",
  },
];

export default function ClassicPage() {
  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Classic Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Classic Chocolate Box 🟤
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
              Elegant simple gifting with limited premium flavors,
              clean packaging, and timeless chocolate experiences.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {classicProducts.map((item) => (
              <div
                key={item.id}
                className="
                  border border-neutral-800
                  rounded-3xl
                  overflow-hidden
                  hover:border-[var(--gold)]
                  transition-all
                  duration-300
                "
              >
                <div className="h-[350px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-5">
                  <h2 className="text-2xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-lg font-medium">
                    {item.price}
                  </p>

                  <div className="flex gap-4">

                    <button
                      className="px-6 py-3 rounded-full border"
                      style={{
                        borderColor: "var(--gold)",
                        color: "var(--gold)",
                      }}
                    >
                      Add to Cart
                    </button>

                    <Link href="/checkout">
                      <button
                        className="px-6 py-3 rounded-full font-semibold"
                        style={{
                          backgroundColor: "var(--gold)",
                          color: "#111",
                        }}
                      >
                        Buy Now
                      </button>
                    </Link>

                  </div>
                </div>
              </div>
            ))}

          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}