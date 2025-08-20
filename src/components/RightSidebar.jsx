import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  return (
    <aside className=" flex md:mt-[-385px] md:fixed md:right-0  h-full  md:w-56 bg-[#0A0B0A] bg-opacity-50 flex-col space-y-8 p-2 md:p-4">
      
      {/* Menu */}
        <Link to="/menupage">
      <div  className="relative group overflow-hidden rounded">
        <img
          src={assets.menu3}
          alt="Menu"
          className="w-full rounded transform transition duration-300 ease-in-out group-hover:scale-105"
        />
        <button className="absolute bottom-2 right-2 bg-[#0A0B0A] bg-opacity-70 text-white px-2 py-1 rounded text-xs md:text-sm Forum">
          MENU →
        </button>
      </div>
        </Link>


      {/* Reservation */}
      <div className="relative group overflow-hidden rounded">
        <img
          src={assets.menu4}
          alt="Reservation"
          className="w-full rounded transform transition duration-300 ease-in-out group-hover:scale-105"
        />
        <Link to='/reservationpage'>
        <button className="absolute bottom-2 right-2 bg-[#0A0B0A] bg-opacity-70 text-white px-2 py-1 rounded text-xs md:text-sm Forum">
          RESERVATION →
        </button>
        </Link>
      </div>

      {/* Bar */}
      <div className="relative group overflow-hidden rounded">
        <img
          src={assets.menu5}
          alt="Bar"
          className="w-full rounded transform transition duration-300 ease-in-out group-hover:scale-105"
        />
        <Link to='/menupage'>
        <button className="absolute bottom-2 right-2 bg-[#0A0B0A] bg-opacity-70 text-white px-2 py-1 rounded text-xs md:text-sm Forum">
          OUTLET →
        </button>
        </Link>
      </div>

    </aside>
  );
};

export default RightSidebar;
