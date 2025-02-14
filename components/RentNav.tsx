import Image from "next/image";

export default function RentNav() {
  return (
    <section className="relative h-[40vh]">
      <div className="w-full h-full relative">
        <Image
          src='/hero_bg_3.jpg'
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white fadeInUp">
        <h1 className="text-5xl font-bold mb-4 mt-16">Rent Property</h1>
      </div>
    </section>
  );
}