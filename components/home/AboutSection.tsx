import Container from "../shared/Container";

export default function AboutSection() {
  return (

    <section className="py-28">

      <Container>

        <div
          className="
          border border-neutral-800
          rounded-[32px]
          p-8 md:p-14
          space-y-10
          "
        >

          <div className="text-center">

            <p className="text-sm uppercase tracking-[5px] text-neutral-400">

              About NERO

            </p>

            <h2
              className="text-5xl font-bold mt-4"
              style={{
                color:"var(--gold)"
              }}
            >

              Crafted Beyond Chocolate

            </h2>

          </div>


          <div className="space-y-8 max-w-5xl mx-auto">

            <p
              className="
              text-lg
              leading-9
              text-neutral-300
              "
            >

              At NERO, we believe sweetness is more than a taste — it is an experience. Our artisan chocolates and gourmet dates are crafted with precision, passion, and the finest ingredients to deliver indulgence in every bite. From velvety smooth chocolate to carefully selected premium dates, each piece is thoughtfully created to celebrate life’s special moments. Whether shared as a gift or savored personally, NERO is a symbol of elegance, quality, and unforgettable flavor.

            </p>


            <p
              className="
              text-lg
              leading-9
              text-neutral-300
              "
            >

              Inspired by premium confectionery traditions, NERO combines rich flavors with elegant packaging to create a luxury gifting experience. Every box is designed with attention to detail, ensuring that both the taste and presentation reflect the highest standards of quality.

            </p>

          </div>

        </div>

      </Container>

    </section>

  );
}