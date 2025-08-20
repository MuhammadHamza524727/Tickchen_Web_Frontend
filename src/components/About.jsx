import React, { useState } from 'react';
import Navbar from './Navbar';
import { assets } from "../assets/assets";
import Carousel from '../blocks/Components/Carousel/Carousel';
import Footer from './Footer';

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div  className="min-h-screen text-gray-100 font-serif selection:bg-yellow-300 selection:text-gray-900" style={{ backgroundImage: `url(${assets.bg})` }}>
            {/* Main content grid */}
            <main data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="1"
             data-aos-duration="300"
              className="pt-5 px-6 sm:px-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:min-h-[85vh]">
                {/* Left side large image with ABOUT text */}
                <section
                    id="about"
                    className="relative rounded-lg overflow-hidden shadow-lg"
                    aria-label="About section with restaurant interior photograph"
                >
                    <div>
                        <Navbar />
                    </div>
                    <img
                        src={assets.img3}
                        alt="Warm and inviting modern restaurant interior with wooden tables, ambient lighting, and a stylish, cozy atmosphere with plants and art"
                        className="w-full h-[50vh] sm:h-screen object-cover mt-[-100px] opacity-80"
                    />
                    <h1 className="absolute bottom-20 left-4 md:left-12 text-6xl md:text-8xl Forum text-gray-100 select-none drop-shadow-lg pointer-events-none">
                        ABOUT
                    </h1>
                </section>

                {/* Right side content */}
                <section className="flex flex-col gap-5 h-auto sm:h-screen">
                    {/* Sushi Artistry Hero */}
                    <div className='flex gap-8 flex-col md:flex-row'>
                        <div className="bg-[#121414] bg-opacity-60 border border-gray-700 p-6 rounded-lg backdrop-blur-sm max-w-lg">
                            <h2 className="text-md sm:text-md Forum font-semibold leading-tight mb-2">
                                SUSHI ARTISTRY REDEFINED
                            </h2>
                            <p className="text-gray-300 max-w-xs leading-relaxed Satoshi text-sm sm:text-base">
                                Where culinary craftsmanship meets....
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <div className='relative h-[150px] md:w-100'>
                                <Carousel
                                    baseWidth={300}
                                    autoplay={true}
                                    autoplayDelay={1500}
                                    pauseOnHover={true}
                                    loop={true}
                                    round={false}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Ratings cards */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between max-w-2xl">
                        {/* Trip Advisor */}
                        <div className="flex-1 border border-gray-700 bg-[#121414] bg-opacity-40 backdrop-blur-sm rounded-lg px-6 py-5 text-center space-y-2">
                            <div className="flex justify-center space-x-1 text-xl">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <h3 className="text-lg font-semibold Forum tracking-wide">TRIP ADVISOR</h3>
                            <p className="text-gray-400 text-xs uppercase Satoshi">BEST SUSHI</p>
                        </div>

                        {/* Michelin Guide */}
                        <div className="flex-1 border border-gray-700 bg-[#121414] bg-opacity-40 backdrop-blur-sm rounded-lg px-6 py-5 text-center space-y-2">
                            <div className="flex justify-center space-x-1 text-xl">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <h3 className="text-lg font-semibold Forum tracking-wide">MICHELIN GUIDE</h3>
                            <p className="text-gray-400 text-xs uppercase Satoshi">QUALITY FOOD</p>
                        </div>

                        {/* Start Dining */}
                        <div className="flex-1 border border-gray-700 bg-[#121414] bg-opacity-40 backdrop-blur-sm rounded-lg px-6 py-5 text-center space-y-2">
                            <div className="flex justify-center space-x-1 text-xl">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <h3 className="text-lg font-semibold Forum tracking-wide">START DINING</h3>
                            <p className="text-gray-400 text-xs uppercase Satoshi">COOL VIBE</p>
                        </div>
                    </div>

                    {/* Image + Story section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center max-w-2xl">
                        {/* Image */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <div className='w-full' style={{ height: '150px', position: 'relative' }}>
                                <Carousel
                                    baseWidth={300}
                                    autoplay={true}
                                    autoplayDelay={3000}
                                    pauseOnHover={true}
                                    loop={true}
                                    round={false}
                                />
                            </div>
                        </div>
                        {/* Story text */}
                        <div className="bg-[#121414] bg-opacity-60 border border-gray-700 p-6 rounded-lg backdrop-blur-sm text-gray-300 space-y-3 sm:max-w-md w-70 h-40">
                            <h3 className="text-center Forum tracking-wide text-xl sm:text-2xl font-semibold relative after:content[''] after:block after:border-b after:w-12 after:mx-auto after:mt-1 after:rounded-full">
                                OUR STORY
                            </h3>
                            <p className="text-xs sm:text-sm leading-relaxed font-light Satoshi tracking-tight">
                                Founded with a passion for culinary excellence, Qitchen's journey began at the heart of Prague.
                            </p>
                        </div>
                    </div>

                    <div className='mt-[-20px]'><Footer /></div>
                </section>
            </main>
        </div>
    );
}
