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
    <div ref={sectionRef} id="pengumuman-section" className="min-h-screen bg-gray-50 text-gray-900 pt-28 pb-16">
      {/* Header Section */}
      <header className="p-8 shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block w-full max-w-xl p-2 rounded-lg" style={{ backgroundColor: '#173D80' }}>
            <h1 className="text-xl font-bold text-white">Pengumuman</h1>
          </div>
          <p className="mt-2 text-sm text-gray-600">Informasi dan Pengumuman Terkini di Provinsi Kepulauan Riau</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {announcements.map((announcement, index) => (
          <Link to={announcement.link} key={index}>
            <div
              onMouseDown={() => handleMouseDown(index)}
              onMouseUp={handleMouseUp}
              className={`cursor-pointer bg-white rounded-lg shadow-lg p-6 transition-transform duration-500 ease-in-out ${isAnimated ? 'transform translate-y-0' : 'transform -translate-y-10'} ${
                clickedIndex === index ? 'bg-blue-500 text-white transform scale-105' : 'hover:scale-105 hover:shadow-xl'
              }`} // Apply different styles if clicked
              style={{ minHeight: '250px' }} // Ensuring all boxes have the same height
            >
              <h2 className={`text-lg md:text-xl font-bold mb-2 ${clickedIndex === index ? 'text-white' : 'text-gray-900'}`}>{announcement.title}</h2>
              <p className={`text-xs ${clickedIndex === index ? 'text-white' : 'text-gray-500'} mb-4`}>{announcement.date}</p>
              <p className={`text-sm ${clickedIndex === index ? 'text-white' : 'text-gray-700'} mb-4`}>{announcement.text}</p>
              <span className={`underline ${clickedIndex === index ? 'text-white' : 'text-blue-500'} hover:no-underline`}>Baca Selengkapnya</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Pengumuman;
