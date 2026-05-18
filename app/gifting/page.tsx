import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import Link from "next/link";

export default function GiftingPage() {
  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Premium Gifting Experience
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Luxury Gifting 🎁
            </h1>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
              Curated premium gifting solutions for birthdays,
              weddings, Eid, Ramadan, corporate gifting,
              and unforgettable luxury celebrations.
            </p>
          </div>

          {/* Gifting Options */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Signature Gift Box */}
            <div className="border border-neutral-800 rounded-3xl p-8">
              <h2 className="text-3xl font-semibold mb-4">
                Signature Gift Box
              </h2>

              <p className="text-neutral-400 mb-6">
                Signature Box + 1 premium add-on
              </p>

              <div className="space-y-2 mb-6">
                <p>• Full flavor Signature Box</p>
                <p>• 1 premium add-on included</p>
                <p>• Elegant gifting presentation</p>
              </div>

              <p className="text-xl font-medium mb-8">
                Starting from PKR 6,500
              </p>

              <Link href="/shop">
                <button
                  className="px-8 py-3 rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#111",
                  }}
                >
                  Select Gift Box
                </button>
              </Link>
            </div>

            {/* Luxury Gift Box */}
            <div className="border border-neutral-800 rounded-3xl p-8">
              <h2 className="text-3xl font-semibold mb-4">
                Luxury Gift Box
              </h2>

              <p className="text-neutral-400 mb-6">
                Luxury Box + 2 premium add-ons
              </p>

              <div className="space-y-2 mb-6">
                <p>• Luxury themed box</p>
                <p>• 2 premium add-ons included</p>
                <p>• Premium luxury presentation</p>
              </div>

              <p className="text-xl font-medium mb-8">
                Starting from PKR 9,500
              </p>

              <Link href="/luxury">
                <button
                  className="px-8 py-3 rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#111",
                  }}
                >
                  Select Luxury Gift
                </button>
              </Link>
            </div>

            {/* Signature + Luxury Hamper */}
            <div className="border border-neutral-800 rounded-3xl p-8">
              <h2 className="text-3xl font-semibold mb-4">
                Signature + Luxury Hamper ⭐
              </h2>

              <p className="text-neutral-400 mb-6">
                Bestseller premium gifting package
              </p>

              <div className="space-y-2 mb-6">
                <p>• Signature + Luxury Boxes</p>
                <p>• 2–3 premium add-ons</p>
                <p>• Premium Dates included</p>
                <p>• Full hamper experience</p>
              </div>

              <p className="text-xl font-medium mb-8">
                Starting from PKR 14,500
              </p>

              <Link href="/gifting">
                <button
                  className="px-8 py-3 rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#111",
                  }}
                >
                  Select Bestseller
                </button>
              </Link>
            </div>

            {/* Create Your Box Hamper */}
            <div className="border border-neutral-800 rounded-3xl p-8">
              <h2 className="text-3xl font-semibold mb-4">
                Create Your Box Hamper 💎
              </h2>

              <p className="text-neutral-400 mb-6">
                Highest premium personalized gifting
              </p>

              <div className="space-y-2 mb-6">
                <p>• Custom luxury chocolate box</p>
                <p>• 4–5 premium add-ons</p>
                <p>• Premium Dates included</p>
                <p>• Mini Dessert Jar included</p>
              </div>

              <p className="text-xl font-medium mb-8">
                Starting from PKR 18,500
              </p>

              <Link href="/create-box">
                <button
                  className="px-8 py-3 rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#111",
                  }}
                >
                  Build Premium Hamper
                </button>
              </Link>
            </div>

          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}