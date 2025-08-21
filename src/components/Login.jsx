import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../assets/assets';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [role, setRole] = useState("User"); // Default role
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
      role: role.toLowerCase(),
    };
    // console.log(loginData)
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData,
        {
          withCredentials: true,
          // headers: { "Content-Type": "application/json" }
          
        }
      );
      localStorage.setItem("token", response.data.token);

      console.log(response.data.token,"res.data.token ");



      // console.log(`Login successful! Role: ${response.data.user.role}`)

      toast.success("Login successful!", {
        position: "top-right",
        style: {
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '6px 10px',
          fontSize: '12px',
          minHeight: '30px',
        },
      });

      localStorage.setItem("user", JSON.stringify(response.data.user));

      // setTimeout(() => {
      //   navigate('/homepage');
      // }, 1500);

      setTimeout(() => {
        if (response.data.user.role.toLowerCase() === "admin") {
          navigate("/adminpage");  
        } else {
          navigate("/homepage");
        }
      }, 1500);

    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      toast.error(
        error.response?.data?.message || "Login failed!",
        {
          position: "top-right",
          style: {
            backgroundColor: '#e53e3e',
            color: 'white',
            padding: '6px 10px',
            fontSize: '12px',
            minHeight: '30px',
          },
        }
      );
    }
  };




  const checkStrength = (value) => {
    setPassword(value);
    if (value.length < 6) {
      setPasswordStrength("Weak");
    } else if (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.match(/[@$!%*?&]/)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Medium");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50" style={{ backgroundImage: `url(${assets.bg})` }}>
      <ToastContainer theme="colored" />
      <div className="bg-white p-4 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div>
            <img
              src={assets.img1}
              alt="img1.webp"
              className="h-[100px] w-[100px] rounded-full border-0"
            />
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="info@yourmail.com"
              className="w-full rounded-md focus:border-blue-500 border-gray-300 px-4 shadow-sm py-2 pl-4 pr-10 focus:outline-none focus:ring focus:ring-blue-200"
              onChange={(e) => setEmail(e.target.value)}
              required
              name='email'
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-md focus:border-blue-500 border-gray-300 px-4 shadow-sm py-2 pl-4 pr-10 focus:outline-none focus:ring focus:ring-blue-200"
              onChange={(e) => checkStrength(e.target.value)}
              required
              name='password'
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {password && (
              <div className={`text-xs mt-1 ${passwordStrength === "Weak"
                ? "text-red-500"
                : passwordStrength === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
                }`}>
                <div className='flex justify-start text-md px-2 items-center'>
                  Strength: {passwordStrength}
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-md focus:border-blue-500 border-gray-300 px-4  shadow-sm py-2 pl-4 pr-10 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="user" className='w-full rounded-md focus:border-blue-500 border-gray-300 px-4 shadow-sm py-2 pl-4 pr-10 focus:outline-none focus:ring focus:ring-blue-200 '>User </option>
              <option value="admin" className='w-full rounded-md focus:border-blue-500 border-gray-300 px-4 shadow-sm py-2 pl-4 pr-10 focus:outline-none focus:ring focus:ring-blue-200'>Admin</option>
              {/* Add more roles as needed */}
            </select>
          </div>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot your password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400">Or with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          className="w-full bg-blue-900 text-white rounded-md py-2 flex items-center justify-center space-x-2 hover:bg-blue-950"
        >
          <FaGoogle size={18} color="white" /> <span>Sign in with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          <Link to="/signuppage">
            Don't have an account? <span className="text-blue-600 hover:underline">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
