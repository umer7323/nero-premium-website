"use client";

import { useState } from "react";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        className="
          border border-neutral-800
          rounded-3xl
          overflow-hidden
          hover:border-[var(--gold)]
          transition-all
          duration-300
          group
        "
      >

        {/* Product Image */}
        <div className="relative h-[320px] overflow-hidden">

          <div
            className="
              absolute
              top-4
              left-4
              z-10
              px-4
              py-2
              rounded-full
              text-xs
              font-semibold
              tracking-[2px]
            "
            style={{
              backgroundColor: "var(--gold)",
              color: "#111",
            }}
          >
            LIMITED EDITION
          </div>

          <img
            src={image}
            alt={name}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-5">

          <h3 className="text-2xl font-semibold">
            {name}
          </h3>

    

          <p
            className="
              text-xs
              uppercase
              tracking-[3px]
              font-medium
            "
            style={{
              color: "var(--gold)",
            }}
          >
            Premium Luxury Collection
          </p>

          <div className="flex items-center justify-between">

            <p className="text-lg font-medium">
              PKR {price}
            </p>

            {/* Add to Cart */}
            <button
              onClick={() => setShowPopup(true)}
              className="
                px-5
                py-2
                rounded-full
                border
                text-sm
                font-medium
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
              }}
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>

      {/* Premium Upgrade Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">

          <div className="bg-[#111] border border-neutral-800 rounded-3xl p-8 max-w-xl w-full text-center space-y-6">

            <h2 className="text-3xl font-bold">
              Upgrade Your Experience 💎
            </h2>

            <p className="text-neutral-400 leading-7">
              Create your own premium luxury box with
              personalization, edible extras, premium dates,
              and unforgettable gifting experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link href="/create-box">
                <button
                  className="px-6 py-3 rounded-full font-semibold"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#111",
                  }}
                >
                  Customize Now 💎
                </button>
              </Link>

              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-3 rounded-full border border-neutral-700"
              >
                Continue Shopping
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}