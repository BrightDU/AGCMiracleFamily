'use client';

import Image from 'next/image'; // Import the Image component

// Import your single image
import image1 from '../public/hero2img.png';

const HeroSection = () => {
  return (
    <section
      className="relative h-[433px]  w-full mx-auto   max-w-full flex items-center justify-center text-center px-0 sm:px-8 lg:px-16 xl:px-24 overflow-hidden sm:mt-0 lg:mt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image1} // Single image
          alt="Background Image"
          layout="fill" // Makes the image cover the section
          objectFit="cover" // Ensures it covers the area without distortion
          objectPosition="center" // Keeps the image centered
          priority // Ensures the current image is prioritized for loading
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Contribution Container */}
      <div className="relative z-10 text-center mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="w-full sm:w-[870.35px] h-full bg-transparent flex flex-col justify-center items-center text-white mx-auto">
          {/* Contribution Text */}
          <h1 className="text-[18px] leading-[1.5] sm:text-[28px] md:text-[45px] sm:leading-[1.3] font-semibold mt-8 mb-6 sm:mb-10">
            You can contribute to provide a place for
            <br />
            children with special needs!
          </h1>

          {/* Contribution Button */}
          <button className="w-[115px] sm:w-[115px] h-[51px] sm:h-[51px] bg-white text-[#1D2130] text-[16px] sm:text-[14px] font-roboto font-medium rounded-[48px] py-3 px-6 sm:py-3 sm:px-6">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;






