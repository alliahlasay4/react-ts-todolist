// src/pages/Home.tsx

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      
      {/* Card container */}
      <div className="bg-white shadow rounded-xl p-8 max-w-md w-full text-center">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Task Manager
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Organize your daily tasks, track progress, and stay productive.
        </p>

        {/* Call to action button */}
        <Link
          to="/tasks"
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg 
          hover:bg-accent transition"
        >
          Get Started
        </Link>

      </div>
    </div>
  );
}