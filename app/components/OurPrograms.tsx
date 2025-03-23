'use client';

import Image from 'next/image';
import acg9 from '../public/agcimage/agc9.jpg'; // ✅ Import the image properly
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const OurPrograms = () => {
  return (
    
    <section  id="live-service" className="bg-white py-16 px-6 lg:px-20">
      
      {/* Top Section - Headings */}
      <div className="text-center">
        <p className="text-[18px] font-bold text-[#1D2130] mb-6 text-center font-['Roboto']">
          OUR PROGRAMS
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
          JOIN US AND BECOME PART <br /> OF SOMETHING GREAT
        </h2>
      </div>

      {/* Bottom Section - Content Side by Side */}
      <div className="mt-12 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
            Upcoming Event
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">
            Overcomer&apos;s Rendezvous 2026
          </h3>
          <p className="text-gray-600 text-lg mt-3">
            Experience a transformative event designed to uplift and inspire. Be part of a remarkable gathering!
          </p>

          {/* Date & Time */}
          <div className="mt-5 flex items-center gap-3 justify-center lg:justify-start">
            <FaClock className="text-gray-600 text-lg" />
            <div>
              <p className="text-gray-800 font-semibold">Friday 23:39 IST</p>
              <p className="text-gray-800 font-semibold">Saturday 11:20 ISD</p>
            </div>
          </div>

          {/* Location */}
          <div className="mt-4 flex items-center gap-3 justify-center lg:justify-start">
            <FaMapMarkerAlt className="text-gray-600 text-lg" />
            <p className="text-gray-800 font-semibold">
              RR1-4 Nassawara Road by Junction Road, Kaduna
            </p>
          </div>

          {/* Join Us Button */}
          <div className="mt-6">
            <button className="bg-black text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-gray-800 transition">
              Join Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <Image
            src={acg9} // ✅ Use the imported image
            alt="Event Image"
            width={800}
            height={600}
            className="rounded-md shadow-lg w-full max-w-md md:max-w-lg lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;



