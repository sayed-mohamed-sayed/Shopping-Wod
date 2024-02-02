"use client"
import Link from 'next/link';
import { useState } from 'react';
import { fashion } from '../data';
import Image from 'next/image';
import Head from './Head';
function Sliderlaptop() {
    const [slide,steslide]=useState(0)
    const [img,setimg]=useState(0)
    
    return (
        <div className="flex mt-4  flex-col sm:flex-row sm:gap-1 justify-start  h-auto  sm:h-[300px] w-[100%] overflow-hidden  items-start relative">
            <div className=" w-[100%] sm:w-[30%]  overflow-hidden">
<Head setslide={steslide} slide={slide} img={img}/>        
</div>
            <div className="flex w-[100%] sm:w-[70%] overflow-hidden">
            
            <div style={{transform:`translate(${slide*-250}px)`}} className="flex  justify-center items-center transition duration-500 ease-out gap-2">
                {
                    fashion.map((item ,o)=>(
                        <div className="w-[300px]  basis-[30%] h-[250px] relative animate" key={o}>
                            <Image className='rounded' src={item.img} fill alt={"Image"} onLoad={()=>setimg(o)}/>
                                        
                        </div>

                    ))
                }
            </div>
        </div>
</div>
            
    );
};

export default Sliderlaptop;