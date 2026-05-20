"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

import Link from "next/link";

import { useCart } from "@/context/CartContext";

const luxuryProducts = [
  {
    id: 1,
    name: "Royal Indulgence",
    price: 12500,
    image:
      "/images/luxury-products/royal-indulgence-detail.jpg",

    includes: [
      "Pistachio",
      "Almond Praline",
      "Coffee Caramel",
    ],

    packaging:
      "Curated luxury themed box with premium presentation.",
  },

  {
    id: 2,
    name: "Nut Lover’s Box",
    price: 13500,
    image:
      "/images/luxury-products/nut-lover-detail.jpg",

    includes: [
      "Caramelised Nuts",
      "Peanut Butter",
      "Nutella",
    ],

    packaging:
      "Luxury nut-themed premium gifting experience.",
  },

  {
    id: 3,
    name: "Classic Elegance",
    price: 12000,
    image:
      "/images/luxury-products/classic-elegance-detail.jpg",

    includes: [
      "Dark Chocolate",
      "White Chocolate",
      "Ganache",
    ],

    packaging:
      "Minimal luxury packaging with elegant presentation.",
  },

  {
    id: 4,
    name: "Sweet & Crunchy",
    price: 11500,
    image:
      "/images/luxury-products/sweet-crunchy-detail.jpg",

    includes: [
      "Wafers",
      "M&Ms",
      "Oreo",
    ],

    packaging:
      "Curated crunchy chocolate luxury collection.",
  },

  {
    id: 5,
    name: "Caramel Delight",
    price: 12000,
    image:
      "/images/luxury-products/caramel-delight-detail.jpg",

    includes: [
      "Caramel",
      "Coffee Caramel",
      "Biscoff",
    ],

    packaging:
      "Luxury caramel-focused premium gift experience.",
  },

  {
    id: 6,
    name: "Fruity Bliss",
    price: 11800,
    image:
      "/images/luxury-products/fruity-bliss-detail.jpg",

    includes: [
      "Strawberry",
      "Banana",
      "Fresh Fruit",
    ],

    packaging:
      "Elegant fruity luxury gifting collection.",
  },

  {
    id: 7,
    name: "Premium Fusion",
    price: 14500,
    image:
      "/images/luxury-products/premium-fusion-detail.jpg",

    includes: [
      "Best Seller Mix",
      "Premium Chocolate Selection",
      "Luxury Signature Flavors",
    ],

    packaging:
      "Exclusive curated luxury fusion experience.",
  },
];

export default function LuxuryPage() {

  const { addToCart, cartCount } = useCart();

  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">

            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Luxury Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Luxury Themed Boxes 🎁
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
              Expertly curated premium gifting experiences with
              fixed chocolates, signature presentation, and
              unforgettable luxury themes.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {luxuryProducts.map((item) => (

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
                <div className="h-[320px] overflow-hidden">

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