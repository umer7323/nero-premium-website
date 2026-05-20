"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import OpeningPopup from "@/components/home/OpeningPopup";
import CategorySection from "@/components/home/CategorySection";

import ProductBoxesSection from "@/components/home/ProductBoxesSection";
import GiftCollectionSection from "@/components/home/GiftCollectionSection";
import ChocolateCollectionSection from "@/components/home/ChocolateCollectionSection";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import GallerySection from "@/components/home/GallerySection";
import CreateBoxPromoSection from "@/components/home/CreateBoxPromoSection"
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <OpeningPopup />

      <Navbar />

      <HeroSection />

      <CategorySection />

      <ProductBoxesSection />
      <GiftCollectionSection />
      <ChocolateCollectionSection />
      <AboutSection />
      <WhyChooseSection />
      <CreateBoxPromoSection />
      <GallerySection />

      <Footer />
    </>
  );
}