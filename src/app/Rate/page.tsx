"use client"
import Image from "next/image";
import { Rate } from "../data";
import { useState,useEffect } from "react";

function Page() {

    const [slide,setslide]=useState(0)
    const [setp,setsetp]=useState(600)
    
    const handelclick = (direction: string) => {
        if (direction === "left") {
          setslide(slide - 1);
        } else {
          setslide(slide + 1);
        }
      };
      useEffect(() => {
        const handleResize = () => {
          let newStep = 600;
    
          if (window.innerWidth <= 1000) {
            newStep =450
            if (window.innerWidth<=576) {
newStep=300                
            }
          }
    
          setsetp(newStep);          
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [setp]);    
      
    return (
        <div className="text-[#07484A] relative ">
            <div className="text-center mt-[100px]  ">
                <h1 className="font-bold text-2xl">Testimonials</h1>
                <p>Over 15,000 happy customers .</p>
            </div>
            <div className="flex items-center justify-around ">
            <div  className="flex w-fit sm:w-[600px] overflow-hidden  mediaswiper ">
                {Rate && Rate.map((i, o) => (
                    <div style={{transform:`translate(${slide*setp}px) `}} className={`w-fit mediaswiper p-2 sm:w-[600px] transition duration-1000 ease-out flex flex-col sm:flex-row justify-center items-center`}key={o}>
                        <div className="w-[300px]"> 
                            <Image className="relative top-4 right-4" src={"/icons.png"} width={70} height={70} alt="Image" />
                            <Image className="h-[250px] rounded-xl" src={i.img} width={200} height={150} alt="Image" />
                        </div>
                        <div className="w-[200px] lg:w-[300px]">
                            <h1>{i.desc}</h1>
                            <p className="mt-4">{i.title}</p>
                        </div>
                    </div>
                ))}
            </div>
                        <div className="relative   w-[100px] bottom-3">
                            <div className="absolute pr-2 right-0 flex flex-col gap-10  ">
                                <button disabled={slide===-5} className=" bg-[#E0EFF6] w-[40px] h-[40px] rounded-full  flex justify-center items-center">
                                <Image  onClick={() => handelclick("left")} src={"/button1.png"} width={35} height={30} alt="Image" />
                                </button>
                                <button disabled={slide===0} className="bg-[#F9D9DA] w-[40px] h-[40px] rounded-full  flex justify-center items-center">
                                <Image   onClick={() => handelclick("right")} src={"/button2.png"} width={35} height={30} alt="Image" />
                                </button>

                            </div>

                        </div>
            </div>

        </div>
    );
};

export default Page;