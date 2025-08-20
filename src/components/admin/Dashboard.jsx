// pages/admin/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const res = await axios.get("https://tickchen-web-backend.vercel.app/api/admin/reservation_list");
      console.log("Reservation API Response:", res.data);
      setReservations(res.data.reservation);
    } catch (error) {
      console.error("Failed to fetch reservations", error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const totalReservations = reservations.length;
  const pendingReservations = reservations.filter(r => r.status === "pending").length;

  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">Welcome Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Link to="/adminpage/reservationlistpage">
          <div className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Total Reservations</h2>
            <p className="text-orange-400 text-3xl">{totalReservations}</p>
          </div>
        </Link>

        <Link to="/adminpage/pending_reservation">
          <div className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Pending Orders</h2>
            <p className="text-orange-400 text-3xl">{pendingReservations}</p>
          </div>
        </Link>

      </div>
    </>
  );
};

export default Dashboard;
