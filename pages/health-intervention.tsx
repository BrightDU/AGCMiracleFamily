'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import healtha from '../app/public/healtha.jpg';
import healthb from '../app/public/healthb.jpg';

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
        <title>Health Interventions</title>
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
            Health Interventions
          </h3>
          

          {/* life skill*/}
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-10 mb-16">
            <div className="flex-1  text-left">
              <h3 className="font-roboto text-lg text-center  sm:text-left sm:text-xl font-bold text-[#003771] mb-4">
              TEAMCARELIFE 1 Million Health Project @ 2020 - PROJECT SAVE LIVES IN CHIKUN
              </h3>
              <p className="font-roboto font-normal text-[20px] text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
               
              Our team swiftly took action through the 1 Million Health Project to address the urgent healthcare needs of residents in Chikun Local Government Area, Kaduna State, achieving remarkable results.


              </p>
             
            </div>

            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>

            <div className="flex-1">
              <Image
                src={healtha}
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
               
              52 Free Major and Minor Surgeries: Procedures included lumpectomy, mastectomy, appendectomy, hydrocelectomy, lipoma excision, herniorrhaphy, myomectomy, and more, performed by skilled surgeons.
401 Outpatients Treated: Comprehensive care was provided, including laboratory tests, medication, and a massive blood donation drive to support surgical patients.
Targeted Beneficiaries: Focused on underserved communities requiring immediate medical intervention.
This impactful outreach was made possible through partnerships with the Kaduna State Ministry of Health, National Blood Transfusion Services, NYSC, and generous contributions from community philanthropists.

Together, we transformed lives and delivered hope where it was needed most.
              </p>
              
             
            </div>
            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>
            <div className="flex-1">
              <Image
                src={healthb}
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









