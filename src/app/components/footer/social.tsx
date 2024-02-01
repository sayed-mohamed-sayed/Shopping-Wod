import Image from "next/image";



function Social() {
    return (
    <div className="">
        <div className="mt-">
        <Image src={"/Logo.png"} width={130} height={70} alt="Image"/>

        </div>
        <div className="flex items-center gap-2 m-2 ">
            <Image src={"/face.png"} width={25} height={25} alt="Image"/>
            <Image src={"/insta.png"} width={25} height={25} alt="Image"/>
            <Image src={"/twiter.png"} width={25} height={25} alt="Image"/>
            <Image src={"/linked.png"} width={25} height={25} alt="Image"/>
    </div>
        </div>
    );
};

export default Social;