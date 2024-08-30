/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sample data
const galleryItems = [
  {
    id: 1,
    type: 'video',
    src: 'https://www.youtube.com/embed/PTNa5-9Os1k',
    title: 'Kunjungan Kerja dan Penyerahan Berbagai Bantuan Oleh Gubernur Kepri di Kota Batam',
    description: 'Kunjungan Kerja serta penyerahan berbagai bantuan kepada masyarakat di Kota Batam oleh Gubernur Kepulauan Riau Ansar Ahmad.',
    category: 'VIDEO',
  },
  {
    id: 2,
    type: 'image',
    src: '/public/assets/2tahun.PNG',
    title: '2 Tahun Kepemimpinan Ansar-Marlin',
    description: '2 Tahun Kepemimpinan Ansar-Marlin Maju Bersama Terwujudnya Kepri Makmur, Berdaya Saing & Berbudaya',
    category: 'FOTO',
  },
  {
    id: 3,
    type: 'video',
    src: 'https://www.youtube.com/embed/yLIExP02ytk',
    title: 'Selamat Ulang Tahun ke 67 Tahun "LEMBAGA ADMINISTRASI NEGARA" (LAN) Republik Indonesia',
    description: 'Semoga terus menjadi yang terdepan sebagai isntitusi pembelajaran berkelas dunia bagi Aparatur Sipil Negara yang Transformatif, Inovatif, dan menjadi penggerak utama dalam mewujudkan World Class Government menuju Indonesia emas 2045.',
    category: 'VIDEO',
  },
  {
    id: 4,
    type: 'image',
    src: '/public/assets/rumahsinggah.PNG',
    title: 'Peresmian Rumah Singgah Raja Ahmad Engku Haji Tua',
    description: 'Peresmian Rumah Singgah Raja Ahmad Engku Haji Tua dan Halal Bihalal Pemprov Kepri di Jakarta',
    category: 'FOTO',
  },
  // Add more items as needed...
];

function FotoVideo() {
  const [selectedCategory, setSelectedCategory] = useState('SEMUA');

  const filteredItems = selectedCategory === 'SEMUA'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <div className="bg-gray-50 pt-24 pb-8 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">Foto & Video</h1>
          <p className="text-lg text-gray-600 mt-4">Galeri Dokumentasi Kegiatan dan Event</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-4 text-center">
        <button
          className={`px-4 py-2 m-2 rounded-full ${selectedCategory === 'SEMUA' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedCategory('SEMUA')}
        >
          Semua
        </button>
        <button
          className={`px-4 py-2 m-2 rounded-full ${selectedCategory === 'FOTO' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedCategory('FOTO')}
        >
          Foto
        </button>
        <button
          className={`px-4 py-2 m-2 rounded-full ${selectedCategory === 'VIDEO' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedCategory('VIDEO')}
        >
          Video
        </button>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
            >
              {item.type === 'video' ? (
                <iframe
                  className="w-full h-48 object-cover"
                  src={item.src}
                  title={item.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-80"
                />
              )}
              <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full text-[10px]">
                {item.category}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FotoVideo;
