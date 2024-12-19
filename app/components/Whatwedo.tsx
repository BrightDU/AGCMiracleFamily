'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    if (target) {
      observer.observe(target); // Safely observe only if target exists
    }

    return () => {
      if (target) {
        observer.unobserve(target); // Safely unobserve only if target exists
      }
    };
  }, []);

  const cardData = [
    {
      id: 1,
      image: cardImage1,
      title: 'Maternal and Child Care',
      text: 'Our health programs focus on providing essential prenatal and postnatal care, PMTCT, immunization, and neonatal support, ensuring the well-being of mothers and their infants.',
    },
    {
      id: 2,
      image: cardImage2,
      title: 'Adolescent Care',
      text: 'We address adolescent health issues, including mental health, sexual health, and general wellness, ensuring comprehensive care for young individuals.',
    },
    {
      id: 3,
      image: cardImage3,
      title: 'Life Skill',
      text: 'Our programs aim to build confidence and self-sufficiency for our target population, equipping them with the skills necessary to thrive.',
    },
  ];

  return (
    <section
      id="whatwedo"
      className={`relative py-12 px-6 sm:px-12 md:px-24 lg:px-48 mt-[-100px]  sm:mt-auto min-h-screen bg-white flex justify-center items-center transition-all duration-700 ${
        isInView ? 'animate-floating' : ''
      }`}
    >
      <div className="max-w-7xl w-full">
        <h3 className="font-roboto text-center font-bold text-sm sm:text-base tracking-[2px] text-[#1D2130] mx-auto mb-6">
          What We Do
        </h3>
        
        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-left mb-3">
        At Carelife Foundation, our intervention and life skills projects are designed to help early lives transition into adulthood with a positive outlook. These programs are evidence-based, informed by in-depth research conducted by our team to identify real needs and develop the most effective strategies to address them.

        </p>
        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-left mb-6">
        We employ a bottom-up approach, engaging the family and immediate community as key stakeholders and decision-makers in identifying problems interfering with a child&apos;s proper growth and development and crafting solutions to address these needs. This inclusive strategy ensures that our interventions are practical, relevant, and family-driven.

        </p>
       
        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-left mb-6">
  Our work begins at the foundation of life, with our footprint at every critical development phase—from pregnancy and childbirth to childhood, adolescence, and young adulthood. By supporting growth and equipping young people with essential skills, we aim to foster holistic development and prepare them for a productive, positive future.
</p>
<p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mx-auto text-left sm:text-left mb-3">
  Our charity&apos;s social impacts are research-driven and focus on reaching underserved populations, particularly those in slums and remote communities. These efforts address key thematic areas such as Maternal and Child Health, Safe Delivery Services, Nutrition and Early Childhood (Neuro)development, Maternal Literacy, Education, Advocacy, Adolescent Sexual and Reproductive Health (ASRH), Life Skills Development, and Mentorship Programs. Additionally, our work extends to community development projects tailored to meet pressing needs that enhance child care and overall well-being.
</p>


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
                <div className="mt-auto text-center"></div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Whatwedo;









