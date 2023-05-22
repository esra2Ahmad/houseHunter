import Image from "next/image";
import { section5 } from "../constants/index.js";
import Col1 from "./Col1.js";

const Section5 = () => {
  return (
    <div>
      <h3 className=" text-center font-lexend text-[14px]  leading-[17.5px] font-medium text-orange">
        See tips and trick from our partnership
      </h3>
      <h1 className="pt-[20px] text-center font-lexend text-[32px]  leading-[40px] font-bold text-darkblue">
        Find out more about<br></br> selling and buying homes
      </h1>
      <button className="text-center relative left-[700px] top-[20px] rounded-[32px] w-[120px] h-[40px] text-white  bg-greenm font-lexend text-[14px]  leading-[22px] font-bold text-darkblue">
        More Article
      </button>
      <div className=" flex flex-row  px-[120px] gap-[80px] pt-[100px]">
        <div>
          {section5.map((value, index) => (
            <Col1
              key={index}
              title={value.title}
              image={value.image}
              oclock={value.imageOclock}
              time={value.time}
              userName={value.userName}
              userImage={value.userImage}
            />
          ))}
        </div>

        <div className="flex flex-col">
          <Image
            src="/../public/images/Rectangle 23.png"
            width="700"
            height="570"
          />
          <div className="flex flex-row justify-start items-center">
            <Image
              src="/../public/images/Ellipse 6(9).png"
              width="100"
              height="100"
            />
            <h3 className="font-lexend font-normal text-[14px] leading-[22px] text-span mt-[-10px]">
              Cameron Williamson
            </h3>
          </div>
          <h1 className="mt-[-20px] font-lexend font-semibold text-darkblue text-[24px] leading-[32px]">
            12 Things to know before buying a house
          </h1>
          <p className="mt-[15px] font-lexend font-normal text-gray2 text-[14px] leading-[24px]">
            Want to buy a house but are unsure about what we should know, here I
            will try to <br></br>explain what we should know and check when we
            want to buy a house
          </p>
          <div className="flex flex-row gap-[5px]">
            <Image
              src="/../public/images/ic_round-access-time.png"
              width="20"
              height="20"
            />
            <h4 className=" font-lexend font-normal text-[14px] leading-[24px] text-graym px-[10px]"> 8 min read | 25 Apr 2021</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section5;
