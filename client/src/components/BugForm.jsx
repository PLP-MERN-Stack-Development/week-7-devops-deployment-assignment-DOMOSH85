import { useState } from 'react';
import { createBug, updateBug } from '../services/bugService';
import toast from 'react-hot-toast';

const initialState = { title: '', description: '', status: 'open' };

export default function BugForm({ initialBug, onSave, onCancel }) {
  const [bug, setBug] = useState(initialBug || initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setBug((b) => ({ ...b, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      let saved;
      if (bug._id) {
        saved = await updateBug(bug._id, bug);
        toast.success('Bug updated!');
      } else {
        saved = await createBug(bug);
        toast.success('Bug added!');
      }
      onSave && onSave(saved);
      setBug(initialState);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to save bug');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white dark:bg-gray-900 rounded shadow">
      <div>
        <label className="block font-medium text-gray-800 dark:text-gray-100">Title *</label>
        <input
          name="title"
          value={bug.title}
          onChange={handleChange}
          required
          className="mt-1 p-2 border rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-800 dark:text-gray-100">Description</label>
        <textarea
          name="description"
          value={bug.description}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-800 dark:text-gray-100">Status</label>
        <select
          name="status"
          value={bug.status}
          onChange={handleChange}
          className="mt-1 p-2 border rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        >
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      {error && <div className="text-red-500 dark:text-red-400">{error}</div>}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {bug._id ? 'Update Bug' : 'Add Bug'}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
} 