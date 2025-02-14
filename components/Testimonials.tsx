'use client'
import { useState } from 'react';
import { testimonials } from "@/constants";

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="text-center p-4">
      <img src={testimonial.image} alt={testimonial.name} className="mx-auto rounded-full w-24 h-24 mb-4" />
      <div className="flex justify-center mb-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.086 3.336a1 1 0 00.95.69h3.509c.969 0 1.372 1.24.588 1.81l-2.845 2.07a1 1 0 00-.364 1.118l1.087 3.336c.3.921-.755 1.688-1.54 1.118l-2.845-2.07a1 1 0 00-1.176 0l-2.845 2.07c-.784.57-1.838-.197-1.54-1.118l1.086-3.336a1 1 0 00-.364-1.118l-2.845-2.07c-.784-.57-.381-1.81.588-1.81h3.509a1 1 0 00.95-.69l1.086-3.336z" />
          </svg>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
      <p className="text-gray-500 mb-4">{testimonial.role}</p>
      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - testimonialsPerPage : prevIndex - testimonialsPerPage));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + testimonialsPerPage));
  };

  const currentPage = Math.floor(currentIndex / testimonialsPerPage);

  return (
    <section className="py-12 px-8">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-semibold text-center mb-8">Customer Feedback</h2>
        <button 
          onClick={handlePrevClick} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        >
          &#9664;
        </button>
        <button 
          onClick={handleNextClick} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        >
          &#9654;
        </button>
        <div className="flex justify-center space-x-8">
          {testimonials.slice(currentIndex, currentIndex + testimonialsPerPage).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {[...Array(Math.ceil(testimonials.length / testimonialsPerPage))].map((_, pageIndex) => (
            <span
              key={pageIndex}
              className={`h-2 w-2 rounded-full inline-block mx-1 ${pageIndex === currentPage ? 'bg-blue-500' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
