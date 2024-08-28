import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function VisiMisi() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F5F7F8] to-[#E2E8F0]">
      <Navbar />

      <div className={`pt-24 pb-8 px-8 transition-opacity duration-1000 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className={`text-3xl font-bold text-center mb-12 text-gray-800 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} duration-1000`}>
          Visi dan Misi Pemerintah Provinsi Kepulauan Riau
        </h1>

        {/* Visi */}
        <div className={`mb-12 bg-white p-8 rounded-lg shadow-2xl transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-200`}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">VISI</h2>
          <p className="text-lg font-semibold italic text-center text-blue-700 mb-6">"Terwujudnya Kepulauan Riau yang Makmur, Berdaya Saing, dan Berbudaya"</p>
          <ul className="list-disc list-inside text-base text-gray-600 leading-relaxed space-y-3">
            <li>
              <strong>Makmur</strong> artinya kehidupan masyarakat Kepulauan Riau yang lebih layak, dan sejahtera.
            </li>
            <li>
              <strong>Berdaya Saing</strong> artinya Terwujudnya masyarakat yang sehat, birokrasi pemerintahan dan dunia usaha yang lebih mampu bersaing dan unggul di tingkat regional dan internasional.
            </li>
            <li>
              <strong>Berbudaya</strong> artinya Terwujudnya penyelenggaraan pemerintahan, kegiatan pembangunan dan aktivitas masyarakat Kepulauan Riau yang lebih berpegang pada nilai-nilai agama, budaya Melayu, dan budaya Nasional.
            </li>
          </ul>
        </div>

        {/* Misi */}
        <div className={`mb-12 bg-white p-8 rounded-lg shadow-2xl transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-400`}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">MISI</h2>
          <ul className="list-decimal list-inside text-base text-gray-600 leading-relaxed space-y-3">
            <li>Percepatan Peningkatan Pertumbuhan Ekonomi Berbasis Maritim, Berwawasan Lingkungan dan Keunggulan Wilayah Untuk Peningkatan Kemakmuran Masyarakat.</li>
            <li>Melaksanakan Tata Kelola Pemerintahan yang Bersih, Terbuka dan Berorientasi Pelayanan.</li>
            <li>Mewujudkan Kualitas Sumber Daya Manusia yang Berkualitas, Sehat dan Berdaya Saing dengan Berbasiskan Iman dan Taqwa.</li>
            <li>Mengembangkan dan Melestarikan Budaya Melayu dan Nasional Dalam Mendukung Pembangunan Berkelanjutan.</li>
            <li>Mempercepat Konektivitas Antar Pulau dan Pembangunan Infrastruktur Kawasan.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default VisiMisi;
