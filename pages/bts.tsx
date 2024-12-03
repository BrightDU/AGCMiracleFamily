import Navbar from '../app/components/Navbar'; // Adjust the import path if needed
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is applied
import Image from 'next/image'; // Import the Image component
import heroBackground from '../app/public/btsheroimg.png'; // Replace with your actual path
import aboutBtsImage from '../app/public/aboutBtsImage.jpg'; // Replace with the image path for the About BTS section
import Footer from '../app/components/Footer';

// Import team member images
import member1 from '../app/public/member1.jpg';
import member2 from '../app/public/member2.jpg';
import member3 from '../app/public/member3.jpg';
import member4 from '../app/public/member4.jpg';
import member5 from '../app/public/member5.jpg';
import member6 from '../app/public/member6.jpg';
import member7 from '../app/public/member7.jpg';
import member8 from '../app/public/member8.jpg';

const teamMembers = [
  { name: 'Jerome Bell', role: 'Marketing Coordinator', image: member1 },
  { name: 'Leslie Alexander', role: 'Creative Director', image: member2 },
  { name: 'Kristin Watson', role: 'Project Manager', image: member3 },
  { name: 'Jacob Jones', role: 'UX Designer', image: member4 },
  { name: 'Cody Fisher', role: 'Software Engineer', image: member5 },
  { name: 'Savannah Nguyen', role: 'Data Analyst', image: member6 },
  { name: 'Ralph Edwards', role: 'Finance Specialist', image: member7 },
  { name: 'Kathryn Murphy', role: 'Operations Lead', image: member8 },
];

const Bts = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[700px] flex flex-col justify-center items-center text-center">
        {/* Background Image */}
        <Image
          src={heroBackground}
          alt="BTS Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="font-roboto font-bold  text-[16px] text-white">
            ABOUT OUR BTS PROGRAM
          </h1>
          <h2 className="font-roboto font-normal text-[31px] text-white leading-[120%] mt-4">
            Behind The Scene (BTS)
          </h2>
          <p className="font-roboto font-medium text-[20px] text-white leading-[160%] mt-6 max-w-[700px]">
            "Not all heroes wear capes; some work quietly behind the scenes,
            shaping the world with their dedication and heart."
          </p>
        </div>
      </div>

      {/* Awards Section */}
      <div className="py-12">
        {/* Section Title */}
        <h2 className="text-center text-xl font-bold mb-8">Awards and Recognitions</h2>

        {/* Awards Content */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Award 1 */}
          <div className="text-center">
            <div className="text-4xl">🏆</div>
            <h3 className="font-semibold text-lg mt-4">NGO of the Year Award</h3>
            <p className="text-gray-600">Vienna, Austria</p>
            <p className="text-gray-500 text-sm">2010</p>
          </div>

          {/* Award 2 */}
          <div className="text-center">
            <div className="text-4xl">🏅</div>
            <h3 className="font-semibold text-lg mt-4">CSN Award</h3>
            <p className="text-gray-600">New Delhi, India</p>
            <p className="text-gray-500 text-sm">2014</p>
          </div>

          {/* Award 3 */}
          <div className="text-center">
            <div className="text-4xl">🎖️</div>
            <h3 className="font-semibold text-lg mt-4">Global Award</h3>
            <p className="text-gray-600">New York, USA</p>
            <p className="text-gray-500 text-sm">2018</p>
          </div>

          {/* Award 4 */}
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
          <h2 className="font-roboto font-bold text-[32px] text-[#1d2130] leading-[120%] sm:text-left text-center">
            About Bts
          </h2>
          <p className="font-roboto text-[16px] text-[#1D2130] sm:text-left text-left mt-6">
            Carelife Foundation is dedicated to creating a world where every child and adolescent has the opportunity to achieve their full growth potential. We provide comprehensive support through health, education, and personal development initiatives, fostering a nurturing environment that promotes growth and well-being.
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

      {/* Meet The Team Section */}
      <div className="py-16">
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold font-roboto font-[16px] tracking-wide text-[#1D2130] uppercase">
            The Brain Behind CareLife
          </h3>
          <h2 className="text-[32px] font-roboto font-regular text-[#6A6969] mt-2">Meet Our Awardees</h2>
          <div className="max-w-[1300px] mx-auto">
            <p className="font-roboto text-[16px] text-[#1D2130] leading-[160%] sm:text-center text-left mt-6">
              Carelife Foundation is dedicated to celebrating amazing individuals doing great things in their various endeavours. The BTS program is a brainchild of Care Life Foundation to identify and appreciate these individuals for their enormous works and contributions to society and humanity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Bts;




