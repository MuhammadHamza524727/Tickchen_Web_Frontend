import React, { useEffect, useState } from "react";
import axios from "axios";

const FoodOrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await axios.get("https://tickchen-web-backend.vercel.app/api/user-order/all-orders", {
                withCredentials: true,
            });
            setOrders(res.data.orders);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-300 text-sm"></p>
        </div>
    </div>;;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">All Food Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <table className="w-full border border-gray-300">
                    <thead >
                        <tr>
                            <th className="border px-4 py-2">User</th>
                            <th className="border px-4 py-2">Items</th>
                            <th className="border px-4 py-2">Quantity</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Status</th>
                            <th className="border px-4 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td className="border px-4 py-2">
                                    {order.user?.username} <br />
                                    <small>{order.user?.email}</small>
                                </td>
                                <td className="border px-4 py-2 text-center">
                                    {order.items.map((item, i) => (
                                        <div key={i}>
                                            {item.name} (x{item.quantity}) - {item.price}
                                        </div>

                                    ))}
                                </td>
                                <td className="border px-4 py-2">
                                    {order.items.map((item, i) => (
                                        <div key={i} className="text-center">
                                            {item.quantity}
                                        </div>

                                    ))}
                                </td>
                                <td className="border px-4 py-2">
                                    {order.items.map((item, i) => (
                                        <div key={i} className="text-center">
                                            {item.price}
                                        </div>

                                    ))}
                                </td>
                                <td className="border px-4 py-2 text-center">{order.status}</td>
                                <td className="border px-4 py-2 text-center">
                                    {new Date(order.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FoodOrdersPage;
