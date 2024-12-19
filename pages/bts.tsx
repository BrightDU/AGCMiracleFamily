import Navbar from '../app/components/Navbar'; // Adjust the import path if needed
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is applied
import Image from 'next/image'; // Import the Image component
import heroBackground from '../app/public/btsheroimg.png'; // Replace with your actual path
import aboutBtsImage from '../app/public/aboutBtsImage.jpg'; // Replace with the image path for the About BTS section
import Footer from '../app/components/Footer';
import image1 from '../app/public/hero2img.png';
import Head from 'next/head'; // Import the Head component
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon

const Bts = () => {
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
        <Navbar />

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

        {/* Awards Section */}
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
        </div>

        {/* About BTS Section */}
        <div className="flex flex-col md:flex-row justify-between items-center sm:ml-[20px] mx-auto mt-12 md:w-[1322px]">
          <div className="w-full md:w-1/2 px-4 md:px-0">
            <h2 className="font-roboto font-bold text-[20px] text-[#1d2130] leading-[120%] sm:text-left text-center">
              About BTS
            </h2>
            <p className="font-roboto text-[16px] text-[#1D2130] sm:text-left text-left mt-6">
              The BTS Project is for individuals who, although not always visible, are the bedrock of celebrated brands. These people work behind the scenes, often without recognition, yet play an essential role in driving projects forward and ensuring their success and sustainability.
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

        {/* Contribution Section */}
        <div className="relative w-full h-[433px] mb-[-50px] flex flex-col justify-center items-center text-center mt-16">
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
              <h1 className="text-[18px] font-roboto leading-[1.5] sm:text-[25px] md:text-[45px] sm:leading-[1.3] font-semibold mt-8 mb-6 sm:mb-10">
                Do you know a Behind The Scene Worker? Let&apos;s bring them to the Spotlight.
              </h1>
              <a
                href="mailto:info@carelifefoundation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[174px] bg-[#FFFFFF] font-roboto font-medium text-[16px] h-[51px] w-[130px] text-[#1D2130] mt-6 rounded-[46px] hover:bg-[#003871] hover:text-white flex justify-center items-center text-center"
              >
                RECOMMEND
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Bts;





