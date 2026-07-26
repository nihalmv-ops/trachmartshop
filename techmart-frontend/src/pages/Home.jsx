import Hero from "../components/Hero";
import CategoryShowcase from "../components/CategoryShowcase";
import FeaturedProducts from "../components/FeaturedProducts";
import BrandStrip from "../components/BrandStrip";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <CategoryShowcase />
      <FeaturedProducts tag="bestseller" title="Bestsellers this week" eyebrow="Popular" />
      <BrandStrip />
      <FeaturedProducts tag="sale" title="Deals worth a look" eyebrow="On sale" />
      <Testimonials />
      <Newsletter />
    </>
  );
}
