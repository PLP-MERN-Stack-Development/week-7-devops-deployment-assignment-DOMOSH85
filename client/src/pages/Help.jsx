export default function Help() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Help</h1>
      <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
        <li>Use the search bar in the navbar to filter bugs by title or description.</li>
        <li>Click a bug in the list to edit or delete it.</li>
        <li>Use the theme toggle to switch between light and dark mode.</li>
        <li>Navigate between Bugs, About, and Help using the navbar links.</li>
      </ul>
    </div>
  );
} 