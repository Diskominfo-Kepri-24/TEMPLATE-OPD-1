import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Wisata() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const isTransitioning = useRef(false);

  const wisataList = [
    { id: 1, title: 'Pantai Lagoi', imgSrc: '/assets/lagoi.jpeg', link: '/wisata-lagoi', location: 'Bintan, Kepulauan Riau' },
    { id: 2, title: 'Pulau Penyengat', imgSrc: '/assets/penyengat.jpg', link: '/wisata-penyengat', location: 'Tanjung Pinang, Kepulauan Riau' },
    { id: 3, title: 'Jembatan Barelang', imgSrc: '/assets/barelang.jpg', link: '/wisata-barelang', location: 'Batam, Kepulauan Riau' },
    { id: 4, title: 'Stone Park', imgSrc: '/assets/stonepark.jpg', link: '/wisata-stonepark', location: 'Lingga, Kepulauan Riau' },
  ];

  const totalSlides = wisataList.length;

  const handlePrevClick = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNextClick = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  useEffect(() => {
    const resetTransition = setTimeout(() => {
      isTransitioning.current = false;
    }, 500);

    return () => clearTimeout(resetTransition);
  }, [currentIndex]);

  return (
    <div id="wisata-section" className="min-h-screen bg-gray-100 pt-16 pb-16">
      <header className="p-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-3 rounded-lg bg-[#173D80] shadow-xl">
            <h1 className="text-3xl font-bold text-white tracking-wide">DISCOVER KEPULAUAN RIAU</h1>
          </div>
          <p className="mt-4 text-lg text-gray-600">Explore the stunning tourist destinations in Kepulauan Riau</p>
        </div>
      </header>

      {/* Slider Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="overflow-hidden rounded-lg shadow-lg relative">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }} ref={slideRef}>
            {wisataList.map((wisata, index) => (
              <div key={index} className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] p-4">
                <Link to={wisata.link} className="block group relative">
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <img src={wisata.imgSrc} alt={wisata.title} className="w-full h-72 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-50"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h2 className="text-lg font-bold text-white">{wisata.title}</h2>
                      <p className="text-sm text-gray-300">{wisata.location}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigasi Slide */}
          <button onClick={handlePrevClick} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300">
            &#x2039;
          </button>
          <button onClick={handleNextClick} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300">
            &#x203A;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wisata;
