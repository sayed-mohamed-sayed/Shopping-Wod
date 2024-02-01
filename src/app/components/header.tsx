"use client"
import Image from "next/image";
import Link from "next/link";
import  './../globals.css'  
import { useState } from "react";
import { Headers } from "../data";
export default function Header () {
    
const [toggle ,settoggle]=useState(false)


    return (
        <header className="pr-2   flex justify-between items-center w-[100%] m-auto z-50 relative">
            <div className=" z-20 pl-4 toggler" >
            <input id="checkbox" type="checkbox"/>
    <label onClick={()=>settoggle(!toggle)} className="toggle" htmlFor="checkbox" >
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
    </label>

            </div>
            <div className={`w-[250px]  h-[40px] z-30 logo  sm:relative `}>
                <Image className="p-[2px] h-[40px]" src={"/Logo.png"} width={250} height={40}  alt="Image" />
            </div>
<div className={`flex gap-8  text-[#07484A] media md:relative md:items-center md:justify-center  `} style={{display:toggle?"flex":undefined}}>

<div className={`w-[250px]  h-[40px] z-30  sm:relative logosm`}>
                <Image className="p-[2px]" src={"/Logo.png"} fill alt="Image" />
            </div>
    {
        Headers&&Headers.map((i ,o)=>(
            <div className=" cursor-pointer font-bold text-lg " key={o}>
        <nav>
            <ul>
                <li><Link href={i.url}>{i.title}</Link></li>
            </ul>
        </nav>
            </div>
        )) 
    }
</div>
<div className="relative flex">
    <div className="input-container relative h-[17px] w-[17px] z-50 cursor-pointer mr-[20px] ">
<Image className="icon z-50 w-7" src={"/search.png"} width={30} height={20} alt="Image" />
    <input placeholder="Search something..." className="input z-50" name="tex" type="text"></input>
 </div>
    <div className="relative h-[17px] w-[17px] cursor-pointer mr-[20px]">
        <Link href={"/cart"}>
<Image src={"/icon.png"} width={17} height={17}  alt="Image" />
        </Link>
    </div>
<div className="h-[17px] w-[17px] relative cursor-pointer">
<Image src={"/admin.png"} width={17} height={17}  alt="Image" />
</div>
</div>
        </header>
    );
};
