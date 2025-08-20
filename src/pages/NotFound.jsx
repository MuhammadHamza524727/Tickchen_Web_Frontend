import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl md:text-3xl mb-4">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/homepage">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition font-medium">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
