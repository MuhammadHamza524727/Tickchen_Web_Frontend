import React from "react";
import { assets } from "../assets/assets";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText.jsx";

const handleAnimationComplete = () => {
};

const HeroSection = () => {
  return (

    <section className=" flex flex-col items-center justify-center bg-[#0A0B0A] text-center pt-16 md:pt-0 md:py-16 " >
      <video 
        autoPlay
        muted
        loop
        className="md:fixed  md:top-4 md:left-4 md:right-0 md:rounded-2xl md:w-full h-full   md:object-cover  "
      >
        <source src={assets.vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 top-70 md:top-40 right-8/32 flex flex-col gap-5 md:block md:gap-0 ml-20 md:ml-0">
        <BlurText
          text="SUSHI"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl sm:text-[120px] tracking-wider   text-white text-start Forum"
        />
        <BlurText
          text="SENSATION"
          delay={150}
          animateBy="letter"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl sm:text-[120px]  mt-[-20px] text-white Forum"
        />

      
      </div>
    </section>
  );
};

export default HeroSection;

