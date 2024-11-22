import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ProjectList = ({ projects, viewMode }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleOptionClick = () => {
    setActiveMenu(null);
  };

  const handleEditClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      className={`grid px-4 gap-4 mt-4 ${
        viewMode === "grid"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1"
      }`}
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className={`p-4 space-y-4 bg-white rounded-lg shadow ${
            viewMode === "grid"
              ? "flex flex-col space-y-4"
              : "flex items-center justify-between flex-wrap"
          }`}
        >
          {/* Project Details Section */}
          <div className={`flex-1 ${viewMode === "grid" ? "space-y-2" : ""}`}>
            <h2 className='font-medium lg:text-lg text-[#171725]'>
              {project.name}
            </h2>
            <p className='text-sm text-gray-500'>
              Starting date:{" "}
              <span className='text-sm'>{project.startDate}</span>
            </p>
          </div>

          {/* Project Time Left & Tasks */}
          <div
            className={`flex ${
              viewMode === "grid"
                ? "flex-col space-y-2"
                : "items-center flex-1 justify-start space-x-4"
            }`}
          >
            {/* Time Left */}
            <div className='flex items-center space-x-2'>
              <div className='px-2 py-1 bg-gray-100 text-sm text-gray-600 rounded-full flex items-center text-nowrap'>
                <svg
                  className='w-4 h-4 mr-1 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 8v4l3 3m9-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
                {project.timeLeft}
              </div>
            </div>

            {/* Tasks Done */}
            <div className='flex items-center space-x-4'>
              <div className='px-2 py-1 bg-gray-100 text-sm text-gray-600 rounded-full flex items-center text-nowrap'>
                <svg
                  className='w-4 h-4 mr-1 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  ></path>
                </svg>
                Tasks done: {project.tasksDone}
              </div>
            </div>
          </div>

          {/* Status and Progress */}
          <div className='flex items-center space-x-4 w-full sm:w-auto'>
            {/* Status */}
            <p
              className={`text-sm font-medium text-nowrap mx-2 ${
                project.status === "On track"
                  ? "text-blue-500"
                  : project.status === "Completed"
                  ? "text-green-500"
                  : project.status === "At risk"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {project.status}
            </p>

            {/* Progress */}
            <div className='flex items-center w-full sm:w-32'>
              <div className='relative w-full h-2 bg-gray-200 rounded'>
                <div
                  className={`absolute top-0 left-0 h-2 rounded ${
                    project.status === "On track"
                      ? "bg-blue-500"
                      : project.status === "Completed"
                      ? "bg-green-500"
                      : project.status === "At risk"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <span className='ml-2 text-sm text-gray-600'>
                {project.progress}%
              </span>
            </div>
          </div>

          {/* Three Dots Menu */}
          <div className='relative flex items-center justify-end'>
            <button
              className='p-2 hover:bg-gray-200 rounded-full'
              onClick={() => toggleMenu(project.id)}
            >
              <HiOutlineDotsHorizontal />
            </button>
            {activeMenu === project.id && (
              <div className='absolute right-0 mt-2 w-20 sm:w-32 bg-white rounded-md shadow-lg z-10'>
                <ul className='py-1 text-sm text-gray-700'>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => {
                      handleOptionClick();
                      handleEditClick(project);
                    }}
                  >
                    Edit
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => {
                      handleOptionClick();
                    }}
                  >
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* edit modal code */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-lg shadow-lg w-full max-w-lg p-6'>
            <h2 className='text-lg font-semibold text-blue-500 mb-4'>
              Edit Project
            </h2>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Project Title
                </label>
                <input
                  type='text'
                  className='w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300'
                  defaultValue={selectedProject?.name}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Project Description
                </label>
                <textarea
                  className='w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300'
                  rows='4'
                  placeholder='Enter project description'
                ></textarea>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Start Date
                  </label>
                  <input
                    type='date'
                    className='w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    End Date
                  </label>
                  <input
                    type='date'
                    className='w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300'
                  />
                </div>
              </div>
              <div className='flex justify-end space-x-4 mt-4'>
                <button
                  type='button'
                  className='px-4 py-2 border rounded-md text-blue-500 border-blue-500 hover:bg-blue-100'
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
