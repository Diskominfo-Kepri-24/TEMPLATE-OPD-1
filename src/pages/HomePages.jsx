import React from 'react';
import Navbar from '../components/Navbar';
import HighlightsBerita from './HighlightsBerita';

function HomePage() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/assets/bg.png')" }}>
      {/* Navbar with logo */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center text-white p-6 pt-20">
        {' '}
        {/* pt-20 untuk menurunkan semua konten */}
        <h1 className="text-2xl md:text-4xl font-bold mb-2">BERPANCANG AMANAH, BERSAUH MARWAH</h1>
        <p className="text-sm md:text-base mb-4">Selamat datang di Portal Kepulauan Riau, Dapatkan informasi dan layanan publik apapun seputar Provinsi Kepulauan Riau.</p>
        {/* Search Bar */}
        <div className="relative w-full max-w-sm flex items-center mb-8 mt-4">
          {' '}
          {/* mt-4 untuk menurunkan Search Bar */}
          <input type="text" placeholder="Silakan cari Informasi kat sini" className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-900 text-[12px] md:text-[14px] focus:outline-none" />
          <img src="/assets/search.png" alt="Search" className="absolute left-3 h-5 md:h-6 text-gray-500" />
          <button className="ml-2 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">Cari</button>
        </div>
        {/* Shortcut Section */}
        <div className="grid grid-cols-4 gap-4 mb-8 mt-8">
          {' '}
          {/* mt-6 untuk menurunkan posisi icon shortcut */}
          <Shortcut iconSrc="/assets/history.svg" label="Sejarah" link="/sejarah" />
          <Shortcut iconSrc="/assets/news.svg" label="Berita" link="/berita" />
          <Shortcut iconSrc="/assets/service.svg" label="Layanan" link="/layanan" />
          <Shortcut iconSrc="/assets/department.svg" label="Instansi" link="/instansi" />
          <Shortcut iconSrc="/assets/budget.svg" label="APBD" link="/apbd" />
          <Shortcut iconSrc="/assets/analytics.svg" label="IPKD" link="/ipkd" />
          <Shortcut iconSrc="/assets/report.svg" label="Lapor" link="/lapor" />
          <Shortcut iconSrc="/assets/ppid.svg" label="PPID" link="/ppid" />
        </div>
      </div>

      {/* Highlights and Berita Section */}
      <div className="bg-white w-full py-8">
        <HighlightsBerita />
      </div>
    </div>
  );
}

function Shortcut({ iconSrc, label, link }) {
  return (
    <a href={link} className="flex flex-col items-center">
      <div className="flex items-center justify-center h-14 w-14 bg-white bg-opacity-30 rounded-full backdrop-blur-md">
        {' '}
        {/* Ukuran ikon diperbesar */}
        <img src={iconSrc} alt={label} className="h-8 w-8" /> {/* h-8 w-8 untuk ukuran sedang */}
      </div>
      <span className="mt-2 text-white text-sm">{label}</span>
    </a>
  );
}

export default HomePage;
