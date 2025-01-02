

import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is applied
import Image from 'next/image'; // Import the Image component
import heroBackground from '../app/public/btsheroimg.png'; // Replace with your actual path
import aboutBtsImage from '../app/public/whitehero2.jpg'; // Replace with the image path for the About BTS section
import Footer from '../app/components/Footer';
import image1 from '../app/public/btsannouce.jpeg';
import Head from 'next/head'; // Import the Head component
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon
import BtsNavbar from '@/app/components/BtsNavbar';

// Import team member images
import member1 from '../app/public/member1.png';
import member2 from '../app/public/member2.png';
import member3 from '../app/public/member3.png';
import member4 from '../app/public/member4.png';

const Bts = () => {
  const teamMembers = [
    { name: 'xxxxxxxxx', role: '****', image: member1 },
    { name: 'xxxxxxxxx', role: '****', image: member2 },
    { name: 'xxxxxxxxx', role: '****', image: member3 },
    { name: 'xxxxxxxxx', role: '****', image: member4 },
  ];
  return (
    <>
      {/* Add Favicon and Title */}
      <Head>
        <link rel="icon" href={favicon.src} type="image/x-icon" sizes="any" />
        <meta name="description" content="NGO, Charity, Support, Intervention programs, Nigeria, UK." />
        <title>Behind The Scene (BTS)</title>
      </Head>

      <div className="overflow-x-hidden">
        {/* Navbar */}
        <BtsNavbar />

        {/* Hero Section */}
        <div className="relative w-full h-[700px] flex flex-col justify-center items-center text-center">
          <Image
            src={heroBackground}
            alt="BTS Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="font-roboto font-normal text-[31px] text-white leading-[120%] mt-4">
              Behind The Scene (BTS)
            </h1>
            <p className="font-roboto font-medium text-[20px] text-white leading-[160%] mt-6 max-w-[700px]">
              &quot;At Carelife Character Foundation, our &apos;BTS Project&apos; celebrates unsung heroes behind success. We honor their dedication and empower them to mentor younger adults.&quot;
            </p>
          </div>
        </div>

        {/* Awards Section
        <div className="py-12">
          <h2 className="text-center text-xl font-bold mb-8">Awards and Recognitions</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center">
              <div className="text-4xl">🏆</div>
              <h3 className="font-semibold text-lg mt-4">NGO of the Year Award</h3>
              <p className="text-gray-600">Vienna, Austria</p>
              <p className="text-gray-500 text-sm">2010</p>
            </div>
            <div className="text-center">
              <div className="text-4xl">🏅</div>
              <h3 className="font-semibold text-lg mt-4">CSN Award</h3>
              <p className="text-gray-600">New Delhi, India</p>
              <p className="text-gray-500 text-sm">2014</p>
            </div>
            <div className="text-center">
              <div className="text-4xl">🎖️</div>
              <h3 className="font-semibold text-lg mt-4">Global Award</h3>
              <p className="text-gray-600">New York, USA</p>
              <p className="text-gray-500 text-sm">2018</p>
            </div>
            <div className="text-center">
              <div className="text-4xl">🥇</div>
              <h3 className="font-semibold text-lg mt-4">Best NGO Award</h3>
              <p className="text-gray-600">Berlin, Germany</p>
              <p className="text-gray-500 text-sm">2021</p>
            </div>
          </div>
        </div> */}

        {/* About BTS Section */}
        <div className="flex flex-col md:flex-row justify-between items-center sm:ml-[20px] mx-auto mt-12 md:w-[1322px]">
          <div className="w-full md:w-1/2 px-4 md:px-0">
            <h2 className="font-roboto font-bold text-[20px] text-[#003871] leading-[120%] sm:text-left text-center">
              About BTS
            </h2>
            <p className="font-roboto text-[16px] text-[#1D2130] sm:text-left text-left mt-6">
            The BTS Project recognizes the unsung heroes who, although not always visible, form the backbone of celebrated brands and initiatives. These behind-the-scenes contributors drive projects forward, ensuring their success and sustainability while often going unrecognized. The project is aimed at beaming the spotlight on these rare personalities, dedicated to highlighting their vital roles, emphasizing their contributions to organizational and community development, and celebrating their efforts in shaping success stories.
            </p>

            <p className="font-roboto text-[16px] bg-[#DDF3FF] text-[#1D2130] sm:text-left text-left mt-6">
            By spotlighting these individuals, the BTS Project will boost morale, inspire confidence, while enhancing organizational and brand visibility. It also encourages skills development, fosters mentorship, and promotes networking opportunities, enabling professional growth for these key players. The initiative also redefines success metrics by shifting the focus from outcomes to processes and the diverse skill sets that underpin them, fostering a culture of appreciation and acknowledgment of the BTS person.
            </p>

            <p className="font-roboto text-[16px] text-[#1D2130] sm:text-left text-left mt-6">
  Our search for the BTS persons will identify individuals from different sectors of the economy from various sectors, including governance, charities, entertainment, SMEs, education, CSOs, MDAs, and community volunteer services. Identified individuals will be selected through public nominations and recommendations, subject to our internal reviews and public voting. Recognitions will be through routine social media features, culminating in the annual &ldquo;BTS Face of the Year&rdquo; awards and induction into the prestigious BTS Hall of Fame. This initiative will drive youth empowerment, workforce development, and mentorship, cultivating a culture of excellence and recognition for behind-the-scenes contributors.
</p>


            <p className="font-roboto font-bold  text-[16px] text-[#003871] sm:text-left text-left mt-6">
            JOIN US IN THE SEARCH TODAY 
            </p>


          </div>
          <div className="w-full md:w-1/2 flex justify-end mt-8 md:mt-0">
            <Image
              src={aboutBtsImage}
              alt="About BTS"
              width={663}
              height={452}
              className="object-cover w-full md:w-auto"
            />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-16 bg-[#DDF3FF] mt-[40px]">
          <div className="text-center mb-10">
            <h3 className="text-sm font-bold font-roboto text-[32px] tracking-wide text-[#1D2130] uppercase">
              How It Works
            </h3>
            <p className="font-roboto text-[16px] text-[#1D2130] leading-[160%] sm:text-center text-left mt-6">
              This will initially thrive through our social media handles, by identifying the celebrating the BTS people known as the BTS FACE OF THE MONTH campaign. These activities are aimed at driving traffic to our website as these posts will be promoted and people will engage with the posts based on their stories, and at the end of it, the face of the week will be selected and kept on the website gallery folder - THE BTS HALL OF FAME
            </p>
            <p className="font-roboto text-[16px] text-[#1D2130] leading-[160%] sm:text-center text-left mt-6">
              We would then progress to inviting organisations and teams to nominate outstanding individuals who contribute significantly behind the scenes to the existence and sustenance of brands.
              Through our BTS Project, we will share their stories, achievements, and the impact they make. By bringing these stories to light, we hope to celebrate their efforts and inspire young ones, carefully identify similar interests and create room for hands-on mentoring fostered by the relationship of CCF with the brand.
            </p>
          </div>
        </div>

        {/* Team Section */}
              <div className="py-12 mt-[-10px]">
                <h3 className="text-sm font-bold font-roboto font-[30px] mb-5 tracking-wide text-[#1D2130] uppercase text-center">
                THE BTS HALL OF FAME
                </h3>
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full"
                      />
                      <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600 mt-2">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>

       {/* Contribution Section */}
<div className="relative w-full h-[583px] mb-[-50px] flex flex-col justify-center items-center text-center mt-16">
  <Image
    src={image1}
    alt="Background Image"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    priority
  />
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  <div className="relative z-10 text-center mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
    <div className="w-full sm:w-[870.35px] h-full bg-transparent flex flex-col justify-center items-center text-white mx-auto">
      <h1 className="text-[18px] font-roboto leading-[1.5] text-[#FFFFFF] font-bold sm:text-[25px] md:text-[45px] sm:leading-[1.3] font-semibold mt-8 mb-6 sm:mb-10">
        Do you know a Behind The Scene Worker? Let&apos;s bring them to the Spotlight.
      </h1>

      {/* Added text and arrow animation */}
      <div className="mb-6">
        <p className="text-[#003871] font-semibold text-[16px] font-roboto">Click here to</p>
        <div className="mt-2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-white mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <a
        href="mailto:info@carelifefoundation.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[210px] bg-[#FFFFFF] font-roboto font-medium text-[16px] h-[55px] w-[130px] text-[#1D2130] mt-[-8px] rounded-[46px] hover:bg-[#003871] hover:text-white flex justify-center items-center text-center"
      >
        NOMINATE/RECOMMEND
      </a>
    </div>
  </div>
</div>


        {/* Footer */}
        <div className="mt-8">
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

export default Bts;





