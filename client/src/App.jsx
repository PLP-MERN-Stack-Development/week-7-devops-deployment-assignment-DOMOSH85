import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BugsPage from './pages/BugsPage';
import About from './pages/About';
import Help from './pages/Help';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <Router>
      <div className={theme === 'dark' ? 'dark bg-gray-900 min-h-screen' : 'bg-gray-100 min-h-screen'}>
        <Toaster position="top-right" />
        <Navbar search={search} setSearch={setSearch} theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<BugsPage search={search} />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
