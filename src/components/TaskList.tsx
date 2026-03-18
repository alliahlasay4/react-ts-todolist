// src/components/TaskList.tsx

import type { Task } from "../types/Task";

interface Props {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  filter: "all" | "active" | "completed"; // tells component which filter is active
}

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
  filter,
}: Props) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500">
        {filter === "completed"
          ? "No completed tasks yet"
          : filter === "active"
            ? "No active tasks"
            : "No tasks yet"}
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-white shadow-sm 
p-3 rounded-lg hover:shadow transition"
        >
          <div className="flex items-center gap-3">

            {/* Checkbox to toggle completion */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="w-4 h-4 accent-primary cursor-pointer"
            />

            {/* Task title */}
            <span
              className={
                task.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }
            >
              {task.title}
            </span>

          </div>
          {/* Delete button */}
          <button
            onClick={() => onDelete(task.id)}
            className="text-danger text-sm hover:underline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}