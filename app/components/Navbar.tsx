'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/carelife-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`bg-[#FFFFFF] text-#525560 font-roboto font-medium py-4 fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        animate ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'
      }`}
      ref={navContainerRef}
      style={{ fontSize: '16px', lineHeight: '18.75px' }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="hover:text-[#93e9be] transition-all duration-300">
            <Image src={logo} alt="Logo" width={143} height={40} className="object-contain" />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center mx-auto">
          {[
            { name: 'Home', link: '/' },
            { name: 'About', link: '/aboutuspage' },
            { name: 'What We Do', link: '#whatwedo' },
            { name: 'Blog', link: '/blog' },
            { name: 'Gallary', link: '#gallary' },
            { name: 'Contact', link: '#contact' },
          ].map(({ name, link }) => (
            <li key={name}>
              <Link
                href={link}
                className="relative py-2 group inline-block text-[#525560] transition-colors duration-300 hover:text-[#003871]"
              >
                {name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#003871] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Donate Button for Desktop */}
        <div className="hidden md:block">
          <Link
            href="/donate"
            className="flex justify-end items-center bg-[#003871] text-white w-[115px] h-[43px] rounded-[48px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[10px] text-[16px] leading-[18.75px] font-roboto font-medium"
          >
            <span className="w-[51px] h-[19px] text-right">Donate</span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden text-#003871 mr-7">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden absolute bg-white text-xl text-[#003871] right-0 top-6 w-full shadow-lg z-20 pt-4 overflow-y-auto">
          {[
            { name: 'Home', link: '/' },
            { name: 'About', link: '/aboutuspage' },
            { name: 'What We Do', link: '#whatwedo' },
            { name: 'Blog', link: '/blog' },
            { name: 'Gallary', link: '#gallary' },
                                            
            { name: 'Contact', link: '#contact' },
          ].map(({ name, link }) => (
            <li key={name}>
              <Link
                href={link}
                className="block px-4 py-2 font-bold hover:bg-[#003871] transition-all duration-300"
                onClick={closeMenu}
              >
                {name}
              </Link>
            </li>
          ))}
          {/* Donate Button in Mobile Menu */}
<li className="mt-4 flex justify-center">
  <Link
    href="/donate"
    className="bg-[#003871] text-white w-[115px] h-[43px] rounded-[48px] flex items-center justify-center text-[16px] leading-[18.75px] font-roboto font-medium"
    onClick={closeMenu}
  >
    Donate
  </Link>
</li>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;










