import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LayananPublik() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const layananList = [
    {
      category: 'Layanan PPID Pemerintah Provinsi Kepulauan Riau',
      services: [
        {
          title: 'Permohonan Informasi',
          description: 'Sampaikan permohonan informasi secara online dengan baik dan benar',
          icon: '/assets/logo.png', // Replace with actual path
        },
        {
          title: 'Daftar Informasi Publik',
          description: 'Lihat daftar Instansi tujuan atau PPID Pelaksana di Provinsi Kepulauan Riau',
          icon: '/assets/logo.png',
        },
        {
          title: 'Daftar PPID Pelaksana',
          description: 'Harap cek daftar informasi sebelum mengajukan permintaan informasi',
          icon: '/assets/logo.png',
        },
      ],
    },
    {
      category: 'Layanan Administrasi Pemerintahan Berbasis Elektronik',
      services: [
        {
          title: 'SIMANJA Kepri',
          description: 'Sistem Informasi Manajemen Kinerja Pemerintah Provinsi Kepulauan Riau',
          icon: '/assets/bintan.png',
        },
        {
          title: 'SIAP Kepri',
          description: 'Sistem Informasi Aktivitas Presensi Pemerintah Provinsi Kepulauan Riau',
          icon: '/assets/bintan.png',
        },
        {
          title: 'SIAAPE Kepri',
          description: 'Sistem Aplikasi Administrasi Pemerintahan Elektronik Provinsi Kepulauan Riau',
          icon: '/assets/bintan.png',
        },
        {
          title: 'SIJABAT Kepri',
          description: 'Sistem Informasi Jabatan di Pemerintahan Provinsi Kepulauan Riau',
          icon: '/assets/bintan.png',
        },
        {
          title: 'Si-Desi Kepri',
          description: 'Sistem Informasi Helpdesk Pemerintah Provinsi Kepulauan Riau',
          icon: '/assets/bintan.png',
        },
        {
          title: 'Tanda Tangan Elektronik (TTE)',
          description: 'Tanda Tangan Elektronik (TTE) Aparatur Sipil Negara (ASN)',
          icon: '/assets/bintan.png',
        },
      ],
    },
    {
      category: 'Pelayanan Masyarakat Berbasis Elektronik',
      services: [
        {
          title: 'LPSE Kepri',
          description: 'Layanan Pengadaan Secara Elektronik di Provinsi Kepulauan Riau',
          icon: '/assets/tanjungpinang.png',
        },
        {
          title: 'SiRUP Versi 4',
          description: 'Sistem Informasi Umum Pengadaan',
          icon: '/assets/tanjungpinang.png',
        },
        {
          title: 'Toko Daring LKPP',
          description: 'Pelayanan masyarakat secara online untuk kemudahan akses informasi dan layanan',
          icon: '/assets/tanjungpinang.png',
        },
        {
          title: 'Gema Ekraf Kepri',
          description: 'Pelayanan masyarakat secara online untuk kemudahan akses informasi dan layanan',
          icon: '/assets/tanjungpinang.png',
        },
        {
          title: 'SIP MTQ Kepri',
          description: 'Pelayanan masyarakat secara online untuk kemudahan akses informasi dan layanan',
          icon: '/assets/tanjungpinang.png',
        },
        // Add more services here if needed
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className={`pt-24 pb-8 px-8 transition-opacity duration-1000 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Daftar Layanan Publik</h1>

        {layananList.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.services.map((service, idx) => (
                <div key={idx} className="flex items-center p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 transition-transform transform hover:scale-105">
                  <img src={service.icon} alt={`${service.title} icon`} className="w-16 h-16 object-contain mr-4" />
                  <div>
                    <h3 className="text-md font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* New Lapor Box Section */}
        <div className="flex justify-center items-center mt-12">
          <div className="w-full max-w-4xl p-8 bg-white text-center rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Punya Keluhan Terhadap Layanan Pemerintah Kepri?</h2>
            <p className="text-gray-600 mb-6">Sampaikan aspirasi dan pengaduan Anda tentang layanan publik di Pemerintah Provinsi Kepulauan Riau.</p>
            <a href="https://kepri.lapor.go.id" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              LAPOR SEKARANG
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LayananPublik;
