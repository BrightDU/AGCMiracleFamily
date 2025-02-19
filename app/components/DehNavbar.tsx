'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import lo from '../public/carelife-logo.jpg'; // carelife logo
import loo from '../public/dthcrystallogo.png'; // bts logo 
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


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav
        className={`bg-[#FFFFFF] text-[#525560] font-roboto  sm:h-auto h-[170px] font-medium py-4 fixed top-0 w-full z-50  transition-all duration-700 ease-out ${animate ? 'opacity-100' : 'opacity-0 translate-y-[-100%]'}`}
        ref={navContainerRef}
        style={{ fontSize: '14px', lineHeight: '18.75px' }}
      >
        <div className="container mx-auto flex justify-between  items-center px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}

          <div className="flex items-center">
              <Link href="/" className="hover:text-[#93e9be] sm:ml-[-6px] sm:h-auto sm:mt-auto mt-[70px]  w-[500px] sm:w-[100px] mb-[-1px] transition-all duration-300">
              <Image src={loo} alt="Logo" width={147} height={50} className="object-cover" />
               
              </Link>
            </div>
         

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6  md:mr-[-10px] items-center mx-auto">
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
                  {[{ name: 'Maternal, Child and Adolescent Care', link: '/intervention' }, { name: 'Life Skills', link: '/Lifeskill' }, { name: 'Community Development', link: '/community-development' }, { name: 'Health Intervention', link: '/health-intervention' }, { name: 'Education Intervention', link: '/education-intervention' }, { name: 'Advocacy', link: '/advocacy' }].map(({ name, link }) => (
                    <li key={name}>
                      <Link
                        href={link}
                        className="block px-4 py-2 hover:bg-[#003871] hover:text-white transition-all duration-300"
                        onClick={closeMenu}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>



             {/* DTH */}
             <li>
              <Link
                href="/dth"
                className="relative py-2 group inline-block text-[#525560] transition-colors duration-300 hover:text-[#003871]"
                target="_blank"
              >
                Digital Empowerment Hub (DEH)
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#003871] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* Behind the Scene */}
            <li>
              <Link
                href="/bts"
                className="relative py-2 group inline-block text-[#525560] transition-colors duration-300 hover:text-[#003871]"
                target="_blank"
              >
                Behind the Scene (BTS)
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#003871] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* Gallery */}
            <li>
              <Link
                href="/gallery"
                className="relative py-2 group inline-block text-[#525560] transition-colors duration-300 hover:text-[#003871]"
              >
                Gallery
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#003871] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* Volunteer or Partner With Us */}
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

            {/* Logo after Volunteer or Partner */}
            <div className="flex items-center">
            <Link href="/" className="hover:text-[#93e9be] ml-[35px] sm:ml[-30px] transition-all duration-300">
            <Image src={lo} alt="Logo" width={140} height={20} className="object-cover" />
              </Link>
            </div>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden mt-[70px] text-[#003871] mr-7">
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
            {[{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }].map(({ name, link }) => (
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

            {/* Mobile Programs Dropdown */}
            <li className="py-2">
              <button
                onClick={toggleMobileProgramsDropdown}
                className="w-full text-left flex items-center text-[#003771] text-[20px] transition-colors duration-300 hover:text-[#003871] focus:outline-none"
              >
                Our Programmes
                <FaChevronDown className="ml-1" />
              </button>
              {mobileProgramsDropdownOpen && (
                <ul className="pl-4 mt-2">
                  {[{ name: 'Maternal, Child and Adolescent Care', link: '/intervention' }, { name: 'Life Skills', link: '/Lifeskill' }, { name: 'Community Development', link: '/community-development' }, { name: 'Health Intervention', link: '/health-intervention' }, { name: 'Education Intervention', link: '/education-intervention' }, { name: 'Advocacy', link: '/advocacy' }].map(({ name, link }) => (
                    <li key={name} className="py-3">
                      <Link
                        href={link}
                        className="block text-[#003771] font-semibold text-[20px] transition-colors duration-300 hover:text-[#003871]"
                        onClick={closeMenu}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
     

             {/* dth */}
             <li className="py-2">
              <Link
                href="/deh"
                className="block text-[#003771] text-[20px] transition-colors duration-300 hover:text-[#003871]"
                onClick={closeMenu}
              >
                Digital Empowerment Hub (DEH)
              </Link>
            </li>








            {/* BTS */}
            <li className="py-2">
              <Link
                href="/bts"
                className="block text-[#003771] text-[20px] transition-colors duration-300 hover:text-[#003871]"
                onClick={closeMenu}
              >
                Behind the Scene (BTS)
              </Link>
            </li>

            {/* Gallery */}
            <li className="py-2">
              <Link
                href="/gallery"
                className="block text-[#003771] text-[20px] transition-colors duration-300 hover:text-[#003871]"
                onClick={closeMenu}
              >
                Gallery
              </Link>
            </li>

            {/* Volunteer or Partner */}
            <li className="py-2">
              <a
                href="https://docs.google.com/forms/d/1ONaLrIKrSF0HZP4fsXOQd_7rOCsTNpmT0fvB7bY9TPg/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#003771] text-[20px] transition-colors duration-300 hover:text-[#003871]"
              >
                Volunteer Or Partner With Us
              </a>
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