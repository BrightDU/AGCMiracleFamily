

import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is applied
import Image from 'next/image'; // Import the Image component
 
import { useState, useEffect } from 'react';

import dthkidd from '../app/public/digitalteen.png'; //   digital empowerment for kid pic 
import second from '../app/public/digitalkid.png'; //  digital empowerment for kid pic 
import third from '../app/public/digitalten.png'; //  digital empowerment for kid pic 
import fourth from '../app/public/dthadult1.png'; //  digital empowerment for adult pic 
import fifth from '../app/public/adult.png'; //  digital empowerment for adult pic 
import sixth from '../app/public/dthadult2.png'; //  digital empowerment for adult pic 

import Footer from '../app/components/Footer';

import Head from 'next/head'; // Import the Head component
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon
import BtsNavbar from '@/app/components/DehNavbar';

// Import team member images

// Import images
import image1 from '../app/public/dehcrystalslide1.jpg'
import image2 from '../app/public/dehcrystalslide2.jpg'
import image3 from '../app/public/dehcrystalslide3.jpg'

import image4 from '../app/public/dehcrystalslide4.jpg'





const Deh = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]); // Add images.length as a dependency
  
  return (
    <>
      {/* Add Favicon and Title */}
      <Head>
        <link rel="icon" href={favicon.src} type="image/x-icon" sizes="any" />
        <meta name="description" content="NGO, Charity, Support, Intervention programs, Nigeria, UK." />
        <title>Digital Empowerment Hub(DEH)</title>
      </Head>

      <div className="overflow-x-hidden sm:w-full w-[110vh]">
        {/* Navbar */}
        <BtsNavbar />

         {/* Background Images */}
              <div className="absolute sm:w-auto sm:w-full w-[115vh] py-0 px-0 inset-0 transition-all duration-1000 ease-in-out">
                <Image
                  src={images[currentSlide]}
                  alt="Slideshow Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>

        <div className='pt-[50px] mt-[800px] sm:mt-[530px]'>
          <h1 className='text-[20px]  text-center font-bold mt-[90px]  text-[#003771] font-roboto  sm:text-[30px]'>Digital Empowerment Hub (DEH)</h1>
        </div>
        <p className="mt-4 font-roboto mb-[-140px] sm:text-center text-left  font-normal text-[20px] max-w-2xl mx-auto">
        This project has successfully trained and graduated over 2,000 trainees from various cohorts, all driven by a singular goal—achieving digital equity and fluency among talented young individuals with limited access to training and essential infrastructure. To expand our reach and ensure widespread impact across underserved communities and slums in Nigeria, we collaborate with leading digital hubs. Our activities include hands-on training, personalized mentorship sessions, and recommendations for organizational placement to maximize the relevance and application of acquired skills. We also regularly announce and offer scholarship opportunities to interested candidates while tracking progress based on our structured training curriculum.
        </p>




  {/* Image Cards Section */}
  <div className="mt-[310px] sm:w-full w-[115vh] sm:ml-auto ml-[20px] sm:mr-auto ml-[-10px] flex flex-col md:flex-row justify-center  items-center gap-8">
    
   

    {/* second image  Image */}
    <div className="w-full md:w-1/3 shadow-lg rounded-lg overflow-hidden">
      <Image src={second} alt="Kids Engaged in Digital Learning" className="w-full h-[700px] sm:h-60 object-cover" />
    </div>

     {/* Left Image */}
     <div className="w-full md:w-1/3 shadow-lg rounded-lg overflow-hidden">
      <Image src={dthkidd} alt="Kids Learning Tech" className="w-full h-[800px] sm:h-[300px] object-cover" />
    </div>
      

     {/* third image        */}
    <div className="w-full md:w-1/3 shadow-lg rounded-lg overflow-hidden">
      <Image src={third} alt="Kids Engaged in Digital Learning" className="w-full h-[600px] sm:h-60 object-cover" />
    </div>
  </div>
</div>
{/* Digital Empowerment for Kids Section */}
<div className="container mx-auto px-6 py-16 text-center sm:w-full w-[115vh] sm:mt-[-30px] sm:text-center mt-[150px]">
  <h2 className="text-3xl font-bold  text-[#003771] font-roboto  sm:text-4xl">Digital Empowerment for Kids and Teens</h2>
  <p className="mt-4 font-roboto  font-normal text-[20px] max-w-2xl mx-auto">
    In today&apos;s digital world, equipping children with the right technological skills is crucial. 
    Our program focuses on nurturing young minds, fostering creativity, and teaching essential 
    digital skills. Through interactive lessons, mentorship, and hands-on projects, we prepare 
    kids to thrive in the evolving tech landscape. This initiative ensures that no child is left 
    behind in the digital age.
  </p>







  {/* Image Cards Section */}
  <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8">
    
   

    {/* second image  Image */}
    <div className="w-full md:w-1/3 shadow-lg rounded-lg overflow-hidden">
      <Image src={fourth} alt="Kids Engaged in Digital Learning" className="w-full h-[1000px] sm:h-[400px] object-cover" />
    </div>

     {/* Left Image */}
     <div className="w-full md:w-1/3 shadow-lg rounded-lg overflow-hidden">
      <Image src={fifth} alt="Kids Learning Tech" className="w-full h-[1000px] sm:h-[300px] object-cover" />
    </div>
      

     {/* third image        */}
    <div className="w-full md:w-1/3 shadow-lg rounded-lg overflow-hidden">
      <Image src={sixth} alt="Kids Engaged in Digital Learning" className="w-full h-[1100px] sm:h-[400px] object-cover" />
    </div>
  </div>
</div>

{/* Digital Empowerment for Kids Section */}
<div className="container mx-auto px-6 py-16 text-center  sm:w-full w-[110vh] sm:mt-[-30px] mt-[-50px] sm:mb-auto sm:text-center">
  <h2 className="text-3xl text-[#003771] font-roboto font-bold  sm:text-4xl">Digital Empowerment for Youths and Middle-aged</h2>
  <p className="mt-4  font-roboto ont-normal text-[20px] max-w-2xl mx-auto">
  Digital Empowerment for Youths and Middle-Aged  

In today&apos;s fast-paced digital world, equipping youths and middle-aged individuals with essential digital skills is crucial for personal and professional growth. Digital empowerment fosters innovation,
 enhances career opportunities, and bridges the gap between technology and everyday life. 
 By providing access to digital tools, training, and resources, we enable individuals to adapt, 
 thrive, and contribute meaningfully to society. Whether it&apos;s coding, digital marketing, data analytics, 
 or entrepreneurship, digital literacy opens doors to endless possibilities, ensuring a more inclusive and progressive future for all.
  </p>


   

        
    
     

        

        

      


        {/* Footer */}
        <div className="mb-[-70px] text-left ml-[-30px]  w-[115vh] sm:w-[1268px]">
  <Footer />
</div>



      </div>
        <div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
        <span className="text-xs mt-2  font-bold text-[#FF0000]">Live Chat</span>
        <a
          href="https://wa.me/+2348032482515"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#003771] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.542 4.09 1.565 5.875L0 24l6.146-1.56A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.817a9.818 9.818 0 0 1-4.962-1.348L7.8 19.8l-2.015.513.531-1.953.019-.072A9.818 9.818 0 1 1 12 21.818zm4.374-5.986l-.633-.314c-.198-.099-.475-.185-.75.016-.375.287-.745.574-1.17.848a4.776 4.776 0 0 1-2.112.793c-1.798-.196-3.281-1.624-4.33-3.573-.465-.9-.65-1.811-.746-2.282-.008-.047-.006-.073-.004-.091l.01-.015c.036-.108.146-.175.29-.187l.202-.019.165-.014c.265-.023.61-.016.924.122.413.178.688.37 1.083.709.062.052.151.142.222.234.149.195.23.347.332.535.171.309.316.645.466.877.098.155.195.243.293.293.043.022.081.037.114.046.11.03.22.037.325-.036a5.656 5.656 0 0 0 1.07-.968c.076-.097.145-.187.223-.288.104-.136.26-.21.466-.134l.152.057.273.101c.313.116.632.235.936.338.116.041.29.133.444.265.308.26.372.56.457.782.134.352.206.698.272.997.13.586-.143 1.035-.633 1.167z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Deh;