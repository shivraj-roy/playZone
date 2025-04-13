import { useRef, useState } from "react";
import Button from "../ui/Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
   const [videoIndex, setVideoIndex] = useState(1);
   const [hasClicked, setHasClicked] = useState(false);
   const [isVideoLoaded, setIsVideoLoaded] = useState(true);
   const [isVideoPlaying, setIsVideoPlaying] = useState(0);
   const nxtVideoRef = useRef<HTMLVideoElement>(null);
   const totalVideos = 4;

   const handleVideoLoaded = () => {
      setIsVideoPlaying((prev) => prev + 1);
   };

   const handleVideoPreview = () => {
      setHasClicked(true);
      setVideoIndex((prevIndex) => (prevIndex % totalVideos) + 1);
   };

   const videoSrc = (index: number) => `videos/hero-${index}.mp4`;

   return (
      <div className="relative h-dvh w-screen overflow-x-hidden">
         <div
            className="relative z-10 w-screen rounded-lg bg-blue-75 overflow-hidden h-dvh"
            id="video-frame"
         >
            <div>
               <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                  <div
                     className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                     onClick={handleVideoPreview}
                  >
                     <video
                        className="size-64 origin-center scale-150 object-cover object-center"
                        ref={nxtVideoRef}
                        src={videoSrc((videoIndex % totalVideos) + 1)}
                        loop
                        muted
                        id="current-video"
                        onLoadedData={handleVideoLoaded}
                     />
                  </div>
               </div>

               <video
                  className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                  ref={nxtVideoRef}
                  src={videoSrc(videoIndex)}
                  autoPlay
                  loop
                  muted
               />

               <video
                  className="absolute left-0 top-0 size-full object-cover object-center"
                  ref={nxtVideoRef}
                  src={videoSrc(
                     videoIndex === totalVideos - 1 ? 1 : videoIndex
                  )}
                  onLoadedData={handleVideoLoaded}
                  // autoPlay
                  loop
                  muted
               />
            </div>

            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-50 text-blue-75 ">
               G<b>a</b>ming
            </h1>

            <div className="absolute left-0 top-0 z-40 size-full">
               <div className="mt-24 px-5 sm:px-10">
                  <h1 className="special-font hero-heading text-blue-100">
                     Redefi<b>n</b>e
                  </h1>
                  <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                     The future of Gaming is here <br />
                     <span className="font-bold">Play and Win</span>
                  </p>
                  <Button
                     id="watch-trailer"
                     title="Watch Trailer"
                     leftIcon={<TiLocationArrow />}
                     btnClass="!bg-yellow-300 flex-center gap-1"
                  />
               </div>
            </div>
         </div>
         <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black ">
            G<b>a</b>ming
         </h1>
      </div>
   );
};
export default Hero;
