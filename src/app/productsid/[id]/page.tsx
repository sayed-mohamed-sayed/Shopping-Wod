import Image from "next/image";
import More from "./More";
import { Product } from "@/app/data";

function IdProduct({params}:any) {


    const Products=Product.filter((i)=>i.id==params.id)
console.log(Products);


    return (
        <div className="flex justify-around items-start text-[#07484A] p-4 flex-col md:flex-row"> 
           <div className="w-[100%] md:w-[50%]  ">
            <div className="relative h-[400px]">
           <Image className="rounded w-[100%] h-[400]" src={"/details.webp"} fill alt="Image"/>
            </div>
<div className="flex justify-between items-start pt-2" >
    <div>
        <h1 className="text-lg font-bold">Larkin Wood Full Set</h1>
        <Image className="mt-1 cursor-pointer" src={"/rate.png"} width={100} height={100} alt="Image"/>
<p className="font-bold mt-2">800$</p>
    </div>
<div className="flex items-center justify-center font-medium bg-[#70908B] text-white w-[120px] p-1 rounded">
    <button className=" sm:pr-3"> Add to cart</button>
    <Image src={"/cart.png"} width={15} height={15} alt="Image"/>
</div>
</div>
           </div>
           <div className="w-[100%] md:w-[50%] p-2 relative bottom-2 ">
            <div className="pb-4">
                <h1 className="font-bold text-lg">Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore quibusdam molestiae facere quasi sapiente</p>
            </div>
            <More/>
           </div>
        </div>
    );
};

export default IdProduct;