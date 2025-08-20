// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const FoodOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("https://tickchen-web-backend.vercel.app/api/user-order/all-orders", {
//         withCredentials: true,
//       });
//       setOrders(res.data.orders);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (orderId, newStatus) => {
//     try {
//       const res = await axios.put(
//         `https://tickchen-web-backend.vercel.app/api/user-order/update-status/${orderId}`,
//         { status: newStatus },
//         { withCredentials: true }
//       );

//       setOrders((prev) =>
//         prev.map((order) =>
//           order._id === orderId ? { ...order, status: newStatus } : order
//         )
//       );

//       console.log("Updated:", res.data);
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   if (loading) return <div className="flex items-center justify-center min-h-screen bg-black">
//     <div className="flex flex-col items-center">
//       <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
//       <p className="mt-4 text-gray-300 text-sm"></p>
//     </div>
//   </div>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Food Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table className="w-full border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border px-4 py-2">User</th>
//               <th className="border px-4 py-2">Items</th>
//               <th className="border px-4 py-2">Status</th>
//               <th className="border px-4 py-2">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id}>
//                 <td className="border px-4 py-2">
//                   {order.user?.username} <br />
//                   <small>{order.user?.email}</small>
//                 </td>
//                 <td className="border px-4 py-2">
//                   {order.items.map((item, i) => (
//                     <div key={i}>
//                       {item.name}

//                     </div>

//                   ))}
//                 </td>

//                 <td className="border px-4 py-2">
//                   <select
//                     value={order.status}
//                     onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                   >
//                     <option value="pending">Pending</option>
//                     <option value="cooking">Cooking</option>
//                     <option value="ready-to-deliver">Ready to Deliver</option>
//                     <option value="delivered">Delivered</option>
//                   </select>
//                 </td>
//                 <td className="border px-4 py-2">
//                   {new Date(order.createdAt).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default FoodOrdersPage;


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
      const res = await axios.get(
        "https://tickchen-web-backend.vercel.app/api/user-order/all-orders",
        { withCredentials: true }
      );
      setOrders(res.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await axios.put(
        `https://tickchen-web-backend.vercel.app/api/user-order/update-status/${orderId}`,
        { status: newStatus },
        { withCredentials: true }
      );

      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );

      console.log("Updated:", res.data);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0A0B0A]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-400 text-sm">Fetching orders...</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0A0B0A] text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        Kitchen Orders Dashboard
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-400">No orders found.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                <th className="px-6 py-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr
                  key={order._id}
                  className={`${
                    idx % 2 === 0 ? "bg-[#111]" : "bg-[#1a1a1a]"
                  } hover:bg-gray-800 transition`}
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-white">
                      {order.user?.username}
                    </p>
                    <p className="text-xs text-gray-400">{order.user?.email}</p>
                  </td>

                  <td className="px-6 py-4">
                    {order.items.map((item, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-lg mr-2 mb-1"
                      >
                        {item.name}
                      </span>
                    ))}
                  </td>

                  <td className="px-6 py-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="bg-gray-900 border border-gray-700 text-gray-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="cooking">Cooking</option>
                      <option value="ready-to-deliver">Ready to Deliver</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>

                  <td className="px-6 py-4 text-gray-400 text-sm">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FoodOrdersPage;
