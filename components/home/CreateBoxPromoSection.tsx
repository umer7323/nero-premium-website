import Container from "../shared/Container";
import Link from "next/link";

export default function CreateBoxPromoSection() {

  return (

    <section className="py-28">

      <Container>

        <div
          className="
          border border-neutral-800
          rounded-[32px]
          overflow-hidden
          grid lg:grid-cols-2
          items-center
          "
        >

          {/* Left Content */}

          <div className="p-10 md:p-14 space-y-8">

            <p className="text-sm uppercase tracking-[5px] text-neutral-400">

              Create Your Own Box 💎

            </p>

            <h2 className="text-5xl font-bold">

              Design Your Own
              <br/>

              Premium Gift

            </h2>

            <p className="text-neutral-400 leading-8">

              Personalize your chocolate experience
              with custom sizes, colors, chocolates,
              edible extras, and personal messages.

            </p>

            <Link href="/create-box">

              <button
                className="
                px-8 py-4
                rounded-full
                font-semibold
                "
                style={{
                  backgroundColor:"var(--gold)",
                  color:"#111"
                }}
              >

                Build Your Own Box

              </button>

            </Link>

          </div>


          {/* Right Image */}

          <div className="h-full">

            <img
              src="/images/create-box-promo.jpg"
              alt="Create your own box"
              className="
              w-full
              h-[500px]
              object-cover
              "
            />

          </div>

        </div>

      </Container>

    </section>

  );

}