import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("https://tickchen-web-backend.vercel.app/api/authcheck", { withCredentials: true })
  //     .then((res) => {
  //       if (res.data.authenticated) {
  //         setAuthenticated(true);
  //       } else {
  //         setAuthenticated(false);
  //       }
  //     })
  //     .catch(() => {
  //       setAuthenticated(false);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);


  useEffect(() => {
    axios
      .get("https://tickchen-web-backend.vercel.app/api/auth/authcheck", {
        withCredentials: true,
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}` 
        // }
      },


      )
      .then((res) => {
        console.log(res)
        if (res.data.authenticated) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      })
      .catch(() => {
        setAuthenticated(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  if (loading) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-300 text-sm">Checking authentication...</p>
      </div>
    </div>
  );
}

  // Agar authenticated nahi hai to login page pe bhej do
  return authenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
