import Container from "../shared/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-20 mt-24">
      <Container>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-[6px]">
              NERO
            </h2>

            <p className="text-neutral-400 leading-8">
              Luxury handmade chocolates crafted for
              unforgettable gifting experiences,
              premium celebrations, and elegant moments.
            </p>

            <p className="text-sm text-neutral-500">
              Luxury gifting for unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link href="/shop">
                <p className="cursor-pointer hover:opacity-70">
                  Shop
                </p>
              </Link>

              <Link href="/create-box">
                <p className="cursor-pointer hover:opacity-70">
                  Create Your Box 💎
                </p>
              </Link>

              <Link href="/gifting">
                <p className="cursor-pointer hover:opacity-70">
                  Gifting 🎁
                </p>
              </Link>

              <Link href="/luxury">
                <p className="cursor-pointer hover:opacity-70">
                  Luxury Boxes 👑
                </p>
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-3">

              <a
                href="https://wa.me/923352088597"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-70"
              >
                WhatsApp Order
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-70"
              >
                Instagram
              </a>

              <a
                href="mailto:hello@nerochocolates.com"
                className="block hover:opacity-70"
              >
                hello@nerochocolates.com
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-neutral-800 mt-16 pt-8 text-center text-sm text-neutral-500">
          © 2026 NERO — Premium Handmade Chocolate Experiences
        </div>

      </Container>
    </footer>
  );
}