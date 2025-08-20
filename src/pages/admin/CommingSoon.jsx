import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">🚧 Coming Soon</h1>
        <p className="text-xl mb-8 text-gray-300">
          We're working hard to bring you something amazing.
        </p>
        <div className="flex justify-center">
            <Link to="/homepage"  >
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Go Back Home
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
