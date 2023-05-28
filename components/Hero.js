import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex w-full h-[770px] mb-[150px] ">
        <div className="flex justify-center items-center  pt-[80px]  w-1/2">
          <div className="flex flex-col  justify-start  items-start w-[496px] h-[466px]">
            <h1 className="font-lexend font-bold text-[40px] leading-[50px] text-darkblue py-[20px]">
              Find The Place To
              <br />
              Live Your <span className="font-outline-2 text-white">Dreams</span>
              <br />
              Easily Here
            </h1>

            <p className="font-lexend font-normal text-[16px] leading-[32px] text-gray py-[40px]">
              Everything you need about finding your place to live will be here, where it will be easier for you
            </p>
            <div className="flex borderinput flex-row items-center justify-between  shadow-lg  w-full h-[400px] rounded-[32px]">
              <Image
                className=" relative left-[30px]"
                src="/../public/images/fluent_location-16-filled.png"
                alt="fluent location"
                width="25"
                height="25"
              />
              <input
                className=" text-[16px] font-lexend text-gray  w-full px-[40px] h-[50px] border-none"
                type="text"
                placeholder=" search for the location you want!"
              ></input>
              <button className="bg-greenm rounded-[32px] w-[150px] mr-[6px] h-[40px] text-white ">
                {" "}
                search{" "}
              </button>
            </div>
            <div className="flex flex-col w-full py-[30px]">
              <p className="text-grayl text-[16px] leading-[32px] font-lexend font-normal">
                Our Partnership
              </p>
              <div className="flex flex-row justify-between items-center ">
                <img
                  src="/../images/traveloka_logo 2.png"
                  width={100}
                  height={50}
                  alt="partner image"
                  className="bg-cover"
                />
                <img
                  src="/../images/traveloka_logo 3.png"
                  width={100}
                  height={50}
                  alt="partner image"
                  className="bg-cover"
                />
                <img
                  src="/../images/traveloka_logo 4.png"
                  width={100}
                  height={50}
                  alt="partner image"
                  className="bg-cover"
                />
                <img
                  src="/../images/traveloka_logo 5.png"
                  width={100}
                  height={50}
                  alt="partner image"
                  className="bg-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative overflow-x-hidden overflow-y-hidden">
          <Image
            src="/../public/images/image 6.png"
            width={800}
            height={700}
            alt="puplic image"
            className=" bg-cover   z[-1] "
            
          />
          <div className=" relative l-0 pl-[48px]   overflow-y-hidden  overflow-x-auto pr-[24px] bottom-[145px] w-full h-[100px] none">
            <div className="flex flex-row gap-x-[20px]  items-stretch relative h-[104px] w-[900px] ">
              <div className="bg-white w-[700px] rounded-[32px] h-[100px] flex flex-row">
                <div className="flex flex-row items-start">
                  <img
                    className="relative left-[-10px]"
                    src="../images/Ellipse 4.png"
                    width={150}
                    height={50}
                    alt="user"
                  
                    
                  />
                  <img
                    className="relative left-[-100px]"
                    src="../images/Ellipse 5.png"
                    width={150}
                    height={50}
                    alt="user"
                    
                  />
                  <img
                    className="relative left-[-190px]"
                    src="../images/Ellipse 6.png"
                    width={150}
                    height={50}
                    alt="user"
                  />
                </div>
                <div className="flex flex-col justify-start w-full py-[25px] px-[10px]  relative left-[-20px]">
                  <h1 className="font-lexend text-[16px] leading-[24px] font-semibold text-darkblue pl-[30px]">
                    1K+ People
                  </h1>
                  <p className="font-lexend text-[12px] leading-[20px] font-bold text-grays w-[200px] pl-[30px]">
                    Successfully Getting Home
                  </p>
                </div>
              </div>
              <div className="bg-white w-[500px] rounded-[32px] h-[100px] flex flex-row justify-between">
                <img
                  className="py-[25px] ml-[20px]"
                  src="../images/Rectangle 12.png "
                  width={50}
                  height={50}
                  alt="Rectangular 12"
                />
                <div className="flex flex-col relative left-[-65px] top-[25px]">
                  <h1 className="font-lexend text-[16px] leading-[24px] font-semibold text-darkblue">
                    56 Houses
                  </h1>
                  <p className="font-lexend text-[12px] leading-[20px] font-bold text-grays">
                    Sold Monthly
                  </p>
                </div>
              </div>
              <div className="bg-white w-[600px]  rounded-[32px] h-[100px] flex flex-row">
                <img
                  className=" mt-3 bg-cover "
                  src="../images/Ellipse 6(4).png"
                  width={100}
                  height={100}
                  alt="user"
                  
                />
                <div className="flex flex-col py-[30px]">
                  <h1 className="font-lexend text-[16px] leading-[24px] font-semibold text-darkblue">
                    4K+
                  </h1>
                  <p className="font-lexend text-[12px] leading-[20px] font-bold text-grays w-full">
                    P
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
