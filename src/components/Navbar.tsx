import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "../ui/Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
   const [isIndicatorActive, setIsIndicatorActive] = useState(false);
   const navBarRef = useRef<HTMLDivElement>(null);
   const audioRef = useRef<HTMLAudioElement>(null);

   const handleToggleAudio = () => {
      setIsAudioPlaying((prev) => !prev);
      setIsIndicatorActive((prev) => !prev);
   };

   useEffect(() => {
      if (isAudioPlaying) {
         audioRef.current?.play();
      } else {
         audioRef.current?.pause();
      }
   }, [isAudioPlaying]);

   return (
      <div
         ref={navBarRef}
         className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
         <header className="absolute top-1/2 w-full -translate-y-1/2">
            <nav className="flex size-full items-center justify-between p-4">
               <div className="flex items-center gap-7">
                  <img
                     src="/img/logo-cp.png"
                     alt="logo"
                     className="w-10 mix-blend-overlay opacity-80 filter brightness-125"
                  />
                  <Button
                     id="product-button"
                     title="Product"
                     rightIcon={<TiLocationArrow />}
                     btnClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                  />
               </div>
               <div className="flex h-full items-center">
                  <div className="hidden md:block">
                     {navItems.map((item, index) => (
                        <a
                           key={index}
                           href={`#${item.toLowerCase()}`}
                           className="nav-hover-btn"
                        >
                           {item}
                        </a>
                     ))}
                  </div>

                  <button
                     className="ml-10 flex items-center space-x-0.5"
                     onClick={handleToggleAudio}
                  >
                     <audio
                        src="/audio/loop.mp3"
                        ref={audioRef}
                        className="hidden"
                        loop
                     />
                     {[1, 2, 3, 4].map((bar) => (
                        <div
                           key={bar}
                           className={`indicator-line ${
                              isIndicatorActive ? "active" : ""
                           }`}
                           style={{ animationDelay: `${bar * 0.1}s` }}
                        />
                     ))}
                  </button>
               </div>
            </nav>
         </header>
      </div>
   );
};
export default Navbar;
