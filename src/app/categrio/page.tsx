import Image from "next/image";
import { categroy } from "../data";

function page() {
    return (
        <div className=" relative top-20  bottom-10 flex flex-col">
            <h1 className="flex text-[#07484A] justify-center font-bold text-2xl ">Explore by Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-auto gap-1 mt-6">
            {
                categroy&&categroy.map((i,o)=>(
                    <div className="basis-[28%] relative flex justify-center animate" key={o}>
                        <Image className="rounded-md h-[210px]" src={i.img} width={300} height={200} alt="Image" />
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-1000 absolute z-20 flex flex-col w-[100%] h-[100%] justify-center items-center  " >
                        <p>{i.title}</p>
                        <button className="bg-[#E0EFF6]">Explore</button>
                    </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default page;