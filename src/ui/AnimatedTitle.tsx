import { useEffect, useRef } from "react";
import gsap from "gsap";

import { AnimatedTitleProps } from "../type";

const AnimatedTitle = ({ title, containerClass }: AnimatedTitleProps) => {
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         const titleAnimation = gsap.timeline({
            scrollTrigger: {
               trigger: containerRef.current,
               start: "100 bottom",
               end: "center center",
               toggleActions: "play none none reverse",
            },
         });
         titleAnimation.to(".animated-word", {
            opacity: 1,
            transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
            stagger: 0.05,
            ease: "power2.out",
         });
      }, [containerRef]);

      return () => {
         ctx.revert();
      };
   }, []);

   return (
      <div className={`animated-title ${containerClass}`} ref={containerRef}>
         {title.split("<br />").map((line, index) => (
            <div
               key={index}
               className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
            >
               {line.split(" ").map((word, wordIndex) => (
                  <span
                     key={wordIndex}
                     className="animated-word"
                     dangerouslySetInnerHTML={{ __html: word }}
                  />
               ))}
            </div>
         ))}
      </div>
   );
};
export default AnimatedTitle;
