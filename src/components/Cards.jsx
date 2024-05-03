function Cards() {
  return (
    <div className="w-full h-screen  p-[5vw] flex items-center gap-[2vw] font-['gilroy'] max-sm:w-full">
      <div className="w-1/2 max-sm:w-full h-[55vh]">
        <div className='w-full h-full relative bg-[#004D43] flex items-center justify-center rounded-lg'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
            <button className="bg-[#004D43] border-[1px] border-yellow-300 text-black absolute left-3 bottom-3 text-[1vw] px-[1vw] py-[.5vw] rounded-full">&copy;2019-2022</button>
        </div>
    
      </div>
      <div className="w-1/2 h-[55vh] flex gap-[2vw]">
        <div className='w-1/2 h-full relative flex items-center justify-center bg-[#212121] rounded-lg'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
            <button className=" bg-[#212121] border-[1px] border-white absolute left-3 bottom-3 text-[1vw] px-[1vw] py-[.5vw] rounded-full">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='w-1/2 relative h-full flex items-center justify-center bg-[#212121] rounded-lg'>
            <img className="w-1/2" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
            <button className="bg-[#212121] border-[1px] border-white  absolute left-3 bottom-3 text-[1vw] px-[1vw] py-[.5vw] rounded-full">BUSINESS BOOTCAMP ALUMINI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
