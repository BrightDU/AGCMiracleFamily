'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Skill1 from '../app/public/lifeskill.jpg';
import Skill2 from '../app/public/skill.jpg';

import Navbar from '../app/components/Navbar'; // Replace with the correct Navbar import path
import HeroSection from '../app/components/Hero2'; // Replace with the correct HeroSection import path
import Footer from '../app/components/Footer'; // Replace with the correct Footer import path
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon
import Head from 'next/head'; // Import the Head component

const Lifeskill = () => {
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
        <title>Life Skills</title>
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
            Life Skills
          </h3>
          

          {/* life skill*/}
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-10 mb-16">
            <div className="flex-1  text-left">
              <h3 className="font-roboto text-lg text-center  sm:text-left sm:text-xl font-bold text-[#003771] mb-4">
              CARELIFE CHARACTER FOUNDATION TRAINS YOUTHS IN SOUTHERN KADUNA ON DIGITAL SKILLS
              </h3>
              <p className="font-roboto font-normal text-[20px] text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
               
                In 2017, CareLife Character Foundation empowered 315 youths across Southern Kaduna, including Kafanchan, Zango Kataf, and Kwoi, with essential digital skills such as web design, graphic design, and online marketing. This initiative featured hands-on training sessions, and direct coaching, equipping participants to become resourceful and productive community contributors.


              </p>
             
            </div>

            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>

            <div className="flex-1">
              <Image
                src={Skill1}
                alt="Maternal and Child Care"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
          </div>

          {/* life skills */}
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-10 mb-16">
            <div className="flex-1 text-left">
             
              <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
               
                The positive feedback from the program highlighted the enthusiasm of young participants to embrace digital opportunities. Thanks to key partners like the Kaduna State Ministry of Education and Google Nigeria, the training was a resounding success, fostering innovation and empowerment in the region.
              </p>
              
             
            </div>
            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>
            <div className="flex-1">
              <Image
                src={Skill2}
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

export default Lifeskill;









