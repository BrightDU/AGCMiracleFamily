'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import missionImg from '../public/abtimage.png'; // Ensure the path to the image is correct

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`relative py-12 px-6 sm:px-12 md:px-24 lg:px-48 min-h-screen bg-white flex justify-center items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      {/* Container for content */}
      <div className="max-w-7xl w-full">
        {/* Subtitle */}
        <h3 className="font-roboto text-center font-bold text-sm sm:text-base tracking-[2px] text-[#1D2130] mx-auto mb-6">
          Get to Know Us
        </h3>

        {/* Title */}
        <h2 className="font-roboto font-bold text-xl sm:text-2xl md:text-[32px] leading-tight text-[#6A6969] mx-auto text-center mb-6">
          Our Comprehensive Support for Every Stage of Growth
        </h2>

        {/* Text Content */}
        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-center mb-6">
          At Carelife Foundation, we are dedicated to providing comprehensive support from the very beginning of life. Our programs are designed to nurture every child, starting from conception through infancy, and guide them through the pivotal transition from childhood to adulthood; ensuring each child enters adulthood with a sense of hope and positivity for the future.
        </p>

        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-center mb-6">
          Our commitment to Maternal and Child health is fundamental to our mission. By empowering every expectant mother and child with the resources and support they need, we lay the foundation for a healthier generation. Our programs are crosscutting, targeting beneficiaries mainly in the slums.
        </p>

        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-center mb-6">
          We tailor our interventions based on evidence-driven research and comprehensive needs assessments, focusing on key areas such as health, nutrition, education, child rights, gender equality, and life skills. By addressing these fundamental aspects, we aim to help each child fully develop their potential before making the critical transition into adulthood.
        </p>

        {/* Image Section */}
        <div className="relative w-full max-w-[1200px] h-auto mt-12 mx-auto">
          <Image
            src={missionImg}
            alt="Relevant Image"
            layout="responsive"
            width={1200}
            height={556}
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;











