'use client';
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import lo from '../public/agcimage/agclogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#003771] font-roboto text-white py-5">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-10 flex-wrap">
        
        {/* Left Section - Logo and Address */}
        <div className="flex-1 mt-8 min-w-[250px]">
          <div className="mb-3">
            <Link href="/" className="hover:text-[#93e9be] transition-all duration-300">
              <Image src={lo} alt="Logo" width={60} height={60} className="object-contain" />
            </Link>
          </div>

          <div className="leading-tight mb-4">
            <h1 className="text-[14px] md:text-[16px] font-bold uppercase">Assemblies of God</h1>
            <p className="text-[12px] md:text-[13px] font-medium">Nassarawa Road, Kaduna</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p className="text-sm leading-6">
              RR 1-4 Nassarawa/Junction Road Kaduna
            </p>
            <h5 className="text-lg font-semibold mb-2">Email</h5>
            <p className="text-sm leading-6">
              agcmiraclefamily@gmail.com
            </p>
          </div>
        </div>

        {/* Middle Section - Quick Links and Social Media */}
        <div className="flex-1 mt-8 min-w-[250px] md:mr-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/bts" className="hover:underline">Sermon</Link></li>
                <li><Link href="/intervention" className="hover:underline">Blog</Link></li>
                <li><Link href="/intervention" className="hover:underline">Live Service</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-base font-semibold mb-3">Follow Us on Social Channels</h4>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/Agcmiraclefamily" target="_blank" aria-label="Facebook">
                  <FaFacebookF className="text-white text-xl hover:text-[#3b5998]" />
                </Link>
                <Link href="https://www.instagram.com/agcmiraclefamily?igsh=OXA1cDdxMWpkZXd3" target="_blank" aria-label="Instagram">
                  <FaInstagram className="text-white text-xl hover:text-[#E4405F]" />
                </Link>
                <Link href="https://www.youtube.com/@agcmiraclefamily?si=Hdj9E-pv4pQvHNI_" target="_blank" aria-label="Youtube">
                  <FaYoutube className="text-white text-xl hover:text-[#0e76a8]" />
                </Link>
                <Link href="https://vm.tiktok.com/ZMBSJg66w/" target="_blank" aria-label="TikTok">
                  <FaTiktok className="text-white text-xl hover:text-[#0e76a8]" />
                </Link>
                <Link href="https://wa.me/+2348066401072" target="_blank" aria-label="WhatsApp">
                  <FaWhatsapp className="text-white text-xl hover:text-[#25D366]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Subscription */}
        <div className="flex-1 mt-8 min-w-[250px]">
          <h4 className="text-[20px] md:text-[29px] font-bold uppercase mb-4">
            Subscribe to Get All Latest Updates and News
          </h4>
          <div className="sm:w-full sm:max-w-[700px] w-[300px] bg-transparent border border-[#C0C0C0] rounded-[15px] flex items-center overflow-hidden">
            <input
              type="email"
              placeholder="Yourmail@gmail.com"
              className="flex-grow bg-transparent px-5 py-4 text-sm text-black placeholder:text-gray-500 focus:outline-none"
            />
            <button className="bg-white text-black font-medium text-sm px-6 h-[60px] sm:ml-auto ml-[-80px] rounded-[15px] hover:bg-gray-100 transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Text t */}
      <div className="text-center mt-10 pt-4 text-sm">
        <a
          href="https://www.crystaledtech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#93e9be] transition"
        >
          Developed by Crystal EdTech | Info-Tech Unit
        </a>
      </div>
    </footer>
  );
};


export default Footer;
