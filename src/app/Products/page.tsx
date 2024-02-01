import Image from "next/image";
import { Product } from "../data";
import Link from "next/link";

function page() {
    return (
        <div className=" text-[#07484A] flex justify-center items-center flex-wrap">
{
  Product&&Product.map((i ,o)=>(
    <Link href={`/productsid/${i.id}`} key={o}>
        <div className="m-2  animate" >
      <div className="relative ">
<button className="absolute w-[100%] h-[100%] font-bold bg-[#00000017] opacity-0  hover:opacity-100 transition-opacity duration-1000 ">Details</button>
      <Image className="rounded" src={i.img} width={200} height={200} alt="Image" />
      </div>

      <div className=" flex justify-between items-center p-1 ">
<h1 className="text-start font-bold">{i.title}</h1>
<p>99$</p>
      </div>
      <div className="p-1">
      <Image className="" src={"/rate.png"} width={80} height={60} alt="Image" />

      </div>
    </div>


      </Link>
  ))
}        </div>
    );
};

export default page;