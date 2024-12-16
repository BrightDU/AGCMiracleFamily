import 'tailwindcss/tailwind.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'; // Social media icons
import { TbBrandX } from 'react-icons/tb'; // X (formerly Twitter) icon
import { motion } from 'framer-motion'; // Import motion from framer-motion

import Footer from '../app/components/Footer';
import Navbar from '../app/components/Navbar';

const Contact = () => {
  return (
    <div className="font-roboto mt-[100px]">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h1
          className="font-roboto font-bold text-[16px] text-center mb-10 tracking-[2px] text-[#1D2130]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h1>
        <motion.h1
          className="font-roboto font-bold text-[16px] text-center mb-10 tracking-[2px] text-[#1D2130]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We would love to hear from you
        </motion.h1>

        {/* Contact Section */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Left Side: Social Media and Email */}
          <motion.div
            className="w-full md:w-1/3 space-y-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Social Media Icons */}
            <div className="flex space-x-4 justify-center">
              <a href="https://www.x.com/teamcarelife" target="_blank" rel="noopener noreferrer">
                <TbBrandX className="text-[#003871] text-3xl transition duration-300" />
              </a>
              <a href="https://www.facebook.com/TeamCarelife/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-[#003871] text-3xl transition duration-300" />
              </a>
              <a href="https://www.instagram.com/carelifefoundation/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[#003871] text-3xl transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/104742373/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-[#003871] text-3xl transition duration-300" />
              </a>
              <a href="https://wa.me/+2349122180058" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-[#003871] text-3xl transition duration-300" />
              </a>
            </div>

            {/* Email Addresses */}
            <div className="w-full text-center mt-6">
              <p className="text-lg font-bold text-[#003871]">You can also contact us on:</p>
              <div className="mt-2">
                <a href="mailto:info@carelifefoundation.com" className="block text-xl text-[#003871] hover:text-[#005a5a] transition duration-300">
                  info@carelifefoundation.com
                </a>
                <a href="mailto:bts@carelifefoundation.com" className="block text-xl text-[#003871] hover:text-[#005a5a] transition duration-300">
                  bts@carelifefoundation.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="w-full md:w-2/3 mb-[30px] max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <form className="border-4 border-[#003871] p-6 space-y-6 rounded-xl">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-[#003871]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 mt-2 border-2 border-[#003871] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003871] hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-[#003871]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 mt-2 border-2 border-[#003871] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003871] hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-[#003871]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-3 mt-2 border-2 border-[#003871] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003871] hover:scale-105 transition-transform duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-[#003871] text-white font-semibold rounded-lg hover:bg-[#DDF3FF] hover:text-[#003871] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;

