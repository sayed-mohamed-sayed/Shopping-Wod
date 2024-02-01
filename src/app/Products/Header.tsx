import Image from "next/image";
import { HeaderProduct } from "../data";
import Link from "next/link";

function Header({slide}:any) {
    
    return (
        
        <div className="w-[150px] text-lg sm:w-[200px] text-[#07484A] font-[cursive]">
            <div className="relative w-[100%]">
                <input className="pl-8 w-[150px] sm:w-[160px] p-2 rounded bg-[#00000017] focus:outline-none " type="search" name="" id="" placeholder="Search" />
            <Image className="absolute top-[14px] left-3" src={"/search.png"} width={12} height={13} alt="Image"/>
            </div>
            <div className=" h-[260px] font-[550] top-2 overflow-hidden  relative">
            <div style={{transform:`translateY(${slide*30}px)`}} className="absolute">
                {HeaderProduct&&HeaderProduct.map((i ,o)=>(
                    <div className=" leading-10" key={o}>
                       <Link href={"/Products"}>
                        <h1 className="cursor-pointer animate hover:pl-1">{i.title}</h1>
                       </Link>
                    </div>
                ))}
            </div>

            </div>
        </div>
    );
};

export default Header;