import { useState,useEffect } from "react"

function Eyes() {

  const [rotate,setRotate] = useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
  })
  

  return (
    <div data-scroll data-scroll-speed=".2" className="w-full h-screen overflow-hidden">
      <div className="w-full h-full relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center">
        <div className="flex gap-[4vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="bg-zinc-100 w-[15vw] h-[15vw] flex items-center justify-center rounded-full">
              <div className="bg-zinc-900 relative flex items-center justify-center w-[10vw] h-[10vw] rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] h-10">
                  <div className=" bg-zinc-100  rounded-full w-[3vw] h-[3vw]"></div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-100 w-[15vw] h-[15vw] flex items-center justify-center rounded-full ">
              <div className="bg-zinc-900 relative flex items-center justify-center w-[10vw] h-[10vw] rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] h-10">
                  <div className="bg-zinc-100  rounded-full w-[3vw] h-[3vw]"></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
