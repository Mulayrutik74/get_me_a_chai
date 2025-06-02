import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:px-0 px-5">
        <div className="flex justify-center flex-col items-center h-[30vh]  md:h-[40vh] gap-3 text-white">
          <div className="font-bold text-4xl flex justify-center items-center gap-2">Buy Me A Chai <span><img width={55} className="filterImg" src="./teacup.gif" alt="" /></span></div>
          <p className=""> A Fund For Me To Enjoy A Life With My Sole </p>
          <div>
            <Link href={'/login'}>
              <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Hear</button>
            </Link>
            <Link href={'/about'}>
              <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
            </Link>
          </div>
        </div>
        <div className="bg-white md:h-[1vh] h-[.5vh] opacity-10 w-full"></div>
        <div className=" text-white container mx-auto pb-14 pt-5  gap-5">
          <h1 className="font-bold text-xl text-center my-5">Your Fans Can Buy Your a Chai</h1>
          <div className="flex gap-5 justify-around  ">
            <div className="item md:space-y-3 space-x-9 flex flex-col  items-center ">
              <img className="bg-slate-400 rounded-full p-2 text-center " width={70} src="./man.gif" alt="" />
              <p className="font-bold">Funs wan To Help </p>
              <p >Your Funs Are Available for your to help you</p>
            </div>
            <div className="item md:space-y-3 space-x-9 flex flex-col items-center">
              <img className="bg-slate-400 rounded-full p-2 text-center " width={70} src="./coin.webp" alt="" />
              <p className="font-bold">Funs wan To Help </p>
              <p>Your Funs Are Available for your to help you</p>
            </div>
            <div className="item md:space-y-3 space-x-9  flex flex-col items-center">
              <img className="bg-slate-400 rounded-full p-2 text-center  " width={70} src="./group.gif" alt="" />
              <p className="font-bold">Funs wan To Help </p>
              <p>Your Funs Are Available for your to help you</p>
            </div>
          </div>
        </div>

        <div className="bg-white md:h-[1vh] h-[.5vh] opacity-10 w-full"></div>
        <div className=" text-white container mx-auto pb-14 pt-5 flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl text-center my-5">Learn More About Us</h1>
          <iframe
            width="500"
            height="295"
            src="https://www.youtube.com/embed/fhiODvY7Tj0?si=RZQC0YfpX3MR3wuT"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
