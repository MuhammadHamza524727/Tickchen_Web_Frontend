import { useState, useEffect } from "react";
import axios from "axios";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // page load me loader

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          "https://tickchen-web-backend.vercel.app/api/auth/authcheck",
          { withCredentials: true }
        );
        setAuthenticated(true);
        setUser(res.data.user);
      } catch (err) {
        console.error("Auth check failed:", err.response?.data || err.message);
        setAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { authenticated, user, loading };
};
