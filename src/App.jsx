import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ganti Switch dengan Routes
import HomePage from './pages/HomePages';
import Sejarah from './pages/Sejarah';

function App() {
  return (
    <Router>
      <Routes>
        {' '}
        {/* Ganti Switch menjadi Routes */}
        <Route path="/" element={<HomePage />} /> {/* Ganti component dengan element */}
        <Route path="/sejarah" element={<Sejarah />} />
      </Routes>
    </Router>
  );
}

export default App;
