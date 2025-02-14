import Navbar from "@/components/Navbar";
import RentNav from "@/components/RentNav";
import Footer from "@/components/Footer";
import RentGrid from "@/components/RentGrid";

export default function Rent() {
  return (
    <div className="w-full">
      <Navbar />
      <RentNav />
      <RentGrid/> 
      <Footer />
    </div>
  );
}
