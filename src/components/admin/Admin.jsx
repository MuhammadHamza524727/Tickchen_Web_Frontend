// // AdminPanel.jsx
// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const Admin = () => {
//   return (
//     <div className="flex h-screen bg-[#0A0B0A] text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#111111] p-5 hidden md:block">
//         <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
//         <nav className="flex flex-col gap-4">
//           <Link to="/adminpage/dashboard" className="hover:text-orange-400">Dashboard</Link>
//           <Link to="/adminpage/menu" className="hover:text-orange-400">Manage Menu</Link>
//           <Link to="/adminpage/reservations" className="hover:text-orange-400">Reservations</Link>
//           <Link to="/adminpage/blogs" className="hover:text-orange-400">Blog Posts</Link>
//           <Link to="/adminpage/messages" className="hover:text-orange-400">Messages</Link>
//         </nav>
//       </aside>

//       {/* Content Area */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         <Outlet />
//         <h1 className="text-3xl font-semibold mb-6">Welcome Admin</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Card example */}
//         <Link to="/adminpage/reservationlistpage">   <div className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg">
//            <h2 className="text-xl font-semibold mb-2">Total Reservations</h2>
//             <p className="text-orange-400 text-3xl">124</p>
//           </div>
//           </Link>
//           <div className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg">
//             <h2 className="text-xl font-semibold mb-2">Pending Orders</h2>
//             <p className="text-orange-400 text-3xl">32</p>
//           </div>
//           {/* Add more as needed */}
          
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Admin;


// AdminPage.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex h-screen bg-[#0A0B0A] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111111] p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/adminpage" className="hover:text-orange-400">Dashboard</Link>
          <Link to="/adminpage/reservationlistpage" className="hover:text-orange-400">Reservations</Link>
          <Link to="/adminpage/pending_reservation" className="hover:text-orange-400">Reservation Orders</Link>
          <Link to="/adminpage/food-orders" className="hover:text-orange-400">Food Orders</Link>


          <Link to="/adminpage/coming-soon" className="hover:text-orange-400">Manage Menu</Link>
          <Link to="/adminpage/coming-soon" className="hover:text-orange-400">Blog Posts</Link>
          <Link to="/adminpage/coming-soon" className="hover:text-orange-400">Messages</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet /> 
      </main>
    </div>
  );
};

export default Admin;
