import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import Link from "next/link";

export default function ClassicPage() {
  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Basic Premium Experience
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Classic Box
            </h1>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
              Simple packaging with limited flavors for elegant
              everyday gifting and timeless premium presentation.
            </p>
          </div>

          {/* Box Options */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Classic Mini Box */}
            <div className="border border-neutral-800 rounded-3xl overflow-hidden">
              <img
                src="/images/classic.jpg"
                alt="Classic Mini Box"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-4">
                  Classic Mini Box
                </h2>

                <p className="text-lg mb-4">
                  6 Pieces
                </p>

                <p className="text-neutral-400 leading-8 mb-6">
                  Minimal premium packaging with carefully selected
                  limited flavors for simple elegant gifting.
                </p>

                <p className="text-xl font-medium mb-8">
                  PKR 2,500
                </p>

                <Link href="/shop">
                  <button
                    className="px-8 py-3 rounded-full font-medium"
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "#111",
                    }}
                  >
                    Select This Box
                  </button>
                </Link>
              </div>
            </div>

            {/* Classic Premium Box */}
            <div className="border border-neutral-800 rounded-3xl overflow-hidden">
              <img
                src="/images/classic.jpg"
                alt="Classic Premium Box"
                className="w-full h-[280px] object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-4">
                  Classic Premium Box
                </h2>

                <p className="text-lg mb-4">
                  9 Pieces
                </p>

                <p className="text-neutral-400 leading-8 mb-6">
                  Elegant premium presentation with extended limited
                  flavors for birthdays, Eid and celebrations.
                </p>

                <p className="text-xl font-medium mb-8">
                  PKR 3,500
                </p>

                <Link href="/shop">
                  <button
                    className="px-8 py-3 rounded-full font-medium"
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "#111",
                    }}
                  >
                    Select This Box
                  </button>
                </Link>
              </div>
            </div>

          </div>

          {/* Available Classic Flavors */}
          <div className="mt-20 border border-neutral-800 rounded-3xl p-10">

            <h2 className="text-3xl font-semibold mb-6 text-center">
              Available Classic Flavors
            </h2>

            <p className="text-center text-neutral-400 mb-8">
              Carefully selected limited flavors for simple premium gifting.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">

              <p>• Dark Chocolate</p>
              <p>• Coffee Caramel</p>
              <p>• Biscoff</p>
              <p>• Strawberry</p>
              <p>• White Chocolate</p>

            </div>
          </div>

          {/* Make it a Gift Upsell */}
          <div className="mt-24">

            <div className="text-center space-y-4 mb-12">
              <p className="text-sm tracking-[4px] uppercase text-neutral-400">
                Premium Upgrade
              </p>

              <h2 className="text-3xl md:text-5xl font-bold">
                Make it a Gift 🎁
              </h2>

              <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
                Upgrade your gifting experience with premium add-ons,
                luxury finishing touches, and hamper options.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">

              {/* Premium Dates */}
              <div className="border border-neutral-800 rounded-3xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Premium Dates
                </h3>

                <p className="text-neutral-400 mb-4">
                  Luxury gifting favorite
                </p>

                <p className="font-medium">
                  + PKR 1,200
                </p>
              </div>

              {/* Cookies Jar */}
              <div className="border border-neutral-800 rounded-3xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Cookies Jar
                </h3>

                <p className="text-neutral-400 mb-4">
                  Premium sweet gifting add-on
                </p>

                <p className="font-medium">
                  + PKR 800
                </p>
              </div>

              {/* Mini Dessert Jar */}
              <div className="border border-neutral-800 rounded-3xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Mini Dessert Jar
                </h3>

                <p className="text-neutral-400 mb-4">
                  Brownie / cake luxury upgrade
                </p>

                <p className="font-medium">
                  + PKR 950
                </p>
              </div>

              {/* Upgrade to Hamper */}
              <div className="border border-neutral-800 rounded-3xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Upgrade to Hamper
                </h3>

                <p className="text-neutral-400 mb-4">
                  Full premium gifting experience
                </p>

                <p className="font-medium">
                  + PKR 2,500
                </p>
              </div>

            </div>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}