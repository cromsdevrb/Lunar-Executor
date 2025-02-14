import ContactDetails from "@/components/ContactDetails"
import ContactNav from "@/components/ContactNav"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
export default function Contact(){
  return(
    <div className="w-full">
      <Navbar/>
      <ContactNav/>
      <ContactDetails/>
      <Footer/>
    </div>
  )
}