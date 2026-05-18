import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import Link from "next/link";

const luxuryThemes = [
  "Royal Indulgence",
  "Premium Fusion",
  "Luxury Signature Mix",
];

const boxColors = [
  "Black",
  "Maroon",
  "Green",
  "White",
  "Gold Edition",
];

const boxShapes = [
  "Square",
  "Rectangle",
  "Hexagon",
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
              Highest Premium Experience
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Luxury Box 👑
            </h1>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
              Luxury includes Classic + Signature selections
              with premium presentation, designer box styling,
              colors, shapes, and curated luxury themes.
            </p>
          </div>

          {/* Size Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">

            <div className="border border-neutral-800 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Luxury Small
              </h2>
              <p className="mb-4">8 Pieces</p>
              <p className="text-xl font-medium">PKR 6,500</p>
            </div>

            <div className="border border-neutral-800 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Luxury Premium
              </h2>
              <p className="mb-4">10 Pieces</p>
              <p className="text-xl font-medium">PKR 8,500</p>
            </div>

            <div className="border border-neutral-800 rounded-3xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Luxury Grand
              </h2>
              <p className="mb-4">12 Pieces</p>
              <p className="text-xl font-medium">PKR 11,500</p>
            </div>

          </div>
          {/* Included Flavor Access */}
<div className="border border-neutral-800 rounded-3xl p-8 mb-10">

  <h2 className="text-3xl font-semibold mb-6">
    Included Flavor Access
  </h2>

  <p className="text-neutral-400 mb-8">
    Luxury includes Classic + Signature flavors with exclusive
    premium luxury themes and presentation.
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Classic Included */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">
        Classic Included
      </h3>

      <div className="space-y-2">
        <p>• Dark Chocolate</p>
        <p>• Coffee Caramel</p>
        <p>• Biscoff</p>
        <p>• Strawberry</p>
        <p>• White Chocolate</p>
      </div>
    </div>

    {/* Signature Included */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">
        Signature Included
      </h3>

      <div className="space-y-2">
        <p>• Pistachio</p>
        <p>• Nutella</p>
        <p>• Almond Praline</p>
        <p>• Peanut Butter</p>
        <p>• Oreo</p>
        <p>• Ganache</p>
      </div>
    </div>

    {/* Luxury Exclusive */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">
        Luxury Exclusive
      </h3>

      <div className="space-y-2">
        <p>• Royal Indulgence</p>
        <p>• Premium Fusion</p>
        <p>• Luxury Signature Mix</p>
      </div>
    </div>

  </div>
</div>

          {/* Luxury Themes */}
          <div className="border border-neutral-800 rounded-3xl p-8 mb-10">
            <h2 className="text-3xl font-semibold mb-6">
              Luxury Exclusive Themes
            </h2>

            <div className="space-y-3">
              {luxuryThemes.map((theme) => (
                <p key={theme} className="text-neutral-300">
                  • {theme}
                </p>
              ))}
            </div>
          </div>

          {/* Box Colors */}
          <div className="border border-neutral-800 rounded-3xl p-8 mb-10">
            <h2 className="text-3xl font-semibold mb-6">
              Premium Box Colors
            </h2>

            <div className="space-y-3">
              {boxColors.map((color) => (
                <p key={color} className="text-neutral-300">
                  • {color}
                </p>
              ))}
            </div>
          </div>

          {/* Box Shapes */}
          <div className="border border-neutral-800 rounded-3xl p-8 mb-10">
            <h2 className="text-3xl font-semibold mb-6">
              Premium Box Shapes
            </h2>

            <div className="space-y-3">
              {boxShapes.map((shape) => (
                <p key={shape} className="text-neutral-300">
                  • {shape}
                </p>
              ))}
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
                Select Luxury Box
              </button>
            </Link>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}