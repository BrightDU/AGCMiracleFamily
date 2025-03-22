'use client';

import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import image1 from '../public/agcimage/acg12.jpg';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="relative h-[700px] w-full mx-auto max-w-full flex items-center justify-center text-center px-0 sm:px-8 lg:px-16 xl:px-24 overflow-hidden sm:mt-0 lg:mt-16">
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
      <div className="relative z-10 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
  <div className="w-full sm:w-[870.35px] sm:h-[450px] bg-white hover:shadow-[0px_10px_0px_0px_#003771]   px-6 py-10 sm:px-10 sm:py-10 text-left mx-auto">
    <h1 className="text-[22px] sm:text-[25px] mt-[40px]  md:text-[48px] leading-[1.2] font-bold font-roboto text-[#1D2130] ">
    WE WANT TO<br />
  SERVE THE<br />
  WORLD AROUND US
    </h1>
    <p className="mt-4 sm:mt-6 font-semibold text-[10px] sm:text-[15px] md:text-[15px] text-[#000000] font-roboto">
      Lorem ipsum dolor sit amet, consectetur<br />  adipiscing elit, sed do.
    </p>
    <button
      onClick={handleOpenModal}
      className="bg-[#003771] font-roboto font-medium text-[16px] h-[58px] w-[140px] text-white mt-6 rounded-[14px] hover:bg-[#1D2130] transition-all"
    >
      Visit
    </button>
  </div>
</div>

<Modal isOpen={isModalOpen} onClose={handleCloseModal} />

    </section>
  );
};

export default HeroSection;








