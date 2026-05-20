import Link from "next/link";
import Container from "../shared/Container";

const categories = [
  {
    id: 1,
    title: "Classic",
    subtitle: "Simple packaging • Limited flavors • 6 / 9 pcs",
    image: "/images/categories/classic-box.jpg",
    href: "/classic",
  },

  {
    id: 2,
    title: "Signature ⭐",
    subtitle: "Full flavor range • Premium gifting • 6 / 9 / 12 pcs",
    image: "/images/categories/signature-box.jpg",
    href: "/signature",
  },

  {
    id: 3,
    title: "Luxury 🎁",
    subtitle: "Curated luxury themes • Fixed chocolates",
    image: "/images/categories/luxury-box.jpg",
    href: "/luxury",
  },

  {
    id: 4,
    title: "Create Your Box 💎",
    subtitle: "Design your own premium gift experience",
    image: "/images/create-box-promo.jpg",
    href: "/create-box",
  },

  {
    id: 5,
    title: "Most Gifted 🎁",
    subtitle: "Most loved premium gifting experiences",
    image: "/images/categories/most-gifted.jpg",
    href: "/gifting",
  },
];

export default function CategorySection() {
  return (
    <section className="py-24">

      <Container>

        {/* Heading */}

        <div className="text-center space-y-4 mb-14">

          <p className="text-sm tracking-[4px] uppercase text-neutral-400">

            Our Premium Collections

          </p>

          <h2 className="text-4xl md:text-5xl font-bold">

            Choose Your Chocolate Experience

          </h2>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

          {categories.map((item) => (

            <Link
              key={item.id}
              href={item.href}
            >

              <div
                className="
                border border-neutral-800
                rounded-3xl
                overflow-hidden
                cursor-pointer
                hover:border-[var(--gold)]
                transition-all
                duration-300
                group
                "
              >

                <div className="h-[320px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    "
                  />

                </div>

                <div className="p-6 space-y-4">

                  <h3 className="text-2xl font-semibold">

                    {item.title}

                  </h3>

                  <p className="text-neutral-400 leading-7 text-sm">

                    {item.subtitle}

                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* CTA */}

        <div className="text-center mt-16">

          <Link href="/create-box">

            <button
              className="
              px-8 py-4
              rounded-full
              font-semibold
              "
              style={{
                backgroundColor: "var(--gold)",
                color: "#111",
              }}
            >

              Build Your Own Box

            </button>

          </Link>

        </div>

      </Container>

    </section>
  );
}