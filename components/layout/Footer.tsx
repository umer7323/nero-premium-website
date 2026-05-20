import Container from "../shared/Container";
import Link from "next/link";

export default function Footer() {

  return (

    <footer
      className="
      border-t
      border-neutral-800
      py-20
      mt-24
      bg-black
      "
    >

      <Container>

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div className="space-y-5">

            <h2
              className="text-3xl font-bold tracking-[6px]"
              style={{
                color:"var(--gold)"
              }}
            >
              NERO
            </h2>

            <p className="text-neutral-400 leading-8">

              Luxury handmade chocolates crafted
              for unforgettable gifting experiences
              and elegant moments.

            </p>

          </div>


          {/* Quick Links */}

          <div>

            <h3
              className="text-xl font-semibold mb-6"
              style={{
                color:"var(--gold)"
              }}
            >
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link href="/shop">
                <p className="hover:opacity-70 cursor-pointer">
                  Shop
                </p>
              </Link>

              <Link href="/create-box">
                <p className="hover:opacity-70 cursor-pointer">
                  Create Your Box 💎
                </p>
              </Link>

              <Link href="/gifting">
                <p className="hover:opacity-70 cursor-pointer">
                  Gifting 🎁
                </p>
              </Link>

            </div>

          </div>


          {/* Contact */}

          <div>

            <h3
              className="text-xl font-semibold mb-6"
              style={{
                color:"var(--gold)"
              }}
            >
              Contact
            </h3>

            <div className="space-y-3">

              <a
                href="https://wa.me/923352088597"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-70"
              >
                WhatsApp
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-70"
              >
                Instagram
              </a>

              <p>
                +92 335 2088597
              </p>

            </div>

          </div>


          {/* Legal */}

          <div>

            <h3
              className="text-xl font-semibold mb-6"
              style={{
                color:"var(--gold)"
              }}
            >
              Legal
            </h3>

            <div className="space-y-3">

              <p className="cursor-pointer hover:opacity-70">

                Terms & Conditions

              </p>

              <p className="cursor-pointer hover:opacity-70">

                Privacy Policy

              </p>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div
          className="
          border-t
          border-neutral-800
          mt-16
          pt-8
          text-center
          text-sm
          text-neutral-500
          "
        >

          © 2026 NERO — Premium Chocolate Experience

        </div>

      </Container>

    </footer>

  );

}