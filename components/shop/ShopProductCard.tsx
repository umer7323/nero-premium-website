

import { useState } from "react";

type ShopProductCardProps = {
  name: string;
  price: string;
  image: string;
  onAddToCart: () => void;
};

export default function ShopProductCard({
  
  name,
  price,
  image,
  onAddToCart,
}: ShopProductCardProps) {

  const [added, setAdded] = useState(false);

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
      
      <div className="h-[280px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">
            {price}
          </p>

          <button
            onClick={() => {
              onAddToCart();
              setAdded(true);

              setTimeout(() => {
                setAdded(false);
              }, 1500);
            }}
            className="
              px-5
              py-2
              rounded-full
              border
              text-sm
              transition-all
              duration-300
              hover:scale-105
            "
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}