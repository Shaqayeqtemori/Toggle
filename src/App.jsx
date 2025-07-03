import React, { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Dark Mode Toggle</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default App;