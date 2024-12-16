'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import cardImage1 from '../public/card1.png'; // Replace with the actual path for the first card image
import cardImage2 from '../public/card2.png'; // Replace with the actual path for the second card image
import cardImage3 from '../public/card3.png'; // Replace with the actual path for the third card image

const PrivacyPolicy = () => {
  
  return (
    <section
      id="privacypolicy"
      className={`relative py-12 px-6 sm:px-12 md:px-24 lg:px-48 min-h-screen bg-white flex justify-center items-center transition-all duration-700 `}
    >
      <div className="max-w-7xl w-full">
        <h3 className="font-roboto text-center font-bold text-sm sm:text-base tracking-[2px] text-[#1D2130] mx-auto mb-6">
          Privacy Policy Comes Here!
        </h3>
      </div>
    </section>
  );
};

export default PrivacyPolicy;









