import Image from "next/image";
const Section3 = () => {
  return (
    <div className="pt-[100px] px-[120px] w-full">
      <p className="font-lexend text-[14px]  leading-[17.5px] font-medium text-orange">
        Ready To Sell!!
      </p>
      <div className="flex flex-row gap-[40px] ">
        <div className="w-full">
          <h1 className=" pt-[10px] font-lexend text-[37px]  leading-[40px] font-bold text-bluem">
            Lets Tour And See Our House!
          </h1>
          <p className=" py-[25px] w-[413px] font-lexend text-[16px]  leading-[28px] font-normal text-graym">
            Houses recomended by our partners that have <br></br>been curated to
            becomethe home of you dreams!
          </p>
          <h2 className="font-lexend text-[16px]  leading-[28px] font-bold text-darkblue">
            House Detail
          </h2>
          <div className="flex flex-row w-full flex-wrap">
              <div className="flex flex-row items-center w-1/2 py-[25px] ">
              <Image src="/../public/images/bed 1.png" width="30" height="30" />
              <p  className="px-[20px] font-lexend text-[16px]  leading-[20px] font-medium text-span"> 4 Bedrooms</p>
              </div>
              <div className="flex flex-row items-center w-1/2 py-[25px]">
              <Image
                src="/../public/images/car-garage 1.png"
                width="30"
                height="30"
              />
              <p  className="px-[20px] font-lexend text-[16px]  leading-[20px] font-medium text-span">1 Carport</p>
              </div>
              <div className="flex flex-row items-center w-1/2" >
              <Image
                src="/../public/images/Group 12.png"
                width="30"
                height="30"
              />
              <p  className="px-[20px] font-lexend text-[16px]  leading-[20px] font-medium text-span">2 Bathrooms</p>
              </div>
              <div className="flex flex-row items-center w-1/2 ">
              <Image
                src="/../public/images/stairs-with-handrail 1.png"
                width="30"
                height="30"
              />
              <p className="px-[20px] font-lexend text-[16px]  leading-[20px] font-medium text-span">2 floors</p>
              </div>
          </div>
          <div className="flex flex-row gap-[20px] pt-[50px]">
            <Image
              src="/../public/images/Ellipse 6(1).png"
              width="50"
              height="50"
            
            />
            <div>
              <h3 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem">Dianne Russell</h3>
              <h4 className="font-lexend text-[16px]  leading-[24px] font-medium text-graym pt-[5px]">Manger Director</h4>
            </div>
            <div className="px-[70px]">
           
            <button className="bg-greenm font-lexend f0nt-bold text-[16px] leading-[22px] text-white w-[160px] h-[50px] rounded-[32px] flex flex-row  py-[15px]">  <Image
              src="/../public/images/fluent_call-20-filled.png"
              width="20"
              height="20"
              className="mx-[10px]"
        
            />contact Now</button>
            </div>
            
          </div>
        </div>
        <div>
          <Image
            src="/../public/images/section 3.png"
            width="1000"
            height="1000"
          />
        </div>
      </div>
    </div>
  );
};
export default Section3;
