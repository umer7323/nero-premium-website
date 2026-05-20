"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

import Link from "next/link";

export default function CreateBoxPage() {

  const [selectedSize, setSelectedSize] = useState("");

  const [selectedShape, setSelectedShape] = useState("");

  const [selectedColor, setSelectedColor] = useState("");

  const [selectedChocolates, setSelectedChocolates] =
    useState<string[]>([]);

  const [selectedExtras, setSelectedExtras] =
    useState<string[]>([]);

  const [recipientName, setRecipientName] =
    useState("");

  const [customMessage, setCustomMessage] =
    useState("");



  // Chocolate Options
  const chocolateOptions = [
    "Pistachio",
    "Coffee Caramel",
    "Nutella",
    "Dark Ganache",
    "Biscoff",
    "Strawberry",
    "Lotus",
    "Oreo Crunch",
    "Peanut Butter",
    "White Chocolate",
    "Almond Praline",
    "Ferrero Style",
  ];



  // Extras
  const extrasOptions = [
    "Coated Nuts",
    "Premium Nuts Jar",
    "Cookies Jar",
    "Chocolate Bark",
    "Premium Dates",
    "Mini Dessert Jar",
  ];



  // Max Chocolate Selection
  const getMaxSelection = () => {

    if (selectedSize === "Small") return 10;

    if (selectedSize === "Medium") return 16;

    if (selectedSize === "Large") return 24;

    return 0;
  };



  // Base Price
  const getBasePrice = () => {

    if (selectedSize === "Small") return 4500;

    if (selectedSize === "Medium") return 7500;

    if (selectedSize === "Large") return 10500;

    return 0;
  };



  // Final Price
  const totalPrice =
    getBasePrice() +
    (selectedExtras.length * 800);



  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-20">

            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Personalized Luxury Gifting
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Create Your Own Box 💎
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
              Design your own premium chocolate experience
              with luxury customization, elegant presentation,
              and unforgettable gifting.
            </p>

          </div>



          {/* STEP 1 */}
          <div className="space-y-8">

            <h2 className="text-3xl font-semibold text-center">
              Step 1 — Choose Your Size
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {["Small", "Medium", "Large"].map((size) => (

                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    rounded-3xl
                    p-8
                    text-center
                    cursor-pointer
                    border
                    transition-all
                    duration-300
                    ${
                      selectedSize === size
                        ? "border-[var(--gold)] bg-[#151515]"
                        : "border-neutral-800 hover:border-[var(--gold)]"
                    }
                  `}
                >

                  <h3 className="text-2xl font-semibold mb-3">
                    {size}
                  </h3>

                  <p className="text-neutral-400">

                    {size === "Small" &&
                      "8–10 Pieces"}

                    {size === "Medium" &&
                      "12–16 Pieces"}

                    {size === "Large" &&
                      "16–24 Pieces"}

                  </p>

                </div>

              ))}

            </div>

          </div>



          {/* STEP 2 */}
          <div className="space-y-8 mt-20">

            <h2 className="text-3xl font-semibold text-center">
              Step 2 — Choose Shape
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {["Square", "Rectangle", "Hexagon"].map((shape) => (

                <div
                  key={shape}
                  onClick={() => setSelectedShape(shape)}
                  className={`
                    rounded-3xl
                    p-8
                    text-center
                    cursor-pointer
                    border
                    transition-all
                    duration-300
                    ${
                      selectedShape === shape
                        ? "border-[var(--gold)] bg-[#151515]"
                        : "border-neutral-800 hover:border-[var(--gold)]"
                    }
                  `}
                >

                  <h3 className="text-2xl font-semibold">
                    {shape}
                  </h3>

                </div>

              ))}

            </div>

          </div>



          {/* STEP 3 */}
          <div className="space-y-8 mt-20">

            <h2 className="text-3xl font-semibold text-center">
              Step 3 — Choose Color
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              {["Maroon", "Green", "White", "Black"].map((color) => (

                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`
                    rounded-3xl
                    p-6
                    text-center
                    cursor-pointer
                    border
                    transition-all
                    duration-300
                    ${
                      selectedColor === color
                        ? "border-[var(--gold)] bg-[#151515]"
                        : "border-neutral-800 hover:border-[var(--gold)]"
                    }
                  `}
                >

                  <p className="font-semibold">
                    {color}
                  </p>

                </div>

              ))}

            </div>

          </div>



          {/* STEP 4 */}
          <div className="space-y-8 mt-20">

            <h2 className="text-3xl font-semibold text-center">
              Step 4 — Select Chocolates
            </h2>

            <p className="text-center text-neutral-400">

              Selected:
              {" "}
              {selectedChocolates.length}
              {" / "}
              {getMaxSelection()}

            </p>

            <div className="grid md:grid-cols-3 gap-6">

              {chocolateOptions.map((chocolate) => (

                <div
                  key={chocolate}
                  onClick={() => {

                    if (
                      selectedChocolates.includes(chocolate)
                    ) {

                      setSelectedChocolates(
                        selectedChocolates.filter(
                          (item) => item !== chocolate
                        )
                      );

                    } else if (
                      selectedChocolates.length <
                      getMaxSelection()
                    ) {

                      setSelectedChocolates([
                        ...selectedChocolates,
                        chocolate,
                      ]);

                    }

                  }}
                  className={`
                    rounded-3xl
                    p-6
                    text-center
                    cursor-pointer
                    border
                    transition-all
                    duration-300
                    ${
                      selectedChocolates.includes(chocolate)
                        ? "border-[var(--gold)] bg-[#151515]"
                        : "border-neutral-800 hover:border-[var(--gold)]"
                    }
                  `}
                >

                  {chocolate}

                </div>

              ))}

            </div>

          </div>



          {/* STEP 5 */}
          <div className="space-y-8 mt-20">

            <h2 className="text-3xl font-semibold text-center">
              Step 5 — Add Edible Extras ⭐
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {extrasOptions.map((extra) => (

                <div
                  key={extra}
                  onClick={() => {

                    if (
                      selectedExtras.includes(extra)
                    ) {

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
                    border
                    flex
                    justify-between
                    transition-all
                    duration-300
                    ${
                      selectedExtras.includes(extra)
                        ? "border-[var(--gold)] bg-[#151515]"
                        : "border-neutral-800 hover:border-[var(--gold)]"
                    }
                  `}
                >

                  <p>{extra}</p>

                  <p>
                    {selectedExtras.includes(extra)
                      ? "✓"
                      : "+"}
                  </p>

                </div>

              ))}

            </div>

          </div>



          {/* STEP 6 */}
          <div className="space-y-8 mt-20">

            <h2 className="text-3xl font-semibold text-center">
              Step 6 — Personalization ✨
            </h2>

            <input
              type="text"
              placeholder="Recipient Name"
              value={recipientName}
              onChange={(e) =>
                setRecipientName(e.target.value)
              }
              className="
                w-full p-4 rounded-2xl
                border border-neutral-800
                bg-transparent
              "
            />

            <textarea
              placeholder="Custom Message"
              value={customMessage}
              onChange={(e) =>
                setCustomMessage(e.target.value)
              }
              rows={4}
              className="
                w-full p-4 rounded-2xl
                border border-neutral-800
                bg-transparent
              "
            />

          </div>



          {/* FINAL SUMMARY */}
          <div
            className="
              mt-20
              border border-neutral-800
              rounded-3xl
              p-10
              space-y-6
            "
          >

            <h2 className="text-3xl font-semibold text-center">
              Final Order Summary 📋
            </h2>

            <div className="space-y-4 text-lg">

              <p>
                <strong>Size:</strong>
                {" "}
                {selectedSize}
              </p>

              <p>
                <strong>Shape:</strong>
                {" "}
                {selectedShape}
              </p>

              <p>
                <strong>Color:</strong>
                {" "}
                {selectedColor}
              </p>

              <p>
                <strong>Chocolates:</strong>
                {" "}
                {selectedChocolates.length}
              </p>

              <p>
                <strong>Extras:</strong>
                {" "}
                {selectedExtras.length}
              </p>

              <p className="text-2xl font-bold pt-4">

                Final Total:
                {" "}
                PKR {totalPrice}

              </p>

            </div>

          </div>



          {/* ACTIONS */}
          <div className="mt-20 text-center space-y-6">

            <Link href="/checkout">

              <button
                className="
                  px-10 py-4 rounded-full
                  text-lg font-semibold
                "
                style={{
                  backgroundColor: "var(--gold)",
                  color: "#111",
                }}
              >
                Proceed to Checkout
              </button>

            </Link>

            

          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}