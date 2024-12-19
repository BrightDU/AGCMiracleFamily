'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Adcocacy from '../app/public/advocacy.jpg';


import Navbar from '../app/components/Navbar'; // Replace with the correct Navbar import path
import HeroSection from '../app/components/Hero2'; // Replace with the correct HeroSection import path
import Footer from '../app/components/Footer'; // Replace with the correct Footer import path
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon
import Head from 'next/head'; // Import the Head component

const Advocacy = () => {
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
        <title>Advocacy</title>
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
            Advocacy
          </h3>
          

          {/* Advocacy*/}
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-10 mb-16">
            <div className="flex-1  text-left">
             
              <p className="font-roboto font-normal text-[20px] text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
               
              As part of our mission, our team actively engages in stakeholder advocacy to safeguard and empower the African child. These advocacy efforts play a crucial role in designing and implementing tailored programs that address the unique needs of children and young adults within their communities


              </p>

              <p className="font-roboto font-normal text-[20px] text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
               
              Our advocacy initiatives are far-reaching, spanning from UN agencies to local government bodies and non-governmental organizations, ensuring a collaborative environment where every child has the opportunity to thrive and access resources for a brighter future.
 
 
               </p>

               <p className="font-roboto font-normal text-[20px] text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
               
               We focus on critical areas such as child rights and protection, education, health, and nutrition, addressing sensitive issues to create a supportive ecosystem for their growth and development.
 
 
               </p>

              
             
            </div>

            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>

            <div className="flex-1">
              <Image
                src={Adcocacy}
                alt="Maternal and Child Care"
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

export default Advocacy;