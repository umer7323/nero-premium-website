"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function UpsellPopup() {
  const { cartCount } = useCart();

  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (cartCount < 13) {
      setClosed(false);
    }
  }, [cartCount]);

  if (cartCount < 13 || closed) return null;

  return (
    <div
      className="
      fixed inset-0
      bg-black/80
      z-[999]
      flex
      items-center
      justify-center
      p-6
      "
    >
      <div
        className="
        bg-[#111]
        border
        border-[var(--gold)]
        rounded-[32px]
        p-10
        max-w-xl
        w-full
        text-center
        space-y-8
        "
      >
        <h2 className="text-3xl font-bold">Create Your Own Box 💎</h2>

        <p className="text-neutral-400 leading-8">
          You've selected enough chocolates for a premium gifting experience.
          Upgrade to a personalized box.
        </p>

        {/* Sizes */}

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl border border-neutral-700">
            Small
            <br />
            8–10
          </div>

          <div
            className="
p-4
rounded-2xl
border border-neutral-700
cursor-pointer
hover:border-[var(--gold)]
transition-all
duration-300
"
          >
            Medium
            <br />
            12–16
          </div>

          <div className="p-4 rounded-2xl border border-neutral-700">
            Large
            <br />
            16–24
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            href="/create-box"
            className="flex-1"
            onClick={() => setClosed(true)}
          >
            <button
              className="
w-full
py-3
rounded-full
font-semibold
cursor-pointer
transition-all
duration-300
hover:scale-105
"
              style={{
                backgroundColor: "var(--gold)",
                color: "#111",
              }}
            >
              Upgrade Now
            </button>
          </Link>

          <button
            onClick={() => setClosed(true)}
            className="
flex-1
border
border-neutral-700
rounded-full
cursor-pointer
transition-all
duration-300
hover:scale-105
"
          >
            Continue Retail Packaging
          </button>
        </div>
      </div>
    </div>
  );
}
