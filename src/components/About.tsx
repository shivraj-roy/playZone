import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "../ui/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   useGSAP(() => {
      const clipAnimation = gsap.timeline({
         scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 1,
            pin: true,
            pinSpacing: true,
         },
      });

      clipAnimation.to(".mask-clip-path", {
         width: "100vw",
         height: "100vh",
         borderRadius: "0%",
      });
   });

   return (
      <div id="about" className="min-h-screen w-screen">
         <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text-[10px]">
               Welcome to PlayZone
            </h2>
            <AnimatedTitle
               title="Disc<b>o</b>ver the <br /><b>g</b>reatest <br /><b>e</b>ntertainment"
               containerClass="mt-5 text-center !text-black"
            />
            <div className="about-subtext">
               <p>
                  PlayZone is a platform that brings together gamers from
                  different backgrounds and skill levels to connect, compete,
                  and have fun.
               </p>
               <p>
                  Our mission is to create a vibrant gaming community where
                  everyone can find their place, whether you're a casual player
                  or a hardcore gamer.
               </p>
            </div>
         </div>
         <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
               <img
                  src="img/about.webp"
                  alt="background"
                  className="absolute left-0 top-0 size-full object-cover"
               />
            </div>
         </div>
      </div>
   );
};
export default About;
