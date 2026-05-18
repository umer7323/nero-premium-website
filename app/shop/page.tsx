"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import ShopProductCard from "@/components/shop/ShopProductCard";
import { shopProducts } from "@/data/shopProducts";
import { useState } from "react";
import Link from "next/link";

export default function ShopPage() {
  const [cartCount, setCartCount] = useState(0);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);

  const handleAddToCart = () => {
    const updatedCount = cartCount + 1;

    setCartCount(updatedCount);

    // Trigger popup after 12 items
    if (updatedCount >= 12) {
      setShowUpgradePopup(true);
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-14">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Premium Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Shop Luxury Chocolates
            </h1>

            <p className="text-neutral-400">
              Cart Items: {cartCount}
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopProducts.map((item) => (
              <ShopProductCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

        </Container>
      </section>

      {/* Upgrade Popup */}
      {showUpgradePopup && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">

          <div className="bg-[#111] border border-neutral-800 rounded-3xl p-8 max-w-xl w-full text-center space-y-6">

            <h2 className="text-3xl font-bold">
              Upgrade Your Gift Experience 🎁
            </h2>

            <p className="text-neutral-400 leading-7">
              You’ve selected enough chocolates for a premium gifting experience.
              Upgrade now with custom luxury boxes, premium dates,
              dessert jars, and signature extras.
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
                  Upgrade Now 💎
                </button>
              </Link>

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