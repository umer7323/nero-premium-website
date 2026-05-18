import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import Link from "next/link";

const luxuryProducts = [
  {
    id: 1,
    name: "Royal Indulgence",
    price: "PKR 12,500",
    image: "/images/luxury-products/royal-indulgence-detail.jpg",
  },
  {
    id: 2,
    name: "Nut Lover’s Box",
    price: "PKR 13,500",
    image: "/images/luxury-products/nut-lover-detail.jpg",
  },
  {
    id: 3,
    name: "Classic Elegance",
    price: "PKR 12,000",
    image: "/images/luxury-products/classic-elegance-detail.jpg",
  },
  {
    id: 4,
    name: "Sweet & Crunchy",
    price: "PKR 11,500",
    image: "/images/luxury-products/sweet-crunchy-detail.jpg",
  },
  {
    id: 5,
    name: "Caramel Delight",
    price: "PKR 12,000",
    image: "/images/luxury-products/caramel-delight-detail.jpg",
  },
  {
    id: 6,
    name: "Fruity Bliss",
    price: "PKR 11,800",
    image: "/images/luxury-products/fruity-bliss-detail.jpg",
  },
  {
    id: 7,
    name: "Premium Fusion",
    price: "PKR 14,500",
    image: "/images/luxury-products/premium-fusion-detail.jpg",
  },
];

export default function LuxuryPage() {
  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Luxury Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Luxury Themed Boxes 🎁
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
              Expertly curated premium gifting experiences with
              fixed chocolates, signature presentation, and
              unforgettable luxury themes.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {luxuryProducts.map((item) => (
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
                <div className="h-[320px] overflow-hidden">
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

                  <div className="flex gap-4 flex-wrap">

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