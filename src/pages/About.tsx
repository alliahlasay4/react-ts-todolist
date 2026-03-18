// src/pages/About.tsx

export default function About() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      
      {/* Card container */}
      <div className="bg-white shadow rounded-xl p-8 max-w-md w-full">
        
        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          About This Project
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          This project is a simple task management application built using 
          React and TypeScript. It demonstrates core concepts such as 
          state management, component communication, and modern React hooks.
        </p>

        {/* Key features / technologies */}
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Functional components with TypeScript</li>
          <li>State management using useState</li>
          <li>Side effects using useEffect</li>
          <li>Memoized functions using useCallback</li>
          <li>Props and callbacks for component interaction</li>
          <li>Tailwind CSS for styling and layout</li>
        </ul>

      </div>
    </div>
  );
}