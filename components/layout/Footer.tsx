import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-24">
      <Container>
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-[6px]">
              NERO
            </h2>

            <p className="text-neutral-400 leading-7 text-sm">
              Luxury chocolates, premium gifting, and personalized
              chocolate experiences crafted for unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              Quick Links
            </h3>

            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>Home</li>
              <li>Shop</li>
              <li>Boxes</li>
              <li>Gifting</li>
              <li>Create Your Box</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              Contact
            </h3>

            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>WhatsApp Orders</li>
              <li>Instagram</li>
              <li>Phone Support</li>
              <li>Corporate Gifting</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              Legal
            </h3>

            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Delivery Policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-neutral-800 py-6 text-sm text-neutral-500 text-center">
          © 2026 NERO. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}