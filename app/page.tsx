
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import OpeningPopup from "@/components/home/OpeningPopup";
import CategorySection from "@/components/home/CategorySection";
import ProductsSection from "@/components/shop/ProductsSection";
// import ShopProductCard from "@/components/shop/ShopProductCard";

export default function HomePage() {
  return (
    


    <>
    <OpeningPopup />
    <Navbar />
    <HeroSection />
    <CategorySection /> 
    <ProductsSection />
    {/* <ShopProductCard /> */}
    <Footer />
    </>
  );
}