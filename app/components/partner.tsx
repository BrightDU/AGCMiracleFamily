'use client';

import { useEffect } from 'react';
import Image from 'next/image';

// Import your images
import pat1 from '../public/partner1.png';
import pat2 from '../public/partner2.jpeg';
import pat3 from '../public/partner3.jpeg';
import pat4 from '../public/partner4.jpg';
import pat5 from '../public/partner5.png';

const Partner = () => {
  useEffect(() => {
    // Add any effects or logic you want to run on mount
  }, []);

  return (
    <section className="relative  overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-2xl  text-[#6A6969] sm:text-3xl font-bold font-roboto my-8">
       Meet  Our Partners
      </h2>

      {/* Responsive Container */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-6">
        {/* Partner images as squares */}
        <div className="w-32 h-32 ">
          <Image
            src={pat1}
            alt="Partner 1"
            className="object-cover w-full h-full"
            width={128}
            height={128}
          />
        </div>
        <div className="w-32 h-32">
          <Image
            src={pat2}
            alt="Partner 2"
            className="object-cover w-full h-full"
            width={128}
            height={128}
          />
        </div>
        <div className="w-32 h-32">
          <Image
            src={pat3}
            alt="Partner 3"
            className="object-cover w-full h-full"
            width={128}
            height={128}
          />
        </div>
        <div className="w-32 h-32">
          <Image
            src={pat4}
            alt="Partner 4"
            className="object-cover w-full h-full"
            width={128}
            height={128}
          />
        </div>
        {/* Fifth image with a link */}
        <div className="w-32 h-32">
          <a href="https://www.crystaledtech.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src={pat5}
              alt="Partner 5"
              className="object-cover w-full h-full"
              width={128}
              height={128}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partner;




