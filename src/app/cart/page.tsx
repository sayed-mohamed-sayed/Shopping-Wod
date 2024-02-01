import Image from "next/image";
import { cart } from "../data";
import Order from "./Order";

function Page() {
    return (
        <>
            <h1 className=" text-center font-bold text-4xl text-[#07484A] ">Cart</h1>
        <div className="w-[100%] flex flex-col md:flex-row  justify-between mt-4 text-[#07484A]  pl-2">
  <div className="w-[100%] md:w-[70%] p-4 md:p-0">
   {
    cart?cart.map((i,o)=>(
        <div className="flex justify-between items-start  text-center  mt-10 border-b border-solid border-[#07484A] " key={o}>
            <div className="flex">
         <Image   src={i.img} width={150} height={200} alt="Image" />  
<div className="font-bold pt-4">
    <h1>{i.title}</h1>
    <p>{i.price}$</p>
</div>
            </div>
<div className="flex flex-col gap-6 font-bold">
    <button className="bg-[#F9D9DA] mt-[-20px] sm:mt-0 pr-1 pl-1 rounded-sm ">Delete</button>
    <div className="flex items-center gap-4 text-lg">
    <button className="hover:bg-[#E0EFF6] h-8 w-8 rounded-full  ">-</button>
<p>2</p> 
<button className="hover:bg-[#E0EFF6] h-8 w-8 rounded-full  ">+</button>
    </div>
</div>
        </div>
    )):<div className="w-[100%] h-[500px] relative">
         <Image   src={"/noproduct.jpg"} fill alt="Image" />  
   </div>

   }
 </div>
   <div className="w-[100%] md:w-[30%] flex justify-center mt-2">
    <Order />
   </div>
        </div>
        </>
    );
};

export default Page;