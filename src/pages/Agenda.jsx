import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdEvent } from 'react-icons/md';

function Agenda() {
  const [selectedMonth, setSelectedMonth] = useState('Juni');
  const [selectedYear, setSelectedYear] = useState('2023');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const years = ['2024', '2023', '2022'];

  const events = {
    Agustus: [{ date: '17 Agustus', title: 'HUT Kemerdekaan RI' }],
    September: [{ date: '24 September', title: 'HUT Provinsi Kepulauan Riau' }],
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
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
            <h1 className={`text-4xl font-extrabold text-gray-800 mt-4 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} duration-1000`}>Event & Agenda</h1>
          </div>

          <div className={`bg-white shadow-lg rounded-lg p-8 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} duration-1000 delay-200`}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
              <h2 className="text-2xl font-bold mb-4 sm:mb-0">Jadwal Tahun {selectedYear}</h2>
              <select className="p-3 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" value={selectedYear} onChange={handleYearChange}>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {months.map((month) => (
                <button
                  key={month}
                  className={`px-4 py-2 rounded-md font-medium text-center transition ${selectedMonth === month ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-green-100'}`}
                  onClick={() => handleMonthClick(month)}
                >
                  {month}
                </button>
              ))}
            </div>

            <div className="text-gray-500">
              {events[selectedMonth] && events[selectedMonth].length > 0 ? (
                events[selectedMonth].map((event, index) => (
                  <div key={index} className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center">
                        <MdEvent className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">
                  Tidak ada jadwal event atau agenda pada bulan {selectedMonth} {selectedYear}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Agenda;
