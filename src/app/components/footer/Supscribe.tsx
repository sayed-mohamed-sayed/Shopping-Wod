import Image from "next/image";

function Supscribe() {
    return (
        <div className="flex flex-col md:flex-row text-[#07484A]  ">
            <div className="w-[100%] md:w-[50%] h-[300px] relative">
            <Image src={"/hand.webp"} fill alt="Image"/>
            </div>
            <div className="w-[100%] pl-2 md:w-[50%] pb-2 md:pb-0 bg-[#E0EFF6]">
               <div className="">
               <h1 className="text-2xl">Join Our</h1>
                <h2 className="text-2xl font-bold">Newsletter</h2>
                <p className="mt-2">Receive exclusive deals, discounts and many offers.</p>
               </div>
               <div className="flex flex-col mt-6">
                <input className=" bg-transparent focus:outline-none border-b border-solid border-[#70908B] w-[60%]" type="text" name="" id="" placeholder="Enter your email"/>
               <button className="bg-[#70908B] text-white w-[110px] p-1 mt-6 rounded">Subscribe</button>
               </div>
            </div>
        </div>
    );
};

export default Supscribe;