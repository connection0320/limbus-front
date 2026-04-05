import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MirrorDungeonPlanner from './pages/MirrorDungeonPlanner';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/planner" element={<MirrorDungeonPlanner />} />
      </Routes>
    </>
  );
}

export default App;
