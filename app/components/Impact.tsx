'use client';

import React, { useEffect, useRef, useState } from 'react';

const Impact = () => {
  const [visibleCounters, setVisibleCounters] = useState(false);
  const impactRef = useRef<HTMLDivElement | null>(null);

  const counters = [
    { value: 34000000, text: 'Donations Received', suffix: 'M+' },
    { value: 400, text: 'Volunteers', suffix: '+' },
    { value: 20, text: 'Care Homes', suffix: '+' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibleCounters(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => {
      if (impactRef.current) {
        observer.unobserve(impactRef.current);
      }
    };
  }, []);

  // Define types for Counter props
  interface CounterProps {
    value: number;
    suffix: string;
  }

  const Counter: React.FC<CounterProps> = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (visibleCounters) {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = Math.ceil(end / (duration / 20));

        const interval = setInterval(() => {
          start += increment;
          if (start > end) {
            start = end;
            clearInterval(interval);
          }
          setCount(start);
        }, 20);

        return () => clearInterval(interval);
      } else {
        setCount(0); // Reset the count when the section goes out of view
      }
    }, [visibleCounters, value]);

    return (
      <span className="text-[16px] sm:text-[20px] font-bold text-gray-800">
        {count.toLocaleString() + suffix}
      </span>
    );
  };

  return (
    <section
      id="impact"
      ref={impactRef}
      className="bg-[#DDF3FF] py-12 px-6 sm:px-12 md:px-24 lg:px-48"
    >
      <div className="text-center mb-8">
        <h2 className="font-roboto font-extrabold text-[25px] text-[#6A6969] mb-4">
          Our Impact
        </h2>
        <p className="font-roboto font-bold text-[16px] tracking-[2px] text-[#1D2130]">
          Together, we make a difference in millions of lives. Here&apos;s what we&apos;ve achieved.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-16">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div
              className="flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 
              bg-transparent rounded-full border-4 border-[#003771]"
            >
              <Counter value={counter.value} suffix={counter.suffix} />
            </div>
            <p className="text-center mt-4 font-roboto font-bold text-[16px] tracking-[2px] text-[#1D2130] text-sm sm:text-base">
              {counter.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;






