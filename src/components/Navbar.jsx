import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledToHighlights, setIsScrolledToHighlights] = useState(false);
  const [isScrolledToStatistics, setIsScrolledToStatistics] = useState(false);
  const [isScrolledToPengumuman, setIsScrolledToPengumuman] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false); // Untuk deteksi posisi scroll di footer

  const location = useLocation(); // Menangkap lokasi halaman saat ini

  // Deteksi jika halaman yang sedang dibuka adalah homepage
  const isHomePage = location.pathname === '/';

  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const highlightsSection = document.getElementById('highlights-section');
    const statisticsSection = document.getElementById('statistics-section');
    const pengumumanSection = document.getElementById('pengumuman-section');
    const footerSection = document.querySelector('footer'); // Deteksi posisi footer
    const navbarHeight = document.querySelector('nav').offsetHeight;

    if (highlightsSection) {
      const rect = highlightsSection.getBoundingClientRect();
      setIsScrolledToHighlights(rect.top <= navbarHeight && rect.bottom >= 0);
    }

    if (statisticsSection) {
      const rect = statisticsSection.getBoundingClientRect();
      setIsScrolledToStatistics(rect.top <= navbarHeight && rect.bottom >= 0);
    }

    if (pengumumanSection) {
      const rect = pengumumanSection.getBoundingClientRect();
      setIsScrolledToPengumuman(rect.top <= navbarHeight && rect.bottom >= 0);
    }

    // Deteksi jika pengguna berada di dekat atau di footer
    if (footerSection) {
      const rect = footerSection.getBoundingClientRect();
      setIsAtFooter(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  // Reset background saat kembali ke homepage
  useEffect(() => {
    if (isHomePage) {
      setIsScrolledToHighlights(false); // Reset status scroll saat kembali ke homepage
      setIsScrolledToStatistics(false);
      setIsScrolledToPengumuman(false);
      window.scrollTo(0, 0); // Pindahkan scroll ke atas halaman saat kembali ke homepage
    }
  }, [isHomePage]);

  useEffect(() => {
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  // Fungsi untuk scroll ke atas ketika "Beranda" diklik
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pengaturan warna background navbar berdasarkan halaman dan kondisi scroll
  const navbarBackgroundClass = isMobileMenuOpen
    ? 'bg-[#063970] text-white'
    : isHomePage
    ? isScrolledToHighlights || isScrolledToStatistics || isScrolledToPengumuman || isAtFooter // Navbar biru di footer
      ? 'bg-[#173D80] text-white shadow-lg'
      : 'bg-transparent text-white'
    : 'bg-[#173D80] text-white shadow-lg'; // Navbar biru untuk halaman selain homepage

  return (
    <nav className={`py-2 px-4 md:flex md:items-center md:justify-between w-full z-50 fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${navbarBackgroundClass}`}>
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/" onClick={scrollToTop}>
          <img src="/assets/tulisan.png" alt="Logo" className="h-6 md:h-14 transition-all duration-500 ease-in-out" />
        </Link>
        <button className="block md:hidden focus:outline-none" onClick={toggleMobileMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMobileMenuOpen ? <path fillRule="evenodd" clipRule="evenodd" d="M6 18L18 6M6 6l12 12" /> : <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />}
          </svg>
        </button>
      </div>

      <div className={`md:flex md:items-center md:space-x-6 mt-4 md:mt-0 ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
        {/* Beranda */}
        <div className="relative navbar-item">
          <Link to="/" className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${isHomePage ? 'bg-transparent text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`} onClick={scrollToTop}>
            Beranda
          </Link>
        </div>

        {/* Pemerintahan */}
        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('pemerintahan')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'pemerintahan' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Pemerintahan
          </button>
          {activeDropdown === 'pemerintahan' && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
              <Link to="/sejarah" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Sejarah
              </Link>
              <Link to="/visi-misi" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Visi dan Misi
              </Link>
              <Link to="/logo" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Logo
              </Link>
              <Link to="/perangkat-daerah" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Perangkat Daerah
              </Link>
              <Link to="/kepala-daerah" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Kepala Daerah
              </Link>
            </div>
          )}
        </div>

        {/* Layanan */}
        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('layanan')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'layanan' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Layanan
          </button>
        </div>

        {/* Informasi Publik */}
        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('informasiPublik')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'informasiPublik' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Informasi Publik
          </button>
          {activeDropdown === 'informasiPublik' && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
              <Link to="/berita" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Berita
              </Link>
              <Link to="/pengumuman" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Pengumuman
              </Link>
              <Link to="/agenda" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Agenda
              </Link>
              <Link to="/statistik" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Statistik
              </Link>
            </div>
          )}
        </div>

        {/* Dokumen & Peraturan */}
        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('Dokumen&Peraturan')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'Dokumen&Peraturan' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Dokumen & Peraturan
          </button>
          {activeDropdown === 'Dokumen&Peraturan' && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
              <Link to="/apbd-2024" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Perda APBD 2024
              </Link>
              <Link to="/apbd-2023" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Perda APBD 2023
              </Link>
              <Link to="/apbd-2022" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                APBD Kepri 2022
              </Link>
              <Link to="/opini-bpk" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Opini BPK RI 2023
              </Link>
              <Link to="/ipkd-report" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Laporan IPKD
              </Link>
              <Link to="/produk-hukum" className="block px-4 py-2 hover:bg-[#173D80] hover:text-white">
                Produk Hukum (JDIH)
              </Link>
            </div>
          )}
        </div>

        {/* Gallery */}
        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('gallery')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'gallery' ? 'bg-[#173D80] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#173D80]'}`}
          >
            Gallery
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
