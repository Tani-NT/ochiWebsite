import { motion } from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-[4vw] rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]">
      <div className="flex whitespace-nowrap border-t-2 border-b-2 border-zinc-300 pt-10 overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 4}}  className="text-[25vw] -mb-[7vw] pb-[1vw] pr-[3vw] leading-none font-semibold font-['Founders_Grotesk_X']">WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity,duration: 4}} className="text-[25vw] -mb-[7vw] pb-[1vw] pr-[3vw]  leading-none font-semibold font-['Founders_Grotesk_X']">WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity,duration: 4}} className="text-[25vw] -mb-[7vw] pb-[1vw] pr-[3vw] leading-none font-semibold  font-['Founders_Grotesk_X']">WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
