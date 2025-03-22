'use client';

import { useEffect, useRef, useState } from 'react';
import { HandHeart, RadioTower, Handshake } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
    <section id="about" ref={aboutRef} className="py-16 px-6 sm:px-12 bg-white">
      {/* Title */}
      <h2 className="text-center text-sm sm:text-base font-semibold tracking-wide text-gray-800 mb-4">
        OUR VISION STATEMENT
      </h2>
      <h1 className="text-center text-2xl sm:text-4xl font-extrabold text-gray-900 mb-10">
        A CHURCH THAT'S RELEVANT
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          { title: 'ABOUT US', icon: <Handshake className="w-8 h-8" /> },
          { title: 'GET INVOLVED', icon: <RadioTower className="w-8 h-8" /> },
          { title: 'GIVING BACK', icon: <HandHeart className="w-8 h-8" /> },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-gray-50 p-6 text-center rounded-lg shadow-md transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <div className="flex justify-center">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-800 text-white rounded-full">
                {item.icon}
              </div>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-4 h-2 bg-blue-800 w-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
