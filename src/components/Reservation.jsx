// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { assets } from "../assets/assets";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";


// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// // import { Button } from "@/components/ui/button"





// export default function Reservation() {
//   const [showLoginAlert, setShowLoginAlert] = useState(false);
//   const [authenticated, setAuthenticated] = useState(false);
//   const [name, setName] = useState("");
//   const [event, setEvent] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [people, setPeople] = useState("");
//   const [date, setDate] = useState(new Date());

//   const navigate = useNavigate()


//   useEffect(() => {
//     axios
//       .get("https://tickchen-web-backend.vercel.app/api/auth/authcheck", { withCredentials: true })
//       .then((res) => {
//         setAuthenticated(res.data.authenticated);
//       })
//       .catch(() => {
//         setAuthenticated(false);
//       });
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // if (!authenticated) {
//     //   toast.error("Please login first!", {
//     //     position: "top-center",
//     //     style: {
//     //       backgroundColor: "#e53e3e",
//     //       color: "white",
//     //     },
//     //   });
//     //   return;
//     // }

//     if (!authenticated) {
//       setShowLoginAlert(true);
//       return;
//     }

//     let formattedDate;

//     // Check if date is a Date instance
//     if (date instanceof Date && !isNaN(date)) {
//       formattedDate = date.toISOString();
//     } else {
//       formattedDate = new Date(date).toISOString();
//     }

//     const reservationData = {
//       name,
//       event,
//       phone,
//       email,
//       // password,
//       people: Number(people),
//       date: formattedDate
//     };

//     try {
//       const response = await axios.post('https://tickchen-web-backend.vercel.app/api/reservations', reservationData);

//       if (response.status === 201 || response.status === 200) {
//         toast.success("Reservation submitted successfully!");
//         // Clear form
//         setName("");
//         setEvent("");
//         setPhone("");
//         setEmail("");
//         setPeople("");
//         setDate(new Date());
//         setTimeout(() => {
//           navigate('/user-reservation-page')

//         }, 1500);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to submit reservation.");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen text-gray-100 font-serif pb-5 md:mb-0"
//       style={{ backgroundImage: `url(${assets.bg})` }}
//     >

//       <div>

//         <AlertDialog open={showLoginAlert} onOpenChange={setShowLoginAlert}>
//           <AlertDialogContent>
//             <AlertDialogHeader>
//               <AlertDialogTitle>Please login first!</AlertDialogTitle>
//               <AlertDialogDescription>
//                 You need to login to make a reservation.
//               </AlertDialogDescription>
//             </AlertDialogHeader>
//             <AlertDialogFooter>
//               <AlertDialogCancel onClick={() => setShowLoginAlert(false)}>Cancel</AlertDialogCancel>
//               <AlertDialogAction onClick={() => navigate('/')}>Go to Login</AlertDialogAction>
//             </AlertDialogFooter>
//           </AlertDialogContent>
//         </AlertDialog>

//       </div>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />

//       <main data-aos="fade-zoom-in"
//         data-aos-easing="ease-in-back"
//         data-aos-delay="100"
//         data-aos-offset="1"
//         data-aos-duration="300" className="pt-5 px-6 sm:px-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 min-h-[85vh]">
//         {/* Left side image */}
//         <section id="about" className="relative rounded-lg overflow-hidden shadow-lg">
//           <Navbar />
//           <img
//             src={assets.img3}
//             alt="restaurant interior"
//             className="w-full sm:h-screen object-cover mt-[-100px] opacity-80"
//           />
//           <h1 className="absolute hidden sm:block uppercase bottom-20 left-12 text-2xl sm:text-7xl Satoshi text-gray-100 drop-shadow-lg">
//             Book <br /> a table
//           </h1>
//         </section>

//         {/* Right side form */}
//         <div className="bg-transparent border border-gray-500 p-8 rounded-lg shadow-lg w-full Satoshi">
//           <h2 className="text-2xl font-bold Forum text-white mb-4 text-center tracking-widest flex justify-center">
//             <span className="hidden sm:block">⋙  </span > RESERVATION <span className="hidden sm:block"> ⋘</span>
//           </h2>
//           <p className="text-gray-300 font-extralight Satoshi mb-6 text-center">
//             Secure your spot at Tickchen, where exceptional sushi and a remarkable dining experience await.
//           </p>

//           <form onSubmit={handleSubmit} >
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Your Name"
//               required
//               className="mb-4 w-full p-2 rounded bg-transparent border border-gray-400 text-white placeholder-gray-400 outline-none"
//               data-aos="zoom-out"
//             />

//             <input
//               data-aos="zoom-out"
//               type="text"
//               id="event"
//               value={event}
//               onChange={(e) => setEvent(e.target.value)}
//               placeholder="Event"
//               required
//               className="mb-4 w-full p-2 rounded bg-transparent border border-gray-400 text-white placeholder-gray-400 outline-none"
//             />

//             <input
//               data-aos="zoom-out"
//               type="tel"
//               id="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Phone Number"
//               required
//               className="mb-4 w-full p-2 rounded bg-transparent border border-gray-400 text-white placeholder-gray-400 outline-none"
//             />

//             <input
//               data-aos="zoom-out"
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               required
//               className="mb-4 w-full p-2 rounded bg-transparent border border-gray-400 text-white placeholder-gray-400 outline-none"
//             />



//             <div className="mb-4 flex flex-col gap-5">
//               <div className="flex flex-col md:flex-row md:items-center gap-4">
//                 <label htmlFor="people" className="Satoshi text-gray-300">
//                   Number of
//                 </label>
//                 <input
//                   data-aos="zoom-out"
//                   id="people"
//                   type="number"
//                   min="10"
//                   max="600"
//                   value={people}
//                   onChange={(e) => setPeople(e.target.value)}
//                   placeholder="person"
//                   required
//                   className="outline-none Satoshi w-20 p-1 rounded bg-transparent border-gray-300 border text-white placeholder-gray-400"
//                 />

//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button variant={"outline"} className="w-fit bg-transparent justify-start text-left Satoshi">
//                       <CalendarIcon className="mr-2 h-4 w-4" />
//                       {date ? format(date, "PPP") : <span>Pick a date</span>}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0 bg-white text-black rounded-lg">
//                     <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
//                   </PopoverContent>
//                 </Popover>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full Satoshi bg-transparent border-gray-400 border text-white p-2 rounded hover:bg-[#1E1E1E] transition duration-300"
//             >
//               Reserve Now
//             </button>

//             <Footer />
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { assets } from "../assets/assets";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Reservation() {
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [reservationId, setReservationId] = useState(null); // save ID from backend

  const navigate = useNavigate();

  // 🔹 Check authentication on load
  useEffect(() => {
    axios
      .get("https://tickchen-web-backend.vercel.app/api/auth/authcheck", { withCredentials: true })
      .then((res) => {
        setAuthenticated(res.data.authenticated);
      })
      .catch(() => {
        setAuthenticated(false);
      });
  }, []);

  // 🔹 Reservation Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!authenticated) {
      setShowLoginAlert(true);
      return;
    }

    let formattedDate;
    if (date instanceof Date && !isNaN(date)) {
      formattedDate = date.toISOString();
    } else {
      formattedDate = new Date(date).toISOString();
    }

    const reservationData = {
      name,
      event,
      phone,
      email,
      people: Number(people),
      date: formattedDate,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "https://tickchen-web-backend.vercel.app/api/reservations",
        reservationData
        
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Reservation submitted successfully!");
        
        setReservationId(response.data.id); // backend se reservationId return honi chahiye
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit reservation.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Stripe Payment
  const handlePay = async () => {
    if (!reservationId) {
      toast.error("Please submit reservation first.");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(
        "https://tickchen-web-backend.vercel.app/api/pay/create-checkout-session",
        {
          reservationId,
          amount: 15000, // cents → $150.00 (yeh amount backend se calculate karna best hai)
          currency: "usd",
          customerEmail: email,
        }
      );
      console.log(res)
      window.location.href = res.data.url; // Stripe Checkout redirect
    } catch (e) {
      console.error(e);
      toast.error("Payment init failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen text-gray-100 font-serif pb-5 md:mb-0"
      style={{ backgroundImage: `url(${assets.bg})` }}
    >
      {/* Alert for login */}
      <AlertDialog open={showLoginAlert} onOpenChange={setShowLoginAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Please login first!</AlertDialogTitle>
            <AlertDialogDescription>
              You need to login to make a reservation.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowLoginAlert(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => navigate("/")}>
              Go to Login
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <main
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="1"
        data-aos-duration="300"
        className="pt-5 px-6 sm:px-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 min-h-[85vh]"
      >
        {/* Left side image */}
        <section
          id="about"
          className="relative rounded-lg overflow-hidden shadow-lg"
        >
          <Navbar />
          <img
            src={assets.img3}
            alt="restaurant interior"
            className="w-full sm:h-screen object-cover mt-[-100px] opacity-80"
          />
          <h1 className="absolute hidden sm:block uppercase bottom-20 left-12 text-2xl sm:text-7xl Satoshi text-gray-100 drop-shadow-lg">
            Book <br /> a table
          </h1>
        </section>

        {/* Right side form */}
        <div className="bg-transparent border border-gray-500 p-8 rounded-lg shadow-lg w-full Satoshi">
          <h2 className="text-2xl font-bold Forum text-white mb-4 text-center tracking-widest flex justify-center">
            <span className="hidden sm:block">⋙ </span> RESERVATION{" "}
            <span className="hidden sm:block"> ⋘</span>
          </h2>
          <p className="text-gray-300 font-extralight Satoshi mb-6 text-center">
            Secure your spot at Tickchen, where exceptional sushi and a remarkable dining experience await.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="mb-4 w-full p-2 rounded bg-transparent border border-gray-400 text-white placeholder-gray-400 outline-none"
              data-aos="zoom-out"
            />

            <input
              data-aos="zoom-out"
              type="text"
              id="event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              placeholder="Event"
              required
              className="mb-4 w-full p-2 rounded bg-transparent border border-gray-400 text-white placeholder-gray-400 outline-none"
            />

            <input
              data-aos="zoom-out"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
              className="mb-4 w-full p-2 rounded bg-transparent border border-gray-400 text-white placeholder-gray-400 outline-none"
            />

            <input
              data-aos="zoom-out"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="mb-4 w-full p-2 rounded bg-transparent border border-gray-400 text-white placeholder-gray-400 outline-none"
            />

            <div className="mb-4 flex flex-col gap-5">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label htmlFor="people" className="Satoshi text-gray-300">
                  Number of
                </label>
                <input
                  data-aos="zoom-out"
                  id="people"
                  type="number"
                  min="10"
                  max="600"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  placeholder="person"
                  required
                  className="outline-none Satoshi w-20 p-1 rounded bg-transparent border-gray-300 border text-white placeholder-gray-400"
                />

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-fit bg-transparent justify-start text-left Satoshi"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white text-black rounded-lg">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full Satoshi bg-transparent border-gray-400 border text-white p-2 rounded hover:bg-[#1E1E1E] transition duration-300"
            >
              {loading ? "Submitting..." : "Submit Reservation"}
            </button>
          </form>

          {/* Stripe Pay Button */}
          {reservationId && (
            <button
              onClick={handlePay}
              disabled={loading}
              className="mt-4 w-full Satoshi bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
              {loading ? "Redirecting..." : "Pay with Stripe"}
            </button>
          )}

          <Footer />
        </div>
      </main>
    </div>
  );
}
