import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              About NERO
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Luxury Handmade
              <br />
              Chocolate Experiences ✨
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
              NERO is built around premium handmade chocolates,
              elegant gifting experiences, luxury hampers,
              and unforgettable personalized celebrations.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Our Story
              </h2>

              <p className="text-neutral-400 leading-8">
                We believe gifting should feel unforgettable.
                Every chocolate box is designed with premium
                craftsmanship, elegant presentation, and luxury
                personalization to create meaningful moments.
              </p>

              <p className="text-neutral-400 leading-8">
                From Classic gifting to fully customized
                luxury hampers, NERO delivers experiences
                that feel personal, premium, and memorable.
              </p>
            </div>

            <div>
              <img
                src="/images/about.jpg"
                alt="Luxury Chocolate Experience"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            </div>

          </div>

          {/* Why Choose Us */}
          <div className="space-y-10">

            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold">
                Why Choose NERO
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="border border-neutral-800 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Handmade Premium
                </h3>

                <p className="text-neutral-400 leading-8">
                  Carefully crafted luxury chocolates made
                  for elegant gifting and unforgettable moments.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Full Personalization
                </h3>

                <p className="text-neutral-400 leading-8">
                  Create your own premium box with shapes,
                  colors, flavors, and edible luxury add-ons.
                </p>
              </div>

              <div className="border border-neutral-800 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Luxury Gifting
                </h3>

                <p className="text-neutral-400 leading-8">
                  Premium hampers, dates, desserts, and
                  unforgettable gifting experiences designed
                  for celebrations.
                </p>
              </div>

            </div>
            {/* Contact Block */}

<div className="mt-24 text-center space-y-6">

<h2 className="text-4xl font-bold">

Contact Us

</h2>

<p className="text-neutral-400">

WhatsApp: +92 335 2088597

</p>

<p className="text-neutral-400">

Instagram: @umer8149

</p>

<p className="text-neutral-400">

Email: umer8149@gmail.com

</p>

</div>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}