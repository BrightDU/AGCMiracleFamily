'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Import images
import image1 from '../public/image1.png';
import whitehero1 from '../public/whitehero1.jpg'
import headerimage4 from '../public/headerimage4.png'

import headerimage6 from '../public/headerimage6.png'
import whitehero2 from '../public/whitehero2.jpg'
import headerimage5 from '../public/headerimage5.png'


import image2 from '../public/image2.png';
import image3 from '../public/image3.png';
import crystalslide from '../public/heroslidecrystalimg.jpg'
import crystal from '../public/heroslidecrystal1.jpg'
import whitehero3 from '../public/whitehero3.jpg'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, crystal,whitehero1,headerimage4,crystalslide, headerimage6,whitehero2, image2,headerimage5, image3,whitehero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]); // Add images.length as a dependency

  return (
    <section
      className="relative h-[70vh] sm:h-screen flex items-center justify-center text-center px-4 sm:px-12 lg:px-24 overflow-hidden mt-12 sm:mt-0 lg:mt-16"
    >
      {/* Background Images */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <Image
          src={images[currentSlide]}
          alt="Slideshow Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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

      <div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
        <span className="text-xs mt-2  font-bold text-[#FF0000]">Live Chat</span>
        <a
          href="https://wa.me/+2348032482515"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#003771] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.542 4.09 1.565 5.875L0 24l6.146-1.56A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.817a9.818 9.818 0 0 1-4.962-1.348L7.8 19.8l-2.015.513.531-1.953.019-.072A9.818 9.818 0 1 1 12 21.818zm4.374-5.986l-.633-.314c-.198-.099-.475-.185-.75.016-.375.287-.745.574-1.17.848a4.776 4.776 0 0 1-2.112.793c-1.798-.196-3.281-1.624-4.33-3.573-.465-.9-.65-1.811-.746-2.282-.008-.047-.006-.073-.004-.091l.01-.015c.036-.108.146-.175.29-.187l.202-.019.165-.014c.265-.023.61-.016.924.122.413.178.688.37 1.083.709.062.052.151.142.222.234.149.195.23.347.332.535.171.309.316.645.466.877.098.155.195.243.293.293.043.022.081.037.114.046.11.03.22.037.325-.036a5.656 5.656 0 0 0 1.07-.968c.076-.097.145-.187.223-.288.104-.136.26-.21.466-.134l.152.057.273.101c.313.116.632.235.936.338.116.041.29.133.444.265.308.26.372.56.457.782.134.352.206.698.272.997.13.586-.143 1.035-.633 1.167z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

















