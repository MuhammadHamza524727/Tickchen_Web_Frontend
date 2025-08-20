import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../assets/assets';
import axios from 'axios';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const signupData = {
  //     name: name.trim(),
  //     email: email.trim(),
  //     password: password.trim(),
  //   };

  //   try {
  //     const response = await axios.post('https://tickchen-web-backend.vercel.app/api/auth/register', signupData, {
  //       withCredentials: true, // ✅ allow browser to store cookie
  //     });

  //     axios.get('https://tickchen-web-backend.vercel.app/api/protected', {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // ✅ MUST include "Bearer "
  //       },
  //     });


  //     if (response.status === 201) {
  //       toast.success("Registration successful!", {
  //         position: "top-right",
  //         style: {
  //           backgroundColor: '#2563eb',
  //           color: 'white',
  //           padding: '6px 10px',
  //           fontSize: '12px',
  //           minHeight: '30px',
  //         },
  //       });

  //       setTimeout(() => {
  //         navigate('/homepage');
  //       }, 1500);
  //     }
  //   } catch (error) {
  //     console.log("Signup Error", error.message);

  //     const errorMessage = error.response?.data?.message || error.message;

  //     let message = "Registration failed!";
  //     if (error.response?.status === 400) {
  //       if (errorMessage.toLowerCase().includes("already") || errorMessage.toLowerCase().includes("exists")) {
  //         message = "User already registered.";
  //       } else {
  //         message = errorMessage;
  //       }
  //     } else if (error.response?.status === 401) {
  //       message = "Unauthorized access.";
  //     } else if (error.response?.status === 404) {
  //       message = "Endpoint not found.";
  //     }

  //     toast.error(message, {
  //       position: "top-right",
  //       style: {
  //         backgroundColor: '#e53e3e',
  //         color: 'white',
  //         padding: '6px 10px',
  //         fontSize: '12px',
  //         minHeight: '30px',
  //       },
  //     });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = {
      username,
      email,
      password,
      
    };

    try {
      const response = await axios.post('https://tickchen-web-backend.vercel.app/api/auth/register', 
        signupData, 
        { withCredentials: true }
      );
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('role', response.data.user.role);
      // alert(`Registration successful! Role: ${response.data.user.role}`);


      if (response.status === 201) {
        toast.success("Registration successful!", {
          position: "top-right",
          style: {
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '6px 10px',
            fontSize: '12px',
            minHeight: '30px',
          },
        });

        setTimeout(() => {
          navigate('/homepage');
        }, 1500);
      }
    } catch (error) {
      console.log("Signup Error", error.message);

      toast.error(error.message, {
        position: "top-right",
        style: {
          backgroundColor: '#e53e3e',
          color: 'white',
          padding: '6px 10px',
          fontSize: '12px',
          minHeight: '30px',
        },
      });
    }

  };





const checkStrength = (value) => {
  setPassword(value);
  if (value.length < 6) {
    setPasswordStrength("Weak");
  } else if (
    value.match(/[A-Z]/) &&
    value.match(/[0-9]/) &&
    value.match(/[@$!%*?&]/)
  ) {
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
        <img
          src={assets.img1}
          alt="User"
          className="h-[100px] w-[100px] rounded-full border-0"
        />
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            value={username}
            type="text"
            placeholder="username"
            className="w-full rounded-md px-4 py-2 shadow-sm border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            value={email}
            type="email"
            placeholder="info@yourmail.com"
            className="w-full rounded-md px-4 py-2 shadow-sm border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full rounded-md px-4 py-2 shadow-sm border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            onChange={(e) => checkStrength(e.target.value)}
            required
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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
        >
          Register
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
        <FaGoogle size={18} /> <span>Sign in with Google</span>
      </button>

      <p className="text-center text-sm text-gray-600 mt-4">
        <Link to="/">
          Already have an account? <span className="text-blue-600 hover:underline">Login</span>
        </Link>
      </p>
    </div>
  </div>
);

}
export default Signup;
