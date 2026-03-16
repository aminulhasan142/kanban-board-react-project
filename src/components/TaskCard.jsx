import { useState } from "react";

export default function TaskCard({ todo, setFilterOpen, setSortOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const getTagColor = (tagName) => {
    const colors = {
      Design: "bg-purple-50 text-purple-700",
      Operations: "bg-orange-50 text-orange-700",
      Marketing: "bg-green-50 text-green-700",
      Development: "bg-blue-50 text-blue-700",
      Backend: "bg-red-50 text-red-700",
      Setup: "bg-teal-50 text-teal-700",
      Infrastructure: "bg-cyan-50 text-cyan-700",
      Documentation: "bg-indigo-50 text-indigo-700",
    };
    return colors[tagName] || "bg-gray-50 text-gray-700";
  };
  return (
    <div
      key={todo.id}
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
    >
      <div className="absolute top-4 right-4 text-gray-500">
        <button
          type="button"
          className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setFilterOpen(false);
            setSortOpen(false);
          }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
          </svg>
        </button>
        <div
          className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40 ${menuOpen ? "" : "hidden"}`}
          id="wireframes-menu"
          data-card-menu
        >
          <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Move to
          </p>
          <button
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
          >
            In Progress
          </button>
          <button
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50"
          >
            Done
          </button>
          <div className="border-t border-gray-100 mt-2 pt-2 space-y-1">
            <button
              type="button"
              className="w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              Edit Card
            </button>
            <button
              type="button"
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            >
              Delete Card
            </button>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 text-sm">{todo.title}</h3>
      </div>
      <p className="text-xs text-gray-600 mb-4">{todo.description}</p>
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`inline-block px-2.5 py-1 ${getTagColor(todo.tag)} text-xs font-medium rounded`}
        >
          {todo.tag}
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        {todo.date}
      </div>
    </div>
  );
}
