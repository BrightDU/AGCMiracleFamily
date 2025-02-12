'use client';
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterImage from "../public/newfooterlogo.png"; // Update the path as needed
import Link from 'next/link';
import Modal from './Modal';
import { useState } from 'react'; // Importing useState

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <footer className="bg-[#003771] font-roboto text-white py-8">
      {/* Footer Container */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo, Short Description, Social Media */}
        <div className="mt-[-80px] ml-[-40px] sm:ml-auto">
          {/* Logo */}
          <Image
            src={FooterImage}
            alt="Carelife Logo"
            width={200}
            height={80}
            className="object-contain mb-4"
          />

          {/* Short Description */}
          <p className="text-sm ml-10 leading-6 mt-[-100px]">
            Carelife Character Foundation is a registered Non-profit organisation incorporated in 2016.
          </p>
          {/* Social Media Links */}
          <p className="text-sm font-roboto ml-[37px] font-bold leading-6 mt-[25px]">
            Follow Us on Our Social Channels
          </p>
          <div className="flex ml-[37px] space-x-4">
            <Link
              href="https://www.x.com/teamcarelife"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter className="text-white text-xl hover:text-[#1DA1F2]" />
            </Link>
            <Link
              href="https://www.facebook.com/TeamCarelife/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white text-xl hover:text-[#3b5998]" />
            </Link>
            <Link
              href="https://www.instagram.com/carelifefoundation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white text-xl hover:text-[#E4405F]" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/104742373/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white text-xl hover:text-[#0e76a8]" />
            </Link>
            <Link
              href="https://wa.me/+2349122180058"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-white text-xl hover:text-[#25D366]" />
            </Link>
          </div>
        </div>

        {/* Column 2: Contact Information and Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-4">
            Phone: <strong>+2349122180058</strong>
          </p>
          <p className="text-sm ml-[43px] mt-[-14px]">
            <strong> +44-07724388010</strong>
          </p>
          <p className="text-sm mb-4">
            For charity-related activities, email us at : <br />
            <Link
              href="mailto:info@carelifefoundation.com"
              className="hover:underline"
            >
              info@carelifefoundation.com
            </Link>
          </p>
          <p className="text-sm mb-6">
            For the BTS project please email us at: <br />
            <Link
              href="mailto:bts@carelifefoundation.com"
              className="hover:underline"
            >
              bts@carelifefoundation.com
            </Link>
          </p>
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <p className="text-sm leading-6 mt-2">
            HQ - 222 Ekpri Nsukara Estate, Uyo, Nigeria; <br />
            Foreign Mission - 36 Poundway, OXFORD, ENGLAND, OX4 3XX.
          </p>
        </div>

        {/* Column 3: Quick Links and More */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h4 className="text-lg font-semibold mb-4">Home</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/bts" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/intervention" className="hover:underline">
                  What We Do
                </Link>
              </li>
              {/* Contact Link */}
              <li>
                <Link
                  href="https://docs.google.com/forms/d/1ONaLrIKrSF0HZP4fsXOQd_7rOCsTNpmT0fvB7bY9TPg/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative py-2 group inline-block text-[#FFFFFF] hover:underline"
                >
                  Volunteer Or Partner With Us
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#003871] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleOpenModal}
                  className="text-white hover:underline"
                >
                  Donate
                </button>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
              </li>

              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center border-t border-gray-600 mt-5 pt-4">
        <a
          href="https://www.crystaledtech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative py-2 group inline-block text-[#FFFFFF]"
        >
          Developed by Crystal TalentPool
        </a>
      </div>
    </footer>
  );
};

export default Footer;




