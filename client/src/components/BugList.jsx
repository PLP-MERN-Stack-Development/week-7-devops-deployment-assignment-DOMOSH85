import { useEffect, useState } from 'react';
import { getAllBugs } from '../services/bugService';
import { motion, AnimatePresence } from 'framer-motion';

export default function BugList({ onSelect, selectedId, search = '' }) {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAllBugs()
      .then(setBugs)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredBugs = bugs.filter(bug => {
    const q = search.toLowerCase();
    return (
      bug.title.toLowerCase().includes(q) ||
      (bug.description && bug.description.toLowerCase().includes(q))
    );
  });

  if (loading) return <div className="text-center py-4 text-gray-700 dark:text-gray-200">Loading bugs...</div>;
  if (error) return <div className="text-red-500 dark:text-red-400 py-4">Error: {error}</div>;
  if (filteredBugs.length === 0) return <div className="py-4 text-gray-700 dark:text-gray-200">No bugs found.</div>;

  return (
    <div className="bg-white dark:bg-gray-900 rounded shadow p-2">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <AnimatePresence>
          {filteredBugs.map((bug) => (
            <motion.li
              key={bug._id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.25 }}
              layout
              className={`p-4 cursor-pointer rounded mb-2 last:mb-0
                ${selectedId === bug._id
                  ? 'bg-blue-100 dark:bg-blue-900 border border-blue-400 dark:border-blue-600'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'}
              `}
              onClick={() => onSelect && onSelect(bug)}
            >
              <div className="font-semibold text-gray-900 dark:text-gray-100">{bug.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Status: {bug.status}</div>
              {bug.description && <div className="text-gray-700 dark:text-gray-300 mt-1">{bug.description}</div>}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
} 