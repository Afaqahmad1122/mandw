"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data for Yearly Statistics
  const yearlyStatisticsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Completed",
        data: [5, 10, 15, 20, 25, 30, 25, 20, 18, 15, 12, 10],
        borderColor: "#2c83fb",
        backgroundColor: "rgba(44, 131, 251, 0.2)",
        tension: 0.4,
      },
      {
        label: "Overdue",
        data: [3, 6, 9, 15, 12, 18, 12, 25, 20, 10, 8, 5],
        borderColor: "#ff4c61",
        backgroundColor: "rgba(255, 76, 97, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Data for Weekly Task Activity
  const weeklyTaskActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Completed",
        data: [2, 4, 3, 5, 6, 5, 4],
        borderColor: "#2c83fb",
        backgroundColor: "rgba(44, 131, 251, 0.2)",
        tension: 0.4,
      },
      {
        label: "Overdue",
        data: [1, 2, 3, 4, 2, 3, 2],
        borderColor: "#ff4c61",
        backgroundColor: "rgba(255, 76, 97, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className='p-6 bg-gray-50 flex-1'>
      <h1 className='text-2xl font-semibold mb-6'>Dashboard</h1>

      {/* Grid Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
        {/* Statistics */}
        <div className='grid grid-cols-2 gap-6'>
          <div className='bg-white p-4 rounded-lg shadow flex justify-between items-center'>
            {/* Text Section */}
            <div>
              <h2 className='text-3xl font-bold'>12</h2>
              <p className='text-gray-500 text-sm'>Total projects</p>
            </div>

            <div className='w-12 h-12 flex items-center justify-center'>
              <Image
                src='/layers.png'
                alt='layer'
                width={24}
                height={24}
                className='object-contain'
              />
            </div>
          </div>

          <div className='bg-white p-4 rounded-lg shadow flex items-center justify-between'>
            <div>
              <h2 className='text-3xl font-bold'>05</h2>
              <p className='text-gray-500 text-sm'>Projects completed</p>
            </div>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Image
                src='/check.png'
                alt='layer'
                width={24}
                height={24}
                className='object-contain'
              />
            </div>
          </div>
          <div className='bg-white p-4 rounded-lg shadow flex items-center justify-between'>
            <div>
              <h2 className='text-3xl font-bold'>06</h2>
              <p className='text-gray-500'>Projects pending</p>
            </div>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Image
                src='/clock.png'
                alt='layer'
                width={38}
                height={38}
                className='object-contain'
              />
            </div>
          </div>
          <div className='bg-white p-4 rounded-lg shadow flex items-center justify-between'>
            <div>
              <h2 className='text-3xl font-bold'>01</h2>
              <p className='text-gray-500'>Projects overdue</p>
            </div>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Image
                src='/group.png'
                alt='layer'
                width={38}
                height={38}
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Yearly Statistics Chart */}
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='text-lg font-semibold mb-4'>Yearly Statistics</h2>
          <Line data={yearlyStatisticsData} />
        </div>
      </div>

      {/* Weekly Task Activity Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-lg font-semibold'>Weekly task activity</h2>
          <div className='mt-4'>
            <h3 className='text-2xl font-bold'>12</h3>
            <p className='text-gray-500 text-sm'>Total projects</p>
          </div>
          <ul className='mt-6 space-y-2'>
            <li className='flex items-center justify-between text-sm'>
              <div className='flex items-center space-x-2'>
                <span className='w-3 h-3 rounded-full bg-green-500'></span>
                <span>Completed</span>
              </div>
              <span className='font-semibold text-gray-700'>06</span>
            </li>
            <li className='flex items-center justify-between text-sm'>
              <div className='flex items-center space-x-2'>
                <span className='w-3 h-3 rounded-full bg-blue-500'></span>
                <span>On track</span>
              </div>
              <span className='font-semibold text-gray-700'>03</span>
            </li>
            <li className='flex items-center justify-between text-sm'>
              <div className='flex items-center space-x-2'>
                <span className='w-3 h-3 rounded-full bg-yellow-500'></span>
                <span>At risk</span>
              </div>
              <span className='font-semibold text-gray-700'>02</span>
            </li>
            <li className='flex items-center justify-between text-sm'>
              <div className='flex items-center space-x-2'>
                <span className='w-3 h-3 rounded-full bg-red-500'></span>
                <span>Overdue</span>
              </div>
              <span className='font-semibold text-gray-700'>01</span>
            </li>
          </ul>
        </div>

        {/* Weekly Task Activity Chart */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-lg font-semibold mb-4'>Weekly Task Activity</h2>
          <Line data={weeklyTaskActivityData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
