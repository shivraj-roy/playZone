import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "../ui/BentoCard";
import BentoTilt from "../ui/BentoTilt";

const Features = () => {
   return (
      <section className="bg-black pb-52">
         <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
               <p className="font-circular-web text-lg text-blue-75">
                  Into the Metagame of PlayZone
               </p>
               <p className="max-w-md font-circular-web text-lg opacity-50 text-blue-50">
                  PlayZone is a metaverse platform that offers a unique
                  experience for users. It is a place where users can play
                  games, meet friends, and have fun.
               </p>
            </div>
            <div className="border-hsla relative mb-7 h-96 w-full overflow h-hidden rounded-md md:h-[65vh]">
               <BentoCard
                  title={
                     <>
                        <b>Radiant</b>
                     </>
                  }
                  src="videos/feature-1.mp4"
                  description="A cross platform metaverse game, turning your activities across the world into a unique experience."
               />
            </div>
            <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
               <BentoTilt className="bento-tilt_1 row-span-1 md: col-span-1 md:row-span-2">
                  <BentoCard
                     title={
                        <>
                           <b>ZiGGA</b>
                        </>
                     }
                     src="videos/feature-2.mp4"
                     description="An Anime inspired gaming that lift you the PlayZone universe."
                  />
               </BentoTilt>
               <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                  <BentoCard
                     title={
                        <>
                           <b>stella</b>
                        </>
                     }
                     src="videos/feature-3.mp4"
                     description="A gamified social hub, adding a new dimension of play to social interaction for web3 communities."
                  />
               </BentoTilt>
               <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                  <BentoCard
                     title={
                        <>
                           <b>nezzu</b>
                        </>
                     }
                     src="videos/feature-4.mp4"
                     description="A Cross World AI agent, to help you out wondering the world of web3."
                  />
               </BentoTilt>
               <BentoTilt className="bento-tilt_2">
                  <div className="flex size-full flex-col justify-between p-5 bg-violet-500">
                     <h1 className="bento-title special-font max-w-64 text-white/65">
                        Mor<b>e</b> Comin<b>g</b> <b>Soon</b>
                     </h1>
                     <TiLocationArrow className="m-5 scale-[5] self-end" />
                  </div>
               </BentoTilt>
               <BentoTilt className="bento-tilt_2">
                  <video
                     src="videos/feature-5.mp4"
                     loop
                     muted
                     autoPlay
                     className="size-full object-cover object-center"
                  />
               </BentoTilt>
            </div>
         </div>
      </section>
   );
};
export default Features;
