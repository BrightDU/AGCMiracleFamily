'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component

// Import images
import image1 from '../public/image1.png';
import image2 from '../public/image2.png';
import image3 from '../public/image3.png';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2, image3]; // Use imported images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[70vh] sm:h-screen flex items-center justify-center text-center px-4 sm:px-12 lg:px-24 overflow-hidden mt-12 sm:mt-0 lg:mt-16" // Added margin-top for desktop view (lg:mt-16)
    >
      {/* Background Images */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <Image
          src={images[currentSlide]}
          alt="Slideshow Image"
          layout="fill" // Makes the image cover the section
          objectFit="cover" // Ensures it covers the area without distortion
          objectPosition="center" // Keeps the image centered
          priority // Ensures the current image is prioritized for loading
        />
        Overlay
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-white max-w-[1140px] mx-auto px-4">
        <h1 className="text-[18px] leading-[1.5] sm:text-[28px] md:text-[40px] sm:leading-[1.3] font-bold mt-8 mb-6 sm:mb-10">
        Caring for early lives<br />
        Empowering every child to embrace adulthood positively
        </h1>


        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[12px] sm:text-[14px] mt-10 sm:mt-20 gap-4">
          <p className="text-center sm:text-left">230 children under our care</p>
          <hr className="w-full sm:w-[600px] border border-[#E5E5E5]" />
          <p className="text-center sm:text-right">58 donations collected</p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full bg-white opacity-50 cursor-pointer transition-all duration-300 ${
              currentSlide === index ? 'opacity-100 scale-125' : ''
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;















