// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white shadow">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">

        {/* App title */}
        <h1 className="font-bold text-lg tracking-wide">
          NextUp
        </h1>
 {/* Navigation links */}
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-white/80 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-white/80 hover:text-white transition"
            }
          >
            Tasks
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-white/80 hover:text-white transition"
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}