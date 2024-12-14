'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import lo from '../public/carelife-logo.jpg'; // Ensure the path to your logo image is correct
import Modal from './Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileProgramsDropdownOpen, setMobileProgramsDropdownOpen] = useState(false);
  const [desktopProgramsDropdownOpen, setDesktopProgramsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setMobileProgramsDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileProgramsDropdownOpen(false);
    setDesktopProgramsDropdownOpen(false);
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

  const toggleDesktopProgramsDropdown = () => {
    setDesktopProgramsDropdownOpen((prev) => !prev);
  };

  const toggleMobileProgramsDropdown = () => {
    setMobileProgramsDropdownOpen((prev) => !prev);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav
        className={`bg-[#FFFFFF] text-[#525560] font-roboto font-medium py-4 fixed top-0 w-full z-50 transition-all duration-700 ease-out ${animate ? 'opacity-100' : 'opacity-0 translate-y-[-100%]'}`}
        ref={navContainerRef}
        style={{ fontSize: '16px', lineHeight: '18.75px' }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="hover:text-[#93e9be] transition-all duration-300">
              <Image src={lo} alt="Logo" width={143} height={40} className="object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6 items-center mx-auto">
            {[{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }].map(({ name, link }) => (
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

            {/* Programs Dropdown for Desktop */}
            <li className="relative">
              <button
                onClick={toggleDesktopProgramsDropdown}
                className="flex items-center relative py-2 text-[#525560] transition-colors duration-300 hover:text-[#003871] focus:outline-none"
              >
                Our Programmes
                <FaChevronDown className="ml-1" />
              </button>
              {desktopProgramsDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-[#DDF3FF] shadow-lg rounded-md overflow-hidden w-52">
                  {[{ name: 'Intervention Programs', link: '/intervention' }, { name: 'Behind the Scene(BTS)', link: '/bts', isNewTab: true }].map(({ name, link, isNewTab }) => (
                    <li key={name}>
                      <Link
                        href={link}
                        className="block px-4 py-2 hover:bg-[#003871] hover:text-white transition-all duration-300"
                        onClick={closeMenu}
                        target={isNewTab ? '_blank' : '_self'} // This opens BTS in a new tab
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {[{ name: 'Blog', link: '/blog' }, { name: 'Gallery', link: '/gallery' }].map(({ name, link }) => (
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

            {/* Contact Link */}
            <li>
              <a
                href="https://docs.google.com/forms/d/1ONaLrIKrSF0HZP4fsXOQd_7rOCsTNpmT0fvB7bY9TPg/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-2 group inline-block text-[#525560] transition-colors duration-300 hover:text-[#003871]"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#003871] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Donate Button for Desktop */}
          <div className="hidden md:block">
            <button
              onClick={openModal}
              className="flex justify-end items-center bg-[#003871] hover:bg-[#DDF3FF] hover:text-[#003871] text-white w-[115px] h-[55px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] gap-[10px] text-[16px] leading-[18.75px] font-roboto font-medium"
            >
              Donate
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden text-[#003871] mr-7">
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
            <li>
              <Link
                href="/"
                className="block px-4 py-2 font-bold hover:bg-[#003871] hover:text-white transition-all duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 font-bold hover:bg-[#003871] hover:text-white transition-all duration-300"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={toggleMobileProgramsDropdown}
                className="block px-4 py-2 font-bold hover:bg-[#003871] hover:text-white transition-all duration-300"
              >
                Our Programmes
                <FaChevronDown className="inline ml-2" />
              </button>
              {mobileProgramsDropdownOpen && (
                <ul className="pl-6">
                  {[{ name: 'Intervention Programs', link: '/intervention' }, { name: 'Behind the Scene(BTS)', link: '/bts', isNewTab: true }].map(({ name, link, isNewTab }) => (
                    <li key={name}>
                      <Link
                        href={link}
                        className="block px-4 py-2 hover:bg-[#003871] hover:text-white transition-all duration-300"
                        onClick={closeMenu}
                        target={isNewTab ? '_blank' : '_self'} // This opens BTS in a new tab
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/blog"
                className="block px-4 py-2 font-bold hover:bg-[#003871] hover:text-white transition-all duration-300"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="block px-4 py-2 font-bold hover:bg-[#003871] hover:text-white transition-all duration-300"
                onClick={closeMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/1ONaLrIKrSF0HZP4fsXOQd_7rOCsTNpmT0fvB7bY9TPg/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 font-bold hover:bg-[#003871] hover:text-white transition-all duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={openModal}
                className="block px-4 py-2 font-bold bg-[#003871] text-white hover:bg-[#DDF3FF] hover:text-[#003871] transition-all duration-300"
              >
                Donate
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Donate Modal */}
      {<Modal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default Navbar;

























