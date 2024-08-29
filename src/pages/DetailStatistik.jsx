/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Statistics() {
  const [searchTerm, setSearchTerm] = useState('');

  const publications = [
    {
      title: 'Hasil Pencacahan Lengkap Sensus Pertanian 2023 - Tahap II: Usaha Pertanian Perorangan (UTP) Perikanan Provinsi Kepulauan Riau',
      date: '2024-08-23',
      size: '8.1 MB',
      link: 'https://webapi.bps.go.id/download.php?f=UHvG7kd6FfGVq7GsCXLWrGhkZGpUTVUxanJKMW1ubE1aOUk1TmlENmFnQzVYbDZxNS9od3Mycktkdk40T3hXcVhtWFJDUU9BQksxQWtkN2Zpbm1GVG82RTZLallCOHdkS2ZZNG0yWnNsYTFXYmZFWkdZR2luR1p5NWYyOXdBTHZleFFnUFh3Z1MvZDZDMlZpUFFqaWRlYk9pS3hoT1hJbnRnbEoxS3BsZW91STduSEJCU2dENERuUzluODdXTDVqc2NoSERYR3BHUUxKTnpUWTJyV01iWWVWUEp5YStkWG5LM0grSDdoU3RDQXhKSjNIbmprYjdTanJSK1JqV2ZaTEhjUGZrY3JWZFgwZGdoMURIblRuQ3dDSTg4TlFrMldUYWNBT01ETlNyRTFvTUdVS2ZWYSt2ZFA1MzhSVkppdTBRREJkMEVHRkNtbWQxajhrbUVCWCtaeXNLY1pvVUNYSTFia0FReUowbkg2aEt2WnhMNURPOS9WUTlvU1RDMm1FSEJTcm1ib2VRNTNnbDFHZQ==',
      image: '/public/assets/statistik1.PNG', // link gambar yang sesuai
    },
    {
      title: 'Hasil Pencacahan Lengkap Sensus Pertanian 2023 - Tahap II: Usaha Pertanian Perorangan (UTP) Tanaman Perkebunan Provinsi Kepulauan Riau',
      date: '2024-08-23',
      size: '9.14 MB',
      link: '#',
      image: '/public/assets/statistik1.PNG', // link gambar yang sesuai
    },
    {
      title: 'Hasil Pencacahan Lengkap Sensus Pertanian 2023 - Tahap II: Usaha Pertanian Perorangan (UTP) Hortikultura Provinsi Kepulauan Riau',
      date: '2024-08-16',
      size: '8.95 MB',
      link: '#',
      image: '/public/assets/statistik1.PNG', // link gambar yang sesuai
    },
    {
      title: 'Indikator Utama Provinsi Kepulauan Riau 2024',
      date: '2024-08-16',
      size: '3.54 MB',
      link: '#',
      image: '/public/assets/statistik1.PNG', // link gambar yang sesuai
    },
  ];

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Filter publications based on search term
  const filteredPublications = publications.filter((pub) => pub.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <nav className="text-sm text-gray-500">
              <Link to="/">Beranda</Link> &bull;
              {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                  <span key={to}>
                    &nbsp;
                    <Link to={to}>{value.replace(/-/g, ' ').charAt(0).toUpperCase() + value.replace(/-/g, ' ').slice(1)}</Link>
                    &nbsp;
                    {index < pathnames.length - 1 && <span>&bull;</span>}
                  </span>
                );
              })}
            </nav>
            <h1 className="text-4xl font-extrabold text-gray-800 mt-4">Publikasi Statistik</h1>
            <div className="mt-4">
              <input type="text" placeholder="Tulis kata kunci lalu enter" className="border border-gray-300 rounded-lg py-2 px-4 w-full sm:w-1/2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-lg p-8">
                {filteredPublications.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredPublications.map((pub, index) => (
                      <div key={index} className="flex flex-col bg-gray-100 p-4 rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
                        <div className="w-full h-48 mb-4">
                          <img src={pub.image} alt={pub.title} className="w-full h-full object-cover rounded-md" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{pub.title}</h3>
                        <p className="text-sm text-gray-600">Tanggal Rilis: {pub.date}</p>
                        <p className="text-sm text-gray-600">Ukuran File: {pub.size}</p>
                        <a href={pub.link} className="text-green-600 hover:text-green-800 text-sm font-medium mt-2">
                          Unduh Publikasi
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-600">Tidak ada publikasi yang sesuai dengan pencarian Anda.</p>
                )}
              </div>
            </div>

            {/* Sitemap Publikasi on the Right */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-xl font-bold text-gray-800">Sitemap Publikasi</h2>
                <ul className="mt-4 text-sm text-gray-600 space-y-2">
                  <li>
                    <Link to="#" className="hover:underline">
                      Semua Berita (5551)
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Pemprov Kepri (3635)
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Gubernur (1077)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Statistics;
