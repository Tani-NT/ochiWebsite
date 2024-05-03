function About() {
  return (
    <div className="w-full p-[5vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-[4vw] pb-[5vw] font-[Neue_Montreal] leading-[4.5vw] text-black">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full border-t-[1px] border-[#99AD53] gap-3"></div>
      <div className="flex justify-between text-black text-[1.2vw] pb-[3vw] pt-[2vw]">
        <p className="w-[170vw]">What you can expect</p>
        <div className="w-[60vw] leading-[1.5vw]">
            <p className="pb-[2vw]">
                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether its live or digital, delivered for one or a hundred people.
            </p>
            <p>
                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
            </p>
        </div>
        <div className="w-[60vw] flex flex-col pt-[7vw] pl-[5vw]">
            <h1 className="pb-[3vw]">S:</h1>
            <a>Instagram</a>
            <a>Facebook</a>
            <a>Youtube</a>
            <a>Twitter</a>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-[#99AD53] gap-3 flex">
        <div className="w-1/2">
            <h1 className="text-[5vw] text-black">Our Approach: </h1>
            <button className="bg-black font-['gilroy'] rounded-full px-[2vw] py-[1vw] flex items-center text-[1vw] uppercase gap-[2vw]">Read More
            <div className="w-[.6vw] h-[.6vw] rounded-full bg-white"></div>
            </button>
        </div>
        <div className="w-1/2 object-cover pt-[1vw]">
            <img className="rounded-lg" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"/>
        </div>
      </div>

    </div>
  )
}

export default About
