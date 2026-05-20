import Container from "../shared/Container";

export default function ContactSection() {

  return (

    <section className="py-28">

      <Container>

        <div
          className="
          border border-neutral-800
          rounded-[32px]
          p-10 md:p-14
          "
        >

          <div className="text-center mb-14">

            <p className="text-sm uppercase tracking-[5px] text-neutral-400">

              Contact / Order

            </p>

            <h2 className="text-5xl font-bold mt-4">

              Let's Create Something Special

            </h2>

          </div>


          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}

            <div className="space-y-8">

              <div>

                <h3 className="font-semibold text-xl mb-2">
                  WhatsApp
                </h3>

                <button
                  className="
                  px-6 py-3
                  rounded-full
                  font-semibold
                  "
                  style={{
                    backgroundColor:"var(--gold)",
                    color:"#111"
                  }}
                >
                  Chat on WhatsApp
                </button>

              </div>


              <div>

                <h3 className="font-semibold text-xl mb-2">
                  Phone
                </h3>

                <p className="text-neutral-400">
                  +92 XXX XXXXXXX
                </p>

              </div>


              <div>

                <h3 className="font-semibold text-xl mb-2">
                  Instagram
                </h3>

                <p className="text-neutral-400">
                  @nerochocolates
                </p>

              </div>

            </div>


            {/* RIGHT FORM */}

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full
                p-4
                rounded-2xl
                border border-neutral-800
                bg-transparent
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                p-4
                rounded-2xl
                border border-neutral-800
                bg-transparent
                "
              />

              <textarea
                rows={5}
                placeholder="Write your order details..."
                className="
                w-full
                p-4
                rounded-2xl
                border border-neutral-800
                bg-transparent
                "
              />

              <button
                className="
                w-full
                py-4
                rounded-full
                font-semibold
                "
                style={{
                  backgroundColor:"var(--gold)",
                  color:"#111"
                }}
              >

                Submit Order

              </button>

            </div>

          </div>

        </div>

      </Container>

    </section>

  );

}