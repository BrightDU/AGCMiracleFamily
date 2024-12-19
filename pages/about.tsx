import { useEffect, useRef, useState } from 'react';
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image';
import Navbar from '../app/components/Navbar'; // Adjust the path based on your folder structure
import Whatwedo from '../app/components/Whatwedo'; // Adjust the path to your Services component
import missionImg from '../app/public/aboutpageimg.jpg'; // Ensure the path to the image is correct
import 'tailwindcss/tailwind.css';
import HeroSection from '../app/components/Hero2';
import Footer from '../app/components/Footer';
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon

// Import team member images
import member1 from '../app/public/member1.png';
import member2 from '../app/public/member2.png';
import member3 from '../app/public/member3.png';
import member4 from '../app/public/member4.png';

import Head from 'next/head'; // Import the Head component

const teamMembers = [
  { name: 'Jerome Bell', role: 'Marketing Coordinator', image: member1 },
  { name: 'Leslie Alexander', role: 'Creative Director', image: member2 },
  { name: 'Kristin Watson', role: 'Project Manager', image: member3 },
  { name: 'Jacob Jones', role: 'UX Designer', image: member4 },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const refCurrent = aboutRef.current; // Save the current value of aboutRef
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
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
        <title>About Us</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className={`relative py-12 px-6 sm:px-12 md:px-24 lg:px-48 min-h-screen bg-white flex justify-center items-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-7xl mb-[-80px] sm:mb-[-380px] w-full">
          {/* Subtitle */}
          <h3 className="font-roboto text-center font-bold text-sm sm:text-base tracking-[2px] text-[#1D2130] mx-auto mb-6">
            About Us
          </h3>

          {/* Title */}
          <h2 className="font-roboto font-bold text-xl sm:text-2xl md:text-[32px] leading-tight text-[#6A6969] mx-auto text-center mb-6">
            Our Comprehensive Support for Every Stage of Growth
          </h2>

          {/* Text Content */}
          <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-center mb-6">
            At Carelife Foundation, we are dedicated to providing comprehensive support from the very beginning of life. Our programs are designed to nurture every child, starting from conception through infancy, and guide them through the pivotal transition from childhood to adulthood; ensuring each child enters adulthood with a sense of hope and positivity for the future.
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

      {/* Services Section */}
      <div className="mt-[10px] sm:mt-[200px]">
        <Whatwedo />
        {/* READ MORE BUTTON */}
        <Link href="/intervention">
          <button className="bg-[#003871] font-roboto font-medium text-[16px] h-[51px] w-[200px] text-white mt-4 sm:mt-2 rounded-md mx-auto block">
            Read More
          </button>
        </Link>
      </div>

      {/* Team Section */}
      <div className="py-12 mt-[-10px]">
        <h3 className="text-sm font-bold font-roboto font-[16px] tracking-wide text-[#1D2130] uppercase text-center">
          The Brain Behind CareLife
        </h3>
        <h2 className="text-[32px] font-roboto font-regular text-[#6A6969] mt-2 text-center">
          Meet The Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section and Footer */}
      <div className="mt-[-40px] sm:mt-[-100px]">
        <HeroSection />
        <Footer />
      </div>
    </>
  );
};

export default About;




