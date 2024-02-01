import Image from "next/image";
import Supscribe from "./Supscribe";
import { Fotter } from "../../data";
import Social from "./social";

function Footer() {
    return (
        <div className=" text-[#3f4042] bg-[#f8f5f5] relative w-[100%] overflow-hidden">
            <Supscribe />
            <Social/>
            <div className="pl-2 sm:pl-4 w-[100%] text-[#07484A] grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <div className="">
                <h1 className="font-bold  text-lg ">Address</h1>
                {Fotter && Fotter.map((i, o) => (
                        <div className="" key={o}>
                                <div> {i.adress?.map((i, o) => (<h1 key={o}>{i}</h1>))} </div>                       
                        </div>
                    ))}
              </div>
              <div className="">
                <h1 className="font-bold  text-lg ">My Account</h1>
                {Fotter && Fotter.map((i, o) => (
                        <div className="cursor-pointer" key={o}>
                                <div> {i.Myaccount?.map((i, o) => (<h1 key={o}>{i}</h1>))} </div>                       
                        </div>
                    ))}
              </div>
              <div className="">
                <h1 className="font-bold  text-lg ">Help</h1>
                {Fotter && Fotter.map((i, o) => (
                        <div className="cursor-pointer" key={o}>
                                <div> {i.Help?.map((i, o) => (<h1 key={o}>{i}</h1>))} </div>                       
                        </div>
                    ))}
              </div>
              <div className="">
                <h1 className="font-bold  text-lg ">Shop</h1>
                {Fotter && Fotter.map((i, o) => (
                        <div className="cursor-pointer" key={o}>
                                <div> {i.shop?.map((i, o) => (<h1 key={o}>{i}</h1>))} </div>                       
                        </div>
                    ))}
              </div>
            </div>
<p className="text-center w-[100%] p-2 bg-[#FFF4E7]">All Right Reserved 2024</p>
        </div>
    );
};

export default Footer;