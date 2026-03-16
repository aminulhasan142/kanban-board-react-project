import { useState } from "react";
import { tags } from "../data/data";
import TaskCard from "./TaskCard";
export default function TempleteContainer({ todos, title }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const [activeTag, setActiveTag] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest");

  let displayedTasks = [...todos];

  if (activeTag) {
    displayedTasks = displayedTasks.filter((t) => t.tag === activeTag);
  }

  displayedTasks.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (sortOrder === "newest") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
  function handleTagClick(tag) {
    if (activeTag === tag) {
      setActiveTag(null);
    } else {
      setActiveTag(tag);
    }
    setFilterOpen(false);
  }

  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            {displayedTasks.length}
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* filtering  */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
              onClick={() => {
                setFilterOpen(!filterOpen);
                setSortOpen(false);
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414V19a1 1 0 01-.553.894l-2 1A1 1 0 0110 20v-6.293L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
              {activeTag ? `Filter : ${activeTag}` : "Filter"}
            </button>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2  z-40 ${filterOpen ? "" : "hidden"}`}
            >
              <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Filter by tag
              </p>
              {tags.map((tag) => {
                return (
                  <button
                    key={tag}
                    type="button"
                    className="w-full text-left px-4 py-2 hover:bg-gray-50"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
          {/* sorting */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
              onClick={() => {
                setSortOpen(!sortOpen);
                setFilterOpen(false);
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M8 12h12M12 18h8"
                ></path>
              </svg>
              Sort
            </button>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40 ${sortOpen ? " " : "hidden"}`}
            >
              <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Sort by date
              </p>
              <button
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-gray-50"
                onClick={() => {
                  setSortOrder("newest");
                  setSortOpen(false);
                }}
              >
                Newest first
              </button>
              <button
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-gray-50"
                onClick={() => {
                  setSortOrder("oldest");
                  setSortOpen(false);
                }}
              >
                Oldest first
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
        {/* <!-- Card --> */}
        {displayedTasks.length === 0 ? (
          <p className="text-gray-500 text-sm italic">No tasks found...</p>
        ) : (
          displayedTasks.map((todo) => {
            return (
              <TaskCard
                key={todo.id}
                todo={todo}
                setFilterOpen={setFilterOpen}
                setSortOpen={setSortOpen}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
