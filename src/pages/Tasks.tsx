// src/pages/Tasks.tsx

import { useState, useEffect, useCallback } from "react";
import type { Task } from "../types/Task";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

export default function Tasks() {
  // State to store task list
  const [tasks, setTasks] = useState<Task[]>([]);

  // State for filtering tasks
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Load saved tasks from localStorage on initial render
  useEffect(() => {
    const saved = localStorage.getItem("tasks");

    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // Derive filtered tasks instead of mutating original state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // Add new task
  // Memoized function to avoid unnecessary re-renders
  const addTask = useCallback((title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }, []);

  // Persist tasks to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Toggle task completion
  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };


  return (
    <div className="max-w-md mx-auto p-6">

      {/* Page heading */}
      <h2 className="text-xl font-semibold mb-4">
        Task List
      </h2>

      <p className="text-sm text-gray-500 mb-2">
        <p className="text-sm text-gray-500 mb-2">
          {tasks.filter(t => !t.completed).length} tasks remaining
        </p>
      </p>

      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "font-bold underline" : ""}
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? "font-bold underline" : ""}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "font-bold underline" : ""}
        >
          Completed
        </button>
      </div>

      {/* Input component */}
      <AddTask onAdd={addTask} />

      {/* Display tasks */}
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        filter={filter}
      />
    </div>
  );
}