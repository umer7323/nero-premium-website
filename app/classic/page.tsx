"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

import Link from "next/link";

import { useCart } from "@/context/CartContext";

const classicProducts = [
  {
    id: 1,
    name: "Classic Box — 6 pcs",
    price: 4500,
    image: "/images/classic-products/classic-6pcs-detail.jpg",

    includes: [
      "Pistachio",
      "Coffee Caramel",
      "Biscoff",
      "Dark Ganache",
      "Strawberry",
      "Nutella",
    ],

    packaging: "Premium rigid box with luxury ribbon finish.",
  },

  {
    id: 2,
    name: "Classic Box — 9 pcs",
    price: 6500,
    image: "/images/classic-products/classic-9pcs-detail.jpg",

    includes: [
      "Pistachio",
      "Coffee Caramel",
      "Biscoff",
      "Dark Ganache",
      "Strawberry",
      "Nutella",
      "White Chocolate",
      "Lotus",
      "Oreo Crunch",
    ],

    packaging: "Elegant rigid luxury gifting presentation.",
  },
];

export default function ClassicPage() {
  const { addToCart, cartCount } = useCart();

  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>
          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Classic Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Classic Chocolate Box 🟤
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
              Elegant simple gifting with limited premium flavors, clean
              packaging, and timeless chocolate experiences.
            </p>

            {/* Cart */}
            <div className="pt-4">
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
                  View Cart ({cartCount})
                </button>
              </Link>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {classicProducts.map((item) => (
              <div
                key={item.id}
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
                <div className="h-[350px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  <h2 className="text-2xl font-semibold">{item.name}</h2>

                  {/* Includes */}
                  <div>
                    <h3 className="font-semibold mb-2">Includes:</h3>

                    <ul className="space-y-1 text-neutral-400 text-sm">
                      {item.includes.map((flavor, index) => (
                        <li key={`${flavor}-${index}`}>• {flavor}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Packaging */}
                  <div>
                    <h3 className="font-semibold mb-2">Packaging:</h3>

                    <p className="text-neutral-400 text-sm">{item.packaging}</p>
                  </div>

                  {/* Price */}
                  <p className="text-xl font-semibold">PKR {item.price}</p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => {
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          quantity: 1,
                          includes: item.includes,
                          packaging: item.packaging,
                        });

                        alert("✓ Added to Cart");
                      }}
                      className="
                              px-6 py-3 rounded-full
                              border
                              transition-all
                              duration-300
                              hover:scale-105
                            "
                      style={{
                        borderColor: "var(--gold)",
                        color: "var(--gold)",
                      }}
                    >
                      + Add to Cart
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

                  {/* Make it a Gift */}

                  <div
                    className="
mt-6
border border-neutral-800
rounded-3xl
p-5
space-y-4
"
                  >
                    <h3 className="font-bold text-xl">Make it a Gift 🎁</h3>

                    <label className="flex gap-3 cursor-pointer">
                      <input type="checkbox" />
                      Premium Dates
                    </label>

                    <label className="flex gap-3 cursor-pointer">
                      <input type="checkbox" />
                      Cookies Jar
                    </label>

                    <label className="flex gap-3 cursor-pointer">
                      <input type="checkbox" />
                      Mini Dessert Jar
                    </label>

                    <label className="flex gap-3 cursor-pointer">
                      <input type="checkbox" />
                      Premium Nuts Jar
                    </label>

                    <Link
href="/gifting"
className="
block
w-full
py-3
rounded-full
font-semibold
text-center
transition-all
duration-300
hover:scale-105
cursor-pointer
"
style={{
backgroundColor:"var(--gold)",
color:"#111"
}}
>

Upgrade To Hamper

</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
