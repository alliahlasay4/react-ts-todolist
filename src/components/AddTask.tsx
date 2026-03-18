// src/components/AddTask.tsx

import { useState } from "react";

interface Props {
  onAdd: (title: string) => void;
}

export default function AddTask({ onAdd }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    onAdd(input); // callback to parent
    setInput("");
  };

  return (
    <div className="flex gap-2 mb-4 items-center">
      <input
        type="text"
        className="flex-1 border border-gray-300 p-2 rounded-lg 
        placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}

        // Allow pressing Enter to submit task
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={!input.trim()}
        className="bg-primary text-white px-4 rounded-lg 
        hover:bg-accent transition 
        disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add
      </button>
    </div>
  );
}