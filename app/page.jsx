import Header from "../components/shared/navbar/Header";
import Experience from "../components/home/Experience";
import Hero from "../components/home/Hero";
import CategoryBar from "../components/home/CategoryBar";
import ProductCards from "../components/home/ProductCards";
import BrandsBar from "../components/home/BrandsBar";
import Solutions from "../components/home/Solutions";
import WorldPresence from "../components/home/WorldPresence";
import Testimonial from "../components/home/Testimonial";
import Blog from "../components/home/Blog";
import Cta from "../components/shared/Cta";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <main className="bg-background-8">
      <Header />
      <Experience />
      <Hero />
      <CategoryBar />
      <ProductCards />
      <BrandsBar />
      <Solutions />
      <WorldPresence />
      <Testimonial />
      <Blog />
      <Cta />
      <Footer />
    </main>
  );
}
