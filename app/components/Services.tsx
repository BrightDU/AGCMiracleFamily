'use client';

import Image from 'next/image';

// ✅ Import images
import acg4 from '../public/agcimage/agc4.jpg';
import acg5 from '../public/agcimage/agc5.jpg';
import acg1 from '../public/agcimage/agc1.jpg';
import acg6 from '../public/agcimage/agc6.jpg';
import bgImage from '../public/agcimage/agc10.jpg';

const leaders = [
  { id: 1, imgSrc: acg6, name: 'Rev. Dr. Paul C. Adim' },
  { id: 2, imgSrc: acg1, name: 'Rev. David Sylvester' },

];

const Leaders = () => {
  return (
    <section className="relative w-full bg-white flex flex-col items-center">
      
      {/* ✅ Text should be at top */}
      <div className="w-full text-center pt-16 px-6 z-20">
        <p className="text-center text-sm sm:text-base font-semibold tracking-wide text-black mb-4">
          We Are Glad You&apos;re Here
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 drop-shadow-sm">
          Meet Our Leaders
        </h2>
      </div>

      {/* ✅ Background Image (next section) */}
      <div className="relative w-full mt-8 h-[50vh] md:h-[70vh] overflow-hidden z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ✅ Leader Cards overlapping top half of background */}
      <div className="relative -mt-28 sm:-mt-36 md:-mt-48 z-20 px-6 w-full">
        <div className="bg-white px-6 py-6 sm:py-6 w-full max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {leaders.map((leader) => (
              <div key={leader.id} className="overflow-hidden text-center">
                <Image
                  src={leader.imgSrc}
                  alt={leader.name}
                  width={300}
                  height={300}
                  className="w-full h-[250px] sm:h-[300px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{leader.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
