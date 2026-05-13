import Container from "../shared/Container";
import Image from "next/image";

const categories = [
  {
    title: "Classic",
    subtitle: "Simple elegance for everyday gifting",
    image: "/images/classic.jpg",
  },
  {
    title: "Signature",
    subtitle: "Our premium best-selling chocolate experience",
    image: "/images/signature.jpg",
  },
  {
    title: "Luxury",
    subtitle: "Curated themed luxury boxes for unforgettable moments",
    image: "/images/luxury.jpg",
  },
  {
    title: "Create Your Box",
    subtitle: "Design your own personalized premium gift",
    image: "/images/create.jpg",
  },
  {
    title: "Most Gifted",
    subtitle: "Customer favorites for celebrations and events",
    image: "/images/most-gifted.jpg",
  },
];

export default function CategorySection() {
  return (
    <section className="py-24">
      <Container>

        {/* Section Heading */}
        <div className="text-center space-y-4 mb-14">
          <p className="text-sm tracking-[4px] uppercase text-neutral-400">
            Explore Collections
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Premium Chocolate Categories
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden border border-neutral-800 rounded-3xl cursor-pointer group hover:border-[var(--gold)] transition-all duration-300"
            >
              {/* Gold top accent line on hover */}
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* dark overlay so text is always readable */}
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Text */}
              <div className="p-8">
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </h3>
                <p className="text-neutral-400 leading-7">{item.subtitle}</p>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}