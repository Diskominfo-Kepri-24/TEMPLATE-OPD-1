import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import HighlightsBerita from './HighlightsBerita';
import Pengumuman from './Pengumuman';
import Wisata from './Wisata';
import Shortcut from '../components/Shortcut';
import Footer from '../components/Footer';

// Lazy load untuk komponen yang berat
const StatistikPage = React.lazy(() => import('./StatistikPage')); // Path sesuai

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: "url('/assets/bg.png')", backgroundSize: 'cover' }}>
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center h-screen bg-black bg-opacity-50 text-center text-white p-6 pt-20">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">BERPANCANG AMANAH, BERSAUH MARWAH</h1>
          <p className="text-sm md:text-base mb-4">Selamat datang di Portal Kepulauan Riau, Dapatkan informasi dan layanan publik apapun seputar Provinsi Kepulauan Riau.</p>
          <div className="relative w-full max-w-sm flex items-center mb-8 mt-4">
            <input type="text" placeholder="Silakan cari Informasi kat sini" className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-900 text-[12px] md:text-[14px] focus:outline-none" />
            <img src="/assets/search.png" alt="Search" className="absolute left-3 h-5 md:h-6 text-gray-500" />
            <button className="ml-2 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">Cari</button>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-8 mt-8">
            <Shortcut iconSrc="/assets/history.svg" label="Sejarah" link="/sejarah" />
            <Shortcut iconSrc="/assets/news.svg" label="Berita" link="/berita" />
            <Shortcut iconSrc="/assets/service.svg" label="Layanan" link="/layanan-publik" />
            <Shortcut iconSrc="/assets/department.svg" label="Instansi" link="/perangkat-daerah" />
            <Shortcut iconSrc="/assets/budget.svg" label="APBD" link="/apbd" />
            <Shortcut iconSrc="/assets/analytics.svg" label="IPKD" link="/ipkd" />
            <Shortcut iconSrc="/assets/report.svg" label="Lapor" link="https://kepri.lapor.go.id/" />

            <Shortcut iconSrc="/assets/ppid.svg" label="PPID" link="/ppid" />
          </div>
        </div>

        {/* Other sections */}
        <HighlightsBerita />
        <Suspense fallback={<div>Loading Statistik...</div>}>
          <StatistikPage />
        </Suspense>
        <Pengumuman />
        <Wisata />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default HomePage;
