import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Aboutpage from "./pages/Aboutpage";
import ReservationPage from "./pages/ReservationPage";
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import AOS from "aos"
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import AdminPage from "./pages/admin/AdminPage";
import ReservationListPage from "./pages/admin/reservationListPage";
import DashboardPage from "./pages/admin/DashboardPage";
import { ToastContainer } from 'react-toastify';
import PendingOrdersPage from "./pages/admin/PendingOrdersPage";
import ComingSoon from "./pages/admin/CommingSoon";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import UserReservationPage from "./pages/UserReservationPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Homepage from "./pages/Homepage";
import UserOrderPage from "./pages/UserOrderPage";
import FoodOrdersPage from "./pages/admin/FoodOrdersPage";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {



  useEffect(() => {

    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,

    });

    
    AOS.refresh()
  }, []);

   

  return (
    <>
    {/* <AuthProvider> */}
      <Router>
        <Routes>
          <Route path="/homepage" element=
          {<ProtectedRoute>
              <Homepage />
            </ProtectedRoute>} />
          <Route path="/menupage" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/reservationpage" element={ <ProtectedRoute><ReservationPage /></ProtectedRoute> } />
          <Route path="/" element={<Loginpage />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profilepage" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/contactpage" element={<ComingSoon />} />
          <Route path="/blogpage" element={<ComingSoon />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/user-reservation-page" element={<ProtectedRoute><UserReservationPage /></ProtectedRoute>} />
          <Route path="/userorderpage" element={<ProtectedRoute><UserOrderPage /></ProtectedRoute>} />


          {/* <Route path="/adminpage" element={<AdminPage />}>
          <Route path="reservationlistpage" element={<ReservationListPage />} />
        </Route> */}

          <Route path="/adminpage" element={<AdminPage />}>
            <Route index element={<DashboardPage />} />
            <Route path="reservationlistpage" element={<ReservationListPage />} />
            <Route path="pending_reservation" element={<PendingOrdersPage />} />
            <Route path="food-orders" element={<FoodOrdersPage />} />

            <Route path="coming-soon" element={<ComingSoon />} />


          </Route>




        </Routes>
       
    <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
