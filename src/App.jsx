import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Goldplan from './Goldplan';
import GoldplanAbout from './GoldplanAbout';
import GoldplanServices from './GoldplanServices';
import GoldplanContact from './GoldplanContact';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Goldplan />} />
        <Route path="/about" element={<GoldplanAbout />} />
        <Route path="/services" element={<GoldplanServices />} />
        <Route path="/contact" element={<GoldplanContact />} />
      </Routes>
  );
}

export default App;
