function Featured(){

  return (
    <div className="w-full pt-[3vw] pb-[9vw] font-['gilroy']">
      <div className='w-full px-[5vw] font-["Neue_Montreal"] pb-[3vw]'>
        <h1 className='text-[5vw] border-b-[1px] border-zinc-700 tracking-tighter'>Featured projects</h1>
      </div>
      <div className="px-[5vw]">
        <div className="cards w-full flex gap-[3vw] max-sm:flex-col justify-between ">
            <div className="w-1/2 h-[70vh] relative  max-sm:w-full">
                <div className=" flex items-center gap-[1vw] mb-[1vw]">
                    <div className="w-[.6vw] h-[.6vw] rounded-full bg-white"></div>
                    <h1 className="text-[1vw]">FYDE</h1>
                </div>
                <div className="w-full h-full rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"/>
                </div>
                <div className="flex gap-[.3vw] py-[1vw]">
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">Audit</button>
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">Sales Deck</button>
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">Copy Writing</button>
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">Slides Design</button>
                </div>
            </div>
            <div className="w-1/2 h-[70vh] relative mt-[7vw] max-sm:w-full">
                <div className="flex items-center gap-[1vw] mb-[1vw]">
                    <div className="w-[.6vw] h-[.6vw] rounded-full bg-white"></div>
                    <h1 className="text-[1vw]">VISE</h1>
                </div>
                <div className="w-full h-full rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"/>
                </div>
                <div className="flex uppercase gap-[.3vw] py-[1vw]">
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">Agency</button>
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">Company Representation</button>
                    
                </div>
            </div>
        </div>
        <div className="w-full flex gap-[3vw] max-sm:flex-col justify-between pt-[9vw]">
            <div className="w-1/2 h-[70vh] relative  max-sm:w-full">
                <div className="flex items-center gap-[1vw] mb-[1vw]">
                    <div className="w-[.6vw] h-[.6vw] rounded-full bg-white"></div>
                    <h1 className="text-[1vw]">TRAWA</h1>
                </div>
                
                <div className="w-full h-full rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"/>
                </div>
                <div className="flex gap-[.3vw] py-[1vw]">
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">BRAND IDENTITY</button>
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">INVESTOR DECK</button>
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">DESIGN RESEARCH</button>
                </div>
            </div>
            <div className="w-1/2 h-[70vh] relative mt-[7vw]  max-sm:w-full">
                <div className="flex items-center gap-[1vw] mb-[1vw]">
                    <div className="w-[.6vw] h-[.6vw] rounded-full bg-white"></div>
                    <h1 className="text-[1vw]">Premium Blend</h1>
                </div>
                <div className="w-full h-full rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"/>
                </div>
                <div className="flex uppercase gap-[.3vw] py-[1vw]">
                    <button className="text-[1vw] px-[1vw] py-[.3vw] rounded-full bg-white text-black uppercase">Branded Template</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
