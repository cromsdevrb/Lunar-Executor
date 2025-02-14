import Navbar from "@/components/Navbar";
import BuyNav from "@/components/BuyNav";
import Footer from "@/components/Footer";
import BuyGrid from "@/components/BuyGrid";

export default function Buy() {
  return (
    <div className="w-full">
      <Navbar />
      <BuyNav />
      <BuyGrid/>
      <Footer />
    </div>
  );
}
