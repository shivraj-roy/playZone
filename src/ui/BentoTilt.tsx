import { useRef, useState } from "react";

import { BentoTiltProps } from "../type";

const BentoTilt = ({ children, className }: BentoTiltProps) => {
   const [transformStyle, setTransformStyle] = useState("");
   const tiltRef = useRef<HTMLDivElement>(null);

   const handleMouseEnter = (e: React.MouseEvent) => {
      if (!tiltRef.current) return;
      const { left, top, width, height } =
         tiltRef.current.getBoundingClientRect();
      const { clientX, clientY } = e;

      const relativeX = (clientX - left) / width;
      const relativeY = (clientY - top) / height;

      const angleX = (relativeX - 0.5) * 5;
      const angleY = (relativeY - 0.5) * 5;

      setTransformStyle(
         `perspective(500px) rotateX(${angleY}deg) rotateY(${angleX}deg) scale3d(0.98, 0.98, 0.98)`
      );
   };

   const handleMouseLeave = () => {
      setTransformStyle("");
   };

   return (
      <div
         ref={tiltRef}
         style={{ transform: transformStyle }}
         className={className}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         {children}
      </div>
   );
};
export default BentoTilt;
