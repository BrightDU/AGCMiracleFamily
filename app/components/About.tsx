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
      { threshold: 0.2 }
    );

    const currentRef = aboutRef.current; // ✅ Save it in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // ✅ Use the saved variable
      }
    };
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-16 px-6 sm:px-12 bg-white">
      {/* Title */}
      <h2 className="text-center text-sm sm:text-base font-semibold tracking-wide text-black mb-4">
        OUR VISION STATEMENT
      </h2>
      <h1 className="text-center text-2xl sm:text-4xl font-extrabold text-gray-900 mb-10">
        A CHURCH THAT&apos;S RELEVANT
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 text-left align-left md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          { title: 'ABOUT US', icon: <Handshake className="w-8 h-8" /> },
          { title: 'GET INVOLVED', icon: <RadioTower className="w-8 h-8" /> },
          { title: 'GIVING BACK', icon: <HandHeart className="w-8 h-8" /> },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-gray-50 px-[70px] py-[76px] text-left hover:shadow-[0px_10px_0px_0px_#003771] transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <div className="flex justify-left">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-800 text-white rounded-full">
                {item.icon}
              </div>
            </div>
            <h3 className="mt-4 text-[28px] font-bold text-black">{item.title}</h3>
            <p className="mt-2 text-black text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
