"use client";

import { useState } from "react";
import Container from "../shared/Container";
import Button from "../ui/Button";
import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "Boxes",
    href: "/classic",
  },
  {
    title: "Create Your Box 💎",
    href: "/create-box",
  },
  {
    title: "Gifting 🎁",
    href: "/gifting",
  },
  {
    title: "About & Contact",
    href: "/about",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-800">
      <Container>

        <nav className="flex items-center justify-between py-6">

          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold tracking-[6px] cursor-pointer">
              NERO
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="cursor-pointer transition duration-300 hover:opacity-70"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/gifting">
              <Button text="Shop Gifts" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-6">

            <div className="flex flex-col gap-4 text-sm font-medium">

              {navLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-neutral-800 pb-3 hover:opacity-70"
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="/gifting"
                onClick={() => setMenuOpen(false)}
                className="mt-4"
              >
                <Button text="Shop Gifts" />
              </Link>

            </div>

          </div>
        )}

      </Container>
    </header>
  );
}