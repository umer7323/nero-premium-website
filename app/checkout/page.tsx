"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Secure Checkout
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Premium Order Checkout ✨
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
              Complete your luxury gifting experience with
              secure checkout, premium service, and elegant delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT — Shipping Details */}
            <div className="border border-neutral-800 rounded-3xl p-8 space-y-6">

              <h2 className="text-2xl font-semibold">
                Shipping Details
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-2xl border border-neutral-800 bg-transparent"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-2xl border border-neutral-800 bg-transparent"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 rounded-2xl border border-neutral-800 bg-transparent"
              />

              <input
                type="text"
                placeholder="Delivery Address"
                className="w-full p-4 rounded-2xl border border-neutral-800 bg-transparent"
              />

              <textarea
                rows={4}
                placeholder="Delivery Notes (Optional)"
                className="w-full p-4 rounded-2xl border border-neutral-800 bg-transparent"
              />
            </div>

            {/* RIGHT — Payment + Summary */}
            <div className="space-y-8">

              {/* Order Summary */}
              <div className="border border-neutral-800 rounded-3xl p-8 space-y-5">

                <h2 className="text-2xl font-semibold">
                  Order Summary
                </h2>

                <div className="space-y-3 text-neutral-300">
                  <p>Premium Chocolate Collection</p>
                  <p>Luxury Gift Packaging Included</p>
                  <p>Express Premium Delivery</p>
                </div>

                <div className="border-t border-neutral-800 pt-5">
                  <p className="text-xl font-semibold">
                    Total: PKR 12,500
                  </p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="border border-neutral-800 rounded-3xl p-8 space-y-6">

                <h2 className="text-2xl font-semibold">
                  Payment Method
                </h2>

                <div className="space-y-4">

                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`w-full p-4 rounded-2xl border text-left ${
                      paymentMethod === "card"
                        ? "border-[var(--gold)]"
                        : "border-neutral-800"
                    }`}
                  >
                    Credit / Debit Card
                  </button>

                  <button
                    onClick={() => setPaymentMethod("bank")}
                    className={`w-full p-4 rounded-2xl border text-left ${
                      paymentMethod === "bank"
                        ? "border-[var(--gold)]"
                        : "border-neutral-800"
                    }`}
                  >
                    Bank Transfer
                  </button>

                </div>

                <button
                  className="w-full py-4 rounded-full font-semibold text-lg"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "#111",
                  }}
                >
                  Place Secure Order
                </button>

              </div>

            </div>

          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}