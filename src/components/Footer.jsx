import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
        {/* About Section */}
        <div className="text-left">
          <h2 className="text-lg font-semibold mb-4">Portal Website OPD Pemprov Kepri</h2>
          <p className="text-sm">Portal ini dikembangkan dan dikelola oleh Dinas Komunikasi dan Informatika Provinsi Kepulauan Riau.</p>
        </div>

        {/* Address Section */}
        <div className="text-left">
          <h2 className="text-lg font-semibold mb-4">Alamat</h2>
          <p className="text-sm">Pusat Pemerintahan Provinsi Kepulauan Riau, Istana Kota Piring Gedung Sultan Mahmud Riayat Syah, Pulau Dompak, Kec. Bukit Bestari, Kota Tanjungpinang.</p>
          <p className="text-sm mt-2">
            Email:{' '}
            <a href="mailto:email@kepriprov.go.id" className="text-blue-400">
              email@kepriprov.go.id
            </a>
          </p>
          <p className="text-sm">
            Telepon:{' '}
            <a href="tel:0771-123456" className="text-blue-400">
              0771-123456
            </a>
          </p>
        </div>

        {/* Service Hours Section */}
        <div className="text-left md:text-right">
          <h2 className="text-lg font-semibold mb-4">Jam Layanan</h2>
          <ul className="text-sm space-y-2">
            <li>Senin - Kamis: 08:00 s/d 16:00</li>
            <li>Jumat: 08:00 s/d 15:00</li>
            <li>Sabtu - Minggu: Libur</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center border-t border-gray-700 mt-8 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Portal OPD Kepri. Developed by Amanda Dwi Mulyani & Sahra Fatimah Yasir</p>
      </div>
    </footer>
  );
}

export default Footer;
