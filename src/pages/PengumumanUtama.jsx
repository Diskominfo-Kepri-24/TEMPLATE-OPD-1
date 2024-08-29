import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

function PengumumanUtama() {
  const announcements = [
    {
      date: '19 AUG 24',
      source: 'BKD dan Korpri Provinsi Kepulauan Riau',
      title: 'Pengumuman Penerimaan Calon Pegawai Negeri Sipil (CPNS) di Lingkungan Pemerintah Provinsi Kepulauan Riau Tahun 2024',
    },
    {
      date: '30 JUL 24',
      source: 'Biro Administrasi Pimpinan Provinsi Kepulauan Riau',
      title: 'Surat Edaran Penyampaian Tema, Logo, dan Partisipasi Menyemarakkan Peringatan HUT Ke-79 Kemerdekaan RI Tahun 2024',
    },
    {
      date: '12 JUL 24',
      source: 'Badan Pengusahaan Kawasan Perdagangan Bebas dan Pelabuhan Bebas Bintan Wilayah Kota Tanjungpinang',
      title: 'Pengumuman Seleksi Calon Kepala Badan Pengusahaan Kawasan Perdagangan Bebas dan Pelabuhan Bebas Bintan Wilayah Kota Tanjungpinang',
    },
    {
      date: '14 MEI 24',
      source: 'Sekretariat Daerah Pemerintah Provinsi Kepulauan Riau',
      title: 'Pengumuman Hasil Seleksi Administrasi Calon Direktur PT. Pembangunan Kepri (Perseroda) Masa Jabatan 2024-2029',
    },
  ];

  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [filteredAnnouncements, setFilteredAnnouncements] = useState(announcements); // State for filtered announcements

  // Function to handle search input change
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter announcements based on the search term
    const filtered = announcements.filter((announcement) => announcement.title.toLowerCase().includes(term) || announcement.source.toLowerCase().includes(term));
    setFilteredAnnouncements(filtered);
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      {/* Header Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="py-20 mb-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Pengumuman Resmi</h1>
          <p className="text-lg">Dapatkan informasi terbaru dari Pemerintah Provinsi Kepulauan Riau</p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="container mx-auto px-6 flex flex-col lg:flex-row lg:gap-8">
        {/* Main Announcements List */}
        <div className="w-full lg:w-8/12 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Publikasi Pengumuman Resmi</h2>
          <div className="space-y-6">
            {filteredAnnouncements.map((announcement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white text-black rounded-lg shadow-md p-4 transition-transform duration-300 ease-in-out cursor-pointer"
                onClick={() => alert(`You clicked on: ${announcement.title}`)} // Example onClick action
              >
                <div className="bg-[#063970] text-white rounded-full inline-flex items-center px-3 py-1 text-lg font-bold">{announcement.date}</div>
                <div className="ml-4">
                  <p className="text-sm mb-1">Dari: {announcement.source}</p>
                  <p className="text-base font-semibold">{announcement.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar with Search */}
        <div className="w-full lg:w-4/12 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Pencarian Judul</h3>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch} // Bind input change to handleSearch
              placeholder="Tulis kata kunci lalu enter"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default PengumumanUtama;
