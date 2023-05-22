import React from "react";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="flex  flex-row gap-[20px] bbggii  w-[1300px] mt-[100px] mx-[120px] h-[250px] rounded-[32px]">
      <div className=" px-[70px] py-[30px]">
        <Image
          src="/../public/images/Rectangle 12(1).png"
          width="81"
          height="81"
        />
        <Image
          src="/../public/images/Ellipse 6(4).png"
          width="60"
          height="60"
          className=" relative top-[30px]"
        />
        <Image
          src="/../public/images/Ellipse 6(3).png"
          width="36"
          height="36"
          className="relative top-[-120px] left-[150px]"
        />
        <Image
          src="/../public/images/Rectangle 25.png"
          width="50"
          height="50"
          className="relative top-[-40px] left-[150px]"
        />
      </div>
      <div className=" px-[190px] py-[40px]  ">
        <h1 className="font-lexend font-bold text-[32px] leading-[48px] text-center text-darkblue pb-[40px]">
          Subscribe For More Info
          <br /> and update from Hounter
        </h1>
        <div className="w-[470px] h-[50px] rounded-[32px] bg-white border-2 border-white">
          <input
            className="ml-[30px] mt-[10px] font-lexend font-semibold text-[14px] leading-[22px] text-graym "
            type="text"
            placeholder="Your email here"
          ></input>
          <button className="ml-[106px] bg-greenm w-[130px] h-[46px] rounded-[32px] font-lexend font-bold text-[14px] leading-[22px] text-white">
            Subsribe Now
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/../public/images/Rectangle 26.png"
          width="70"
          height="70"
          className="relative mt-[30px] ml-[-100px] "
        />
        <Image
          src="/../public/images/Ellipse 9.png"
          width="80"
          height="80"
          className="relative top-[-20px]"
        />
        <Image
          src="/../public/images/Ellipse 8.png
        "
          width="70"
          height="70"
          className="relative top-[-70px] left-[-80px] "
        />

        <Image
          src="/../public/images/Rectangle 27.png"
          width="55"
          height="55"
          className="relative top-[-80px]"
        />
      </div>
    </div>
  );
};

export default Subscribe;
