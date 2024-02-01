"use client"
import Image from "next/image";
import { more } from "@/app/data";
import "../../globals.css"
import { useState,useEffect } from "react";

function More() {
    
    const [slide,setslide]=useState(0)

    const handelclick = (direction: string) => {
        if (direction === "left") {
          setslide(slide - 1);
        } else {
          setslide(slide + 1);
        }
      };

    return (
        <div className="h-[390px] overflow-hidden relative">
            <div className=" w-10 h-[200px] z-50 absolute right-[10px] bottom-[-50px]  flex flex-col gap-6">
            <button disabled={slide===7} className="animate-bounce hover:animate-none w-[50px] h-[50px] bg-[#E0EFF6] rounded-full flex justify-center items-center">
            <Image onClick={() => handelclick("right")} className=" h-[30px]" src={"/buttontop.png"}  width={20} height={30} alt="Image" />
            </button>
            <button disabled={slide===0} className="w-[50px] h-[50px] bg-[#F9D9DA] rounded-full flex justify-center items-center">
            <Image onClick={() => handelclick("left")} className=" h-[30px]" src={"/buttondown.png"} width={20} height={30} alt="Image" />
            </button>

            </div>
            {
                more && more.map((i, o) => (
                    <div style={{transform: `translateY(${slide*-150}px) `}} className="flex pr-6 flex-col sm:flex-row cursor-pointer hover:scale-105 transform transition duration-300 ease-out " key={o}>
                        <div className="relative w-[80%] sm:w-[40%] h-32 sm:h-28 m-2" >
                            <Image className="w-[30%] h-[20%] rounded bg-[#0a0a090f]" src={i.img} fill alt="Image" />
                        </div>
                        <div className="w-[350px] hover:bg-[#CAF3E5]  transition  duration-1000 ease-out m-2">
                            <div className="flex items-center justify-between p-2">
                                <h1>{i.title}</h1>
                                <p className="font-bold">{i.price}$</p>
                            </div>
                            <Image className="" src={"/rate.png"} width={80} height={60} alt="Image" />
                            <p className=" sm:h-[45px] sm:overflow-hidden lg:h-auto ">{i.Deescribtion}</p>
                            <div className="flex items-center">
                                <button>See more</button>
                            <Image className="p-[2px]" src={"/more.png"} width={15} height={15} alt="Image" />

                            </div>
                        </div>

                    </div>
                ))
            }

        </div>
    );
};

export default More;