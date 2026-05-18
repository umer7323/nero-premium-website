import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import Link from "next/link";

const signatureProducts = [
  {
    id: 1,
    name: "Signature Box — 6 pcs",
    price: "PKR 6,500",
    image: "/images/signature-products/signature-6pcs-detail.jpg",
  },
  {
    id: 2,
    name: "Signature Box — 9 pcs",
    price: "PKR 8,500",
    image: "/images/signature-products/signature-9pcs-detail.jpg",
  },
  {
    id: 3,
    name: "Signature Box — 12 pcs",
    price: "PKR 10,500",
    image: "/images/signature-products/signature-12pcs-detail.jpg",
  },
];

export default function SignaturePage() {
  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Signature Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Signature Chocolate Box ⭐
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
              A richer gifting experience with full flavor range,
              elevated presentation, and unforgettable premium luxury.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {signatureProducts.map((item) => (
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