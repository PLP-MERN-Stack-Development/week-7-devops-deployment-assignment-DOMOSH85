import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ search, setSearch, theme, toggleTheme }) {
  const location = useLocation();

  return (
    <nav className={`flex items-center justify-between px-6 py-3 shadow bg-white dark:bg-gray-900`}> 
      <div className="flex items-center gap-4">
        <Link to="/" className={`font-bold text-lg ${location.pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-100'}`}>Bugs</Link>
        <Link to="/about" className={`hover:underline ${location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}>About</Link>
        <Link to="/help" className={`hover:underline ${location.pathname === '/help' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}>Help</Link>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search bugs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-2 py-1 rounded border dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 bg-white text-gray-900 border-gray-300"
        />
        <button
          onClick={toggleTheme}
          className="ml-2 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
} 