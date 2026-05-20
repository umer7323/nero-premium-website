"use client";

import { useState } from "react";
import Link from "next/link";

import { useCart } from "@/context/CartContext";

type ShopProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;

  includes?: string[];
  packaging?: string;
};

export default function ShopProductCard({
  id,
  name,
  price,
  image,
  includes,
  packaging,
}: ShopProductCardProps) {

  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  return (
    <div
      className="
        border border-neutral-800
        rounded-3xl
        overflow-hidden
        hover:border-[var(--gold)]
        transition-all
        duration-300
      "
    >

      {/* Image */}
      <div className="h-[280px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">

        {/* Product Name */}
        <h3 className="text-2xl font-semibold">
          {name}
        </h3>

        {/* Includes */}
        {includes && (
          <div>
            <h4 className="font-semibold mb-2">
              Includes:
            </h4>

            <ul className="text-neutral-400 space-y-1 text-sm">
              {includes.map((item) => (
                <li key={item}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Packaging */}
        {packaging && (
          <div>
            <h4 className="font-semibold mb-2">
              Packaging:
            </h4>

            <p className="text-neutral-400 text-sm">
              {packaging}
            </p>
          </div>
        )}

        {/* Price */}
        <p className="text-xl font-semibold">
          PKR {price}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <button
            onClick={() => {

              addToCart({
                id,
                name,
                price,
                image,
                quantity: 1,
                includes,
                packaging,
              });

              setAdded(true);

              setTimeout(() => {
                setAdded(false);
              }, 1500);
            }}
            className="
              px-6 py-3 rounded-full
              border
              text-sm
              transition-all
              duration-300
            "
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>

          <Link href="/cart">
            <button
              className="
                px-6 py-3 rounded-full
                font-semibold
              "
              style={{
                backgroundColor: "var(--gold)",
                color: "#111",
              }}
            >
              View Cart
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}