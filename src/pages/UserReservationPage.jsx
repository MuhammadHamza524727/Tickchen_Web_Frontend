

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const UserReservationPage = () => {
  const [reservations, setReservations] = useState([]);

  // const fetchReservations = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       window.location.href = "/login"; // Redirect if not logged in
  //       return;
  //     }

  //     const res = await axios.get("https://tickchen-web-backend.vercel.app/api/user/reservations", {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Send token for authentication
  //       },
  //     });

  //     setReservations(res.data.reservation);
  //   } catch (error) {
  //     console.error("Failed to fetch reservations", error);
  //     toast.error("Failed to fetch reservations");
  //   }
  // };



  const fetchReservations = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      if (!token) {
        console.log("No token found, redirecting to login");
        window.location.href = "/login";
        return;
      }

      const res = await axios.get("https://tickchen-web-backend.vercel.app/get-reservation/reservation-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("API response data:", res.data);
      setReservations(res.data.reservation);
    } catch (error) {
      console.error("Failed to fetch reservations", error);
      toast.error("Failed to fetch reservations");
    }
  };


  useEffect(() => {
    fetchReservations();
  }, []);

  const updateStatusLocally = (id, status) => {
    setReservations((prev) =>
      prev.map((reservation) =>
        reservation._id === id ? { ...reservation, status } : reservation
      )
    );
  };

  // const handleReject = async (userId) => {
  //   Swal.fire({
  //     title: "Cancel this reservation?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, Cancel",
  //     cancelButtonText: "No",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const token = localStorage.getItem("token");
  //         await axios.put(
  //           `https://tickchen-web-backend.vercel.app/api/user/reservations/${userId}/cancel`,
  //           {},
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         updateStatusLocally(userId, "cancelled");
  //         toast.success("Reservation cancelled!");
  //         Swal.fire("Cancelled!", "", "success");
  //       } catch (err) {
  //         console.error("Error cancelling reservation:", err);
  //         toast.error("Failed to cancel reservation");
  //       }
  //     }
  //   });
  // };

  // const handleReject = async (userId) => {
  //   Swal.fire({
  //     title: "Cancel this reservation?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, Cancel",
  //     cancelButtonText: "No",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const token = localStorage.getItem("token");
  //         await axios.put(
  //           `https://tickchen-web-backend.vercel.app/api/user/reservations/${userId}/cancel`,
  //           {},
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         updateStatusLocally(userId, "cancelled");
  //         toast.success("Reservation cancelled!");
  //         Swal.fire("Cancelled!", "", "success");
  //       } catch (err) {
  //         console.error("Error cancelling reservation:", err);
  //         toast.error("Failed to cancel reservation");
  //       }
  //     }
  //   });
  // };


  return (
    <div className="text-white p-4 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">
        My Table Reservations
      </h1>
      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-700">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-800 text-gray-200 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>

              <th className="px-4 py-3">Event</th>
              <th className="px-4 py-3">People</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              {/* <th className="px-4 py-3 text-center">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {reservations.length > 0 ? (
              reservations.map((reservation, index) => (
                <tr
                  key={reservation._id}
                  className="hover:bg-gray-800 border-t border-gray-700"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{reservation.name}</td>

                  <td className="px-4 py-3">{reservation.event}</td>
                  <td className="px-4 py-3">{reservation.people}</td>
                  <td className="px-4 py-3">
                    {new Date(reservation.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    {reservation.status === "pending" && (
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                        Pending
                      </span>
                    )}
                    {reservation.status === "accepted" && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Accepted
                      </span>
                    )}
                    {reservation.status === "rejected" && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Rejected
                      </span>
                    )}
                    {reservation.status === "cancelled" && (
                      <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Cancelled
                      </span>
                    )}
                  </td>
                  {/* <td className="px-4 py-3 text-center">
                    {reservation.status === "pending" && (
                      <button
                        onClick={() => handleReject(reservation._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    )}
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-4 text-center text-gray-400"
                >
                  No reservations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReservationPage;
