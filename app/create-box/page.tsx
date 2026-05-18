"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

export default function CreateBoxPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedChocolates, setSelectedChocolates] = useState<string[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [recipientName, setRecipientName] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);

  /* Auto Scroll Refs */
  const shapeSectionRef = useRef<HTMLDivElement | null>(null);
  const colorSectionRef = useRef<HTMLDivElement | null>(null);

  const chocolateOptions = [
    "Pistachio Delight",
    "Coffee Caramel",
    "Nutella Truffle",
    "Dark Ganache",
    "Biscoff Crunch",
    "Strawberry Cream",
  ];

  const extrasOptions = [
    "Coated Nuts",
    "Premium Nuts Jar",
    "Cookies Jar",
    "Chocolate Bark",
    "Premium Dates",
    "Mini Dessert Jar",
  ];

  const getMaxSelection = () => {
    if (selectedSize === "Small") return 10;
    if (selectedSize === "Medium") return 16;
    if (selectedSize === "Large") return 24;
    return 0;
  };

  const getBasePrice = () => {
    if (selectedSize === "Small") return 4500;
    if (selectedSize === "Medium") return 7500;
    if (selectedSize === "Large") return 10500;
    return 0;
  };

  const totalPrice =
    getBasePrice() + (selectedExtras.length * 800);

  const handleWhatsAppOrder = () => {
    const message = `
Luxury Chocolate Order 💎

Size: ${selectedSize}
Shape: ${selectedShape}
Color: ${selectedColor}

Chocolates:
${selectedChocolates.map((item) => `- ${item}`).join("\n")}

Extras:
${selectedExtras.map((item) => `- ${item}`).join("\n")}

Recipient Name: ${recipientName}
Custom Message: ${customMessage}
Delivery Notes: ${deliveryNotes}
Special Request: ${specialRequest}

Final Total: PKR ${totalPrice}
`;

    const whatsappNumber = "923352088597";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
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

          {/* STEP 1 */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              Step 1 — Choose Your Box Size
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {["Small", "Medium", "Large"].map((size) => (
                <div
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);

                    window.scrollTo({
                      top: shapeSectionRef.current?.offsetTop! - 120,
                      behavior: "smooth",
                    });
                  }}
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
                    {size === "Small" && "8–10 Pieces"}
                    {size === "Medium" && "12–16 Pieces"}
                    {size === "Large" && "16–24 Pieces"}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* STEP 2 */}
          <div
            ref={shapeSectionRef}
            className="space-y-8 mt-20"
          >
            <h2 className="text-3xl font-semibold text-center">
              Step 2 — Choose Your Box Shape
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {["Square", "Rectangle", "Hexagon"].map((shape) => (
                <div
                  key={shape}
                  onClick={() => {
                    setSelectedShape(shape);

                    window.scrollTo({
                      top: colorSectionRef.current?.offsetTop! - 10,
                      behavior: "smooth",
                    });
                  }}
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
          <div
            ref={colorSectionRef}
            className="space-y-8 mt-20"
          >
            <h2 className="text-3xl font-semibold text-center">
              Step 3 — Choose Your Box Color
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {["Black", "Maroon", "Green", "White"].map((color) => (
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
                  <p className="font-semibold">{color}</p>
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
                    } else if (
                      selectedChocolates.length < getMaxSelection()
                    ) {
                                            const updatedChocolates = [
                        ...selectedChocolates,
                        chocolate,
                      ];

                      setSelectedChocolates(updatedChocolates);

                      if (updatedChocolates.length >= 12) {
                        setShowUpgradePopup(true);
                      }
                    }
                  }}
                  className={`
                    rounded-3xl
                    p-6
                    text-center
                    cursor-pointer
                    border
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
                    border
                    flex
                    justify-between
                    ${
                      selectedExtras.includes(extra)
                        ? "border-[var(--gold)] bg-[#151515]"
                        : "border-neutral-800 hover:border-[var(--gold)]"
                    }
                  `}
                >
                  <p>{extra}</p>
                  <p>{selectedExtras.includes(extra) ? "✓" : "+"}</p>
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
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full p-4 rounded-2xl border border-neutral-800 bg-transparent"
            />

            <input
              type="text"
              placeholder="Delivery Notes"
              value={deliveryNotes}
              onChange={(e) => setDeliveryNotes(e.target.value)}
              className="w-full p-4 rounded-2xl border border-neutral-800 bg-transparent"
            />

            <textarea
              placeholder="Custom Message"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              rows={4}
              className="w-full p-4 rounded-2xl border border-neutral-800 bg-transparent"
            />

            <textarea
              placeholder="Special Request"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              rows={4}
              className="w-full p-4 rounded-2xl border border-neutral-800 bg-transparent"
            />
          </div>

          {/* FINAL SUMMARY */}
          <div className="mt-20 border border-neutral-800 rounded-3xl p-10">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Final Order Summary 📋
            </h2>

            <div className="space-y-4">
              <p><strong>Size:</strong> {selectedSize}</p>
              <p><strong>Shape:</strong> {selectedShape}</p>
              <p><strong>Color:</strong> {selectedColor}</p>
              <p><strong>Final Total:</strong> PKR {totalPrice}</p>
            </div>
          </div>

          {/* WHATSAPP BUTTON */}
          <div className="mt-20 text-center">
            <button
              onClick={handleWhatsAppOrder}
              className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-semibold"
              style={{
                backgroundColor: "var(--gold)",
                color: "#111",
              }}
            >
              Place Order on WhatsApp
            </button>
          </div>

        </Container>
      </section>
                  {showUpgradePopup && (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">

    <div className="bg-[#111] border border-neutral-800 rounded-3xl p-8 max-w-xl w-full text-center space-y-6">

      <h2 className="text-3xl font-bold">
        Upgrade Your Gift Experience 🎁
      </h2>

      <p className="text-neutral-400 leading-7">
        Add Premium Dates, Dessert Jars,
        Luxury Hampers, and Signature Extras
        to make your gift unforgettable.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        <button
          onClick={() => {
            setShowUpgradePopup(false);
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          className="px-6 py-3 rounded-full font-semibold"
          style={{
            backgroundColor: "var(--gold)",
            color: "#111",
          }}
        >
          Upgrade Now 💎
        </button>

        <button
          onClick={() => setShowUpgradePopup(false)}
          className="px-6 py-3 rounded-full border border-neutral-700"
        >
          Continue Shopping
        </button>

      </div>
    </div>
  </div>
)}
      <Footer />
    </>
  );
}