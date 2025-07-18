import { useState, useCallback } from 'react';
import BugList from '../components/BugList';
import BugForm from '../components/BugForm';
import { deleteBug } from '../services/bugService';
import toast from 'react-hot-toast';
import ConfirmModal from '../components/ConfirmModal';

export default function BugsPage({ search }) {
  const [selectedBug, setSelectedBug] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);

  // Called after add/edit to refresh the list and clear selection
  const handleSave = useCallback(() => {
    setSelectedBug(null);
    setRefreshKey((k) => k + 1);
  }, []);

  // Called when a bug is selected from the list
  const handleSelect = (bug) => setSelectedBug(bug);

  // Called to request delete
  const handleDeleteRequest = () => setShowConfirm(true);

  // Called to actually delete after confirmation
  const handleDelete = async () => {
    if (!selectedBug) return;
    try {
      await deleteBug(selectedBug._id);
      setSelectedBug(null);
      setRefreshKey((k) => k + 1);
      toast.success('Bug deleted!');
    } catch (err) {
      toast.error('Failed to delete bug');
    } finally {
      setShowConfirm(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Bug Tracker</h1>
      <BugForm
        initialBug={selectedBug}
        onSave={handleSave}
        onCancel={() => setSelectedBug(null)}
      />
      <div className="mt-8">
        <BugList
          key={refreshKey} // force re-mount to refresh list
          onSelect={handleSelect}
          selectedId={selectedBug?._id}
          search={search}
        />
        {selectedBug && (
          <button
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={handleDeleteRequest}
          >
            Delete Bug
          </button>
        )}
      </div>
      <ConfirmModal
        open={showConfirm}
        message="Are you sure you want to delete this bug?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
} 