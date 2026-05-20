"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import ShopProductCard from "@/components/shop/ShopProductCard";

import { shopProducts } from "@/data/shopProducts";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ShopPage() {

  const { cartCount } = useCart();

  return (
    <>
      <Navbar />

      <section className="py-24">

        <Container>

          {/* Heading */}
          <div className="text-center mb-16 space-y-4">

            <p className="text-sm uppercase tracking-[5px] text-neutral-400">
              Shop
            </p>

            <h1 className="text-5xl font-bold">
              Browse Individual Chocolates
            </h1>

            <p className="text-neutral-400">
              Craft your luxury chocolate selection.
            </p>

            {/* Cart */}
            <Link href="/cart">

              <button
                className="
                  px-6 py-3
                  rounded-full
                  font-semibold
                "
                style={{
                  backgroundColor: "var(--gold)",
                  color: "#111",
                }}
              >
                Cart ({cartCount})
              </button>

            </Link>

          </div>


          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {shopProducts.map((item) => (

              <ShopProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}

                includes={item.includes}
                packaging={item.packaging}
              />

            ))}

          </div>


          {/* Bottom Upsell Section */}

          <div
            className="
            mt-24
            border border-neutral-800
            rounded-[32px]
            p-10
            text-center
            space-y-6
            "
          >

            <h2 className="text-4xl font-bold">

              Want Something More Personal? 💎

            </h2>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">

              Design your own luxury chocolate
              experience with custom shapes,
              personalized gifting,
              and premium edible extras.

            </p>

            <Link href="/create-box">

              <button
                className="
                px-8 py-4
                rounded-full
                font-semibold
                "
                style={{
                  backgroundColor:"var(--gold)",
                  color:"#111"
                }}
              >

                Create Your Own Box ✨

              </button>

            </Link>

          </div>

        </Container>

      </section>

      <Footer />

    </>
  );
}