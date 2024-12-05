import Image from "next/image"; // Importing the Image component
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Other social media icons
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import { FaXTwitter } from "react-icons/fa6"; // New X (Twitter) icon
import Log from "../public/carelifelogo2.jpg"; // Import the logo image correctly

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
              <a
                href="https://www.x.com/teamcarelife"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-white text-xl cursor-pointer hover:text-[#1DA1F2]" />
              </a>
              <a
                href="https://www.facebook.com/TeamCarelife/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white text-xl cursor-pointer hover:text-[#3b5998]" />
              </a>
              <a
                href="https://www.instagram.com/carelifefoundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-xl cursor-pointer hover:text-[#E4405F]" />
              </a>
              <a
                href="https://linkedin.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white text-xl cursor-pointer hover:text-[#0e76a8]" />
              </a>
              <a
                href="https://wa.me/+2349122180058"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white text-xl cursor-pointer hover:text-[#25D366]" />
              </a>
            </div>
            <div className="mt-2">
              <a href="mailto:info@carelifefoundation.com" className="block text-xl text-[#FFFFFF] transition duration-300">
                info@carelifefoundation.com
              </a>
              <a href="mailto:bts@carelifefoundation.com" className="block text-xl text-[#FFFFFF] transition duration-300">
                bts@carelifefoundation.com
              </a>
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
                  <a href="/about" className="text-white hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/bts" className="text-white hover:underline">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/whatwedo" className="text-white hover:underline">
                    What we do
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white hover:underline">
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
                  <a href="/intervention" className="text-white hover:underline">
                    Projects
                  </a>
                </li>
                {/* <li>
                  <a href="/events" className="text-white hover:underline">
                    Events
                  </a>
                </li> */}
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

