"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

export default function CreateBoxPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedChocolates, setSelectedChocolates] = useState<string[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const chocolateOptions = [
    "Pistachio Delight",
    "Coffee Caramel",
    "Nutella Truffle",
    "Dark Ganache",
    "Biscoff Crunch",
    "Strawberry Cream",
  ];

  const extrasOptions = [
    "Greeting Card",
    "Premium Ribbon",
    "Luxury Gift Wrap",
    "Name Tag Personalization",
  ];

  const getMaxSelection = () => {
    if (selectedSize === "Small") return 10;
    if (selectedSize === "Medium") return 16;
    if (selectedSize === "Large") return 24;
    return 0;
  };

  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Personalized Luxury Gifting
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Create Your Own Box 💎
            </h1>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
              Design your own premium chocolate experience
              with full customization for unforgettable gifting.
            </p>
          </div>

          {/* Step 1 — Choose Size */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              Step 1 — Choose Your Box Size
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {/* Small */}
              <div
                onClick={() => setSelectedSize("Small")}
                className={`
                  rounded-3xl
                  p-8
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedSize === "Small"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  Small
                </h3>
                <p className="text-neutral-400">
                  8–10 Pieces
                </p>
              </div>

              {/* Medium */}
              <div
                onClick={() => setSelectedSize("Medium")}
                className={`
                  rounded-3xl
                  p-8
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedSize === "Medium"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  Medium
                </h3>
                <p className="text-neutral-400">
                  12–16 Pieces
                </p>
              </div>

              {/* Large */}
              <div
                onClick={() => setSelectedSize("Large")}
                className={`
                  rounded-3xl
                  p-8
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedSize === "Large"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  Large
                </h3>
                <p className="text-neutral-400">
                  16–24 Pieces
                </p>
              </div>

            </div>
          </div>

          {/* Step 2 — Choose Shape */}
          <div className="space-y-8 mt-20">
            <h2 className="text-3xl font-semibold text-center">
              Step 2 — Choose Your Box Shape
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {/* Square */}
              <div
                onClick={() => setSelectedShape("Square")}
                className={`
                  rounded-3xl
                  p-8
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedShape === "Square"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  Square
                </h3>
                <p className="text-neutral-400">
                  Elegant premium classic presentation
                </p>
              </div>

              {/* Rectangle */}
              <div
                onClick={() => setSelectedShape("Rectangle")}
                className={`
                  rounded-3xl
                  p-8
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedShape === "Rectangle"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  Rectangle
                </h3>
                <p className="text-neutral-400">
                  Luxury gifting with elongated elegance
                </p>
              </div>

              {/* Hexagon */}
              <div
                onClick={() => setSelectedShape("Hexagon")}
                className={`
                  rounded-3xl
                  p-8
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedShape === "Hexagon"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  Hexagon
                </h3>
                <p className="text-neutral-400">
                  Unique premium statement presentation
                </p>
              </div>

            </div>
          </div>

          {/* Step 3 — Choose Box Color */}
          <div className="space-y-8 mt-20">
            <h2 className="text-3xl font-semibold text-center">
              Step 3 — Choose Your Box Color
            </h2>

            <div className="grid md:grid-cols-5 gap-6">

              {/* Black */}
              <div
                onClick={() => setSelectedColor("Black")}
                className={`
                  rounded-3xl
                  p-6
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedColor === "Black"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <div className="w-14 h-14 rounded-full bg-black mx-auto mb-4 border"></div>
                <p>Black</p>
              </div>

              {/* Maroon */}
              <div
                onClick={() => setSelectedColor("Maroon")}
                className={`
                  rounded-3xl
                  p-6
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedColor === "Maroon"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <div className="w-14 h-14 rounded-full bg-[#5C2E2E] mx-auto mb-4 border"></div>
                <p>Maroon</p>
              </div>

              {/* Green */}
              <div
                onClick={() => setSelectedColor("Green")}
                className={`
                  rounded-3xl
                  p-6
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedColor === "Green"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <div className="w-14 h-14 rounded-full bg-[#1F3A33] mx-auto mb-4 border"></div>
                <p>Green</p>
              </div>

              {/* Cream */}
              <div
                onClick={() => setSelectedColor("Cream")}
                className={`
                  rounded-3xl
                  p-6
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedColor === "Cream"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <div className="w-14 h-14 rounded-full bg-[#F8F5F0] mx-auto mb-4 border"></div>
                <p>Cream</p>
              </div>

              {/* Gold */}
              <div
                onClick={() => setSelectedColor("Gold")}
                className={`
                  rounded-3xl
                  p-6
                  text-center
                  cursor-pointer
                  transition-all
                  duration-300
                  border
                  ${
                    selectedColor === "Gold"
                      ? "border-[var(--gold)] bg-[#151515]"
                      : "border-neutral-800 hover:border-[var(--gold)]"
                  }
                `}
              >
                <div className="w-14 h-14 rounded-full bg-[#C6A972] mx-auto mb-4 border"></div>
                <p>Gold Edition</p>
              </div>

            </div>
          </div>

          {/* Step 4 — Select Chocolates */}
          <div className="space-y-8 mt-20">
            <h2 className="text-3xl font-semibold text-center">
              Step 4 — Select Your Chocolates
            </h2>

            <p className="text-center text-neutral-400">
              Choose your favorite handcrafted chocolates
              for your personalized premium box.
            </p>

            <p className="text-center text-sm text-neutral-400">
              Selected: {selectedChocolates.length} / {getMaxSelection()}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {chocolateOptions.map((chocolate) => (
                <div
                  key={chocolate}
                  onClick={() => {
                    if (selectedChocolates.includes(chocolate)) {
                      setSelectedChocolates(
                        selectedChocolates.filter(
                          (item) => item !== chocolate
                        )
                      );
                    } else {
                      if (
                        selectedChocolates.length < getMaxSelection()
                      ) {
                        setSelectedChocolates([
                          ...selectedChocolates,
                          chocolate,
                        ]);
                      }
                    }
                  }}
                  className={`
                    rounded-3xl
                    p-6
                    text-center
                    cursor-pointer
                    transition-all
                    duration-300
                    border
                    ${
                      selectedChocolates.includes(chocolate)
                        ? "border-[var(--gold)] bg-[#151515]"
                        : "border-neutral-800 hover:border-[var(--gold)]"
                    }
                  `}
                >
                  <h3 className="text-xl font-semibold">
                    {chocolate}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Step 5 — Premium Extras */}
          <div className="space-y-8 mt-20">
            <h2 className="text-3xl font-semibold text-center">
              Step 5 — Premium Extras 🎁
            </h2>

            <p className="text-center text-neutral-400">
              Upgrade your gifting experience with luxury finishing touches.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {extrasOptions.map((extra) => (
                <div
                  key={extra}
                  onClick={() => {
                    if (selectedExtras.includes(extra)) {
                      setSelectedExtras(
                        selectedExtras.filter(
                          (item) => item !== extra
                        )
                      );
                    } else {
                      setSelectedExtras([
                        ...selectedExtras,
                        extra,
                      ]);
                    }
                  }}
                  className={`
                    rounded-3xl
                    p-6
                    cursor-pointer
                    transition-all
                    duration-300
                    border
                    flex
                    items-center
                    justify-between
                    ${
                      selectedExtras.includes(extra)
                        ? "border-[var(--gold)] bg-[#151515]"
                        : "border-neutral-800 hover:border-[var(--gold)]"
                    }
                  `}
                >
                  <p className="font-medium">
                    {extra}
                  </p>

                  <p className="text-xl">
                    {selectedExtras.includes(extra) ? "✓" : "+"}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}