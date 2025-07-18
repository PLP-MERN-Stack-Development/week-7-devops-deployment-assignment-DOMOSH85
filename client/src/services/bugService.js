const API_URL = 'http://localhost:5000/api/bugs';

export async function getAllBugs() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch bugs');
  return res.json();
}

export async function getBugById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch bug');
  return res.json();
}

export async function createBug(bug) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bug),
  });
  if (!res.ok) throw new Error('Failed to create bug');
  return res.json();
}

export async function updateBug(id, updates) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error('Failed to update bug');
  return res.json();
}

export async function deleteBug(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete bug');
  return res.json();
} 