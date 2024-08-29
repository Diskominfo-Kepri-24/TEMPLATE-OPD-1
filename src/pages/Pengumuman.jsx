/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Pengumuman() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const announcements = [
    { title: 'Pengumuman 1', date: 'Jumat, 23 Agustus 2024', text: 'Ini adalah detail pengumuman pertama yang berisi informasi penting mengenai kebijakan terbaru.', link: '/pengumuman-1' },
    { title: 'Pengumuman 2', date: 'Sabtu, 24 Agustus 2024', text: 'Pengumuman kedua memberikan informasi tentang perubahan jadwal kegiatan di lingkungan pemerintahan.', link: '/pengumuman-2' },
    { title: 'Pengumuman 3', date: 'Minggu, 25 Agustus 2024', text: 'Berikut adalah pengumuman ketiga yang menginformasikan pembaruan terkait layanan publik.', link: '/pengumuman-3' },
  ];

  const handleMouseDown = (index) => {
    setClickedIndex(index); // Highlight the clicked item
  };

  const handleMouseUp = () => {
    setClickedIndex(null); // Reset the click animation after releasing the mouse
  };

  return (
    <div ref={sectionRef} id="pengumuman-section" className="min-h-screen bg-white text-gray-900 pt-28 pb-20">
      <header className="p-12 shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-800 relative inline-block">
            {/* Underline menggunakan pseudo-element */}
            <span className="relative">
              Pengumuman
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-lg"></span>
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">Informasi dan Pengumuman Terkini di Provinsi Kepulauan Riau</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[90%] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {announcements.map((announcement, index) => (
          <Link to={announcement.link} key={index}>
            <div
              onMouseDown={() => handleMouseDown(index)}
              onMouseUp={handleMouseUp}
              className={`cursor-pointer bg-white rounded-lg shadow-lg p-8 transition-transform duration-500 ease-in-out ${isAnimated ? 'transform translate-y-0' : 'transform -translate-y-10'} ${
                clickedIndex === index ? 'bg-blue-500 text-white transform scale-105' : 'hover:scale-105 hover:shadow-xl'
              }`}
              style={{ minHeight: '300px' }} // Ensuring all boxes have the same height and larger size
            >
              <h2 className={`text-xl md:text-2xl font-bold mb-4 ${clickedIndex === index ? 'text-white' : 'text-gray-900'}`}>{announcement.title}</h2>
              <p className={`text-sm ${clickedIndex === index ? 'text-white' : 'text-gray-500'} mb-6`}>{announcement.date}</p>
              <p className={`text-lg ${clickedIndex === index ? 'text-white' : 'text-gray-700'} mb-6`}>{announcement.text}</p>
              <span className={`underline ${clickedIndex === index ? 'text-white' : 'text-blue-500'} hover:no-underline`}>Baca Selengkapnya</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Lihat Pengumuman Button */}
      <div className="text-center mt-12">
        <Link to="/pengumuman">
          <button className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300">Lihat Pengumuman</button>
        </Link>
      </div>
    </div>
  );
}

export default Pengumuman;
