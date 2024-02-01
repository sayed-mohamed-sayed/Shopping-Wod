import Image from "next/image";

function Box() {
    return (
        <div className="flex justify-center items-center text-center mt-12 flex-wrap">
            <div className="flex justify-center items-center flex-col w-[200px] m-4">
               <Image className="bg-[#EEEBFF] p-2 rounded-md" src={"/pay.png"} width={60} height={60} alt="Image" /> 
            <h1 className="font-bold text-lg  leading-[50px]">Payment Method</h1>
            <p>We offer flexible payment options to make easier</p>
            </div>
            <div className="flex justify-center items-center flex-col w-[200px] m-4">
               <Image className="bg-[#FFF4E7] p-2 rounded-md" src={"/box.png"} width={60} height={60} alt="Image" /> 
<h1 className="font-bold text-lg  leading-[50px]">Return policy</h1>
     <p>You can return a product within 30 days</p>
            </div>
            <div className="flex justify-center items-center flex-col w-[200px] m-4 ">
               <Image className="bg-[#CAF3E5] p-2 rounded-md" src={"/contact.png"} width={60} height={60} alt="Image" /> 
<h1 className="font-bold text-lg  leading-[50px]">Customer Support</h1>
<p>Our customer support is 24h</p>
            </div>
        </div>
    );
};

export default Box;