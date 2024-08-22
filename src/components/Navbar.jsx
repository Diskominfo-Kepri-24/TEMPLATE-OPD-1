import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledToHighlights, setIsScrolledToHighlights] = useState(false);

  const handleDropdownClick = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.navbar-item') && activeDropdown) {
      setActiveDropdown(null);
    }
  };

  const handleScroll = () => {
    const highlightsSection = document.getElementById('highlights-section');
    const navbarHeight = document.querySelector('nav').offsetHeight;

    if (highlightsSection) {
      const rect = highlightsSection.getBoundingClientRect();
      if (rect.top <= navbarHeight && rect.bottom >= 0) {
        setIsScrolledToHighlights(true);
      } else {
        setIsScrolledToHighlights(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeDropdown]);

  return (
    <nav
      className={`py-2 px-4 md:flex md:items-center md:justify-between w-full z-50 fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'bg-white text-gray-900' : isScrolledToHighlights ? 'bg-[#0176FF] text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center w-full md:w-auto">
        {/* Logo */}
        <img src="/assets/tulisan.png" alt="Logo" className="h-6 md:h-14 transition-all duration-500 ease-in-out" />

        {/* Mobile menu toggle button */}
        <button className="block md:hidden focus:outline-none" onClick={toggleMobileMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMobileMenuOpen ? <path fillRule="evenodd" clipRule="evenodd" d="M6 18L18 6M6 6l12 12" /> : <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />}
          </svg>
        </button>
      </div>

      <div className={`md:flex md:items-center md:space-x-6 mt-4 md:mt-0 ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('beranda')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'beranda' ? 'bg-[#0075FF] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#0075FF]'}`}
          >
            Beranda
          </button>
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('pemerintahan')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'pemerintahan' ? 'bg-[#0075FF] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#0075FF]'}`}
          >
            Pemerintahan
          </button>
          {activeDropdown === 'pemerintahan' && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
              <a href="#" className="block px-4 py-2 hover:bg-[#0075FF] hover:text-white">
                Sejarah
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-[#0075FF] hover:text-white">
                Visi dan Misi
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-[#0075FF] hover:text-white">
                Logo
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-[#0075FF] hover:text-white">
                Perangkat Daerah
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-[#0075FF] hover:text-white">
                Kepala Daerah
              </a>
            </div>
          )}
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('layanan')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'layanan' ? 'bg-[#0075FF] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#0075FF]'}`}
          >
            Layanan
          </button>
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('informasiPublik')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'informasiPublik' ? 'bg-[#0075FF] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#0075FF]'}`}
          >
            Informasi Publik
          </button>
          {activeDropdown === 'informasiPublik' && (
            <div className="absolute left-0 mt-2 py-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
              <a href="#" className="block px-4 py-2 hover:bg-[#0075FF] hover:text-white">
                Berita
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-[#0075FF] hover:text-white">
                Pengumuman
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-[#0075FF] hover:text-white">
                Agenda
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-[#0075FF] hover:text-white">
                Statistik
              </a>
            </div>
          )}
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('programKegiatan')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'programKegiatan' ? 'bg-[#0075FF] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#0075FF]'}`}
          >
            Dokumen & Peraturan
          </button>
        </div>

        <div className="relative navbar-item">
          <button
            onClick={() => handleDropdownClick('gallery')}
            className={`font-medium focus:outline-none px-2 py-1 rounded transition-colors duration-300 ${activeDropdown === 'gallery' ? 'bg-[#0075FF] text-white' : 'hover:bg-[#f0f0f0] hover:text-[#0075FF]'}`}
          >
            Gallery
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
