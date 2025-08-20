import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("https://tickchen-web-backend.vercel.app/api/admin/orders", {
        withCredentials: true,
      });
      setOrders(res.data.orders);
    } catch (err) {
      alert("Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleUpdate = async (orderId, newStatus, newTime) => {
    setUpdatingId(orderId);
    try {
      await axios.put(
        `https://tickchen-web-backend.vercel.app/api/admin/orders/${orderId}`,
        { status: newStatus, estimatedTime: newTime },
        { withCredentials: true }
      );
      // Update locally after success
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId
            ? { ...order, status: newStatus, estimatedTime: newTime }
            : order
        )
      );
      alert("Order updated successfully!");
    } catch (err) {
      alert("Failed to update order.");
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-300 text-sm"></p>
      </div>
    </div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Orders Dashboard</h1>
      {orders.length === 0 && <p>No orders yet.</p>}

      <ul>
        {orders.map((order) => {
          const [estimatedTime, setEstimatedTime] = React.useState(order.estimatedTime || "");
          const [status, setStatus] = React.useState(order.status);

          return (
            <li
              key={order._id}
              className="border p-4 mb-6 rounded shadow-md bg-white"
            >
              <p>
                <strong>Order ID:</strong> {order._id}
              </p>
              <p>
                <strong>Items:</strong>{" "}
                {order.items.map((i) => `${i.name} (${i.quantity})`).join(", ")}
              </p>
              <p>
                <strong>User:</strong> {order.userName || "Unknown"}
              </p>

              <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <div>
                  <label className="block font-semibold text-gray-700">
                    Estimated Time (minutes)
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="border rounded px-2 py-1"
                    value={estimatedTime}
                    onChange={(e) => setEstimatedTime(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mt-2 sm:mt-0">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="pending">Pending</option>
                    <option value="cooking">Cooking</option>
                    <option value="ready-to-deliver">Ready to Deliver</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <button
                  onClick={() =>
                    handleUpdate(order._id, status, estimatedTime)
                  }
                  disabled={updatingId === order._id}
                  className="bg-blue-600 text-white px-4 py-2 rounded mt-3 sm:mt-0 hover:bg-blue-700 transition"
                >
                  {updatingId === order._id ? "Updating..." : "Update"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminOrders;
