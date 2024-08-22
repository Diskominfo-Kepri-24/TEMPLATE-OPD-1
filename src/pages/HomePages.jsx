// src/pages/HomePage.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import HighlightsBerita from './HighlightsBerita';

function HomePage() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/assets/bg.png')" }}>
      {/* Navbar with logo */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center text-white p-6">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">BERPANCANG AMANAH, BERSAUH MARWAH</h1>
        <p className="text-sm md:text-base mb-4">Selamat datang di Portal Kepulauan Riau, Dapatkan informasi dan layanan publik apapun seputar Provinsi Kepulauan Riau.</p>

        {/* Search Bar */}
        <div className="relative w-full max-w-sm flex items-center">
          <input type="text" placeholder="Silakan cari Informasi kat sini" className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-900 text-[12px] md:text-[14px] focus:outline-none" />
          <img src="/assets/search.png" alt="Search" className="absolute left-3 h-5 md:h-6 text-gray-500" />
          <button className="ml-2 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">Cari</button>
        </div>
      </div>

      {/* Highlights and Berita Section */}
      <div className="bg-white w-full py-8">
        <HighlightsBerita />
      </div>
    </div>
  );
}

export default HomePage;
