import Container from "../shared/Container";
import Button from "../ui/Button";

const navLinks = [
  "Home",
  "Shop",
  "Boxes",
  "Create Your Box",
  "Gifting",
  "About & Contact",
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-800">
      <Container>
        <nav className="flex items-center justify-between py-6">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-[6px]">
            NERO
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => (
              <li
                key={item}
                className="cursor-pointer transition duration-300 hover:opacity-70"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button text="Shop Gifts" />
          </div>

        </nav>
      </Container>
    </header>
  );
}