import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HighlightsBerita() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Sesuaikan ini dengan jumlah slide sebenarnya
  const slideContainerRef = useRef(null);
  const highlightsSectionRef = useRef(null);
  const beritaSectionRef = useRef(null);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : totalSlides - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide < totalSlides - 1 ? prevSlide + 1 : 0));
  };

  useEffect(() => {
    slideContainerRef.current.style.transform = `translateX(-${currentSlide * 100}%)`; // Mengatur agar hanya satu slide penuh yang terlihat
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      const highlightsSection = highlightsSectionRef.current;
      const beritaSection = beritaSectionRef.current;

      if (highlightsSection) {
        const rect = highlightsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          highlightsSection.classList.add('opacity-100', 'translate-y-0');
        } else {
          highlightsSection.classList.remove('opacity-100', 'translate-y-0');
        }
      }

      if (beritaSection) {
        const rect = beritaSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          beritaSection.classList.add('opacity-100', 'translate-y-0');
        } else {
          beritaSection.classList.remove('opacity-100', 'translate-y-0');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-36">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div ref={highlightsSectionRef} id="highlights-section" className="md:col-span-2 highlights transition-all duration-1000 ease-in-out opacity-0 translate-y-10">
          <h2 className="text-3xl font-bold text-center mb-6">Highlights</h2> {/* Reduced text size */}
          <div className="relative overflow-hidden h-[450px]">
            <div ref={slideContainerRef} className="flex transition-transform duration-500 ease-in-out">
              {/* Slide 1 */}
              <div className="min-w-full flex-shrink-0 p-4">
                <Link to="/babak-belur" className="block">
                  <div className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:scale-105 bg-white">
                    <div className="h-[350px] bg-gray-300 flex items-center justify-center rounded-t-lg">
                      <img src="/assets/babakbelur.jpeg" alt="Babak Belur" className="h-full w-full object-cover rounded-t-lg" />
                    </div>
                    <div className="p-3 text-center text-gray-700">
                      {' '}
                      {/* Reduced padding and text size */}
                      <p className="text-sm">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                      <p className="text-sm">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                    </div>
                  </div>
                </Link>
              </div>
              {/* Slide 2 */}
              <div className="min-w-full flex-shrink-0 p-4">
                <Link to="/napi-bebas" className="block">
                  <div className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:scale-105 bg-white">
                    <div className="h-[350px] bg-gray-300 flex items-center justify-center rounded-t-lg">
                      <img src="/assets/napibebas.jpeg" alt="Napi Bebas" className="h-full w-full object-cover rounded-t-lg" />
                    </div>
                    <div className="p-3 text-center text-gray-700">
                      {' '}
                      {/* Reduced padding and text size */}
                      <p className="text-sm">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                      <p className="text-sm">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                    </div>
                  </div>
                </Link>
              </div>
              {/* Slide 3 */}
              <div className="min-w-full flex-shrink-0 p-4">
                <Link to="/pilkada" className="block">
                  <div className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:scale-105 bg-white">
                    <div className="h-[350px] bg-gray-300 flex items-center justify-center rounded-t-lg">
                      <img src="/assets/pilkada.jpeg" alt="Pilkada" className="h-full w-full object-cover rounded-t-lg" />
                    </div>
                    <div className="p-3 text-center text-gray-700">
                      {' '}
                      {/* Reduced padding and text size */}
                      <p className="text-sm">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                      <p className="text-sm">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Tombol Navigasi */}
          <div className="flex justify-center mt-8 space-x-4">
            <button onClick={handlePrevClick} className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600">
              ←
            </button>
            <button onClick={handleNextClick} className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600">
              →
            </button>
          </div>
        </div>

        {/* Bagian Berita */}
        <div ref={beritaSectionRef} className="berita transition-all duration-1000 ease-in-out opacity-0 translate-y-10">
          <h2 className="text-3xl font-bold text-center mb-6">Berita</h2> {/* Reduced text size */}
          <div className="space-y-3">
            {' '}
            {/* Reduced spacing */}
            {/* Berita 1 */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-3 transform transition-transform duration-500 ease-in-out hover:scale-105">
              {' '}
              {/* Reduced padding */}
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center">gambar</div>
              <div>
                <p className="text-sm text-gray-700">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                <p className="text-xs text-gray-500">hari dan tanggal</p> {/* Smaller text */}
              </div>
            </div>
            {/* Berita 2 */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-3 transform transition-transform duration-500 ease-in-out hover:scale-105">
              {' '}
              {/* Reduced padding */}
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center">gambar</div>
              <div>
                <p className="text-sm text-gray-700">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                <p className="text-xs text-gray-500">hari dan tanggal</p> {/* Smaller text */}
              </div>
            </div>
            {/* Berita 3 */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-3 transform transition-transform duration-500 ease-in-out hover:scale-105">
              {' '}
              {/* Reduced padding */}
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center">gambar</div>
              <div>
                <p className="text-sm text-gray-700">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                <p className="text-xs text-gray-500">hari dan tanggal</p> {/* Smaller text */}
              </div>
            </div>
            {/* Berita 4 */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-3 transform transition-transform duration-500 ease-in-out hover:scale-105">
              {' '}
              {/* Reduced padding */}
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center">gambar</div>
              <div>
                <p className="text-sm text-gray-700">loremipsum loremipsum loremipsum</p> {/* Smaller text */}
                <p className="text-xs text-gray-500">hari dan tanggal</p> {/* Smaller text */}
              </div>
            </div>
          </div>
          {/* Tombol Lihat Semua Berita */}
          <div className="mt-6 text-center">
            {' '}
            {/* Reduced margin-top */}
            <Link to="/all-news" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightsBerita;
