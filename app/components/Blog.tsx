'use client';

import { useEffect, useState } from 'react';

const blogPosts = [
  {
    title: "Empowering Mothers Through Care",
    description:
      "Discover how our community initiatives are supporting expectant mothers with vital resources and emotional care.",
    author: "Mrs. Victoria Ebong",
    date: "Tuesday, 12 May 2021",
  },
  {
    title: "Labour Induced by Love",
    description:
      "A touching story of how timely intervention brought hope, relief, and even induced labour for a mother in need.",
    author: "Nurse Emma",
    date: "Friday, 18 June 2021",
  },
  {
    title: "Digital Skills Changing Lives",
    description:
      "How a scholarship for a digital empowerment program completely changed a young person’s career path and life.",
    author: "John Michaels",
    date: "Monday, 9 August 2021",
  },
  {
    title: "Raising the Next Generation",
    description:
      "Creating a nurturing environment for children to thrive by empowering the parents and caregivers who raise them.",
    author: "Sarah Olaniyi",
    date: "Thursday, 25 November 2021",
  },
];

const BlogSection = () => {
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
      id="blog-section"
      className={`py-16 bg-white ${isInView ? 'animate-fadeIn' : ''}`}
    >
      <div className="container mx-auto px-4">
        <h3 className="text-[16px] font-bold text-[#1D2130] mb-6 text-center font-['Roboto']">
          READ OUR BLOG 
        </h3>

        <h2 className="text-[24px] md:text-[32px] font-semibold text-[#6A6969] mb-12 text-center font-['Roboto']">
          SHARE, INSPIRE, INNOVATE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
           <div
           key={index}
           className="bg-[#f9f9f9] p-6 rounded-lg transition-all duration-300 hover:shadow-[0px_6px_0px_0px_#003771]"
         >
         
              <h3 className="text-xl font-bold text-[#1D2130] mb-2 font-['Roboto']">
                {post.title}
              </h3>
              <p className="text-sm text-[#525560] mb-4 font-['Roboto']">
                {post.description}
              </p>
              <p className="text-sm text-[#1D2130] font-medium mb-1 font-['Roboto']">
                {post.author}
              </p>
              <p className="text-xs text-[#888888] font-['Roboto']">
                {post.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
