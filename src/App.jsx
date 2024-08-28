import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ganti Switch dengan Routes
import HomePage from './pages/HomePages';
import Sejarah from './pages/Sejarah';
import VisiMisi from './pages/VisiMisi';
import Agenda from './pages/Agenda';

function App() {
  return (
    <Router>
      <Routes>
        {' '}
        {/* Ganti Switch menjadi Routes */}
        <Route path="/" element={<HomePage />} /> {/* Ganti component dengan element */}
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </Router>
  );
}

export default App;
