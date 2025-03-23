'use client';

import { useEffect, useState } from 'react';
import acg1 from '../public/agcimage/agc10.jpg';
import acg4 from '../public/agcimage/agc9.jpg';
import acg5 from '../public/agcimage/agc7.jpg';
import acg6 from '../public/agcimage/agc2.jpg';

const blogPosts = [
  {
    title: "WATCH AND LISTEN TO OUR SERMONS ",
    description:
      "       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "FOLLOW OUR SOCIAL MEDIA HANDLES",
  },
  {
    title: "WATCH AND ATTEND OUR MID WEEK TEACHINGS",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
  },
];

const backgroundImages = [acg1, acg4, acg5, acg6];

const Messages = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('blog-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="sermon"
      className={`py-5 w-full max-w-[1400px] mt-[60px] mx-auto bg-white px-2 sm:px-4 ${
        isInView ? 'animate-fadeIn' : ''
      }`}
    >
      <div className="w-full">
        <h3 className="text-[18px] font-bold text-[#1D2130] mb-6 text-center font-['Roboto']">
          WATCH AND LISTEN!
        </h3>

        <h2 className="text-[25px] md:text-[38px] font-bold text-[#000000] mb-12 text-center font-['Roboto']">
          GET ALL OUR MESSAGES<br /> AND PREACHING
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="relative text-white h-[350px] w-full sm:w-[60%] md:w-[85%] lg:w-[290px] mx-auto overflow-hidden shadow-lg group  transition-all duration-300"
              style={{
                backgroundImage: `url(${backgroundImages[index].src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40  p-5 flex flex-col justify-end">
                <h3 className="text-[20px] font-bold mb-2 font-['Roboto']">
                  {post.title}
                </h3>

                {index === 0 && (
                  <p className="text-sm mb-2 font-['Roboto']">
                    {post.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;
