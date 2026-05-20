"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

import Link from "next/link";

import { useCart } from "@/context/CartContext";

const signatureProducts = [
  {
    id: 1,
    name: "Signature Box — 6 pcs",
    price: 6500,
    image:
      "/images/signature-products/signature-6pcs-detail.jpg",

    includes: [
      "Pistachio",
      "Coffee Caramel",
      "Nutella",
      "Dark Ganache",
      "Biscoff",
      "Strawberry",
    ],

    packaging:
      "Elevated signature packaging with premium presentation.",
  },

  {
    id: 2,
    name: "Signature Box — 9 pcs",
    price: 8500,
    image:
      "/images/signature-products/signature-9pcs-detail.jpg",

    includes: [
      "Pistachio",
      "Coffee Caramel",
      "Nutella",
      "Dark Ganache",
      "Biscoff",
      "Strawberry",
      "Lotus",
      "Oreo Crunch",
      "Peanut Butter",
    ],

    packaging:
      "Luxury signature gifting box with premium finish.",
  },

  {
    id: 3,
    name: "Signature Box — 12 pcs",
    price: 10500,
    image:
      "/images/signature-products/signature-12pcs-detail.jpg",

    includes: [
      "Pistachio",
      "Coffee Caramel",
      "Nutella",
      "Dark Ganache",
      "Biscoff",
      "Strawberry",
      "Lotus",
      "Oreo Crunch",
      "Peanut Butter",
      "White Chocolate",
      "Ferrero Style",
      "Almond Praline",
    ],

    packaging:
      "Premium signature luxury box crafted for gifting.",
  },
];

export default function SignaturePage() {

  const { addToCart, cartCount } = useCart();

  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">

            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Signature Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Signature Chocolate Box ⭐
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
              A richer gifting experience with full flavor range,
              elevated presentation, and unforgettable premium luxury.
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
          <div className="grid md:grid-cols-3 gap-8">

            {signatureProducts.map((item) => (

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

                  <h2 className="text-2xl font-semibold">
                    {item.name}
                  </h2>

                  {/* Includes */}
                  <div>

                    <h3 className="font-semibold mb-2">
                      Includes:
                    </h3>

                    <ul className="space-y-1 text-neutral-400 text-sm">

                      {item.includes.map((flavor, index) => (

                        <li key={`${flavor}-${index}`}>
                          • {flavor}
                        </li>

                      ))}

                    </ul>

                  </div>

                  {/* Packaging */}
                  <div>

                    <h3 className="font-semibold mb-2">
                      Packaging:
                    </h3>

                    <p className="text-neutral-400 text-sm">
                      {item.packaging}
                    </p>

                  </div>

                  {/* Price */}
                  <p className="text-xl font-semibold">
                    PKR {item.price}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">

                    <button
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          quantity: 1,

                          includes: item.includes,

                          packaging: item.packaging,
                        })
                      }
                      className="
                        px-6 py-3 rounded-full
                        border
                      "
                      style={{
                        borderColor: "var(--gold)",
                        color: "var(--gold)",
                      }}
                    >
                      Add to Cart
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

<h3 className="font-bold text-xl">

Make it a Gift 🎁

</h3>

<label className="flex gap-3 cursor-pointer">

<input type="checkbox"/>

Premium Dates

</label>

<label className="flex gap-3 cursor-pointer">

<input type="checkbox"/>

Cookies Jar

</label>

<label className="flex gap-3 cursor-pointer">

<input type="checkbox"/>

Mini Dessert Jar

</label>

<label className="flex gap-3 cursor-pointer">

<input type="checkbox"/>

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