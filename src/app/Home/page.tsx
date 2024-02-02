import Image from "next/image";

function page() {
    
    return (
       <section>
        <div className="h-[400px] relative">
            <Image  className="rounded-b-3xl w-[100] h-[400]" src={"/chair.webp"} fill alt="Image"/>
        <div className="font-[cursive] flex flex-col ml-4 relative z-10 justify-center h-[100%] gap-[35px]  ">
            <h1 className="w-[280px] sm:w-[320px] h-[px] text-[white] font-black  text-[29px] sm:text-[30px]">Exclusive Deals of Furniture Collection</h1>
            <p className="text-[white]">Explore different categories. Find the best deals.</p>
            <button className="text-[#FDFBF8] bg-[#70908B] w-[100px] p-1 rounded-sm animate">Shop Now</button>
        </div>
        </div>
       </section>
    );
};

export default page;