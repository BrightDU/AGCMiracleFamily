'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Import images for testimonials
import testimonialImage1 from '../public/testimonial1.jpg'; // Adjust path as needed
import testimonialImage2 from '../public/testimonial2.jpg'; // Adjust path as needed
import testimonialImage3 from '../public/member1.png';



const testimonials = [
  {
    image: testimonialImage1,
    quote:
      "I knew my EDD was near and I was due, but I was so uncertain and unsure of how I would be able to afford my delivery items or pay for my delivery bills. From nowhere, you appeared and took off the burdens off my shoulders, you brought hope. It is a sign of good things.",
    name: "Mrs. Victoria Ebong",
    title: "CEO",
  },
  {
    image: testimonialImage2,
    quote:
      "This is beyond an intervention; it’s a blessing. Your emergence surprisingly even induced labour...",
    name: "Nurse Emma",
    title: "Founder & Chief Encouragement Officer",
  },
  {
    image:  testimonialImage3,
    quote:
      "A transformative moment in my life was receiving a scholarship for the Digital Empowerment Hub (DEH) training from the CareLife Team. The cohort training, mentorship experiences, and newfound access to numerous job opportunities were beyond my expectations. It has been a complete and life-changing experience",
    name: "",
    title: "",
  },
];

const Testimonials = () => {
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
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const section = document.getElementById('testimonials-section');
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
      id="testimonials-section"
      className={`py-16 bg-[#FFFFFF] ${isInView ? 'animate-fadeIn' : ''}`}
    >
      <div className="container mx-auto px-4">
        {/* Testimonial Title */}
        <h3
          className="text-[16px] font-bold text-[#1D2130] mb-6 text-center"
          style={{
            fontFamily: "Roboto",
            lineHeight: "19px",
          }}
        >
          Testimonials
        </h3>

        {/* Heading */}
        <h2
          className="text-[24px] md:text-[32px] font-normal text-[#6A6969] mb-12 text-center"
          style={{
            fontFamily: "Roboto",
            lineHeight: "120%",
            fontWeight: "1300",
          }}
        >
          We are creating a place where every child can thrive.
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col"
              style={{
                maxWidth: "365px",
                margin: "auto",
              }}
            >
              {/* Circle Image */}
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full object-cover"
                  width={60} // Adjusted width
                  height={60} // Adjusted height
                />
                <div className="ml-4">
                  {/* Name */}
                  <h3
                    className="text-[18px] md:text-[20px] font-bold text-[#1D2130] mb-1"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    {testimonial.name}
                  </h3>
                  {/* Title */}
                  <p
                    className="text-[12px] md:text-[14px] text-[#1D2130]"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "400",
                      textAlign: "left",
                    }}
                  >
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p
                className="text-[14px] text-[#525560]"
                style={{
                  fontFamily: "Roboto",
                  lineHeight: "160%",
                  textAlign: "left",
                }}
              >
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;










