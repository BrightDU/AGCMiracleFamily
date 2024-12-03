'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import cardImage1 from '../public/gcard1.jpg';
import cardImage2 from '../public/gcard2.jpg';
import cardImage3 from '../public/gcard3.jpg';
import cardImage4 from '../public/gcard4.jpg';
import cardImage5 from '../public/gcard5.jpg';
import cardImage6 from '../public/gcard6.jpg';
import cardImage7 from '../public/gcard7.jpg';
import cardImage8 from '../public/gcard8.jpg';
import cardImage9 from '../public/gcard9.jpg';
import cardImage10 from '../public/gcard10.jpg';
import cardImage11 from '../public/gcard11.jpg';
import cardImage12 from '../public/gcard12.jpg';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const Gallary = () => {
  const cardData = [
    { id: 1, image: cardImage1 },
    { id: 2, image: cardImage2 },
    { id: 3, image: cardImage3 },
    { id: 4, image: cardImage4 },
    { id: 5, image: cardImage5 },
    { id: 6, image: cardImage6 },
    { id: 7, image: cardImage7 },
    { id: 8, image: cardImage8 },
    { id: 9, image: cardImage9 },
    { id: 10, image: cardImage10 },
    { id: 11, image: cardImage11 },
    { id: 12, image: cardImage12 },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const cardsPerPage = 1; // For mobile view, show 1 card at a time

  const handleNext = () => {
    if (startIndex + cardsPerPage < cardData.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  const visibleCards = cardData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section
      id="gallary"
      className="relative py-12 px-6 sm:px-12 md:px-24 lg:px-48 h-[600px] bg-white flex flex-col items-center justify-start"
    >
      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>
          <Image
            src={selectedImage}
            alt="Enlarged View"
            width={800}
            height={800}
            className="object-contain max-w-full max-h-full"
          />
        </div>
      )}

      {/* Content Container */}
      <div className="max-w-7xl w-full mx-auto text-center mb-8" style={{ marginTop: '-80px' }}>
        <h3 className="font-roboto font-bold text-xl sm:text-2xl md:text-[32px] leading-tight text-[#6A6969] mb-4">
          Gallery
        </h3>
        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-2">
          Each image is a testament to the collective efforts of our dedicated volunteers, partners, and supporters.
        </p>
        <p className="font-roboto font-normal text-sm sm:text-base leading-relaxed text-[#525560] mb-4">
          Explore these glimpses of our journey and join us in our mission to create a better world.
        </p>
      </div>

      {/* Cards Section for Mobile */}
      <div className="flex justify-center items-center mb-6">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg w-[230px] h-[315px] overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(card.image)}
          >
            <Image
              src={card.image}
              alt={`Card ${card.id}`}
              width={230}
              height={315}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Pagination Buttons for Mobile */}
      <div className="flex justify-center gap-2">
        <button
          onClick={handlePrev}
          className="text-[#141b34] hover:text-gray-600 p-3 rounded-full bg-white hover:bg-gray-300 transition duration-200"
          disabled={startIndex === 0}
        >
          <FaArrowLeft size={15} />
        </button>
        <button
          onClick={handleNext}
          className="text-[#141b34] hover:text-gray-600 p-3 rounded-full bg-white hover:bg-gray-300 transition duration-200"
          disabled={startIndex + cardsPerPage >= cardData.length}
        >
          <FaArrowRight size={15} />
        </button>
      </div>
    </section>
  );
};

export default Gallary;







