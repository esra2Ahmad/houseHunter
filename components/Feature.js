import React from "react";
import Image from "next/image";
import Link from "next/link";

const Feature = () => {
  return (
    <div className="mt-[-150px] px-[120px]">
      <h3 className="font-lexend text-[14px] leading-[17.5px] font-medium text-orange pb-[30px]">
        Our Recomindation
      </h3>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-lexend text-[32px] leading-[40px] font-bold text-darkblue">
          Featured House
        </h1>
        <div>
          <ul className="flex list-none flex-row  gap-[30px] items-center w-full">
            <div className="flex flex-row  items-center bg-syan rounded-[32px] w-[140px] h-[50px]">
              <Image
                className="pl-[20px]"
                src="/../public/images/ph_house-fill.png"
                width="50"
                height="50"
              />{" "}
              <li className="pl-[10px] font-lexend text-[18px] leading-[28px] font-medium text-greenm ">
                <Link href="/house">House</Link>
              </li>
            </div>
            <div className="flex flex-row  items-center  bg-white rounded-[32px] w-[120px] h-[50px]  border-[1px] border-offwhite">
              <img
                className="pl-[20px]"
                src="/../images/ic_round-villa.png"
                width={50}
                height={50}
              />
              <li className="pl-[10px] font-lexend text-[18px] leading-[28px] font-medium text-graym">
                Villa
              </li>
            </div>
            <div  className="flex flex-row items-center  bg-white rounded-[32px] w-[190px] h-[50px]  border-[1px] border-offwhite">
              <img
                className="pl-[20px]"
                src="/../images/ic_round-apartment.png"
                width={50}
                height={50}
              />{" "}
              <li className="pl-[10px] font-lexend text-[18px] leading-[28px] font-medium text-graym">
                Apartement
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-row gap-[10px] ">
          <button className="bg-offwhite w-[80px] rounded-[32px] h-[50px] pl-[25px]">
            <Image
              src="/../public/images/eva_arrow-ios-forward-fill(1).png"
              width="30"
              height="30"
            />
          </button>
          <button className="bg-greenm w-[80px] rounded-[32px] h-[50px] pl-[25px]">
            <Image src="/../public/images/v2.png" width="30" height="30" />
          </button>
        </div>
      </div>
      <div className="flex justify-start gap-[55px] pt-[30px] w-[2000px] ">
        <div className="flex flex-col items-start justify-between">
          <Image src="/../public/images/Img(1).png" width="360" height="382" />
          <p  className="pt-[25px] font-lexend text-[24px]  leading-[32px] font-medium text-bluem">Roseland House </p>
        <span className="pt-[15px] font-lexend text-[20px]  leading-[32px] font-medium text-span">$ 35.000.000</span>
          <div className="flex flex-row items-start gap-[20px] pt-[25px]">
            <Image
              src="/../public/images/Ellipse 6(1).png"
              width="50"
              height="50"
            />
            <div>
              <h1 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem">Dianne Russell</h1>
              <h2 className="font-lexend text-[14px]  leading-[22px] font-medium text-graym">Manchester,Kentucky</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between" >
                        <Image src="/../public/images/img2.png" width="370" height="382"/>
                        <p  className="pt-[25px] font-lexend  text-[24px] leading-[32px] font-medium text-bluem">Wood Landside </p>
                        <span className="pt-[15px] font-lexend text-[20px]  leading-[32px] font-medium text-span">$ 20.000.000</span>
                        <div className="flex flex-row items-start gap-[20px] pt-[25px]">
                            <Image src="/../public/images/Ellipse 6(2).png" width="50" height="50"/>
                            <div >
                            <h1 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem" >Robert Fox</h1>
                            <h2 className="font-lexend text-[14px]  leading-[22px] font-medium text-graym">Dr.San Jose,South Dakota</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                        <Image src="/../public/images/1mg3.png" width="370" height="382"/>
                        <p className=" pt-[25px] font-lexend text-[24px]  leading-[32px] font-medium text-bluem">Old Lighthouse</p>
                        <span className=" pt-[15px] font-lexend text-[20px]  leading-[32px] font-medium text-span">$ 44.000.000</span>
                        <div className="flex flex-row items-start gap-[20px] pt-[25px]">
                            <Image src="/../public/images/Ellipse 6(3).png" width="50" height="50"/>
                            <div>
                            <h1 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem">Ronald Richards</h1>
                            <h2 className="font-lexend text-[14px]  leading-[22px] font-medium text-graym">Santa Ana,Illinois</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                        <Image src="/../public/images/true.png" width="370" height="382"/>
                        <p className=" pt-[25px] font-lexend text-[24px]  leading-[32px] font-medium text-bluem">Cosmos House </p>
                        <span className=" pt-[15px] font-lexend text-[20px]  leading-[32px] font-medium text-span">$ 22.000.000</span>
                        <div className="flex flex-row items-start gap-[20px] pt-[25px]">
                            <Image src="/../public/images/Ellipse 6(5).png" width="50" height="50"/>
                            <div>
                            <h1 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem">Jenny Wel</h1>
                            <h2 className="font-lexend text-[14px]  leading-[22px] font-medium text-graym" >Preston.Rd</h2>
                            </div>
                        </div>
                    </div>
      </div>
    </div>
  );
};

export default Feature;
