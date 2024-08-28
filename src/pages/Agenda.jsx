/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary

function Agenda() {
  const [selectedMonth, setSelectedMonth] = useState('Agustus');
  const [selectedYear, setSelectedYear] = useState('2024');

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const years = ['2024', '2023', '2022'];

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

      <div className="min-h-screen bg-gray-50 py-16">
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
            <h1 className="text-4xl font-extrabold text-gray-800 mt-4">Agenda</h1>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
              <h2 className="text-2xl font-bold mb-4 sm:mb-0">Jadwal Tahun {selectedYear}</h2>
              <select
                className="p-3 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedYear}
                onChange={handleYearChange}
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-10">
              {months.map((month) => (
                <button
                  key={month}
                  className={`px-4 py-2 rounded-md font-medium text-center transition ${
                    selectedMonth === month
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-green-100'
                  }`}
                  onClick={() => handleMonthClick(month)}
                >
                  {month}
                </button>
              ))}
            </div>

            <div className="text-center text-gray-500">
              <p>Tidak ada jadwal event atau agenda pada bulan {selectedMonth} {selectedYear}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Agenda;
