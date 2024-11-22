import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto p-4 sm:p-6'>
        {/* Modal Header */}
        <div className='flex items-center justify-between'>
          <h2 className='text-lg sm:text-xl font-semibold'>Add new Project</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className='mt-4 space-y-4'>
          <div>
            <label
              htmlFor='project-title'
              className='block text-sm font-medium text-gray-700'
            >
              Project title
            </label>
            <input
              type='text'
              id='project-title'
              placeholder='Enter project name'
              className='mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
            />
          </div>

          {/* Project Description */}
          <div>
            <label
              htmlFor='project-description'
              className='block text-sm font-medium text-gray-700'
            >
              Project description
            </label>
            <textarea
              id='project-description'
              placeholder='Enter project description'
              className='mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
              rows='3'
            ></textarea>
          </div>

          <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
            <div className='flex-1'>
              <label
                htmlFor='start-date'
                className='block text-sm font-medium text-gray-700'
              >
                Start date
              </label>
              <input
                type='date'
                id='start-date'
                className='mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
            </div>

            <div className='flex-1'>
              <label
                htmlFor='end-date'
                className='block text-sm font-medium text-gray-700'
              >
                End date
              </label>
              <input
                type='date'
                id='end-date'
                className='mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className='mt-6 flex flex-col sm:flex-row sm:justify-end space-y-4 sm:space-y-0 sm:space-x-4'>
          <button
            onClick={onClose}
            className='w-full sm:w-auto px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50'
          >
            Cancel
          </button>
          <button className='w-full sm:w-auto px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700'>
            Save
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
