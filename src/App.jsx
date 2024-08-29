import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePages';
import Sejarah from './pages/Sejarah';
import VisiMisi from './pages/VisiMisi';
import Agenda from './pages/Agenda';
import DetailStatistik from './pages/DetailStatistik';
import PerangkatDaerah from './pages/PerangkatDaerah';
import LayananPublik from './pages/LayananPublik';
import Berita from './pages/Berita';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/detailstatistik" element={<DetailStatistik />} />
        <Route path="/perangkat-daerah" element={<PerangkatDaerah />} />
        <Route path="/layanan-publik" element={<LayananPublik />} />
        <Route path="/berita" element={<Berita />} />
      </Routes>
    </Router>
  );
}

export default App;
