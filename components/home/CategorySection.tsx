import Link from "next/link";
import Container from "../shared/Container";

const categories = [
  {
    title: "Classic Box",
    subtitle: "Simple packaging • Limited flavors • 6 / 9 pcs",
    image: "/images/categories/classic-box.jpg",
    href: "/classic",
  },
  {
    title: "Signature Box ⭐",
    subtitle: "Full flavor range • Premium gifting • 6 / 9 / 12 pcs",
    image: "/images/categories/signature-box.jpg",
    href: "/signature",
  },
  {
    title: "Luxury Boxes 🎁",
    subtitle: "Curated luxury themes • Premium experience • Fixed chocolates",
    image: "/images/categories/luxury-box.jpg",
    href: "/luxury",
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
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item) => (
            <Link key={item.title} href={item.href}>
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

      </Container>
    </section>
  );
}