import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import PropertyList from "@/components/PropertyList";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <PropertyList/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
