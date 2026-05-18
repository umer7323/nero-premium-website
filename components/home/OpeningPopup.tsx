"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function OpeningPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

      <div
  className="
    w-full
    max-w-2xl
    rounded-3xl
    border
    border-neutral-800
    bg-[#111]
    p-6
    md:p-10
    text-center
    shadow-2xl
  "
>

        {/* Small Heading */}
        <p className="text-sm tracking-[4px] uppercase text-neutral-400 mb-4">
          Welcome to NERO
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Luxury Handmade
          <br />
          Chocolates 💎
        </h2>

        {/* Description */}
        <p className="text-neutral-400 leading-8 max-w-xl mx-auto mb-8">
          Create your own premium chocolate box,
          explore luxury hampers, and enjoy unforgettable
          gifting experiences made for elegant celebrations.
        </p>

        {/* Highlight */}
        <div className="space-y-2 mb-10">
          <p>✓ Premium Handmade Chocolates</p>
          <p>✓ Fully Customized Luxury Boxes</p>
          <p>✓ Fast WhatsApp Ordering</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          <Link href="/create-box">
            <button
              className="px-8 py-4 rounded-full font-semibold"
              style={{
                backgroundColor: "var(--gold)",
                color: "#111",
              }}
            >
              Start Customizing 💎
            </button>
          </Link>

          <button
            onClick={() => setShowPopup(false)}
            className="px-8 py-4 rounded-full border font-semibold"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
          >
            Explore Later
          </button>

        </div>

      </div>
    </div>
  );
}