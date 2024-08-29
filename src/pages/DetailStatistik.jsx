/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdInsertDriveFile } from 'react-icons/md';

function Statistics() {
  const publications = [
    {
      title: 'Hasil Pencacahan Lengkap Sensus Pertanian 2023 - Tahap II: Usaha Pertanian Perorangan (UTP) Perikanan Provinsi Kepulauan Riau',
      date: '2024-08-23',
      size: '8.1 MB',
      link: '#',
    },
    {
      title: 'Hasil Pencacahan Lengkap Sensus Pertanian 2023 - Tahap II: Usaha Pertanian Perorangan (UTP) Tanaman Perkebunan Provinsi Kepulauan Riau',
      date: '2024-08-23',
      size: '9.14 MB',
      link: '#',
    },
    {
      title: 'Hasil Pencacahan Lengkap Sensus Pertanian 2023 - Tahap II: Usaha Pertanian Perorangan (UTP) Hortikultura Provinsi Kepulauan Riau',
      date: '2024-08-16',
      size: '8.95 MB',
      link: '#',
    },
    {
      title: 'Indikator Utama Provinsi Kepulauan Riau 2024',
      date: '2024-08-16',
      size: '3.54 MB',
      link: '#',
    },
  ];

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

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
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {publications.map((pub, index) => (
                <div key={index} className="flex items-start space-x-4 bg-gray-100 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      <MdInsertDriveFile className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">{pub.title}</h3>
                    <p className="text-sm text-gray-600">Tanggal Rilis: {pub.date}</p>
                    <p className="text-sm text-gray-600">Ukuran File: {pub.size}</p>
                    <a
                      href={pub.link}
                      className="text-green-600 hover:text-green-800 text-sm font-medium"
                    >
                      Unduh Publikasi
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Statistics;
