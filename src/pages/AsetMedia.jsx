/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mediaAssets = [
  {
    id: 1,
    title: 'FOTO FORMAL GUBERNUR DAN WAKIL GUBERNUR PROVINSI KEPULAUAN RIAU',
    images: [
      '/public/assets/ansar.jpg',
      '/public/assets/ansar.jpg',
      '/public/assets/ansar.jpg',
      '/public/assets/ansar.jpg',
      '/public/assets/ansar.jpg',
      '/public/assets/ansar.jpg',
    ],
    alt: 'Foto formal Gubernur dan Wakil Gubernur',
  },
  {
    id: 2,
    title: 'LOGO PROVINSI DAN KABUPATEN/KOTA DI PROVINSI KEPULAUAN RIAU',
    images: [
      '/public/assets/logo.png',
    ],
    alt: 'Logo Provinsi dan Kabupaten/Kota di Kepri',
  },
  {
    id: 3,
    title: 'FOTO CANDID GUBERNUR KEPULAUAN RIAU',
    images: [
      '/public/assets/candid.jpeg'
    ],
    alt: 'Foto candid Gubernur Kepulauan Riau',
  },
  {
    id: 4,
    title: 'FOTO FORMAL HJ DEWI KUMALASARI ANSAR - PKK - BKMT',
    images: [
      '/public/assets/budewi.png'
    ],
    alt: 'Foto formal Hj Dewi Kumalasari Ansar',
  },
  {
    id: 5,
    title: 'FOTO FORMAL SEKDA PROVINSI KEPULAUAN RIAU - ADI PRIHANTARA',
    images: [
      '/public/assets/sekda.PNG'
    ],
    alt: 'Foto formal Sekda Provinsi Kepulauan Riau - Adi Prihantara',
  },
  // Add more items as needed...
];

function AsetMedia() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <div className="bg-gray-50 pt-24 pb-8 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">Aset Media</h1>
          <p className="text-lg text-gray-600 mt-4">Kumpulan Foto Resmi dan Dokumentasi</p>
        </div>
      </div>

      {/* Media List Section */}
      <div className="container mx-auto px-4 py-8">
        <ul className="space-y-4">
          {mediaAssets.map((asset) => (
            <li key={asset.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={asset.images[0]} // Display the first image as a preview
                  alt={asset.alt}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <p className="text-gray-800 font-semibold">{asset.title}</p>
              </div>
              <Link
                to={`/gallery/${asset.id}`}
                className="bg-green-200 text-green-800 px-4 py-2 rounded-full transition hover:bg-green-300"
              >
                Lihat Dokumen
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default AsetMedia;
