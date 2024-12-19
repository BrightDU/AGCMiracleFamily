'use client';
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterImage from "../public/carelife-logo3.png"; // Update the path as needed
import Link from 'next/link';
import Modal from './Modal';
import { useState } from 'react'; // Importing useState

import heroBg from '../public/privacy.jpg'; // Adjust the path to your background image

const PrivacyPolicy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
  return (
    <main>
      {/* Hero Section */}
      <section
        id="privacypolicy"
        className="relative py-12 px-6 sm:px-12 md:px-24 mt-[70px] lg:px-48 min-h-[300px] flex justify-center items-center transition-all duration-700"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full text-center py-8 px-4 rounded-lg shadow-md">
          <h1 className="font-roboto text-2xl sm:text-4xl font-bold text-white mb-4">
          Privacy Policy: V2.1, Jul 2024
          </h1>
          <p className="font-roboto text-sm sm:text-base text-white">
            We value your privacy and are committed to protecting your personal information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 px-6 sm:px-12 md:px-24 lg:px-48 bg-white">
        <div className="max-w-4xl mx-auto">


          {/* Section 1 */}
          <h3 className="text-xl font-semibold text-[#003771] mb-4">1. Introduction</h3>
          <p className="text-[#1D2130] leading-relaxed mb-6">
  At CareLife Character Foundation (&quot;CareLife,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we use various ways to contact anyone who may be interested in participating in intervention projects, and we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information.
</p>


          {/* Section 2 */}
          <h3 className="text-xl font-semibold text-[#003771] mb-4">2. Information We Collect</h3>
          <ul className="list-disc ml-6 text-[#1D2130] leading-relaxed mb-6">
            <li>
              <strong>2.1. Personal Information:</strong> Name, Contact details (email address, phone number, address), Date of birth, Gender
            </li>
            <li>
              <strong>2.2. Sensitive Information:</strong> Health-related data, where necessary for program participation
            </li>
            <li>
              <strong>2.3. Non-Personal Information:</strong> Browser type, device information, usage data, Cookies, and analytics data
            </li>
            <li>
              <strong>2.4. Volunteer Information:</strong> Skills, experience, and interests, Background check details, where applicable
            </li>
            <li>
              <strong>2.5. Donation Information:</strong> Payment details (processed securely via third-party payment gateways), Donation history
            </li>
          </ul>

          {/* Section 3 */}
          <h3 className="text-xl font-semibold text-[#003771] mb-4">3. How We Use Your Information</h3>
          <p className="text-[#1D2130] leading-relaxed mb-6">
            We use your information to: Provide services, communicate updates, process donations, conduct research, and ensure compliance with legal requirements.
          </p>

          {/* Section 4 */}
          <h3 className="text-xl font-semibold text-[#003771] mb-4">4. Sharing Your Information</h3>
          <p className="text-[#1D2130] leading-relaxed mb-6">
            We do not sell or rent your personal information. However, we may share it with service providers, regulatory bodies, or partner organizations with your consent.
          </p>

          {/* Sections 5 to 10 */}
          <h3 className="text-xl font-semibold text-[#003771] mb-4">5. Security of Your Information</h3>
          <p className="text-[#1D2130] leading-relaxed mb-6">
            We implement technical measures like secure servers, encryption, regular audits, and access controls to protect your data.
          </p>

          <h3 className="text-xl font-semibold text-[#003771] mb-4">6. Retention of Your Information</h3>
          <p className="text-[#1D2130] leading-relaxed mb-6">
            Personal data is retained only if necessary or as required by law.
          </p>

          <h3 className="text-xl font-semibold text-[#003771] mb-4">7. Your Rights</h3>
          <ul className="list-disc ml-6 text-[#1D2130] leading-relaxed mb-6">
            <li>Access: Request a copy of the data we hold about you</li>
            <li>Rectification: Request correction of inaccurate or incomplete data</li>
            <li>Deletion: Request deletion of your data (subject to legal obligations)</li>
            <li>Restriction: Request a limit on the processing of your data</li>
            <li>Objection: Object to data processing based on legitimate interests</li>
            <li>Data Portability: Request transfer of your data to another service provider</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#003771] mb-4">8. Cookies and Tracking</h3>
          <p className="text-[#1D2130] leading-relaxed mb-6">
            Our website uses cookies to enhance browsing and collect analytics. Manage preferences through your browser.
          </p>

          <h3 className="text-xl font-semibold text-[#003771] mb-4">9. Third-Party Links</h3>
          <p className="text-[#1D2130] leading-relaxed mb-6">
            We are not responsible for third-party sites linked on our website. Review their privacy policies.
          </p>

          <h3 className="text-xl font-semibold text-[#003771] mb-4">10. Updates to This Policy</h3>
          <p className="text-[#1D2130] leading-relaxed">
            We may update this Privacy Policy. Changes will be posted on our website with the effective date.
          </p>
        </div>
      </section>

      {/* Footer */}
     
      {/* Footer */}
      <footer className="bg-[#003771]  font-roboto text-white py-8">
      {/* Footer Container */}
      <div className="max-w-[1200px] mx-auto  px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo, Short Description, Social Media */}
        <div className="mt-[-10px] ml-[-38px] sm:ml-auto">
          {/* Logo */}
          <Image
            src={FooterImage}
            alt="Carelife Logo"
            width={200}
            height={50}
            className="object-contain mb-4"
            
          />
          
          {/* Short Description */}
          <p className="text-sm ml-10 leading-6 mt-[-10px]">
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
            Phone: 
            <strong>+2349122180058</strong>
           
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
                className="relative py-2 group inline-block text-[#FFFFFF] hover:underline  "
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
                className="relative py-2 group inline-block text-[#FFFFFF]   "
              >
                Developed by Crystal TalentPool
               
              </a>
            
      </div>
    </footer>
    </main>
  );
};

export default PrivacyPolicy;
















