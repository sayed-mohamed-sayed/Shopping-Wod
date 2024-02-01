import Image from "next/image";

function Head({ setslide, slide,img }: any) {
  const handelclick = (direction: string) => {
    if (direction === "left") {
      setslide(slide - 1);
    } else {
      setslide(slide + 1);
    }
  };

  return (
    <div className="h-[250px] rounded relative bg-[#70908B]  flex flex-col justify-center items-center">
      <div className="text-white font-bold text-2xl">
        <h1>Our</h1>
        <h2>Own Creation</h2>
        <p className="text-[12px]">Designed in our studio</p>
      </div>
      <div className="flex justify-center mt-4 relative items-center">
        <div className="mr-8 bg-[#E0EFF6] w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer">
          <button
            className=""
            disabled={slide === 0}
            onClick={() => handelclick("left")}
          >
            <Image src={"/button2.png"} width={20} height={20} alt="Image" />
          </button>
        </div>
        <div className="bg-[#F9D9DA] w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer">
          <button
            className=""
            disabled={slide === img+1}
            onClick={() => handelclick("right")}
          >
            <Image
              onClick={() => handelclick("right")}
              src={"/button1.png"}
              width={20}
              height={20}
              alt="Image"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Head;
