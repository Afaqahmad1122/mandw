import React, { useState, useCallback, useMemo } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Implementation of new dashboard",
      member: "Aamir",
      deadline: "June 22, 2022",
      status: "On track",
      progress: 85,
    },
    {
      id: 2,
      name: "Documentation of monitoring system",
      member: "Khan",
      deadline: "June 25, 2022",
      status: "At risk",
      progress: 17,
    },
    {
      id: 3,
      name: "Data entry in the system",
      member: "Salar",
      deadline: "June 26, 2022",
      status: "Completed",
      progress: 100,
    },
    {
      id: 4,
      name: "System testing",
      member: "Khan",
      deadline: "June 25, 2022",
      status: "Overdue",
      progress: 10,
    },
  ]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Tasks");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newTask, setNewTask] = useState({
    name: "",
    member: "",
    deadline: "",
    status: "On track",
  });

  // Filter tasks dynamically using useMemo
  const filteredTasks = useMemo(() => {
    switch (selectedFilter) {
      case "Completed Tasks":
        return tasks.filter((task) => task.status === "Completed");
      case "Pending Tasks":
        return tasks.filter((task) => task.status === "On track");
      case "Overdue Tasks":
        return tasks.filter((task) => task.status === "Overdue");
      default:
        return tasks;
    }
  }, [selectedFilter, tasks]);

  const toggleMenu = useCallback(
    (id) => setActiveMenu((prev) => (prev === id ? null : id)),
    []
  );

  const handleEdit = useCallback((task) => {
    alert(`Edit task: ${task.name}`);
    setActiveMenu(null);
  }, []);

  const handleDelete = useCallback((task) => {
    alert(`Delete task: ${task.name}`);
    setActiveMenu(null);
  }, []);

  const toggleDropdown = useCallback(
    () => setIsDropdownOpen((prev) => !prev),
    []
  );

  const filterTasks = useCallback((filter) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleAddTask = useCallback(
    (e) => {
      e.preventDefault();
      const updatedTasks = [{ id: tasks.length + 1, ...newTask }, ...tasks];
      setTasks(updatedTasks);
      setNewTask({ name: "", member: "", deadline: "", status: "On track" });
      setIsFormVisible(false);
    },
    [newTask, tasks]
  );

  return (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex space-x-8'>
          <h2 className='text-xl font-semibold text-gray-800'>Tasks</h2>
          <div className='relative flex space-x-4'>
            <span className='text-[#92929D] text-sm'>Show : </span>
            <button
              className='flex items-center text-gray-600 text-sm font-medium cursor-pointer'
              onClick={toggleDropdown}
            >
              {selectedFilter} <FiChevronDown className='ml-1' />
            </button>
            {isDropdownOpen && (
              <ul className='absolute mt-2 bg-white border rounded-lg shadow-lg w-40 z-10'>
                {[
                  "All Tasks",
                  "Completed Tasks",
                  "Pending Tasks",
                  "Overdue Tasks",
                ].map((filter) => (
                  <li
                    key={filter}
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700'
                    onClick={() => filterTasks(filter)}
                  >
                    {filter}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          onClick={() => setIsFormVisible((prev) => !prev)}
          className='text-sm md:text-lg px-4 py-2 rounded-md flex space-x-2 bg-[#07D7A7] text-white tracking-wide'
        >
          + New Task
        </button>
      </div>

      {isFormVisible && (
        <form
          onSubmit={handleAddTask}
          className='mb-6 bg-gray-50 p-4 rounded-lg shadow-md'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input
              type='text'
              name='name'
              value={newTask.name}
              onChange={handleInputChange}
              placeholder='Task Name'
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
            <input
              type='text'
              name='member'
              value={newTask.member}
              onChange={handleInputChange}
              placeholder='Member'
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
            <input
              type='date'
              name='deadline'
              value={newTask.deadline}
              onChange={handleInputChange}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
            <select
              name='status'
              value={newTask.status}
              onChange={handleInputChange}
              className='w-full p-2 border border-gray-300 rounded'
            >
              <option value='On track'>On track</option>
              <option value='At risk'>At risk</option>
              <option value='Completed'>Completed</option>
              <option value='Overdue'>Overdue</option>
            </select>
          </div>
          <button
            type='submit'
            className='mt-4 px-4 py-2 bg-blue-600 text-white rounded'
          >
            Add Task
          </button>
        </form>
      )}

      <div className='overflow-x-auto bg-white shadow-md rounded-md'>
        <table className='w-full text-left border-collapse border border-gray-200'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-4 py-3 text-sm font-medium text-gray-600 border border-gray-200'>
                Task name
              </th>
              <th className='px-4 py-3 text-sm font-medium text-gray-600 border border-gray-200'>
                Member
              </th>
              <th className='px-4 py-3 text-sm font-medium text-gray-600 border border-gray-200'>
                Deadline
              </th>
              <th className='px-4 py-3 text-sm font-medium text-gray-600 border border-gray-200'>
                Status
              </th>
              <th className='px-4 py-3 text-sm font-medium text-gray-600 border border-gray-200'></th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id} className='hover:bg-gray-50'>
                <td className='px-4 py-3 text-sm font-medium text-gray-800 border border-gray-200'>
                  {task.name}
                </td>
                <td className='px-4 py-3 text-sm text-gray-600 border border-gray-200'>
                  {task.member}
                </td>
                <td className='px-4 py-3 text-sm text-gray-500 border border-gray-200'>
                  {task.deadline}
                </td>
                <td className='px-4 py-3 border border-gray-200'>
                  <span className='text-sm font-medium text-blue-600'>
                    {task.status}
                  </span>
                </td>
                <td className='px-4 py-3 text-right border border-gray-200 relative'>
                  <HiDotsVertical
                    className='text-gray-500 cursor-pointer'
                    onClick={() => toggleMenu(task.id)}
                  />
                  {activeMenu === task.id && (
                    <div className='absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10'>
                      <ul className='py-1 text-sm text-gray-700'>
                        <li
                          className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                          onClick={() => handleEdit(task)}
                        >
                          Edit
                        </li>
                        <li
                          className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                          onClick={() => handleDelete(task)}
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
