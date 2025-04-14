import { useRef } from "react";
import AnimatedTitle from "../ui/AnimatedTitle";
import gsap from "gsap";
import Button from "../ui/Button";

const Story = () => {
   const frameRef = useRef<HTMLImageElement | null>(null);

   const handleMouseLeave = () => {
      const frame = frameRef.current;
      if (!frame) return;

      gsap.to(frame, {
         duration: 0.5,
         rotateX: 0,
         rotateY: 0,
         ease: "power2.out",
      });
   };

   const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const frame = frameRef.current;
      if (!frame) return;
      const { top, left, width, height } = frame.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      const centerX = width / 2;
      const centerY = height / 2;
      const rotateY = ((x - centerX) / centerX) * -10;
      const rotateX = ((y - centerY) / centerY) * 10;

      gsap.to(frame, {
         duration: 0.5,
         rotateX: rotateX,
         rotateY: rotateY,
         ease: "power2.out",
         transformPerspective: 500,
      });
   };

   return (
      <section className="min-h-dvh w-screen bg-black text-blue-50" id="story">
         <div className="flex size-full flex-col items-center py-10 pb-24">
            <p className="font-general text-sm uppercase md:text-[10px]">
               Welcome to PlayZone
            </p>
            <div className="relative size-full">
               <AnimatedTitle
                  title="Disc<b>o</b>ver the <b>H</b>idden <b>R</b>e<b>al</b>m"
                  containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                  sectionId="#story"
               />
               <div className="story-img-container">
                  <div className="story-img-mask">
                     <div className="story-img-content">
                        <img
                           ref={frameRef}
                           src="img/entrance.webp"
                           alt="Story"
                           className="object-contain"
                           onMouseLeave={handleMouseLeave}
                           onMouseEnter={handleMouseLeave}
                           onMouseUp={handleMouseLeave}
                           onMouseMove={handleMouseMove}
                        />
                     </div>
                  </div>
                  <svg
                     className="invisible absolute size-0"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <defs>
                        <filter id="flt_tag">
                           <feGaussianBlur
                              in="SourceGraphic"
                              stdDeviation="8"
                              result="blur"
                           />
                           <feColorMatrix
                              in="blur"
                              mode="matrix"
                              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                              result="flt_tag"
                           />
                           <feComposite
                              in="SourceGraphic"
                              in2="flt_tag"
                              operator="atop"
                           />
                        </filter>
                     </defs>
                  </svg>
               </div>
            </div>
            <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
               <div className="flex h-full w-fit flex-col items-center md:items-start">
                  <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                     Where realm coverage, realms are limitless. <br />
                     Discover the secret in the metaverse.
                  </p>
                  <Button
                     title="Discover the Prologue"
                     id="realm-button"
                     btnClass="mt-5"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
export default Story;
