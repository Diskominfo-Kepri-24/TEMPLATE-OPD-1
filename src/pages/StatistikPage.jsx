import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function StatistikPage() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
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

  return (
    <div ref={sectionRef} id="statistics-section" className="min-h-screen bg-gray-100 text-gray-900 pt-28 pb-16">
      <header className="p-12 shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-800 relative inline-block">
            {/* Underline menggunakan pseudo-element */}
            <span className="relative">
              Publikasi Statistik
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-lg"></span>
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">Terbitan Publikasi Statistik di Provinsi Kepulauan Riau</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[90%] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Section - Left */}
        <div className={`bg-white rounded-lg shadow-lg p-6 md:p-8 col-span-2 transition-transform duration-700 ease-in-out ${isAnimated ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
          {/* Label - Terbitan Khusus */}
          <div className="w-full text-white text-base font-bold rounded-t px-4 py-2 mb-4" style={{ backgroundColor: '#173D80' }}>
            Terbitan Khusus
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Statistik Sektoral Provinsi Kepulauan Riau Tahun 2023</h2>
          <div className="flex">
            <div className="w-1/3">
              <img src="/path/to/your/image.jpg" alt="Statistik Sektoral" className="rounded-lg shadow-sm" />
            </div>
            <div className="w-2/3 pl-4 md:pl-6">
              <p className="text-base text-gray-600">Oleh: Dinas Komunikasi dan Informatika Kepri</p>
              <p className="text-base text-gray-600 mt-2">Size: 6.3 MB</p>
              <p className="text-base text-gray-700 mt-4">
                Buku ini berisikan tentang data indikator kinerja yang bersumber dari Organisasi Perangkat Daerah yang ada di Lingkungan Pemerintahan Provinsi Kepulauan Riau dan beberapa Instansi Vertikal, dimana data tersebut telah
                dianalisis dan diolah dalam bentuk tabel / grafik / diagram / peta yang bertujuan untuk memudahkan pembaca dalam memahami data.
              </p>
              <Link to="/download-link" className="mt-12 inline-block text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-lg" style={{ backgroundColor: '#173D80' }}>
                Lihat Laporan Statistik Ini
              </Link>
            </div>
          </div>
        </div>

        {/* Smaller Section - Right */}
        <div className={`bg-white rounded-lg shadow-lg p-6 md:p-8 transition-transform duration-700 ease-in-out ${isAnimated ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
          {/* Label - Terbitan BPS */}
          <div className="w-full text-white text-base font-bold rounded-t px-4 py-2 mb-4" style={{ backgroundColor: '#173D80' }}>
            Terbitan BPS
          </div>
          <div className="space-y-4">
            {/* First item - Statistik Ekspor */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center rounded-md">
                <img src="/path/to/your/another-image.jpg" alt="Statistik Ekspor" className="rounded-md object-cover" />
              </div>
              <div>
                <p className="text-base text-gray-700">Statistik Ekspor Provinsi Kepulauan Riau 2023</p>
                <p className="text-sm text-gray-500">Tanggal: 31-07-2024</p>
                <Link to="/details-link" className="text-lg text-blue-500 hover:underline">
                  Lihat Detail
                </Link>
              </div>
            </div>

            {/* Second item - Hasil Pencacahan */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center rounded-md">
                <img src="/path/to/your/another-image.jpg" alt="Hasil Pencacahan" className="rounded-md object-cover" />
              </div>
              <div>
                <p className="text-base text-gray-700">Hasil Pencacahan Lengkap Sensus Pertanian 2023</p>
                <p className="text-sm text-gray-500">Tanggal : 06-08-2024 </p>
                <Link to="/details-link" className="text-lg text-blue-500 hover:underline">
                  Lihat Detail
                </Link>
              </div>
            </div>

            {/* Third item */}
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
              <div className="h-16 w-16 bg-gray-300 flex items-center justify-center rounded-md">
                <img src="/path/to/your/another-image.jpg" alt="Statistik Ekspor" className="rounded-md object-cover" />
              </div>
              <div>
                <p className="text-base text-gray-700">Indikator Utama Provinsi Kepulauan Riau</p>
                <p className="text-sm text-gray-500">Tanggal : 10-08-2024</p>
                <Link to="/details-link" className="text-lg text-blue-500 hover:underline">
                  Lihat Detail
                </Link>
              </div>
            </div>
            <div className="mx-auto text-center">
              <Link to="/download-link" className="mt-12 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-lg" style={{ backgroundColor: '#173D80' }}>
                Lihat Statistik Lainnya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatistikPage;
