import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PerangkatDaerah() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const daerahList = [
    { name: 'Kota Tanjung Pinang', image: '/assets/tanjungpinang.png', color: 'bg-blue-200', link: 'https://www.tanjungpinangkota.go.id/' },
    { name: 'Kota Batam', image: '/assets/batam.png', color: 'bg-yellow-200', link: 'https://batam.go.id/' },
    { name: 'Kabupaten Karimun', image: '/assets/karimun.png', color: 'bg-green-200', link: 'https://karimunkab.go.id/' },
    { name: 'Kabupaten Lingga', image: '/assets/lingga.png', color: 'bg-red-200' },
    { name: 'Kabupaten Natuna', image: '/assets/natuna.png', color: 'bg-purple-200' },
    { name: 'Kabupaten Kepulauan Anambas', image: '/assets/anambas.jpg', color: 'bg-pink-200' },
    { name: 'Kabupaten Bintan', image: '/assets/bintan.png', color: 'bg-orange-200' },
  ];

  const opdList = [
    { title: 'BADAN PERENCANAAN, PENELITIAN DAN PENGEMBANGAN', icon: '/assets/lingga.png' },
    { title: 'BADAN KEUANGAN DAN ASET DAERAH', icon: '/assets/lingga.png' },
    { title: 'BADAN KEPEGAWAIAN DAERAH DAN KORPRI PROVINSI KEPULAUAN RIAU', icon: '/assets/lingga.png' },
    { title: 'BADAN PENGEMBANGAN SUMBER DAYA MANUSIA', icon: '/assets/lingga.png' },
    { title: 'BADAN PENDAPATAN DAERAH', icon: '/assets/lingga.png' },
    { title: 'BADAN KESATUAN BANGSA DAN POLITIK', icon: '/assets/lingga.png' },
    { title: 'BADAN PENGELOLA PERBATASAN DAERAH', icon: '/assets/lingga.png' },
    { title: 'BADAN PENANGGULANGAN BENCANA DAERAH', icon: '/assets/lingga.png' },
    { title: 'BADAN PENGHUBUNG DAERAH', icon: '/assets/lingga.png' },
    { title: 'DINAS PENDIDIKAN', icon: '/assets/lingga.png' },
    { title: 'DINAS KESEHATAN', icon: '/assets/lingga.png' },
    { title: 'DINAS PEKERJAAN UMUM, PENATAAN RUANG DAN PERTANAHAN', icon: '/assets/lingga.png' },
    { title: 'DINAS PERUMAHAN DAN KAWASAN PERMUKIMAN', icon: '/assets/lingga.png' },
    { title: 'DINAS SOSIAL', icon: '/assets/lingga.png' },
    { title: 'DINAS PELAYANAN MODAL DAN PELAYANAN TERPADU SATU PINTU', icon: '/assets/lingga.png' },
    { title: 'DINAS LINGKUNGAN HIDUP DAN KEHUTANAN', icon: '/assets/lingga.png' },
    { title: 'Plt. DINAS PEMBERDAYAAN MASYARAKAT DAN DESA, KEPENDUDUKAN...', icon: '/assets/lingga.png' },
    { title: 'DINAS PANGAN, PERTANIAN DAN KESEHATAN HEWAN', icon: '/assets/lingga.png' },
    { title: 'DINAS TENAGA KERJA DAN TRANSMIGRASI', icon: '/assets/lingga.png' },
    { title: 'DINAS PERPUSTAKAAN DAN KEARSIPAN', icon: '/assets/lingga.png' },
    { title: 'SEKRETARIAT DPRD', icon: '/assets/lingga.png' },
    { title: 'DINAS PEMBERDAYAAN PEREMPUAN PERLINDUNGAN ANAK, PENGENDALIAN...', icon: '/assets/lingga.png' },
    { title: 'DINAS PERHUBUNGAN', icon: '/assets/lingga.png' },
    { title: 'DINAS KELAUTAN DAN PERIKANAN', icon: '/assets/lingga.png' },
    { title: 'DINAS PARIWISATA', icon: '/assets/lingga.png' },
    { title: 'DINAS KEBUDAYAAN', icon: '/assets/lingga.png' },
    { title: 'DINAS PERINDUSTRIAN DAN PERDAGANGAN', icon: '/assets/lingga.png' },
    { title: 'DINAS ENERGI DAN SUMBERDAYA MINERAL', icon: '/assets/lingga.png' },
    { title: 'DINAS KEPEMUDAAN DAN OLAHRAGA', icon: '/assets/lingga.png' },
    { title: 'DINAS KOMUNIKASI DAN INFORMATIKA', icon: '/assets/lingga.png' },
    { title: 'SATUAN POLISI PAMONG PRAJA DAN PENANGGULANGAN KEBAKARAN', icon: '/assets/lingga.png' },
    { title: 'INSPEKTORAT', icon: '/assets/lingga.png' },
    { title: 'BIRO PEMERINTAHAN DAN OTONOMI DAERAH SETDA', icon: '/assets/lingga.png' },
    { title: 'BIRO PEREKONOMIAN DAN PEMBANGUNAN', icon: '/assets/lingga.png' },
    { title: 'BIRO KESEJAHTERAAN RAKYAT SETDA', icon: '/assets/lingga.png' },
    { title: 'BIRO ORGANISASI SEKRETARIAT DAERAH', icon: '/assets/lingga.png' },
    { title: 'BIRO HUKUM SETDA', icon: '/assets/lingga.png' },
    { title: 'BIRO UMUM SEKRETARIAT DAERAH', icon: '/assets/lingga.png' },
    { title: 'BIRO ADMINISTRASI PIMPINAN SETDA', icon: '/assets/lingga.png' },
    { title: 'BIRO PENGADAAN BARANG DAN JASA SEKRETARIAT DAERAH', icon: '/assets/lingga.png' },
    { title: 'RSUP RAJA AHMAD TABIB PROVINSI KEPULAUAN RIAU', icon: '/assets/lingga.png' },
    { title: 'RSUD ENGKU HAJI DAUD', icon: '/assets/lingga.png' },
    { title: 'KOMISI INFORMASI PROVINSI KEPULAUAN RIAU', icon: '/assets/lingga.png' },
    { title: 'KOMISI PENYIARAN DAERAH PROVINSI KEPULAUAN RIAU', icon: '/assets/lingga.png' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F5F7F8] to-[#E2E8F0]">
      <Navbar />

      <div className={`pt-24 pb-8 px-8 transition-opacity duration-1000 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Kabupaten/Kota Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h1 className={`text-3xl font-bold text-center mb-12 text-gray-800 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} duration-1000`}>Kabupaten/Kota</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {daerahList.map((daerah, index) => (
              <a
                key={index}
                href={daerah.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-3 rounded-lg shadow-lg transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-${index * 200} cursor-pointer ${
                  daerah.color
                }`}
              >
                <img src={daerah.image} alt={`${daerah.name} logo`} className="w-12 h-12 object-contain mr-3" />
                <h2 className="text-md font-semibold text-gray-700 text-left">{daerah.name}</h2>
              </a>
            ))}
          </div>
        </div>

        {/* OPD Provinsi Kepulauan Riau Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className={`text-3xl font-bold text-center mb-12 text-gray-800 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} duration-1000`}>OPD Provinsi Kepulauan Riau</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {opdList.map((opd, index) => (
              <div
                key={index}
                className={`flex items-center p-3 bg-white rounded-lg shadow-lg transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-${index * 200} cursor-pointer`}
              >
                <img src={opd.icon} alt={`${opd.title} icon`} className="w-12 h-12 object-contain mr-3" />
                <h2 className="text-md font-semibold text-gray-700 text-left">{opd.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PerangkatDaerah;
