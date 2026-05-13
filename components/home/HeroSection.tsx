import Container from "../shared/Container";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center py-12"> {/* Reduced height slightly for better focus */}
      <Container>
        {/* Changed items-center to items-start to align the top of text with the top of the image */}
        <div className="grid lg:grid-cols-2 gap-16 items-start"> 

          {/* Left Content */}
          <div className="space-y-8 pt-4"> {/* Added slight padding-top to "optically" align with the image top */}

            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Premium Chocolate Experience
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Crafted for Moments That Deserve More Than Chocolate
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
              Luxury chocolates, curated gifting, and personalized
              chocolate boxes designed for unforgettable moments.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button text="Shop Boxes" />
              <Button text="Shop Gifts" />
            </div>

          </div>

          {/* Right Side Banner */}
          {/* We use aspect-square or a fixed aspect ratio to ensure the image has enough "weight" to match the text */}
          <div className="rounded-3xl overflow-hidden border border-neutral-800 aspect-4-5 lg:aspect-square background: #111010">
            <img
              src="/images/hero-banner.png"
              alt="Luxury Chocolate Banner"
              className="w-full h-full object-cover" 
            />
          </div>

        </div>
      </Container>
    </section>
  );
}