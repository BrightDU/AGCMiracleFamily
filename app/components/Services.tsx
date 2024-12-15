'use client';

import Image from 'next/image'; // Import the Image component
import missionImg from '../public/Vector.png'; // Adjust path as needed
import Testimonials from './Testimonials'; // Import the Testimonials component

const Services = () => {
  return (
    <section id="services" className="relative py-20 px-6 md:px-12 lg:px-24 min-h-[80vh] lg:min-h-[140vh] bg-[#FFFFFF]">
  {/* Content */}
  <div className="relative z-20 container mx-auto text-black font-bold text-center">
    <h2 className="font-roboto font-extrabold text-[30px] md:text-[32px] leading-[40px] md:leading-[57.6px] text-[#6A6969] mt-[-30px] md:mt-[-60px]">
      Operationalizing Our Core Values
    </h2>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[29px] mt-8 justify-center mx-auto w-full max-w-[1140px]">
      {[
        {
          title: "Inclusivity",
          points: [
            "We are committed to making our programs",
            "accessible to all children and families, regardless of their background.",
          ]
        },
        {
          title: "Compassion",
          points: [
            "We approach every aspect of our work with",
            "empathy and understanding, striving to provide",
            "support and care that meets the emotional and",
            "physical needs of those we serve."
          ]
        },
        {
          title: "Resilience",
          points: [
            "We are dedicated to fostering strength and",
            "adaptability in the communities we serve,",
            "supporting individuals through challenges",
            "and promoting long-term growth and well-being."
          ]
        },
        {
          title: "Integrity",
          points: [
            "We uphold the highest ethical standards,",
            "maintaining transparency and accountability in all",
            "our operations."
          ]
        },
        {
          title: "Advocacy",
          points: [
            "We champion the rights of children and",
            "adolescents, ensuring their voices are heard and",
            "their needs are addressed through effective",
            "programs, policies, and community engagement."
          ]
        },
        {
          title: "Excellence",
          points: [
            "We are committed to delivering high-quality,",
            "impactful services and programs, continuously",
            "improving our practices and striving for excellence",
            "in all aspects of our work"
          ]
        },
      ].map((Corevalue, index) => (
        <div 
          key={index} 
          className="bg-[#E5E9EE] text-black p-[15px] rounded-[10px] w-full max-w-[330px] sm:max-w-[380px] h-auto mx-auto flex flex-col gap-[15px] justify-between pl-[20px] md:pl-[50px] relative transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {/* Icon at the top-left corner */}
          <div className="absolute top-[20px] md:top-[36px] mt-[-13px] ml-[-16px] left-[20px] md:left-[37px] bg-[#002771] w-[28px] h-[28px] flex justify-center items-center rounded-[4px]">
            <Image
              src={missionImg}
              alt="Icon"
              width={15}
              height={15}
              className="w-[20px] h-[20px] md:w-[15px] md:h-[15px]" // Increased size for mobile view
            />
          </div>

          <div className="w-full h-auto mb-[8px]">
            <h3 className="font-roboto font-bold text-[18px] md:text-[22px] leading-[25px] md:leading-[28.13px] mt-[40px] md:mt-[60px] ml-[-10px] md:ml-[-30px] text-left">
              {Corevalue.title}
            </h3>
            {Corevalue.points.map((point, idx) => (
              <p key={idx} className="font-roboto font-bold text-[12px] md:text-[13px] ml-[-10px] md:ml-[-30px] leading-[20px] md:leading-[25.6px] text-[#525560] text-left">
                {point}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>

    
  </div>
</section>

  );
};

export default Services;





























