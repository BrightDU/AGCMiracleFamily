'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import education from '../app/public/educationimg.jpg';
import Education from '../app/public/education.jpg';

import Navbar from '../app/components/Navbar'; // Replace with the correct Navbar import path
import HeroSection from '../app/components/Hero2'; // Replace with the correct HeroSection import path
import Footer from '../app/components/Footer'; // Replace with the correct Footer import path
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon
import Head from 'next/head'; // Import the Head component

const Health = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const target = document.getElementById('whatwedo');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
     {/* Add Favicon and Title */}
     <Head>
        {/* Add global favicon link for SSR */}
        <link rel="icon" href={favicon.src} type="image/x-icon" sizes="any" />
        <meta name="description" content="NGO, Charity, Support, Intervention programs, Nigeria, UK." />
        <title>Education Interventions</title>
      </Head>
      {/* Render Navbar */}
      <Navbar />

    

      {/* Main Section */}
      <section
        id="whatwedo"
        className={`relative py-12 px-6 sm:px-12 md:px-24 lg:px-48 min-h-screen bg-white flex justify-center items-center transition-all duration-700 ${
          isInView ? 'animate-floating' : ''
        }`}
      >
        <div className="max-w-7xl w-full">
          <h3 className="font-roboto text-center font-bold  mt-[80px] sm:mt-[100px] text-sm sm:text-base tracking-[2px] text-[#1D2130] mx-auto mb-6">
            Education Intervention
          </h3>
          

          {/* Education intrvention*/}
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-10 mb-16">
            <div className="flex-1  text-left">
             
              <p className="font-roboto font-normal text-[20px] text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
               
              Our team is working diligently behind the scenes to bridge gaps in educational training by intentionally integrating character capacity-building into our educational intervention initiatives. In 2016, we reached over 400 secondary school students across Northern Nigeria, imparting essential core values such as responsibility, Honesty, Truth, patriotism,  charisma, respect, and other vital life virtues. These lessons enriched traditional school training by fostering well-rounded character development. Beyond classroom teachings, we introduced Character Clubs, published character-training magazines for schools, and established mentoring schemes to ensure students internalized these values


              </p>

              
             
            </div>

            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>

            <div className="flex-1">
              <Image
                src={education}
                alt="Maternal and Child Care"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-10 mb-16">
            <div className="flex-1 text-left">
             
              <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
               
              In 2018, as part of our ongoing efforts to support vulnerable children, our team conducted an intervention for street children in Uyo, Akwa Ibom State, Nigeria. At least 30 children were successfully traced back to their families, enrolled in schools on scholarships, and provided with the necessary support to complete their basic education. We remain committed to reaching underserved communities, enhancing education access for young children, and closing the gap in character development, which is fundamental in combating character dearth, an essential requirement for a thriving and prosperous society.
              </p>
              
             
            </div>
            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>
            <div className="flex-1">
              <Image
                src={Education}
                alt="Adolescent and Young Persons Care"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
          </div>

         
        </div>
      </section>

        {/* Render HeroSection */}
        <HeroSection />

      {/* Render Footer */}
      <Footer />
    </>
  );
};

export default Health;