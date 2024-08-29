/* eslint-disable-next-line no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const newsArticles = [
  { id: 1, image: '/assets/walkotpinang.jpeg', category: 'PEMERINTAH', date: '28/08/2024 13:23', author: 'Amanda DM', views: 19, title: 'Terima Bankeu Pemprov Kaltim Rp 371 Miliar, Pemkab' },
  { id: 2, image: '/assets/babakbelur.jpeg', category: 'PEMERINTAH', date: '28/08/2024 12:14', author: 'Amanda DM', views: 25, title: 'Gubernur Ansar Tegaskan Komitmen Anti-Korupsi: Fokus pada Perizinan dan Pengadaan Barang di Kepri' },
  { id: 3, image: '/assets/bp3r.jpg', category: 'BERITA', date: '28/08/2024 12:00', author: 'Sahra Yasir', views: 14, title: 'Silahturahmi Ke Batu Aji, Gubernur Ansar: SPP Gratis Untuk SMA Sudah Berlaku' },
  { id: 4, image: '/assets/bobol.jpeg', category: 'TEKNOLOGI', date: '28/08/2024 12:00', author: 'Sahra Yasir', views: 14, title: 'Gubernur Ansar Buka Rakor Pengawas Desa 2024: Wujudkan Pengelolaan Dana Desa yang Efektif dan Transparan' },
  // Add more articles with different categories...
];

const popularPosts = [
  { id: 1, image: '/assets/tongkang.jpeg', title: 'Gubernur Ansar Dampingi Menhan Prabowo Hadiri Grand Opening Of New Building 3 PT Volex Indonesia', views: 15520, date: '15/11/2017 10:30' },
  { id: 2, image: '/assets/tongkang.jpeg', title: 'Pemprov Kepri Terapkan Program Pemutihan Pajak Kendaraan Bermotor', views: 5504, date: '25/10/2017 23:17' },
  { id: 3, image: '/assets/tongkang.jpeg', title: 'Persiapan Matang, Rangkaian Acara Peringatan HUT ke-79 Kemerdekaan RI Tingkat Provinsi Kepri Siap Dilaksanakan', views: 4222, date: '20/10/2017 10:08' },
  { id: 4, image: '/assets/tongkang.jpeg', title: 'Gubernur Ansar dan Seluruh Kepala Daerah se-Indonesia Diberi Pengarahan Presiden Jokowi di IKN', views: 4222, date: '20/10/2017 10:08' },
  { id: 5, image: '/assets/tongkang.jpeg', title: 'Gubernur Ansar Jamin Pilkada Serentak 2024 di Kepri Berjalan Lancar, Aman, dan Adil', views: 4222, date: '20/10/2017 10:08' },
  // Add more popular posts here...
];

const categories = ['Semua', 'Pemerintah', 'Berita', 'Teknologi']; // Add more categories as needed

function Berita() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [filteredArticles, setFilteredArticles] = useState(newsArticles);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Filter articles based on the selected category
    if (selectedCategory === 'Semua') {
      setFilteredArticles(newsArticles);
    } else {
      setFilteredArticles(newsArticles.filter((article) => article.category.toUpperCase() === selectedCategory.toUpperCase()));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb and Title Section */}
      <div className="bg-gray-50 pt-24 pb-8 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:underline">Beranda</Link> &bull;
            <span className="ml-2">Berita</span>
          </nav>
          <h1 className={`text-3xl font-bold text-gray-800 mt-4 transition-opacity duration-700 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>Berita</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={`pt-8 pb-8 px-8 transition-opacity duration-1000 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Articles */}
          <div className={`md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-transform duration-700 ease-in-out ${isMounted ? 'transform translate-y-0' : 'transform translate-y-10'}`}>
            {filteredArticles.map((article, index) => (
              <div
                key={article.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:bg-gray-100 cursor-pointer`}
                style={{ height: '280px', animationDelay: `${index * 0.1}s`, opacity: isMounted ? 1 : 0, transition: `opacity 0.5s ease ${index * 0.1}s` }}
              >
                <img src={article.image} alt={article.title} className="w-full h-2/3 object-cover rounded-t-xl" />
                <div className="p-3 h-1/3 overflow-hidden flex flex-col justify-between">
                  <span className="inline-block bg-blue-200 text-blue-800 text-xs px-1.5 py-0.5 rounded-full mb-1 max-w-max">{article.category}</span>
                  <div className="text-[10px] text-gray-500 mb-1">
                    <span>{article.date}</span> | <span>{article.author}</span> | <span>{article.views} views</span>
                  </div>
                  <h2 className="text-xs font-semibold text-gray-800 leading-tight">{article.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar for Popular Posts */}
          <aside className={`bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between transition-transform duration-700 ease-in-out ${isMounted ? 'transform translate-y-0' : 'transform translate-y-10'}`}>
            <div className="overflow-y-auto max-h-96">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Popular posts</h2>
              <ul>
                {popularPosts.map((post, index) => (
                  <li key={post.id} className={`flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded transition-transform transform hover:scale-105`} style={{ opacity: isMounted ? 1 : 0, transition: `opacity 0.5s ease ${index * 0.1}s` }}>
                    <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded mr-4" />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">{post.title}</h3>
                      <div className="text-xs text-gray-500">
                        <span>{post.views} views</span> | <span>{post.date}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Section Under Popular Posts */}
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Kategori</h3>
              <div className="flex flex-wrap gap-2 max-w-xs">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-1 text-sm rounded-full whitespace-nowrap ${selectedCategory === category ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'} transition-transform transform hover:scale-105`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Berita;
