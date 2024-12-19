'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Maternal from '../app/public/maternal.jpg';
import Adolescent from '../app/public/adolesent.jpg';
import Life from '../app/public/lifeskill.jpg';
import Navbar from '../app/components/Navbar'; // Replace with the correct Navbar import path
import HeroSection from '../app/components/Hero2'; // Replace with the correct HeroSection import path
import Footer from '../app/components/Footer'; // Replace with the correct Footer import path
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon
import Head from 'next/head'; // Import the Head component

const Whatwedo = () => {
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
        <title>Intervention Programmes</title>
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
            What We Do
          </h3>
          <h2 className="font-roboto font-bold text-xl sm:text-2xl md:text-[32px] leading-tight text-[#6A6969] mx-auto text-center mb-6">
            Pioneering Research for Social Impact
          </h2>

          {/* Maternal and Child Care Section */}
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-10 mb-16">
            <div className="flex-1  text-left">
              <h3 className="font-roboto text-lg text-center  sm:text-left sm:text-xl font-bold text-[#003771] mb-4">
                Maternal and Child Care
              </h3>
              <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
                <span className="font-bold text-lg text-[#003771]">Health:</span>{' '}
                Our health programs focus on providing essential prenatal and postnatal care, PMTCT, immunisation, and neonatal support, ensuring the well-being of mothers and their infants.
              </p>
              <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
                <span className="font-bold text-lg text-[#003771]">Nutrition:</span>{' '}
                We offer nutritional support to mothers and children, to promote healthy growth and development from infancy through adolescence.
              </p>
              <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
                <span className="font-bold text-lg text-[#003771]">Education:</span>{' '}
                Our educational initiatives support early childhood education and provide resources to prepare children for a successful future.
              </p>
            </div>

            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>

            <div className="flex-1">
              <Image
                src={Maternal}
                alt="Maternal and Child Care"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
          </div>

          {/* Adolescent and Young Persons Care Section */}
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-10 mb-16">
            <div className="flex-1 text-left">
              <h3 className="font-roboto text-lg sm:text-xl font-bold text-[#003771] mb-4">
                Adolescent and Young Persons Care
              </h3>
              <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
                <span className="font-bold text-lg text-[#003771]">Health:</span>{' '}
                We address adolescent health issues, including mental health, sexual health, and general wellness, ensuring comprehensive care for young individuals.
              </p>
              <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
                <span className="font-bold text-lg text-[#003771]">Education:</span>{' '}
                Our programs provide educational support for out-of-school AYPs and offer opportunities for learning and personal development.
              </p>
              <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
                <span className="font-bold text-lg text-[#003771]">Empowerment:</span>{' '}
                We focus on building skills, confidence, and self-reliance among young people, to prepare them for a successful future.
              </p>
            </div>
            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>
            <div className="flex-1">
              <Image
                src={Adolescent}
                alt="Adolescent and Young Persons Care"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
          </div>

          {/* Life Skills */}
          <div className="flex flex-col md:flex-row justify-between sm:items-center items-start gap-10">
            <div className="flex-1 text-left">
              <h3 className="font-roboto text-lg text-center sm:text-left sm:text-xl font-bold text-[#003771] mb-4">
                Life Skills
              </h3>
              <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
                <span className="font-bold text-lg text-[#003771]">Empowerment:</span>{' '}
                Our programs aim to build confidence and self-sufficiency for our target population, equipping them with the skills necessary to thrive.
              </p>
            </div>
            <div className="hidden sm:block w-[2px] h-24 sm:h-40 bg-[#E5E5E5]"></div>
            <div className="flex-1">
              <Image
                src={Life}
                alt="Life Skills"
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

export default Whatwedo;









