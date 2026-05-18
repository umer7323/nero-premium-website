import Container from "../shared/Container";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-28">
      <Container>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">

            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Premium Handmade Chocolates
            </p>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Luxury Gifting
              <br />
              Made Personal 💎
            </h1>

            <p className="text-neutral-400 text-lg leading-8 max-w-xl">
              Curated chocolate boxes, premium hampers,
              luxury gifting experiences, and fully customized
              handcrafted chocolate collections for unforgettable moments.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-3">

              <p>✓ Classic, Signature & Luxury Boxes</p>
              <p>✓ Create Your Own Premium Box</p>
              <p>✓ Luxury Hampers & Premium Dates</p>
              <p>✓ Fast WhatsApp Ordering</p>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <Link href="/create-box">
                <button
                  className="px-8 py-4 rounded-full font-semibold"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#111",
                  }}
                >
                  Create Your Box 💎
                </button>
              </Link>

              <Link href="/gifting">
                <button
                  className="px-8 py-4 rounded-full border font-semibold"
                  style={{
                    borderColor: "var(--gold)",
                    color: "var(--gold)",
                  }}
                >
                  Explore Hampers 🎁
                </button>
              </Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/images/hero.png"
              alt="Luxury Chocolate Gift Box"
              className="w-full rounded-3xl object-cover h-95 md:h-150"
            />
          </div>

        </div>

      </Container>
    </section>
  );
}