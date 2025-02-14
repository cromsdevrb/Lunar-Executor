'use client'
import { properties } from '@/constants';
import { CiHeart } from "react-icons/ci";

interface PropertyCardProps {
  id: number;
  src: string;
  alt: string;
  price: string;
  title: string;
  location: string;
  availability: string;
  status: string;
}

const PropertyCard = ({ id, src, alt, price, title, location, availability, status }: PropertyCardProps) => {
  const handleClick = () => {
    // Redirect to property details page
    window.location.href = `/property/${id}`;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative">
      <div className={`absolute top-2 left-2 px-2 py-1 rounded-sm text-white ${status === 'For Sale' ? 'bg-red-500' : 'bg-blue-500'} z-10`}>{status}</div>
      <div className={`absolute top-1/2 right-1 px-2 py-1 rounded-sm text-white  z-10`}>
        <CiHeart className="h-8 w-8 text-white hover:text-red-500" />
      </div>
      <div className="overflow-hidden">
        <img src={src} alt={alt} className="w-full cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={handleClick} />
      </div>
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">{price}</div>
        <p className="text-gray-700 text-base mb-1">{title}</p>
        <p className="text-gray-700 text-base">{location}</p>
      </div>
      <div className="px-2 pb-2 flex items-center">
          <p className="text-gray-600">{availability}</p>
      </div>
    </div>
  );
}

export default function PropertyList() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-12 mb-10">Featured Properties</h2>
      <div className="flex flex-wrap justify-center">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}
