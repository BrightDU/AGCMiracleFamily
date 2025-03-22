'use client';

import Image from 'next/image'; 

const leaders = [
  { id: 1, imgSrc: '/agcimage/acg4.jpg', name: 'Leader One' },
  { id: 2, imgSrc: '/agcimage/acg5.jpg', name: 'Leader Two' },
  { id: 3, imgSrc: '/agcimage/acg1.jpg', name: 'Leader Three' },
  { id: 4, imgSrc: '/agcimage/acg4.jpg', name: 'Leader Four' },
];

const Leaders = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-100 flex flex-col items-center">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/church-bg.jpg')", minHeight: "50vh" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Text Section (Fixed position issue) */}
      <div className="relative z-20 text-center text-white mt-20 md:mt-28 px-6">
        <p className="text-lg uppercase tracking-widest text-gray-300 font-semibold">
          We Are Glad You're Here
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 drop-shadow-lg">
          Meet Our Leaders
        </h2>
      </div>

      {/* Leader Cards (Fixed positioning) */}
      <div className="relative z-20 flex justify-center mt-6 md:mt-12 px-6 w-full">
        <div className="bg-white shadow-lg rounded-lg px-6 py-6 max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {leaders.map((leader) => (
              <div key={leader.id} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                <Image 
                  src={leader.imgSrc} 
                  alt={leader.name} 
                  width={300} 
                  height={300} 
                  className="w-full object-cover"
                  unoptimized
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
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
