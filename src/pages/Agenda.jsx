/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdEvent, MdLocalLibrary, MdWork, MdInfo } from 'react-icons/md';

function Agenda() {
  const [selectedMonth, setSelectedMonth] = useState('Agustus');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedDay, setSelectedDay] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        }
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const years = ['2024', '2023', '2022'];

  const events = {
    '2024': {
      'Mei': [
        { 
          date: '18 Mei', 
          title: 'World Water Forum ke-10 2024', 
          description: 'World Water Forum 2024', 
          time: '08:30 - 13:00 WIB', 
          location: 'Bali', 
          type: 'Seminar' 
        }
      ],
      'Agustus': [
        { 
          date: '17 Agustus', 
          title: 'HUT Kemerdekaan RI', 
          description: 'Peringatan Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-79.', 
          time: '07:00 - Selesai', 
          location: 'Lapangan Merdeka', 
          type: 'Perayaan' 
        },
        { 
          date: '29 Agustus', 
          title: 'Workshop Digital Marketing', 
          description: 'Sesi pelatihan tentang pemasaran digital dan media sosial.', 
          time: '13:00 - 17:00 WIB', 
          location: 'Gedung Serbaguna', 
          type: 'Workshop' 
        },
        { 
          date: '29 Agustus', 
          title: 'Seminar Teknologi 2024', 
          description: 'Seminar tentang inovasi teknologi terbaru.', 
          time: '18:00 - 20:00 WIB', 
          location: 'Auditorium Universitas', 
          type: 'Seminar' 
        }
      ]
    },
    '2023': {
      'Agustus': [
        // Data for 2023 goes here
      ]
    },
    '2022': {
      'Agustus': [
        // Data for 2022 goes here
      ]
    }
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleDayClick = (day, eventList) => {
    setSelectedDay(day);
    setEventDetails(eventList);
    setShowDetails(true);
  };

  const closePopup = () => {
    setShowDetails(false);
    setEventDetails(null);
    setSelectedDay(null);
  };

  const generateCalendarDays = () => {
    const daysInMonth = new Date(selectedYear, months.indexOf(selectedMonth) + 1, 0).getDate();
    const firstDayIndex = new Date(`${selectedMonth} 1, ${selectedYear}`).getDay();
    const days = [];

    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${i} ${selectedMonth}`;
      const eventList = events[selectedYear]?.[selectedMonth]?.filter(event => event.date.startsWith(`${i}`)) || [];
      const eventCount = eventList.length;
      const hasEvent = eventCount > 0;
      days.push(
        <div
          key={i}
          className={`p-2 cursor-pointer ${hasEvent ? 'bg-green-100 hover:bg-green-200' : 'bg-white'} ${selectedDay === date ? 'bg-green-500 text-white' : ''} transition duration-300 ease-in-out`}
          onClick={() => handleDayClick(date, eventList)}
        >
          <div className={`text-center ${hasEvent ? 'font-bold' : 'text-gray-500'}`}>{i}</div>
          {hasEvent && (
            <div className="text-xs text-center text-gray-600">
              {eventCount} Kegiatan
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const getIconForEventType = (type) => {
    switch (type) {
      case 'Seminar':
        return <MdLocalLibrary className="h-6 w-6 text-blue-500" />;
      case 'Workshop':
        return <MdWork className="h-6 w-6 text-green-500" />;
      case 'Perayaan':
        return <MdEvent className="h-6 w-6 text-red-500" />;
      default:
        return <MdInfo className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <nav className="text-sm text-gray-500">
              <Link to="/">Beranda</Link> &bull;
              <span>&nbsp;Event & Agenda</span>
            </nav>
            <h1 className={`text-4xl font-extrabold text-gray-800 mt-4 transition-transform transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} duration-1000`}>Event & Agenda</h1>
          </div>

          <div className={`bg-white shadow-lg rounded-lg p-8 transition-transform duration-700 ease-in-out ${isAnimated ? 'transform translate-y-0' : 'transform -translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
              <h2 className="text-2xl font-bold mb-4 sm:mb-0">Jadwal Tahun {selectedYear}</h2>
              <div className="flex items-center space-x-4">
                <select
                  className="p-3 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                >
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
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
            </div>

            <div className="grid grid-cols-7 gap-4 mb-10">
              {generateCalendarDays()}
            </div>
          </div>
        </div>

        {showDetails && eventDetails && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 mx-auto relative">
              <h2 className="text-lg font-bold mb-1">Hari Ini</h2>
              <p className="text-sm text-gray-500 mb-4">{selectedDay}</p>
              <hr className="mb-4" />
              {eventDetails.map((event, index) => (
                <div key={index} className="mb-6 flex items-start">
                  <div className="mr-3">
                    {getIconForEventType(event.type)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.time} | {event.location}</p>
                    <p className="text-sm text-gray-700 mt-2">{event.description}</p>
                  </div>
                </div>
              ))}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Agenda;
