'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import whatwedoimg from '../public/whatwedo.jpg'; // Main section image
import cardImage1 from '../public/card1.png'; // Replace with the actual path for the first card image
import cardImage2 from '../public/card2.png'; // Replace with the actual path for the second card image
import cardImage3 from '../public/card3.png'; // Replace with the actual path for the third card image

const Whatwedo = () => {
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver to trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Trigger animation when the section comes into view
          } else {
            setIsInView(false); // Reset when it's out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const target = document.getElementById('whatwedo');
    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  const cardData = [
    { id: 1, image: cardImage1, title: 'Maternal and Child Care', text: 'Our health programs focus on providing essential prenatal and postnatal care, PMTCT, immunization, and neonatal support, ensuring the well-being of mothers and their infants.' },
    { id: 2, image: cardImage2, title: 'Adolescent Care', text: 'We address adolescent health issues, including mental health, sexual health, and general wellness, ensuring comprehensive care for young individuals.' },
    { id: 3, image: cardImage3, title: 'Life Skill', text: 'Our programs aim to build confidence and self-sufficiency for our target population, equipping them with the skills necessary to thrive.' },
  ];

  return (
    <section
      id="whatwedo"
      className={`relative py-12 px-6 sm:px-12 md:px-24 lg:px-48 min-h-screen bg-white flex justify-center items-center transition-all duration-700 ${isInView ? 'animate-floating' : ''}`}
    >
      <div className="max-w-7xl w-full">
        <h3 className="font-roboto text-center font-bold text-sm sm:text-base tracking-[2px] text-[#1D2130] mx-auto mb-6">
          What We Do
        </h3>
        <h2 className="font-roboto font-bold text-xl sm:text-2xl md:text-[32px] leading-tight text-[#6A6969] mx-auto text-center mb-6">
          Pioneering Research for Social Impact
        </h2>

        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-center mb-3">
          Access a range of research papers and studies related to our work in maternal, child, and AYP. Reports: Read our annual
        </p>

        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-center mb-6">
          reports and project-specific documents to see our impact and progress.
        </p>

        <h2 className="font-roboto font-bold text-xl sm:text-2xl md:text-[16px] mt-[40px] leading-tight text-[#6A6969] mx-auto text-center mb-6">
          RECENT RESEARCH AND PUBLICATIONS
        </h2>

        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-center mb-3">
          Five months on, she blossomed into a healthy baby - walking and playing with big sister, Fatun. With the right support, there
        </p>

        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-center mb-6">
          are endless opportunities for kids like Fatima. A donation from people like you can help more children like her get the life-saving treatment they need
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 mb-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg h-full"
            >
              <div className="h-48">
                <Image
                  src={card.image}
                  alt={`Card ${card.id}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow bg-[#DDF3FF]">
                <h3 className="font-roboto font-bold text-[20px] text-center text-gray-800 mb-4">
                  {card.title}
                </h3>

                <p className="font-roboto font-normal text-[12px] text-sm text-gray-700 mb-6">
                  {card.text}
                </p>

                <div className="mt-auto text-center">
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-[1300px] h-auto mt-12 mx-auto">
          <Image
            src={whatwedoimg}
            alt="Relevant Image"
            layout="responsive"
            width={1300}
            height={556}
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;








