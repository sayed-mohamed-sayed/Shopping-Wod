"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Header from "./Header";

function Swiper() {
    const [slide,setslide]=useState(0)

    const handelclick = (direction: string) => {
        if (direction === "left") {
          setslide(slide + 1);
        } else {
          setslide(slide - 1);
        }
      };


    return (
        <div className="relative">
            <div className="">
                <Header slide={slide}/>
            </div>
        <div className=" w-10 h-[200px] z-40 absolute right-[0px] top-[200px] flex flex-col gap-6">
        <button disabled={slide===-8} className=" animate-bounce hover:animate-none  bg-[#E0EFF6] w-10 h-10 rounded-full flex justify-center items-center">
        <Image onClick={() => handelclick("right")} className=" h-[28px]" src={"/buttontop.png"}  width={18} height={30} alt="Image" />
        </button>
        <button disabled={slide===0} className="bg-[#F9D9DA] w-10 h-10 rounded-full flex justify-center items-center">
        <Image onClick={() => handelclick("left")} className=" h-[28px]" src={"/buttondown.png"} width={18} height={30} alt="Image" />
        </button>
        </div>
        </div>
    );
};

export default Swiper;