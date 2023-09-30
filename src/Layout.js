import React from "react";
import SideBar from "./components/SideBar";

function Layout() {
  // Define the hover styles
  const hoverStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Clear white background color
    cursor: "pointer" // Change cursor to a pointer on hover
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar hoverStyles={hoverStyles} />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-md py-4 px-6">
          {/* Header content */}
        </header>

        {/* Page Content */}
        <div className="container mx-auto px-4 mt-6">
          {/* Your page content goes here */}
        </div>
      </main>
    </div>
  );
}

export default Layout;
