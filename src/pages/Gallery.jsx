/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sample media assets with Google Drive integration
const mediaAssets = [
  {
    id: 1,
    title: 'FOTO FORMAL GUBERNUR DAN WAKIL GUBERNUR PROVINSI KEPULAUAN RIAU',
    images: [
      {
        src: 'https://drive.google.com/uc?id=1bs0wSvogio5HUUU3nXjPcXO8_uZ8sh-0',
        link: 'https://drive.google.com/file/d/1bs0wSvogio5HUUU3nXjPcXO8_uZ8sh-0/view?usp=sharing'
      },
      {
        src: 'https://drive.google.com/uc?id=1bs0wSvogio5HUUU3nXjPcXO8_uZ8sh-0',
        link: 'https://drive.google.com/file/d/1bs0wSvogio5HUUU3nXjPcXO8_uZ8sh-0/view'
      }
    ],
    alt: 'Foto formal Gubernur dan Wakil Gubernur',
  },
  {
    id: 2,
    title: 'LOGO PROVINSI DAN KABUPATEN/KOTA DI PROVINSI KEPULAUAN RIAU',
    images: [
      {
        src: 'https://drive.google.com/uc?id=YOUR_GOOGLE_DRIVE_FILE_ID3',
        link: 'https://drive.google.com/file/d/FILE_ID3/view'
      },
    ],
    alt: 'Logo Provinsi dan Kabupaten/Kota di Kepri',
  },
  {
    id: 3,
    title: 'FOTO CANDID GUBERNUR KEPULAUAN RIAU',
    images: [
      {
        src: 'https://drive.google.com/uc?id=YOUR_GOOGLE_DRIVE_FILE_ID4',
        link: 'https://drive.google.com/file/d/FILE_ID4/view'
      }
    ],
    alt: 'Foto candid Gubernur Kepulauan Riau',
  },
  {
    id: 4,
    title: 'FOTO FORMAL HJ DEWI KUMALASARI ANSAR - PKK - BKMT',
    images: [
      {
        src: 'https://drive.google.com/uc?id=YOUR_GOOGLE_DRIVE_FILE_ID5',
        link: 'https://drive.google.com/file/d/FILE_ID5/view'
      }
    ],
    alt: 'Foto formal Hj Dewi Kumalasari Ansar',
  },
  {
    id: 5,
    title: 'FOTO FORMAL SEKDA PROVINSI KEPULAUAN RIAU - ADI PRIHANTARA',
    images: [
      {
        src: 'https://drive.google.com/uc?id=YOUR_GOOGLE_DRIVE_FILE_ID6',
        link: 'https://drive.google.com/file/d/FILE_ID6/view'
      }
    ],
    alt: 'Foto formal Sekda Provinsi Kepulauan Riau - Adi Prihantara',
  },
];

function Gallery() {
  const { id } = useParams();
  const asset = mediaAssets.find((item) => item.id === parseInt(id, 10));

  if (!asset) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Asset not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gray-50 pt-24 pb-8 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">{asset.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{asset.alt}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {asset.images.map((image, index) => (
            <a key={index} href={image.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-lg shadow-sm">
              <img src={image.src} alt={asset.alt} className="w-full h-full object-cover" />
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
