import Image from "next/image"; // Importing the Image component
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Importing social media icons
import Log from "../public/carelife-logo.jpg"; // Import the logo image correctly

const Footer = () => {
  return (
    <footer className="bg-[#003771] font-roboto text-white py-8 text-center mx-auto mt-auto mb-0">
      {/* Outer Footer Container */}
      <div className="w-full flex justify-center mt-[60px] items-start">
        {/* Inner Footer Container */}
        <div className="w-[1000px] flex flex-col sm:flex-row sm:justify-between items-start">
          {/* Logo and Company */}
          <div className="flex items-center mb-4 sm:mb-0 sm:ml-[40px]">
            <Image
              src={Log} // Correct usage of the Image component
              alt="Company Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Left Section */}
          <div className="w-full sm:w-[315px] sm:mr-[145px] flex flex-col text-left mb-6 sm:mb-0">
            {/* Text Section */}
            <div className="text-sm text-[12px] leading-[1.6] mb-6 flex flex-col">
              <p>Carelife Character Foundation is a registered Non-profit organisation incorporated in 2016.</p>
              <p>Registered Charity in Nigeria (CAC/IT/NO: 87778)</p>
              <p>HQ - 222 Ekpri Nsukara Estate, Uyo, Nigeria;</p>
              <p>Foreign Mission - 36 Poundway, OXFORD, ENGLAND, OX4 3XX.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-row flex-wrap space-x-3 mb-2">
              <FaTwitter className="text-white text-xl cursor-pointer hover:text-[#1DA1F2]" />
              <FaFacebookF className="text-white text-xl cursor-pointer hover:text-[#3b5998]" />
              <FaInstagram className="text-white text-xl cursor-pointer hover:text-[#E4405F]" />
              <FaLinkedinIn className="text-white text-xl cursor-pointer hover:text-[#0e76a8]" />
            </div>

            {/* Follow Us Text */}
            <p className="text-sm font-roboto font-semibold mt-4">Follow us on our social channels</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-row space-x-12 sm:mr-[200px] text-left text-sm">
            {/* First Column */}
            <div>
              <h4 className="font-bold text-[16px] mb-4">Home</h4>
              <ul className="space-y-6 text-[14px] leading-[1.6]">
                <li>
                  <a href="/about-us" className="text-white hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/our-team" className="text-white hover:underline">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/what-we-do" className="text-white hover:underline">
                    What we do
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="text-white hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Second Column */}
            <div>
              <h4 className="font-bold text-[16px] mb-4">More</h4>
              <ul className="space-y-6 text-[14px] leading-[1.6]">
                <li>
                  <a href="/projects" className="text-white hover:underline">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/events" className="text-white hover:underline">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/donate" className="text-white hover:underline">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
