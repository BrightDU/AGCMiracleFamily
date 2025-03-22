'use client';

import { useEffect, useState } from 'react';

const blogPosts = [
  {
    title: "WATCH AND LISTEN TO OUR SERMONS ",
    description:
      "Discover how our community initiatives are supporting expectant mothers with vital resources and emotional care.",
    author: "By Mathew Johson",
    date: "Tuesday, 12 May 2021",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description:
      "A touching story of how timely intervention brought hope, relief, and even induced labour for a mother in need.",
    author: "By Mathew Johson",
    date: "Friday, 18 June 2021",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description:
      "How a scholarship for a digital empowerment program completely changed a young person’s career path and life.",
    author: "By Mathew Johson",
    date: "Monday, 9 August 2021",
  },
  {
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description:
      "Creating a nurturing environment for children to thrive by empowering the parents and caregivers who raise them.",
    author: "By Mathew Johson",
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
      id="blog"
      className={`py-5 w-full max-w-[1400px] mt-[60px] sm:max-h-auto max-h-[500vh] mx-auto bg-white px-2 sm:px-4 ${isInView ? 'animate-fadeIn' : ''}`}
    >
      <div className="w-full">
        <h3 className="text-[16px] font-bold text-[#1D2130] mb-6 text-center font-['Roboto']">
          READ OUR BLOG
        </h3>

        <h2 className="text-[24px] md:text-[32px] font-bold text-[#000000] mb-12 text-center font-['Roboto']">
          SHARE, INSPIRE, INNOVATE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {blogPosts.map((post, index) => (
  <div
    key={index}
    className="bg-[#f5f1ec] px-7 pr-5 pt-2 pb-4 sm:min-h-[200px] h-[350px] w-full sm:w-[60%] md:w-[85%] lg:w-[290px] mx-auto transition-all duration-300 hover:shadow-[0px_6px_0px_0px_#003771] flex flex-col justify-center"
  >
    <div className="text-left">
      <h3 className="text-[23px] font-bold text-[#1D2130] mb-3 font-['Roboto']">
        {post.title}
      </h3>
      <p className="text-sm text-[#525560] mb-4 font-['Roboto']">
        {post.description}
      </p>
      <p className="text-[15px] text-[#000000] mt-[50px] font-semibold mb-1 font-['Roboto']">
        {post.author}
      </p>
      <p className="text-[15px] text-[#000000] font-semibold font-['Roboto']">
        {post.date}
      </p>
    </div>
  </div>
))}


        </div>
      </div>
    </section>
  );
};

export default BlogSection;
