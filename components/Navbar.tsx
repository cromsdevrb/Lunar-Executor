import { NavLinks } from "@/constants";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function Navbar(){
  return(
    <nav className="w-full flex justify-between items-center py-5 px-16 absolute top-0 left-0 z-10 text-white font-semibold mb-6">
      <Link href='/' className="text-3xl">Kejani</Link>

     <ul className="flex gap-6">
       {NavLinks.map((link) => (
         <Link key={link.key} href={link.href}>
          {link.title}
         </Link>
       ))}
     </ul>
     <div className="flex gap-3">
       <CiHeart className="text-3xl"/>
       <Link href='/login'><CiUser className="text-3xl"/></Link>
     </div>
    </nav>
  )
}