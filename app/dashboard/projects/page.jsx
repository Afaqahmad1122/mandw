"use client";

import React, { useState, useMemo } from "react";
import { FiChevronDown, FiList, FiGrid } from "react-icons/fi";
import ProjectList from "@/components/ProjectList";

const Projects = () => {
  const [viewMode, setViewMode] = useState("list");
  const [sortBy, setSortBy] = useState("Due Date");
  const [showFilter, setShowFilter] = useState("All Projects");
  const [activeDropdown, setActiveDropdown] = useState(null); // Manage dropdowns

  const sortOptions = [
    "Project Name",
    "Latest Project",
    "Due Date",
    "By Status",
  ];
  const filterOptions = ["All Projects", "Completed", "Pending", "Overdue"];

  const projects = [
    {
      id: 1,
      name: "ST&IT",
      startDate: "2022-06-22",
      tasksDone: "4/5",
      status: "On track",
      progress: 85,
      priority: 2,
      timeLeft: "14 days left",
    },
    {
      id: 2,
      name: "M&E System",
      startDate: "2022-06-20",
      tasksDone: "1/5",
      status: "At risk",
      progress: 20,
      priority: 1,
      timeLeft: "10 days left",
    },
    {
      id: 3,
      name: "Web Development",
      startDate: "2022-06-20",
      tasksDone: "5/5",
      status: "Completed",
      progress: 100,
      priority: 3,
      timeLeft: "0 days left",
    },
    {
      id: 4,
      name: "Office Renovation",
      startDate: "2022-06-20",
      tasksDone: "2/12",
      status: "Overdue",
      progress: 8,
      priority: 4,
      timeLeft: "0 days left",
    },
  ];

  // Filtering logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (showFilter === "All Projects") return true;
      if (showFilter === "Completed" && project.status === "Completed")
        return true;
      if (showFilter === "Pending" && project.status === "On track")
        return true;
      if (showFilter === "Overdue" && project.status === "Overdue") return true;
      return false;
    });
  }, [showFilter, projects]);

  // Sorting logic
  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      if (sortBy === "Project Name") return a.name.localeCompare(b.name);
      if (sortBy === "Latest Project")
        return new Date(b.startDate) - new Date(a.startDate);
      if (sortBy === "Due Date")
        return new Date(a.startDate) - new Date(b.startDate);
      if (sortBy === "By Status") return a.status.localeCompare(b.status);
      return 0;
    });
  }, [sortBy, filteredProjects]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <div className='flex flex-col w-full'>
      <section className='flex flex-wrap justify-between p-3 px-4 sm:px-8 gap-4'>
        {/* Left Section */}
        <div className='flex flex-wrap items-center space-x-4 w-full sm:w-auto'>
          <h1 className='font-semibold text-base sm:text-lg'>Projects</h1>
          <p className='text-sm text-gray-400'>Show</p>

          {/* Filter Dropdown */}
          <div className='relative'>
            <button
              onClick={() => toggleDropdown("filter")}
              aria-expanded={activeDropdown === "filter"}
              className='flex items-center text-gray-500 hover:text-gray-700 text-sm whitespace-nowrap'
            >
              Show: {showFilter} <FiChevronDown className='ml-1' />
            </button>
            {activeDropdown === "filter" && (
              <ul className='absolute mt-2 bg-white shadow-lg rounded-lg border w-full sm:w-40 z-50'>
                {filterOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setShowFilter(option);
                      setActiveDropdown(null); // Close dropdown
                    }}
                    className='px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-wrap items-center justify-end space-x-4 w-full sm:w-auto'>
          {/* Sort By Dropdown */}
          <div className='relative'>
            <button
              onClick={() => toggleDropdown("sort")}
              aria-expanded={activeDropdown === "sort"}
              className='flex items-center bg-white border rounded-md px-4 py-2 text-sm shadow hover:shadow-md whitespace-nowrap'
            >
              <span className='text-gray-400'>Sort by: </span> {sortBy}
              <FiChevronDown className='ml-2' />
            </button>
            {activeDropdown === "sort" && (
              <ul className='absolute mt-2 bg-white shadow-lg rounded-lg border w-full sm:w-52 z-50'>
                {sortOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                      sortBy === option ? "bg-blue-50" : ""
                    }`}
                    onClick={() => {
                      setSortBy(option);
                      setActiveDropdown(null); // Close dropdown
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* View Mode Buttons */}
          <div className='flex'>
            <button
              onClick={() => setViewMode("list")}
              aria-label='List View'
              className={`p-2 rounded-md ${
                viewMode === "list"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-500"
              }`}
            >
              <FiList size={20} />
            </button>

            <button
              onClick={() => setViewMode("grid")}
              aria-label='Grid View'
              className={`p-2 rounded-md ${
                viewMode === "grid"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-500"
              }`}
            >
              <FiGrid size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Project List Section */}
      {sortedProjects.length > 0 ? (
        <ProjectList projects={sortedProjects} viewMode={viewMode} />
      ) : (
        <div className='p-4 text-center text-gray-500'>
          No projects match the selected criteria.
        </div>
      )}
    </div>
  );
};

export default Projects;
