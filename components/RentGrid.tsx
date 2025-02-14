'use client'

import { useState } from "react";
import Filter from "./Filter";
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative m-2">
      <div className={`absolute top-2 left-2 px-2 py-1 rounded-sm text-white bg-blue-500 z-10`}>{status}</div>
      <div className={`absolute top-[43%] right-1 px-2 py-1 rounded-sm text-white z-10`}>
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
};

export default function RentGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust the number of items per page
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProperties = properties.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="grid grid-cols-[0.25fr_1fr] gap-4 mt-6 px-8">
      {/* Filter */}
      <div>
        <Filter />
      </div>

      {/* Houses Grid List */}
      <div className="grid grid-cols-3 gap-4">
        {selectedProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>

      {/* Pagination */}
      <div className="col-span-3 flex justify-center mt-4">
        <nav className="flex items-center space-x-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border'}`}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
