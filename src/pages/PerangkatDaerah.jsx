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
    { title: 'BADAN PERENCANAAN, PENELITIAN DAN PENGEMBANGAN', icon: '/path/to/icon1.png' },
    { title: 'BADAN KEUANGAN DAN ASET DAERAH', icon: '/path/to/icon2.png' },
    { title: 'BADAN KEPEGAWAIAN DAERAH DAN KORPRI PROVINSI KEPULAUAN RIAU', icon: '/path/to/icon3.png' },
    { title: 'BADAN PENGEMBANGAN SUMBER DAYA MANUSIA', icon: '/path/to/icon4.png' },
    { title: 'BADAN PENDAPATAN DAERAH', icon: '/path/to/icon5.png' },
    { title: 'BADAN KESATUAN BANGSA DAN POLITIK', icon: '/path/to/icon6.png' },
    { title: 'BADAN PENGELOLA PERBATASAN DAERAH', icon: '/path/to/icon7.png' },
    { title: 'BADAN PENANGGULANGAN BENCANA DAERAH', icon: '/path/to/icon8.png' },
    { title: 'BADAN PENGHUBUNG DAERAH', icon: '/path/to/icon9.png' },
    { title: 'DINAS PENDIDIKAN', icon: '/path/to/icon10.png' },
    { title: 'DINAS KESEHATAN', icon: '/path/to/icon11.png' },
    { title: 'DINAS PEKERJAAN UMUM, PENATAAN RUANG DAN PERTANAHAN', icon: '/path/to/icon12.png' },
    { title: 'DINAS PERUMAHAN DAN KAWASAN PERMUKIMAN', icon: '/path/to/icon13.png' },
    { title: 'DINAS SOSIAL', icon: '/path/to/icon14.png' },
    { title: 'DINAS PELAYANAN MODAL DAN PELAYANAN TERPADU SATU PINTU', icon: '/path/to/icon14.png' },
    { title: 'DINAS LINGKUNGAN HIDUP DAN KEHUTANAN', icon: '/path/to/icon14.png' },
    { title: 'Plt. DINAS PEMBERDAYAAN MASYARAKAT DAN DESA, KEPENDUDUKAN...', icon: '/path/to/icon15.png' },
    { title: 'DINAS PANGAN, PERTANIAN DAN KESEHATAN HEWAN', icon: '/path/to/icon13.png' },
    { title: 'DINAS TENAGA KERJA DAN TRANSMIGRASI', icon: '/path/to/icon14.png' },
    { title: 'DINAS PERPUSTAKAAN DAN KEARSIPAN', icon: '/path/to/icon15.png' },
    { title: 'SEKRETARIAT DPRD', icon: '/path/to/icon15.png' },
    { title: 'DINAS PEMBERDAYAAN PEREMPUAN PERLINDUNGAN ANAK, PENGENDALIAN...', icon: '/path/to/icon15.png' },
    { title: 'DINAS PERHUBUNGAN', icon: '/path/to/icon15.png' },
    { title: 'DINAS KELAUTAN DAN PERIKANAN', icon: '/path/to/icon15.png' },
    { title: 'DINAS PARIWISATA', icon: '/path/to/icon15.png' },
    { title: 'DINAS KEBUDAYAAN', icon: '/path/to/icon15.png' },
    { title: 'DINAS PERINDUSTRIAN DAN PERDAGANGAN', icon: '/path/to/icon15.png' },
    { title: 'DINAS ENERGI DAN SUMBERDAYA MINERAL', icon: '/path/to/icon15.png' },
    { title: 'DINAS KEPEMUDAAN DAN OLAHRAGA', icon: '/path/to/icon15.png' },
    { title: 'DINAS KOMUNIKASI DAN INFORMATIKA', icon: '/path/to/icon15.png' },
    { title: 'SATUAN POLISI PAMONG PRAJA DAN PENANGGULANGAN KEBAKARAN', icon: '/path/to/icon15.png' },
    { title: 'INSPEKTORAT', icon: '/path/to/icon15.png' },
    { title: 'BIRO PEMERINTAHAN DAN OTONOMI DAERAH SETDA', icon: '/path/to/icon15.png' },
    { title: 'BIRO PEREKONOMIAN DAN PEMBANGUNAN', icon: '/path/to/icon15.png' },
    { title: 'BIRO KESEJAHTERAAN RAKYAT SETDA', icon: '/path/to/icon15.png' },
    { title: 'BIRO ORGANISASI SEKRETARIAT DAERAH', icon: '/path/to/icon15.png' },
    { title: 'BIRO HUKUM SETDA', icon: '/path/to/icon15.png' },
    { title: 'BIRO UMUM SEKRETARIAT DAERAH', icon: '/path/to/icon15.png' },
    { title: 'BIRO ADMINISTRASI PIMPINAN SETDA', icon: '/path/to/icon15.png' },
    { title: 'BIRO PENGADAAN BARANG DAN JASA SEKRETARIAT DAERAH', icon: '/path/to/icon15.png' },
    { title: 'RSUP RAJA AHMAD TABIB PROVINSI KEPULAUAN RIAU', icon: '/path/to/icon15.png' },
    { title: 'RSUD ENGKU HAJI DAUD', icon: '/path/to/icon15.png' },
    { title: 'KOMISI INFORMASI PROVINSI KEPULAUAN RIAU', icon: '/path/to/icon15.png' },
    { title: 'KOMISI PENYIARAN DAERAH PROVINSI KEPULAUAN RIAU', icon: '/path/to/icon15.png' },
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
                } hover:scale-105 bg-white`}
              >
                <img src={daerah.image} alt={`${daerah.name} logo`} className="w-12 h-12 object-contain mr-3" />
                <h2 className="text-md font-semibold text-gray-700 text-left">{daerah.name}</h2>
              </a>
            ))}
          </div>
        </div>

        {/* OPD Provinsi Kepulauan Riau Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">OPD Provinsi Kepulauan Riau</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opdList.map((opd, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 transition-transform transform hover:scale-105">
                <img src={opd.icon} alt={`${opd.title} icon`} className="w-12 h-12 object-contain mb-4" />
                <h3 className="text-sm font-semibold text-gray-700 text-center">{opd.title}</h3>
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
