// pages/admin/ReservationListPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ReservationList = () => {
    const [reservations, setReservations] = useState([]);

    // useEffect(() => {
    const fetchReservations = async () => {
        try {
            const res = await axios.get("https://tickchen-web-backend.vercel.app/api/admin/reservation_list");
            console.log("Reservation API Response:", res.data);

            setReservations(res.data.reservation);
        } catch (error) {
            console.error("Failed to fetch reservations", error);
        }
    };

    // fetchReservations();


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
                    // alert(res.data.message);
                    setReservations((prev) =>
                        prev.map((reservation) =>
                            reservation._id === id ? { ...reservation, status: "accepted" } : reservation
                        )
                    );
                    toast.success("Reservation accepted successfully!");
                    Swal.fire("Accepted!", "", "success");

                    fetchReservations();
                } catch (err) {
                    console.error("Error accepting reservation:", err);
                    // toast.error("Failed to accept reservation");
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
            confirmButtonText: "reject",
            denyButtonText: "Don't reject",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {

                    const res = await axios.put(`https://tickchen-web-backend.vercel.app/api/admin/reservations/rejected/${userId}/reject`);
                    // alert(res.data.message);
                    setReservations((prev) =>
                        prev.map((reservation) =>
                            reservation._id === id ? { ...reservation, status: "rejected" } : reservation
                        )
                    );
                    // toast.success("Reservation rejected successfully!");
                    Swal.fire("rejected!", "", "success");

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


    // }, []);


    useEffect(() => {
        fetchReservations();

    }, []);
    return (
        <div className="text-white">
            <h1 className="text-3xl font-semibold mb-6">Reservation List</h1>
            <div className="overflow-x-auto
       rounded-xl">
                <table className="w-full text-sm text-left border border-gray-600">
                    <thead className="bg-[#1E1E1E] text-gray-200">
                        <tr >
                            <th className="px-4 py-3 border-b border-gray-700">SR NO</th>

                            <th className="px-4 py-3 border-b border-gray-700">Name</th>
                            <th className="px-4 py-3 border-b border-gray-700">Email</th>
                            <th className="px-4 py-3 border-b border-gray-700">Phone</th>
                            <th className="px-4 py-3 border-b border-gray-700">Event</th>
                            <th className="px-4 py-3 border-b border-gray-700">People</th>
                            <th className="px-4 py-3 border-b border-gray-700">Date</th>
                            <th className="px-6 py-3"><span className="sr-only">Edit</span></th>
                            <th className="px-6 py-3"><span className="sr-only">Delete</span></th>

                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation, index) => (
                            <tr key={index} className="hover:bg-[#2A2A2A]">
                                <td className="px-4 py-2 border-b border-gray-700">{index + 1}</td>

                                <td className="px-4 py-2 border-b border-gray-700">{reservation.name}</td>
                                <td className="px-4 py-2 border-b border-gray-700">{reservation.email}</td>
                                <td className="px-4 py-2 border-b border-gray-700">{reservation.phone}</td>
                                <td className="px-4 py-2 border-b border-gray-700">{reservation.event}</td>
                                <td className="px-4 py-2 border-b border-gray-700">{reservation.people}</td>
                                <td className="px-4 py-2 border-b border-gray-700">{reservation.status}</td>

                                {/* {reservation.status} */}

                                <td className="px-4 py-2 border-b border-gray-700">
                                    {new Date(reservation.date).toLocaleDateString()}
                                </td>


                                {/* <td className="px-6 py-4 text-right">

                                    <button
                                        disabled={reservation.status === "accepted"}
                                        onClick={() => handleAccept(reservation._id)}
                                        className={`px-3 py-1 rounded font-semibold ${reservation.status === "accepted"
                                            ? "text-green-400 cursor-default"
                                            : "text-blue-300 hover:underline"
                                            }`}
                                    >
                                        {reservation.status === "accepted" ? "Accepted ✅" : "Pending"}
                                    </button>

                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => handleReject(reservation._id)}


                                        className="flex items-center justify-end gap-1 text-red-300 dark:text-red-400 hover:underline"
                                    >
                                        Reject
                                    </button>
                                </td> */}

                                {reservation.status === "pending" && (
                                    <>
                                        <button onClick={() => handleAccept(reservation._id)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Accept</button>
                                        <button onClick={() => handleReject(reservation._id)} className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
                                    </>
                                )}

                                {reservation.status === "accepted" && (
                                    <span className="text-green-500 font-semibold">Accepted</span>
                                )}

                                {reservation.status === "rejected" && (
                                    <span className="text-red-500 font-semibold">Rejected</span>
                                )}



                            </tr>

                        ))}
                        {reservations.length === 0 && (
                            <tr>
                                <td colSpan="6" className="px-4 py-4 text-center text-gray-400">
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

export default ReservationList;
