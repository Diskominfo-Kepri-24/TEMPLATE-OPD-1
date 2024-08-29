import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HighlightsBerita() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
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
    slideContainerRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
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
          <h2 className="text-4xl font-bold text-center mb-8">Highlights</h2>
          <div className="relative overflow-hidden h-[550px]">
            {' '}
            {/* Perbesar tinggi slide */}
            <div ref={slideContainerRef} className="flex transition-transform duration-500 ease-in-out">
              {/* Slide 1 */}
              <div className="min-w-full flex-shrink-0 p-6">
                {' '}
                {/* Perbesar padding */}
                <Link to="/babak-belur" className="block">
                  <div className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:scale-105 bg-white">
                    <div className="h-[400px] bg-gray-300 flex items-center justify-center rounded-t-lg">
                      {' '}
                      {/* Perbesar tinggi gambar */}
                      <img src="/assets/babakbelur.jpeg" alt="Babak Belur" className="h-full w-full object-cover rounded-t-lg" />
                    </div>
                    <div className="p-4 text-center text-gray-700">
                      <p className="text-lg">Judul Berita 1</p> {/* Perbesar teks */}
                      <p className="text-base">Deskripsi singkat berita 1</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* Slide 2 */}
              <div className="min-w-full flex-shrink-0 p-6">
                {' '}
                {/* Perbesar padding */}
                <Link to="/napi-bebas" className="block">
                  <div className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:scale-105 bg-white">
                    <div className="h-[400px] bg-gray-300 flex items-center justify-center rounded-t-lg">
                      {' '}
                      {/* Perbesar tinggi gambar */}
                      <img src="/assets/napibebas.jpeg" alt="Napi Bebas" className="h-full w-full object-cover rounded-t-lg" />
                    </div>
                    <div className="p-4 text-center text-gray-700">
                      <p className="text-lg">Judul Berita 2</p> {/* Perbesar teks */}
                      <p className="text-base">Deskripsi singkat berita 2</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* Slide 3 */}
              <div className="min-w-full flex-shrink-0 p-6">
                {' '}
                {/* Perbesar padding */}
                <Link to="/pilkada" className="block">
                  <div className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:scale-105 bg-white">
                    <div className="h-[400px] bg-gray-300 flex items-center justify-center rounded-t-lg">
                      {' '}
                      {/* Perbesar tinggi gambar */}
                      <img src="/assets/pilkada.jpeg" alt="Pilkada" className="h-full w-full object-cover rounded-t-lg" />
                    </div>
                    <div className="p-4 text-center text-gray-700">
                      <p className="text-lg">Judul Berita 3</p> {/* Perbesar teks */}
                      <p className="text-base">Deskripsi singkat berita 3</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Estetika dan posisi tombol slider */}
          <div className="flex justify-center mt-8 space-x-4 relative" style={{ top: '-40px' }}>
            {' '}
            {/* Posisi tombol naik */}
            <button onClick={handlePrevClick} className="p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              &#8592; {/* Panah kiri yang lebih estetik */}
            </button>
            <button onClick={handleNextClick} className="p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              &#8594; {/* Panah kanan yang lebih estetik */}
            </button>
          </div>
        </div>

        {/* Bagian Berita */}
        <div ref={beritaSectionRef} className="berita transition-all duration-1000 ease-in-out opacity-0 translate-y-10">
          <h2 className="text-4xl font-bold text-center mb-8">Berita</h2> {/* Perbesar teks */}
          <div className="space-y-6">
            {' '}
            {/* Perbesar jarak antar berita */}
            {/* Berita 1 */}
            <div className="flex items-center space-x-6 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              {' '}
              {/* Perbesar elemen berita */}
              <div className="h-20 w-20 bg-gray-300 flex items-center justify-center">
                {' '}
                {/* Perbesar gambar */}
                <img src="/assets/orangketangkep.jpg" alt="Orang Ketangkep" className="object-cover h-full w-full rounded-lg" />
              </div>
              <div>
                <p className="text-lg text-gray-700">Orang Ketangkep di Kepulauan Riau</p> {/* Perbesar teks */}
                <p className="text-sm text-gray-500">21 Agustus 2024</p>
              </div>
            </div>
            {/* Berita 2 */}
            <div className="flex items-center space-x-6 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              {' '}
              {/* Perbesar elemen berita */}
              <div className="h-20 w-20 bg-gray-300 flex items-center justify-center">
                {' '}
                {/* Perbesar gambar */}
                <img src="/assets/tiketkapal.jpeg" alt="Tiket Kapal" className="object-cover h-full w-full rounded-lg" />
              </div>
              <div>
                <p className="text-lg text-gray-700">Tiket Kapal di Kepulauan Riau</p> {/* Perbesar teks */}
                <p className="text-sm text-gray-500">19 Agustus 2024</p>
              </div>
            </div>
            {/* Berita 3 */}
            <div className="flex items-center space-x-6 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              {' '}
              {/* Perbesar elemen berita */}
              <div className="h-20 w-20 bg-gray-300 flex items-center justify-center">
                {' '}
                {/* Perbesar gambar */}
                <img src="/assets/tongkang.jpeg" alt="Tongkang" className="object-cover h-full w-full rounded-lg" />
              </div>
              <div>
                <p className="text-lg text-gray-700">Tongkang di Kepulauan Riau</p> {/* Perbesar teks */}
                <p className="text-sm text-gray-500">18 Agustus 2024</p>
              </div>
            </div>
            {/* Berita 4 */}
            <div className="flex items-center space-x-6 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              {' '}
              {/* Perbesar elemen berita */}
              <div className="h-20 w-20 bg-gray-300 flex items-center justify-center">
                {' '}
                {/* Perbesar gambar */}
                <img src="/assets/walkotpinang.jpeg" alt="Walikota Tanjung Pinang" className="object-cover h-full w-full rounded-lg" />
              </div>
              <div>
                <p className="text-lg text-gray-700">Walikota Tanjung Pinang Terpilih</p> {/* Perbesar teks */}
                <p className="text-sm text-gray-500">17 Agustus 2024</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            {' '}
            {/* Tambahkan margin lebih besar */}
            <Link to="/berita" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300">
              {' '}
              {/* Perbesar tombol */}
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightsBerita;
