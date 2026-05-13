import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <section className="py-24">
        <Container>

         
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm tracking-[4px] uppercase text-neutral-400">
              Premium Collection
            </p>

            <h1 className="text-4xl md:text-6xl font-bold">
              Shop Individual Chocolates
            </h1>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
              Browse handcrafted premium chocolates individually
              and build your perfect luxury gifting experience.
            </p>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
}