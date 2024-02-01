import Image from "next/image";

function Page() {
    return (
        <div className=" w-[100% h-[300px] mt-16">
            <div className=" text-2xl font-bold text-[#70908B] flex justify-center items-center w-[100%] gap-4 text-center mb-6">
            <h1>Contact</h1>
<Image src={"/contact.png"} width={40} height={50} alt="Image" />
            </div>
            {/* <div className="w-[50%] h-[500px] relative">
                <Image src={"/op.webp"} fill alt="Image" />
            </div> */}
            <div className=" flex justify-center items-center flex-col gap-4 w-[100%]">
                <div className="w-[90%] lg:w-[80%] relative">
                    <p className="absolute top-[-12px] left-[15px] text-[#07484A] bg-[#eee]">Name</p>
                    <input className="w-[100%] focus:outline-none p-[2px] rounded border border-solid border-[#07484A] bg-[#eee]" type="text"  />
                </div>
                <div className="w-[90%] lg:w-[80%] relative">
                    <p className="absolute top-[-12px] left-[15px] text-[#07484A] bg-[#eee]">Email</p>
                    <input className="w-[100%] focus:outline-none p-[2px] rounded border border-solid border-[#07484A] bg-[#eee]" type="text"  />
                </div>
                <div className="w-[90%] lg:w-[80%] relative">
                    <p className="absolute top-[-12px] left-[15px] text-[#07484A] bg-[#eee]">Message</p>
<textarea name="" id="" className="w-[100%] focus:outline-none p-[2px] rounded border border-solid border-[#07484A] bg-[#eee]"></textarea>
                </div>
                <div className="w-[90%] lg:w-[80%]">
                    <button className="bg-[#70908B] text-white font-bold w-[120px] h-[30px] rounded ">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Page;