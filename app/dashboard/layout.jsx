"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically load this on the client side
const BasicDetails = dynamic(() => import("@/components/BasicDetails"), {
  ssr: false,
});

// Dynamically load this on the client side
const Tasks = dynamic(() => import("@/components/Tasks"), {
  ssr: false,
});

const DashboardLayout = ({ children }) => {
  const [activeContent, setActiveContent] = useState("dashboard");

  const renderContent = useMemo(() => {
    // Display the passed children for dashboard and projects
    switch (activeContent) {
      case "dashboard":
      case "projects":
      case "reports":
      case "settings":
        return children;
      case "details":
        return <BasicDetails />;
      case "tasks":
        return <Tasks />;
      default:
        return "";
    }
  }, [activeContent, children]);

  return (
    <div className='h-screen flex flex-col bg-[#FAFAFB] '>
      {/* Navbar */}
      <Navbar />

      <div className='flex flex-1 mt-2'>
        {/* Sidebar with state update handler */}
        <Sidebar setActiveContent={setActiveContent} />

        {/* Main content area */}
        <div className='flex-1 p-4'>{renderContent}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
