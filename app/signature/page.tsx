import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import Link from "next/link";

const classicFlavors = [
  "Dark Chocolate",
  "Coffee Caramel",
  "Biscoff",
  "Strawberry",
  "White Chocolate",
];

const premiumFlavors = [
  "Pistachio",
  "Nutella",
  "Almond Praline",
  "Peanut Butter",
  "Oreo",
  "Ganache",
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
              Core Premium Experience
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Signature Box ⭐
            </h1>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
              Signature includes all Classic flavors plus premium
              signature selections for elevated gifting and unforgettable moments.
            </p>
          </div>

          {/* Size Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">

            <div className="border border-neutral-800 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Signature Mini
              </h2>
              <p className="mb-4">6 Pieces</p>
              <p className="text-xl font-medium">PKR 3,500</p>
            </div>

            <div className="border border-neutral-800 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Signature Premium
              </h2>
              <p className="mb-4">9 Pieces</p>
              <p className="text-xl font-medium">PKR 4,500</p>
            </div>

            <div className="border border-neutral-800 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Signature Grand
              </h2>
              <p className="mb-4">12 Pieces</p>
              <p className="text-xl font-medium">PKR 5,500</p>
            </div>

          </div>

          {/* Flavor Section */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Classic Flavors */}
            <div className="border border-neutral-800 rounded-3xl p-8">
              <h2 className="text-3xl font-semibold mb-6">
                Included Classic Flavors
              </h2>

              <div className="space-y-3">
                {classicFlavors.map((flavor) => (
                  <p key={flavor} className="text-neutral-300">
                    • {flavor}
                  </p>
                ))}
              </div>
            </div>

            {/* Premium Flavors */}
            <div className="border border-neutral-800 rounded-3xl p-8">
              <h2 className="text-3xl font-semibold mb-6">
                Premium Signature Flavors
              </h2>

              <div className="space-y-3">
                {premiumFlavors.map((flavor) => (
                  <p key={flavor} className="text-neutral-300">
                    • {flavor}
                  </p>
                ))}
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link href="/shop">
              <button
                className="px-10 py-4 rounded-full text-lg font-semibold"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "#111",
                }}
              >
                Select Signature Box
              </button>
            </Link>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}