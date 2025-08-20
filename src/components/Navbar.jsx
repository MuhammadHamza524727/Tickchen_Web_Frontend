import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Squeeze as Hamburger } from 'hamburger-react'
import { toast } from "react-toastify";
import axios from "axios";





const Navbar = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      setIsAuthenticated(true);
      setUserRole(role);
    }
  }, []);






  const handleLogout = async () => {
    try {
      const response = await axios.post('https://tickchen-web-backend.vercel.app/api/auth/logout',{},{ withCredentials: true });
       console.log("Logged out successfully");
      if (response.status === 200) {
     
        setIsAuthenticated(false);
        setUserRole('');
        toast.success('Logout successful!');
        setTimeout(() => {
          navigate('/');
          // alert('logout hogya')
        }, 1500);
      }
    } catch (err) {
      console.error('Logout error:', err);
      toast.error('Failed to logout. Please try again.');
    }
  };





  return (
    <nav className="flex items-center justify-between px-4 w-[200px]  py-3 bg-[#0A0B0A] bg-opacity-50 md:w-lg  rounded-2xl relative z-10 top-15 md:left-15">
      <div className="flex items-center space-x-4 justify-center">
        <div className="text-orange-50 flex items-center justify-center border bg-[#1E1E1E] border-gray-700  ">


          <Sheet >
            <SheetTrigger >
              <Hamburger size={20} />
            </SheetTrigger>
            {/* <SheetContent className="w-[300px] md:w-[540px] bg-black border-none text-white ">

              <SheetHeader className="text-center ">
                <SheetTitle className="text-4xl font-bold mb-6 text-gray-200  ">TIKCHEN</SheetTitle>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/menupage'>MENU</Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/reservationpage'>RESERVATION</Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/aboutpage'>ABOUT</Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/contactpage'>CONTACT</Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/blogpage'> BLOG </Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/loginpage'> LOGIN </Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/signuppage'> REGISTER </Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4 ">
                  <Link onClick={handleLogout}> Logout </Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4 ">
                  <Link to='/profilepage'> Profile </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent> */}

            <SheetContent className="w-[300px] md:w-[540px] bg-black border-none text-white md:pt-5 ">
              <SheetHeader className="text-center">
                <SheetTitle className="text-4xl font-bold mb-6 text-gray-200">TIKCHEN</SheetTitle>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/menupage'>MENU</Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                      <Link to='/Userorderpage'>Order</Link>
                    </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/reservationpage'>RESERVATION</Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/aboutpage'>ABOUT</Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/contactpage'>CONTACT</Link>
                </SheetDescription>
                <SheetDescription className="text-2xl mb-4">
                  <Link to='/blogpage'>BLOG</Link>
                </SheetDescription>
                {!isAuthenticated && (
                  <>
                    <SheetDescription className="text-2xl mb-4">
                      <Link to='/loginpage'>LOGIN</Link>
                    </SheetDescription>
                    <SheetDescription className="text-2xl mb-4">
                      <Link to='/signuppage'>REGISTER</Link>
                    </SheetDescription>
                  </>
                )}
                {isAuthenticated && (
                  <>
                    <SheetDescription className="text-2xl mb-4">
                      <button onClick={handleLogout} >
                        Logout
                      </button>
                    </SheetDescription>
                    <SheetDescription className="text-2xl mb-4">
                      <Link to='/profilepage'>Profile</Link>
                    </SheetDescription>
                    
                  </>
                )}
              </SheetHeader>
            </SheetContent>
          </Sheet>


        </div>
        <Link
          to='/homepage'>
          <h1 className="text-orange-50 text-xl font-serif sm:text-2xl ">TIKCHEN</h1>

        </Link>

        <div className="hidden sm:flex space-x-2 ml-4 sm:items-center">
          <Link
            to='/menupage'
            className="text-orange-50 Satoshi hover:text-gray-300 hover:bg-[#1E1E1E] transition-all duration-300 ease-in-out px-4 py-2 rounded text-sm sm:text-[12px]"
          >
            MENU
          </Link>
          <Link
            to="/aboutpage"
            className="text-orange-50 Satoshi hover:text-gray-300 hover:bg-[#1E1E1E] transition-all duration-300 ease-in-out px-4 py-2 rounded text-sm sm:text-[12px]"
          >
            ABOUT
          </Link>
          <Link
            to="/reservationpage">
            <button className="Satoshi border border-gray-500 hidden sm:block bg-[#111111] text-orange-50 px-4 py-2 rounded  text-sm sm:text-[12px] transition-all duration-300 ease-in-out hover:text-gray-300 hover:bg-[#1E1E1E]">
              BOOK A TABLE
            </button>
          </Link>

        </div>
      </div>


    </nav>
  );
};

export default Navbar;
