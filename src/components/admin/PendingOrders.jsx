import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const PendingOrders = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const res = await axios.get("https://tickchen-web-backend.vercel.app/api/admin/reservation_list");
      setReservations(res.data.reservation);
    } catch (error) {
      console.error("Failed to fetch reservations", error);
      toast.error("Failed to fetch reservations");
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleAccept = async (userId) => {
    Swal.fire({
      title: "Do you want to accept the reservation?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Accept",
      denyButtonText: "Don't Accept",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.put(`https://tickchen-web-backend.vercel.app/api/admin/reservations/${userId}/accept`);
          toast.success("Reservation accepted successfully!");
          Swal.fire("Accepted!", "", "success");
          fetchReservations();
        } catch (err) {
          console.error("Error accepting reservation:", err);
          toast.error("Failed to accept reservation");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handleReject = async (userId) => {
    Swal.fire({
      title: "Do you want to reject the reservation?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Reject",
      denyButtonText: "Don't Reject",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.put(`https://tickchen-web-backend.vercel.app/api/admin/reservations/${userId}/reject`);
          toast.success("Reservation rejected successfully!");
          Swal.fire("Rejected!", "", "success");
          fetchReservations();
        } catch (err) {
          console.error("Error rejecting reservation:", err);
          toast.error("Failed to reject reservation");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="text-white p-4">
      <h1 className="text-3xl font-semibold mb-6">Orders</h1>
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full text-sm text-left border border-gray-600">
          <thead className="bg-[#1E1E1E] text-gray-200">
            <tr>
              <th className="px-4 py-3 border-b border-gray-700">SR No</th>
              <th className="px-4 py-3 border-b border-gray-700">Name</th>
              <th className="px-4 py-3 border-b border-gray-700">Email</th>
              <th className="px-4 py-3 border-b border-gray-700">Phone</th>
              <th className="px-4 py-3 border-b border-gray-700">Event</th>
              <th className="px-4 py-3 border-b border-gray-700">People</th>
              <th className="px-4 py-3 border-b border-gray-700">Date</th>
              <th className="px-4 py-3 border-b border-gray-700">Status</th>
              <th className="px-6 py-3 border-b border-gray-700 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length > 0 ? (
              reservations.map((reservation, index) => (
                <tr key={reservation._id} className="hover:bg-[#2A2A2A]">
                  <td className="px-4 py-2 border-b border-gray-700">{index + 1}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{reservation.name}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{reservation.email}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{reservation.phone}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{reservation.event}</td>
                  <td className="px-4 py-2 border-b border-gray-700">{reservation.people}</td>
                  <td className="px-4 py-2 border-b border-gray-700">
                    {new Date(reservation.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-700">{reservation.status}</td>
                  <td className="px-4 py-2 border-b border-gray-700 text-center">
                    {reservation.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleAccept(reservation._id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(reservation._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {reservation.status === "accepted" && (
                      <span className="text-green-500 font-semibold">Accepted</span>
                    )}
                    {reservation.status === "rejected" && (
                      <span className="text-red-500 font-semibold">Rejected</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-4 text-center text-gray-400">
                  No Pending Reservations Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingOrders;
