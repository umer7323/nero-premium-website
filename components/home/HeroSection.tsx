import Container from "../shared/Container";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <p className="text-sm tracking-[5px] uppercase text-neutral-400">
              NERO Luxury Collection
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              NERO —
              <br />
              Crafted for Moments
              <br />
              That Deserve
              <br />
              More Than Chocolate
            </h1>

            <p className="text-neutral-400 text-lg leading-8 max-w-xl">
              Luxury artisan chocolates, curated gifting experiences, and
              unforgettable moments.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/boxes">
                <button
                  className="
      px-8 py-4 rounded-full
      font-semibold
      transition-all duration-300
      hover:scale-105
      "
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#111",
                  }}
                >
                  Shop Boxes
                </button>
              </Link>

              <Link href="/gifting">
                <button
                  className="
      px-8 py-4 rounded-full
      border font-semibold
      transition-all duration-300
      hover:scale-105
      "
                  style={{
                    borderColor: "var(--gold)",
                    color: "var(--gold)",
                  }}
                >
                  Shop Gifts
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/images/hero.png"
              alt="Premium Chocolate Gifting"
              className="
                w-full
                h-[600px]
                object-cover
                rounded-[32px]
              "
            />

            {/* Overlay Glow */}
            <div
              className="
                absolute inset-0
                rounded-[32px]
                bg-gradient-to-t
                from-black/40
                to-transparent
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
