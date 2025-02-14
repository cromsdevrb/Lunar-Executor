'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { HeroContent } from "@/constants";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HeroContent.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + HeroContent.length) % HeroContent.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % HeroContent.length);
  };

  const { src, title, subtitle, price } = HeroContent[index];

  const getSubtitleBgColor = (subtitle: string) => {
    switch (subtitle) {
      case "FOR RENT":
        return "bg-blue-600";
      case "FOR SALE":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <section className="relative h-[100vh]">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 filter brightness-50">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-opacity-25 flex flex-col items-center justify-center text-center text-white p-4">
        <h2 className={`${getSubtitleBgColor(subtitle)} p-3 rounded-sm mb-4`}>{subtitle}</h2>
        <h1 className="text-5xl mb-3">{title}</h1>
        <h2 className="text-3xl mb-5">{price}</h2>
        <button className="border border-white py-3 px-6 hover:bg-white hover:text-black transition">SEE DETAILS</button>
      </div>
      <button 
        onClick={handlePrevious} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-black"
      >
        &#9664;
      </button>
      <button 
        onClick={handleNext} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-black"
      >
        &#9654;
      </button>
    </section>
  );
}
