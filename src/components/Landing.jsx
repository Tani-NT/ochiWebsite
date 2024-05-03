import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=" w-full min-h-screen max-sm:h-full bg-zinc-900 pt-1">
      <div className="textStructure mt-28 px-[10vw]">
            {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((item,index)=>{
                return <div key={index} className="masker">
                          <div className="w-fit flex overflow-hidden">
                          {index === 1 && (<motion.div initial={{width: 0}}  animate={{width: "10vw"}} transition={{ease: [0.72,0 ,0.24, 0], duration: 1}} className="w-[10vw] h-[6.5vw] mr-[.5vw] relative top-[.5vw] ">
                            <img className="w-full h-full rounded-md" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"/>
                          </motion.div>)}
                              <h1 className="pt-[2vw] -mb-[1vw]  font-semibold font-['Founders_Grotesk_X'] text-[10vw] leading-[.75]">{item}</h1>
                          </div>  
                       </div>
            })}
      </div>
      <div className="border-t-2 border-zinc-800 mt-12 flex justify-between items-center px-[10vw] py-[2.5vw]">
        {["For public & private companies", "From the first pitch to IPO"].map((item,index)=>{
            return <p key={index} className="leading-none tracking-tight font-light text-[1.5vw]">{item}
            </p>
            
        })}
        <div className="start flex items-center gap-2 ">
            <div className="py-[.7vw] px-[1.3vw] border-[.1vw] border-zinc-300 rounded-full text-[1.4vw] uppercase font-light">
                Start The Project
            </div>
            <div className="w-[.5vw] h-[.5vw] flex items-center font-semibold justify-center ">
                <span className="rotate-[45deg] text-[1vw]">
                    <FaArrowUpLong/>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
