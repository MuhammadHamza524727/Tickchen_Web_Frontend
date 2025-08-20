// // import { assets } from "../assets/assets";
// // import Footer from "./Footer";
// // import Navbar from "./Navbar";
// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const menuData = {
// //   MAKI: [
// //     {
// //       id: 1,
// //       name: "Spicy Tuna Maki",
// //       description:
// //         "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
// //       price: "$5",
// //       imageSrc:
// //         "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3d493bc5-02b1-448c-9882-208df6c06b3b.png",
// //       imageAlt:
// //         "Plate with several spicy tuna maki sushi rolls, showing rice, tuna center, and seaweed wrap",
// //     },
// //     {
// //       id: 2,
// //       name: "Mango Maki",
// //       description:
// //         "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
// //       price: "$5",
// //       imageSrc:
// //         "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2340dd86-ef22-425d-81ef-1fb7ba9c6b56.png",
// //       imageAlt:
// //         "Plate with mango maki sushi rolls featuring shrimp tempura and creamy filling wrapped in rice and seaweed",
// //     },
// //     {
// //       id: 3,
// //       name: "Salmon Maki",
// //       description:
// //         "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
// //       price: "$5",
// //       imageSrc:
// //         "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cc3b166a-4b94-4cec-bd58-5793de8996be.png",
// //       imageAlt:
// //         "Plate showing salmon maki sushi rolls with sesame seed coating and vibrant salmon center",
// //     },
// //     {
// //       id: 4,
// //       name: "Tuna Maki",
// //       description:
// //         "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
// //       price: "$5",
// //       imageSrc:
// //         "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db4ff6dd-1493-4696-9591-1bc9a75d8600.png",
// //       imageAlt:
// //         "Plate featuring tuna maki sushi rolls with colorful vegetable fillings and rice seaweed wrap",
// //     },
// //   ],
// //   URAMAKI: [
// //     {
// //       id: 1,
// //       name: "California Uramaki",
// //       description:
// //         "Crab meat, avocado, and cucumber rolled inside out with sesame seeds on the outside.",
// //       price: "$6",
// //       imageSrc:
// //         "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c89719a-c51d-4202-b52a-47ff1db4b2a2.png",
// //       imageAlt:
// //         "Plate of California uramaki sushi rolls showing crab meat and avocado, sesame seeds outside",
// //     },
// //     {
// //       id: 2,
// //       name: "Spicy Salmon Uramaki",
// //       description:
// //         "Fresh salmon with spicy mayo sauce rolled inside out with crunchy tempura flakes.",
// //       price: "$7",
// //       imageSrc:
// //         "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08c329ad-4413-467e-868c-a042ecba8a25.png",
// //       imageAlt:
// //         "Plate of spicy salmon uramaki sushi rolls with orange spicy mayo drizzle and tempura flakes",
// //     },
// //   ],
// //   "SPECIAL ROLLS": [
// //     {
// //       id: 1,
// //       name: "Dragon Roll",
// //       description:
// //         "Eel and cucumber inside, topped with thin avocado slices and drizzled with eel sauce.",
// //       price: "$10",
// //       imageSrc:
// //         "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e44bd47-9c0a-4bd5-a1fe-0989d98b3954.png",
// //       imageAlt:
// //         "Plate of dragon rolls sushi with avocado slices on top and eel sauce drizzle",
// //     },
// //     {
// //       id: 2,
// //       name: "Rainbow Roll",
// //       description:
// //         "Crab and avocado inside, topped with assorted slices of raw fish and avocado.",
// //       price: "$12",
// //       imageSrc:
// //         "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/105f93f2-8df1-43d6-ba58-a0c4fff7f9d5.png",
// //       imageAlt:
// //         "Colorful rainbow roll sushi plate with layers of various raw fish slices on top",
// //     },
// //   ],
// // };

// // const categories = Object.keys(menuData);

// // const Menu = () => {
// //   const [selectedCategory, setSelectedCategory] = useState("MAKI");
// //   const [loading, setLoading] = useState(false);
// //   const [status, setStatus] = useState("");

// //   const navigate = useNavigate()

// //   const handleOrder = async (item) => {
// //     setStatus(item.id); 
// //     setLoading(true);
// //     try {
// //       const orderItems = [{ name: item.name, quantity: 1, price: item.price }];
// //       await axios.post(
// //         "https://tickchen-web-backend.vercel.app/api/user-order/orders",
// //         { items: orderItems },
// //         { withCredentials: true }
// //       );
// //       alert("Order placed successfully!");

// //       navigate('/userorderpage')
      

// //     } catch (err) {
// //       alert("Failed to place order.");
// //     } finally {
// //       setLoading(false);
// //       setStatus("");
// //     }
// //   };

// //   return (
// //     <div
// //       style={{ backgroundImage: `url(${assets.bg})` }}
// //       className="min-h-screen bg-cover bg-center p-2 sm:p-0"
// //     >
// //       <div className="md:fixed top-0 left-0 right-0 z-30">
// //         <Navbar />
// //       </div>

// //       <div className="overflow-hidden">
// //         <img
// //           src={assets.img1}
// //           alt="menu-img"
// //           className="w-full object-cover rounded mb-8 max-h-[300px] md:max-h-[1200px]"
// //         />
// //         <p className="text-5xl md:text-8xl text-center text-[#EFE7D2] font-bold mb-10">
// //           MENU
// //         </p>

// //         {/* Category Tabs */}
// //         <nav className="flex flex-wrap gap-3 justify-center mb-12">
// //           {categories.map((category) => (
// //             <button
// //               key={category}
// //               onClick={() => setSelectedCategory(category)}
// //               className={`text-xs md:text-sm tracking-wide px-4 py-2 rounded-md border border-gray-700 hover:border-yellow-400 transition-colors ${
// //                 selectedCategory === category
// //                   ? "bg-gray-800 text-yellow-400 font-semibold"
// //                   : "bg-transparent text-gray-400"
// //               }`}
// //             >
// //               {category}
// //             </button>
// //           ))}
// //         </nav>

// //         {/* Selected Category Title */}
// //         <h2 className="text-center text-3xl text-white md:text-4xl font-serif tracking-wide mb-10 relative after:content-[''] after:block after:border-t after:border-gray-500 after:w-20 after:mx-auto after:mt-3">
// //           {selectedCategory}
// //         </h2>

// //         {/* Menu Items */}
// //         <ul className="max-w-4xl mx-auto space-y-10">
// //           {menuData[selectedCategory].map((item) => (
// //             <li
// //               key={item.id}
// //               className="flex flex-col md:flex-row md:items-center md:gap-8 group border-b border-gray-700 pb-8"
// //             >
// //               {/* Image */}
// //               <div className="flex-shrink-0 w-full md:w-40 rounded-md overflow-hidden bg-gray-800 shadow-md">
// //                 <img
// //                   src={item.imageSrc}
// //                   alt={item.imageAlt}
// //                   className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
// //                   onError={(e) => {
// //                     e.target.onerror = null;
// //                     e.target.src =
// //                       "https://via.placeholder.com/150?text=No+Image";
// //                   }}
// //                 />
// //               </div>

// //               {/* Text Content */}
// //               <div className="flex-1 mt-4 md:mt-0">
// //                 {/* Title + Price */}
// //                 <div className="flex justify-between items-center flex-wrap gap-2">
// //                   <h3 className="text-lg md:text-xl font-serif tracking-tight text-white">
// //                     {item.name.toUpperCase()}
// //                   </h3>
// //                   <span className="text-yellow-400 font-serif text-lg">
// //                     {item.price}
// //                   </span>
// //                 </div>

// //                 {/* Description */}
// //                 <p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed font-sans">
// //                   {item.description}
// //                 </p>

// //                 {/* Order Button */}
// //                 <button
// //                   onClick={() => handleOrder(item)}
// //                   disabled={loading && status === item.id}
// //                   className="mt-4 px-5 py-2 bg-yellow-400 text-black text-sm font-medium rounded-full hover:bg-yellow-500 transition disabled:opacity-50"
// //                 >
// //                   {loading && status === item.id ? "Ordering..." : "Order Now"}
// //                 </button>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>

// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Menu;


// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";
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
// } from "@/components/ui/alert-dialog";

// const Menu = () => {
//   const menuData = { /* tumhara existing menuData yahan paste karo */ };
//   const categories = Object.keys(menuData);

//   const [selectedCategory, setSelectedCategory] = useState("MAKI");
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");
//   const [selectedItem, setSelectedItem] = useState(null);

//   const navigate = useNavigate();

//   const handleOrder = async (item) => {
//     setStatus(item.id);
//     setLoading(true);
//     try {
//       const orderItems = [{ name: item.name, quantity: 1, price: item.price }];
//       await axios.post(
//         "https://tickchen-web-backend.vercel.app/api/user-order/orders",
//         { items: orderItems },
//         { withCredentials: true }
//       );
//       alert("Order placed successfully!");
//       navigate("/userorderpage");
//     } catch (err) {
//       alert("Failed to place order.");
//     } finally {
//       setLoading(false);
//       setStatus("");
//     }
//   };

//   return (
//     <div
//       style={{ backgroundImage: `url(${assets.bg})` }}
//       className="min-h-screen bg-cover bg-center p-2 sm:p-0"
//     >
//       <div className="md:fixed top-0 left-0 right-0 z-30">
//         <Navbar />
//       </div>

//       <div className="overflow-hidden">
//         <img
//           src={assets.img1}
//           alt="menu-img"
//           className="w-full object-cover rounded mb-8 max-h-[300px] md:max-h-[1200px]"
//         />
//         <p className="text-5xl md:text-8xl text-center text-[#EFE7D2] font-bold mb-10">
//           MENU
//         </p>

//         {/* Category Tabs */}
//         <nav className="flex flex-wrap gap-3 justify-center mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`text-xs md:text-sm tracking-wide px-4 py-2 rounded-md border border-gray-700 hover:border-yellow-400 transition-colors ${
//                 selectedCategory === category
//                   ? "bg-gray-800 text-yellow-400 font-semibold"
//                   : "bg-transparent text-gray-400"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </nav>

//         {/* Selected Category Title */}
//         <h2 className="text-center text-3xl text-white md:text-4xl font-serif tracking-wide mb-10 relative after:content-[''] after:block after:border-t after:border-gray-500 after:w-20 after:mx-auto after:mt-3">
//           {selectedCategory}
//         </h2>

//         {/* Menu Items */}
//         <ul className="max-w-4xl mx-auto space-y-10">
//           {menuData[selectedCategory].map((item) => (
//             <li
//               key={item.id}
//               className="flex flex-col md:flex-row md:items-center md:gap-8 group border-b border-gray-700 pb-8"
//             >
//               {/* Image */}
//               <div className="flex-shrink-0 w-full md:w-40 rounded-md overflow-hidden bg-gray-800 shadow-md">
//                 <img
//                   src={item.imageSrc}
//                   alt={item.imageAlt}
//                   className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src =
//                       "https://via.placeholder.com/150?text=No+Image";
//                   }}
//                 />
//               </div>

//               {/* Text Content */}
//               <div className="flex-1 mt-4 md:mt-0">
//                 {/* Title + Price */}
//                 <div className="flex justify-between items-center flex-wrap gap-2">
//                   <h3 className="text-lg md:text-xl font-serif tracking-tight text-white">
//                     {item.name.toUpperCase()}
//                   </h3>
//                   <span className="text-yellow-400 font-serif text-lg">
//                     {item.price}
//                   </span>
//                 </div>

//                 {/* Description */}
//                 <p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed font-sans">
//                   {item.description}
//                 </p>

//                 {/* Confirmation Popup */}
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <button
//                       onClick={() => setSelectedItem(item)}
//                       className="mt-4 px-5 py-2 bg-yellow-400 text-black text-sm font-medium rounded-full hover:bg-yellow-500 transition disabled:opacity-50"
//                     >
//                       Order Now
//                     </button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent>
//                     <AlertDialogHeader>
//                       <AlertDialogTitle>Confirm Your Order</AlertDialogTitle>
//                       <AlertDialogDescription>
//                         Are you sure you want to order{" "}
//                         <span className="font-semibold">{selectedItem?.name}</span>
//                         ? This action cannot be undone.
//                       </AlertDialogDescription>
//                     </AlertDialogHeader>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>Cancel</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() => handleOrder(selectedItem)}
//                         disabled={loading && status === selectedItem?.id}
//                       >
//                         {loading && status === selectedItem?.id
//                           ? "Ordering..."
//                           : "Yes, Order"}
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               </div>
//             </li>
//           ))}
//         </ul>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Menu;


import { assets } from "../assets/assets";
import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ShadCN UI imports
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog";
import { Button } from "../components/ui/button";

const menuData = {
  MAKI: [
    {
      id: 1,
      name: "Spicy Tuna Maki",
      description:
        "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
      price: "$5",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3d493bc5-02b1-448c-9882-208df6c06b3b.png",
      imageAlt:
        "Plate with several spicy tuna maki sushi rolls, showing rice, tuna center, and seaweed wrap",
    },
    {
      id: 2,
      name: "Mango Maki",
      description:
        "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
      price: "$5",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2340dd86-ef22-425d-81ef-1fb7ba9c6b56.png",
      imageAlt:
        "Plate with mango maki sushi rolls featuring shrimp tempura and creamy filling wrapped in rice and seaweed",
    },
    {
      id: 3,
      name: "Salmon Maki",
      description:
        "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
      price: "$5",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cc3b166a-4b94-4cec-bd58-5793de8996be.png",
      imageAlt:
        "Plate showing salmon maki sushi rolls with sesame seed coating and vibrant salmon center",
    },
    {
      id: 4,
      name: "Tuna Maki",
      description:
        "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
      price: "$5",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db4ff6dd-1493-4696-9591-1bc9a75d8600.png",
      imageAlt:
        "Plate featuring tuna maki sushi rolls with colorful vegetable fillings and rice seaweed wrap",
    },
  ],
  URAMAKI: [
    {
      id: 1,
      name: "California Uramaki",
      description:
        "Crab meat, avocado, and cucumber rolled inside out with sesame seeds on the outside.",
      price: "$6",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c89719a-c51d-4202-b52a-47ff1db4b2a2.png",
      imageAlt:
        "Plate of California uramaki sushi rolls showing crab meat and avocado, sesame seeds outside",
    },
    {
      id: 2,
      name: "Spicy Salmon Uramaki",
      description:
        "Fresh salmon with spicy mayo sauce rolled inside out with crunchy tempura flakes.",
      price: "$7",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08c329ad-4413-467e-868c-a042ecba8a25.png",
      imageAlt:
        "Plate of spicy salmon uramaki sushi rolls with orange spicy mayo drizzle and tempura flakes",
    },
  ],
  "SPECIAL ROLLS": [
    {
      id: 1,
      name: "Dragon Roll",
      description:
        "Eel and cucumber inside, topped with thin avocado slices and drizzled with eel sauce.",
      price: "$10",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e44bd47-9c0a-4bd5-a1fe-0989d98b3954.png",
      imageAlt:
        "Plate of dragon rolls sushi with avocado slices on top and eel sauce drizzle",
    },
    {
      id: 2,
      name: "Rainbow Roll",
      description:
        "Crab and avocado inside, topped with assorted slices of raw fish and avocado.",
      price: "$12",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/105f93f2-8df1-43d6-ba58-a0c4fff7f9d5.png",
      imageAlt:
        "Colorful rainbow roll sushi plate with layers of various raw fish slices on top",
    },
  ],
};

const categories = Object.keys(menuData);

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("MAKI");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const navigate = useNavigate();

  const handleOrder = async (item) => {
    setStatus(item.id);
    setLoading(true);
    try {
      const orderItems = [{ name: item.name, quantity: 1, price: item.price }];
      await axios.post(
        "https://tickchen-web-backend.vercel.app/api/user-order/orders",
        { items: orderItems },
        { withCredentials: true }
      );
      setPopupOpen(true); // Order placed → show popup
    } catch (err) {
      alert("Failed to place order.");
    } finally {
      setLoading(false);
      setStatus("");
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${assets.bg})` }}
      className="min-h-screen bg-cover bg-center p-2 sm:p-0"
    >
      <div className="md:fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </div>

      <div className="overflow-hidden">
        <img
          src={assets.img1}
          alt="menu-img"
          className="w-full object-cover rounded mb-8 max-h-[300px] md:max-h-[1200px]"
        />
        <p className="text-5xl md:text-8xl text-center text-[#EFE7D2] font-bold mb-10">
          MENU
        </p>

        {/* Category Tabs */}
        <nav className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs md:text-sm tracking-wide px-4 py-2 rounded-md border border-gray-700 hover:border-yellow-400 transition-colors ${
                selectedCategory === category
                  ? "bg-gray-800 text-yellow-400 font-semibold"
                  : "bg-transparent text-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Selected Category Title */}
        <h2 className="text-center text-3xl text-white md:text-4xl font-serif tracking-wide mb-10 relative after:content-[''] after:block after:border-t after:border-gray-500 after:w-20 after:mx-auto after:mt-3">
          {selectedCategory}
        </h2>

        {/* Menu Items */}
        <ul className="max-w-4xl mx-auto space-y-10">
          {menuData[selectedCategory].map((item) => (
            <li
              key={item.id}
              className="flex flex-col md:flex-row md:items-center md:gap-8 group border-b border-gray-700 pb-8"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-40 rounded-md overflow-hidden bg-gray-800 shadow-md">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/150?text=No+Image";
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 mt-4 md:mt-0">
                {/* Title + Price */}
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h3 className="text-lg md:text-xl font-serif tracking-tight text-white">
                    {item.name.toUpperCase()}
                  </h3>
                  <span className="text-yellow-400 font-serif text-lg">
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Order Button */}
                <Button
                  onClick={() => handleOrder(item)}
                  disabled={loading && status === item.id}
                  className="mt-4 px-5 py-2 bg-yellow-400 text-black text-sm font-medium rounded-full hover:bg-yellow-500 transition disabled:opacity-50"
                >
                  {loading && status === item.id ? "Ordering..." : "Order Now"}
                </Button>
              </div>
            </li>
          ))}
        </ul>

        <Footer />
      </div>

      {/* ShadCN Popup */}
      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Placed Successfully</DialogTitle>
          </DialogHeader>
          <p className="text-gray-500">What would you like to do next?</p>
          <DialogFooter className="mt-4 flex gap-2">
            <Button variant="outline" onClick={() => setPopupOpen(false)}>
              Continue Browsing
            </Button>
            <Button onClick={() => navigate("/userorderpage")}>
              Check My Orders
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menu;
