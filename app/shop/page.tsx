"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import ShopProductCard from "@/components/shop/ShopProductCard";
import { shopProducts } from "@/data/shopProducts";

export default function ShopPage() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<
    {
      id: number;
      name: string;
      quantity: number;
    }[]
  >([]);

  const [showUpsellPopup, setShowUpsellPopup] = useState(false);

  return (
    <>
      {/* Auto Upsell Popup */}
      {showUpsellPopup && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 text-center space-y-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setShowUpsellPopup(false)}
              className="absolute top-4 right-4 text-2xl text-black"
            >
              ✕
            </button>

            <p className="text-sm tracking-[4px] uppercase text-neutral-500">
              Upgrade Your Experience
            </p>

            <h2 className="text-3xl font-bold text-black">
              Create Your Own Box 💎
            </h2>

            <p className="text-neutral-600 leading-7">
              You’ve added enough chocolates for a premium custom box.
              Upgrade now for a better gifting experience.
            </p>

            {/* Box Buttons */}
            <div className="flex flex-wrap justify-center gap-4">

              <button
                onClick={() => router.push("/create-box")}
                className="px-6 py-3 rounded-full border border-black text-black"
              >
                Small Box (8–10)
              </button>

              <button
                onClick={() => router.push("/create-box")}
                className="px-6 py-3 rounded-full border border-black text-black"
              >
                Medium Box (12–16)
              </button>

              <button
                onClick={() => router.push("/create-box")}
                className="px-6 py-3 rounded-full border border-black text-black"
              >
                Large Box (16–24)
              </button>

            </div>

            {/* Continue Shopping */}
            <button
              onClick={() => setShowUpsellPopup(false)}
              className="text-sm text-neutral-500 underline"
            >
              Continue Shopping
            </button>

          </div>
        </div>
      )}

      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Premium Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Shop Individual Chocolates
            </h1>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
              Browse handcrafted premium chocolates individually
              and build your perfect luxury gifting experience.
            </p>

            {/* Live Cart Counter */}
            <div className="mt-8">
              <p className="text-lg font-medium">
                Items Added:{" "}
                {cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </p>
            </div>

            
            <div className="mt-6 max-w-md mx-auto text-left">
              <h3 className="text-lg font-semibold mb-4">
                Cart Summary
              </h3>

              {cartItems.length === 0 ? (
                <p className="text-neutral-400">
                  No chocolates added yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between border-b border-neutral-800 pb-2"
                    >
                      <p>{item.name}</p>
                      <p>× {item.quantity}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopProducts.map((item) => (
              <ShopProductCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                onAddToCart={() => {
                  setCartItems((prevItems) => {
                    const existingItem = prevItems.find(
                      (cartItem) => cartItem.id === item.id
                    );

                    let updatedItems;

                    if (existingItem) {
                      updatedItems = prevItems.map((cartItem) =>
                        cartItem.id === item.id
                          ? {
                              ...cartItem,
                              quantity: cartItem.quantity + 1,
                            }
                          : cartItem
                      );
                    } else {
                      updatedItems = [
                        ...prevItems,
                        {
                          id: item.id,
                          name: item.name,
                          quantity: 1,
                        },
                      ];
                    }

                    const totalItems = updatedItems.reduce(
                      (total, cartItem) => total + cartItem.quantity,
                      0
                    );

                    if (totalItems >= 13) {
                      setShowUpsellPopup(true);
                    }

                    return updatedItems;
                  });
                }}
              />
            ))}
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}