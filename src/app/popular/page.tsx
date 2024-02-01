import Image from "next/image";
import { popular } from "../data";
import "../globals.css"
import Swiper from "@/app/swiber/page";
// import { global } from "styled-jsx/css";
// import Swiper from "@/app/swiber/page"
function page() {
    
    return (
        <>
        <div className="text-center relative ">
          <h1 className="text-#07484A mt-36 text-2xl font-bold text-[#07484A]">Popular Products</h1>  
        <div className=" h-[300px] relative">
      <Image className="w-[300px] relative right-28" src={"/chair1.png"}  width={800} height={300} alt="Image"/> 
        </div>
        <div className="flex mb-2 justify-center absolute top-[70px] right-0   w-[90%]  scroll">
          <Swiper/>

            
        </div>
        </div> 
        <div className="flex justify-end relative top-14 mr-[30px] ">
        </div>
        <div className="hover:scale-105 transform transition duration-300 ease-out  text-center mt-[90px] flex justify-center items-center ">
            <button className="bg-[#70908B] text-white font-bold h-[30px] w-[130px] rounded-bl-sm rounded-tl-sm">Explore All items</button>
           <div className="h-[30px] bg-[#70908B] flex items-center pr-2 pl-2 rounded-tr-sm rounded-br-sm">
           <Image className="h-[20px] " src={"/button3.png"} width={20} height={20} alt="Image"/>
           </div>
        </div>
        
        </>
    );
};

export default page;