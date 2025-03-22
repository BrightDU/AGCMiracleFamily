'use client';

import React from 'react';
import Image from 'next/image';

import cardImage1 from '../public/gcard1.jpg';
import whiteimg1 from '../public/whitehero1.jpg';
import cardImage2 from '../public/gcard2.jpg';
import cardImage3 from '../public/gcard3.jpg';

const Gallery = () => {
  const cards = [
    {
      id: 1,
      image: cardImage1,
      title: 'Empowering Communities',
      description: 'Bringing hope and change through impactful outreach programs.',
    },
    {
      id: 2,
      image: whiteimg1,
      title: 'Education for All',
      description: 'Creating equal access to quality education for children and adults.',
    },
    {
      id: 3,
      image: cardImage2,
      title: 'Health & Wellness',
      description: 'Providing essential health services to underprivileged communities.',
    },
    {
      id: 4,
      image: cardImage3,
      title: 'Youth Empowerment',
      description: 'Equipping young people with skills and opportunities for growth.',
    },
  ];

  return (
    <section id="gallery" className="py-16 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 bg-white max-w-full mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6A6969]">Gallery</h2>
        <p className="text-[#525560] text-base sm:text-lg mt-3 max-w-xl mx-auto">
          Each image is a testament to the collective efforts of our dedicated volunteers, partners, and supporters.
        </p>
        <p className="text-[#525560] text-base sm:text-lg mt-2 max-w-xl mx-auto">
          Explore these glimpses of our journey and join us in our mission to create a better world.
        </p>
      </div>

      {/* All 4 cards in one row */}
      <div className="flex justify-between items-stretch flex-wrap lg:flex-nowrap gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-full sm:w-[45%] lg:w-[23%] h-[350px] rounded-xl overflow-hidden shadow-lg group"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-5">
              <h3 className="text-white text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-white text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
