"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Your Cart
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Premium Order Summary 🛒
            </h1>

            <p className="text-neutral-400 max-w-2xl mx-auto">
              Review your luxury selections before
              proceeding to checkout.
            </p>
          </div>

          {/* Empty Cart */}
          {cartItems.length === 0 && (
            <div className="text-center space-y-6">
              <p className="text-neutral-400 text-lg">
                Your cart is currently empty.
              </p>

              <Link href="/shop">
                <button
                  className="px-8 py-4 rounded-full font-semibold"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#111",
                  }}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}

          {/* Cart Items */}
          <div className="space-y-8">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="
                  border border-neutral-800
                  rounded-3xl
                  overflow-hidden
                  grid md:grid-cols-3
                "
              >

                {/* Image */}
                <div className="h-[300px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-8 space-y-5 md:col-span-2">

                  <div className="space-y-3">
                    <h2 className="text-3xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-lg font-medium">
                      PKR {item.price}
                    </p>
                  </div>

                  {/* Includes */}
                  {item.includes && (
                    <div>
                      <h3 className="font-semibold mb-2">
                        Includes:
                      </h3>

                      <ul className="text-neutral-400 space-y-1">
                        {item.includes.map((flavor, index) => (
                              <li key={`${flavor}-${index}`}>
                            • {flavor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Packaging */}
                  {item.packaging && (
                    <div>
                      <h3 className="font-semibold mb-2">
                        Packaging:
                      </h3>

                      <p className="text-neutral-400">
                        {item.packaging}
                      </p>
                    </div>
                  )}

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="
                        w-10 h-10 rounded-full
                        border border-neutral-700
                      "
                    >
                      -
                    </button>

                    <p className="text-lg font-medium">
                      {item.quantity}
                    </p>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="
                        w-10 h-10 rounded-full
                        border border-neutral-700
                      "
                    >
                      +
                    </button>

                  </div>

                  {/* Item Total */}
                  <p className="text-xl font-semibold">
                    Subtotal:
                    {" "}
                    PKR {item.price * item.quantity}
                  </p>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="text-red-400"
                  >
                    Remove Item
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* Final Billing */}
          {cartItems.length > 0 && (
            <div className="
              mt-16
              border border-neutral-800
              rounded-3xl
              p-10
              space-y-6
            ">

              <h2 className="text-3xl font-semibold">
                Final Billing
              </h2>

              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>PKR {cartTotal}</p>
                </div>

                <div className="flex justify-between">
                  <p>Premium Delivery</p>
                  <p>PKR 500</p>
                </div>

                <div className="border-t border-neutral-800 pt-5 flex justify-between text-2xl font-bold">
                  <p>Total</p>
                  <p>PKR {cartTotal + 500}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-6">

                <Link href="/shop">
                  <button
                    className="
                      px-8 py-4 rounded-full border
                    "
                    style={{
                      borderColor: "var(--gold)",
                      color: "var(--gold)",
                    }}
                  >
                    Add More Products
                  </button>
                </Link>

                <Link href="/checkout">
                  <button
                    className="
                      px-8 py-4 rounded-full font-semibold
                    "
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "#111",
                    }}
                  >
                    Proceed to Checkout ✨
                  </button>
                </Link>

              </div>

            </div>
          )}

        </Container>
      </section>

      <Footer />
    </>
  );
}