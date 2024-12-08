import { motion } from 'framer-motion'; // Import motion for animation
import Navbar from '../app/components/Navbar'; // Adjust the import path if needed
import HeroSection from '../app/components/Hero2'; // Import the HeroSection or Hero2 component
import Footer from '../app/components/Footer'; // Import the HeroSection or Hero2 component

import 'tailwindcss/tailwind.css'; // Ensure this is in your global styles or _app.js
import Image from 'next/image'; // Next.js Image component
import missionImg from '../app/public/abtimage.png'; // Ensure the path to the image is correct

const Blog = () => {
  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal overflow */}
      {/* Navbar */}
      <Navbar />

      {/* Blog Container */}
      <div className="max-w-full mx-auto mt-[140px] p-4">
        {/* Blog Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-roboto font-bold text-[16px] tracking-[2px] text-[#1D2130]">
            Blog
          </h1>
        </motion.div>

        {/* Tabs Section */}
<motion.div
  className="flex justify-start sm:justify-center items-center gap-4 mb-12 overflow-x-auto w-full px-4"
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {["Education", "Food", "Medical", "Home", "Water", "Recent"].map(
    (tab, index) => (
      <button
        key={index}
        className="whitespace-nowrap bg-[#F6F6F6] font-roboto text-[16px] text-[#555555] px-4 py-2 rounded-full hover:bg-[#DDF3FF] transition"
      >
        {tab}
      </button>
    )
  )}
</motion.div>

        {/* Recent Blog Post Heading */}
        <motion.div
          className="flex justify-center items-center mx-auto mb-6"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-roboto font-normal text-[30px] text-[#6A6969] text-center">
            Recent Blog Post
          </h2>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full h-auto mt-12 mx-auto"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={missionImg}
            alt="Relevant Image"
            layout="responsive"
            width={700}
            height={552}
            className="rounded-lg"
          />
        </motion.div>

        {/* Text Section Below Image */}
        <motion.div
          className="text-center mt-4 font-roboto text-[16px] text-[#525560] leading-[160%]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="inline-block mr-4">
            By - <span className="underline">Esther Howard</span>
          </p>
          <p className="inline-block mx-4">12th Sept 2021</p>
          <p className="inline-block ml-4">10 min read</p>
        </motion.div>

        {/* Title Section */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-bold text-[16px] sm:text-[26px] text-[#1D2130] leading-[36px] sm:leading-[28px]">
            Back to the future: Quality education through respect, commitment and accountability.
          </h2>
        </motion.div>

        {/* Paragraph Section */}
        <motion.div
          className="mt-6 text-left sm:text-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="font-roboto text-[16px] text-[#525560] leading-[160%] max-w-full mx-auto sm:mx-4">
            At just 9 months old, severe malnutrition left Fatima too weak to
            stand. But with the determination and strength of her mum, she was
            able to get vital treatment and nutritious food from a Save the
            Children-supported health center. Five months on, she blossomed
            into a healthy baby - walking and playing with big sister, Fatun.
            With the right support, there are endless opportunities for kids
            like Fatima. A donation from people like you can help more children
            like her get the life-saving treatment they need. Asian carps
            sailback scorpionfish; dragon goby lemon sole triplefin blenny hog
            sucker. Smelt sleeper shovelnose sturgeon merluccid hake cow shark
            herring smelt trout-perch barbeled houndshark. Shell-ear Asian
            carps blackfish Port Jackson shark Atlantic saury. Sacramento
            blackfish pricklefish, Atlantic cod, “driftwood catfish chimaera
            ribbonfish, marblefish worm eel smelt mora gray reef shark
            scabbard fish.
          </p>
        </motion.div>

       

        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
















