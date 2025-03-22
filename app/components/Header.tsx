'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/agcimage/agc6.jpg',  // No '/public/' in path
  '/agcimage/agc3.jpg',
  '/agcimage/agc1.jpg',
  '/agcimage/agc8.jpg'
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] w-full flex items-center px-6 md:px-16 lg:px-24">
      {/* Background Image Slider */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image
          src={images[currentImage]} // Dynamic image path
          alt="Background"
          fill
          className="object-cover object-center transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl">
        <h1 className="text-[32px] md:text-[48px] font-extrabold uppercase leading-tight">
          Welcome to AGC <br /> Nasarawa Road
        </h1>
        <p className="text-lg md:text-xl mt-2">
          — Where everybody is somebody and Jesus Christ is LORD
        </p>
        <button className="mt-6 bg-[#3D2FC2] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#2b21a5] transition">
          About Us
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
