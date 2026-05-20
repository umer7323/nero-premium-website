import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import FloatingWhatsapp from "@/components/shared/FloatingWhatsapp";
import UpsellPopup from "@/components/shared/UpsellPopup";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "NERO",
  description: "Premium Chocolate Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html
      lang="en"
      className={montserrat.variable}
    >

      <body className="font-[family:var(--font-main)]">

        <CartProvider>

          {children}
          <UpsellPopup />

           <FloatingWhatsapp />

        </CartProvider>

      </body>

    </html>

  );
}