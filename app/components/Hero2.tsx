'use client';

import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import image1 from '../public/hero2img.png';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section
      className="relative h-[433px] w-full mx-auto max-w-full flex items-center justify-center text-center px-0 sm:px-8 lg:px-16 xl:px-24 overflow-hidden sm:mt-0 lg:mt-16"
    >
      <div className="absolute inset-0">
        <Image
          src={image1}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative z-10 text-center mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="w-full sm:w-[870.35px] h-full bg-transparent flex flex-col justify-center items-center text-white mx-auto">
          <h1 className="text-[18px] leading-[1.5] sm:text-[28px] md:text-[45px] sm:leading-[1.3] tracking-[0.02em] font-bold font-roboto text-white">
            Change Lives with Your Generosity
          </h1>
          <p className="text-white mt-6 font-bold text-[18px] leading-[1.6] sm:text-[28px]  sm:leading-[1.8] text-center">
            Your support can make a world of difference. Donate today and bring
            hope to those in need.
          </p>
          <button
  onClick={handleOpenModal}
  className="bg-[#FFFFFF] font-roboto font-medium text-[16px] h-[51px] w-[116px] text-[#1D2130] mt-6 rounded-[46px] hover:bg-[#003871] hover:text-white  transition-all"
>
  Donate Now
</button>

        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default HeroSection;







