"use client";

import { useState } from "react";
import Button from "../ui/Button";

export default function OpeningPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0
        bg-black/70
        z-50
        flex items-center justify-center
        px-4
      "
    >
      <div
        className="
          bg-white
          rounded-3xl
          max-w-5xl
          w-full
          p-8
          relative
        "
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          
          <div className="space-y-5">
            <p className="text-sm tracking-[4px] uppercase">
              Limited Edition
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
              Eid Luxury Gift Collection
            </h2>

            <p className="text-neutral-600 leading-7">
              Explore curated premium gifting experiences
              crafted for unforgettable celebrations.
            </p>

            <Button text="Shop Now" />
          </div>

        
          <div
            className="
              relative
              rounded-3xl
              overflow-hidden
              h-105
              border border-neutral-200
            "
          >
      
            <button
              onClick={() => setIsOpen(false)}
              className="
                absolute
                top-4
                right-4
                z-20
                w-10
                h-10
                rounded-full
                border
                flex
                items-center
                justify-center
                bg-white/20
                backdrop-blur-sm
                text-white
                text-xl
                transition-all
                duration-300
                hover:bg-white/30
              "
            >
              ✕
            </button>

            <img
              src="/images/popup-eid-collection.png"
              alt="Eid Luxury Collection"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}