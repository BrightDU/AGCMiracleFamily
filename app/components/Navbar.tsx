'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import lo from '../public/carelife-logo.jpg';
import Modal from './Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        style={{ fontSize: '14px', lineHeight: '18.75px' }}
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
            {[{ name: 'Home', link: '/' }, { name: 'About', link: '#' }, { name: 'Sermon', link: '/sermon' }, { name: 'Blog', link: '/blog' }, { name: 'Live Service', link: '/live-service' }].map(({ name, link }) => (
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
            <li>
              <a
                href="https://docs.google.com/forms/d/1ONaLrIKrSF0HZP4fsXOQd_7rOCsTNpmT0fvB7bY9TPg/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-2 group inline-block text-[#525560] transition-colors duration-300 hover:text-[#003871]"
              >
                Partner With Us
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

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white font-bold shadow-lg rounded-md mt-2 px-4 pb-4">
            {[{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name: 'Sermon', link: '/sermon' }, { name: 'Blog', link: '/blog' }, { name: 'Live Service', link: '/live-service' }].map(({ name, link }) => (
              <li key={name} className="py-2">
                <Link
                  href={link}
                  className="block text-[#003771] text-[20px] transition-colors duration-300 hover:text-[#003871]"
                  onClick={closeMenu}
                >
                  {name}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <a
                href="https://docs.google.com/forms/d/1ONaLrIKrSF0HZP4fsXOQd_7rOCsTNpmT0fvB7bY9TPg/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#003771] text-[20px] transition-colors duration-300 hover:text-[#003871]"
                onClick={closeMenu}
              >
                Volunteer Or Partner With Us
              </a>
            </li>
            <li className="py-2">
              <button
                onClick={openModal}
                className="w-full text-center bg-[#003871] hover:bg-[#DDF3FF] hover:text-[#003871] text-white py-2 rounded-md"
              >
                Donate
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Modal Component for Donate */}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default Navbar;
