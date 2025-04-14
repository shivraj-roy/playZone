import { useRef } from "react";
import { BentoCardProps } from "../type";

const BentoCard = ({ title, src, description }: BentoCardProps) => {
   const videoRef = useRef<HTMLVideoElement>(null);

   const handleMouseEnter = () => {
      if (videoRef.current) {
         videoRef.current.play();
      }
   };

   const handleMouseLeave = () => {
      if (videoRef.current) {
         videoRef.current.pause();
         videoRef.current.currentTime = 0; // Reset video to the beginning
      }
   };

   return (
      <div
         className="relative size-full"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <video
            ref={videoRef}
            src={src}
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
         />
         <div className="relative z-10 flex size-full flex-col justify-start p-5 text-blue-50">
            <div>
               <h1 className="bento-title special-font">{title}</h1>
            </div>
            {description && (
               <p className="mt-3 max-w-64 text-xs md:text-base">
                  {description}
               </p>
            )}
         </div>
      </div>
   );
};
export default BentoCard;
