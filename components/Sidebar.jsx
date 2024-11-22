"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiSettings, FiFileText, FiFolderPlus } from "react-icons/fi";
import { HiOutlineChevronDown, HiMenuAlt2 } from "react-icons/hi";
import { RiDashboardFill } from "react-icons/ri";
import Modal from "./Modal";

const Sidebar = ({ setActiveContent }) => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");
  const [activeProjectTab, setActiveProjectTab] = useState("");

  const projects = [{ id: 1, name: "ST&IT" }];

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setActiveProjectTab("");
    setActiveContent(link);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleProjectTabClick = (tab) => {
    setActiveLink("");
    setIsSidebarOpen(false);
    setActiveProjectTab(tab);
    setActiveContent(tab);
  };

  return (
    <div>
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={handleToggleSidebar}
        className='fixed top-16 right-3 z-50 md:hidden bg-blue-600 text-white p-2 rounded-md shadow-lg'
      >
        <HiMenuAlt2 size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`z-50 fixed top-0 left-0 h-full bg-white border-r shadow-sm transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:relative md:w-64 p-4`}
      >
        {/* Projects Section */}
        <div className='mb-8'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xs font-bold text-gray-400 tracking-widest uppercase'>
              PROJECTS
            </h2>
            <button onClick={() => setIsProjectsOpen(!isProjectsOpen)}>
              <HiOutlineChevronDown
                className={`text-gray-500 transform transition-transform ${
                  isProjectsOpen ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>
          </div>

          {/* Project List */}
          {isProjectsOpen && (
            <div className='space-y-4'>
              {projects.map((project) => (
                <div key={project.id} className='space-y-2'>
                  {/* Project Header */}
                  <div className='flex items-start space-x-3'>
                    <div className='w-10 h-10 bg-[#FFCECE] text-[#FC5A5A] flex items-center justify-center rounded-md font-semibold'>
                      {project.name.charAt(0)}
                    </div>
                    <div className='relative'>
                      <h3 className='text-sm text-[#171725] mt-2'>
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Project Details Tabs */}
                  <div className='relative pl-6 space-y-4'>
                    {["details", "tasks"].map((tab) => (
                      <div
                        key={tab}
                        onClick={() => handleProjectTabClick(tab)}
                        className={`flex items-center space-x-3 cursor-pointer ${
                          activeProjectTab === tab
                            ? "text-blue-600"
                            : "text-gray-700"
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            activeProjectTab === tab
                              ? "bg-blue-600"
                              : "border border-gray-300"
                          }`}
                        ></div>
                        <span className='text-sm font-medium capitalize'>
                          {tab === "details" ? "Basic details" : "Tasks"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add New Project Button */}
        <button
          onClick={() => setIsOpen(true)}
          className='text-blue-600 text-sm font-medium hover:underline'
        >
          + ADD NEW Project
        </button>

        {/* Modal for Adding New Project */}
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={(projectName) => console.log(projectName)}
        />

        <hr className='my-4' />

        {/* Navigation Menu */}
        <nav className='space-y-6'>
          <Link
            href='/dashboard'
            onClick={() => handleLinkClick("dashboard")}
            className={`flex items-center px-4 py-3 rounded-md hover:bg-blue-50 ${
              activeLink === "dashboard"
                ? "text-blue-600 font-medium bg-blue-50"
                : "text-gray-700"
            }`}
          >
            <RiDashboardFill className='text-xl mr-3' />
            Dashboard
          </Link>
          <Link
            href='/dashboard/projects'
            onClick={() => handleLinkClick("projects")}
            className={`flex items-center px-4 py-3 rounded-md hover:bg-blue-50 ${
              activeLink === "projects"
                ? "text-blue-600 font-medium bg-blue-50"
                : "text-gray-700"
            }`}
          >
            <FiFolderPlus className='text-xl mr-3' />
            Projects
          </Link>
          <Link
            href='/dashboard/reports'
            onClick={() => handleLinkClick("reports")}
            className={`flex items-center px-4 py-3 rounded-md hover:bg-blue-50 ${
              activeLink === "reports"
                ? "text-blue-600 font-medium bg-blue-50"
                : "text-gray-700"
            }`}
          >
            <FiFileText className='text-xl mr-3' />
            Reports
          </Link>
          <Link
            href='/dashboard/settings'
            onClick={() => handleLinkClick("settings")}
            className={`flex items-center px-4 py-3 rounded-md hover:bg-blue-50 ${
              activeLink === "settings"
                ? "text-blue-600 font-medium bg-blue-50"
                : "text-gray-700"
            }`}
          >
            <FiSettings className='text-xl mr-3' />
            Settings
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
