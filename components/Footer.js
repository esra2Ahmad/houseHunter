import React from "react";
import Details from "./Details";
import { footer } from "../constants/index.js";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between px-[120px] py-[70px] ">
      <div className="flex flex-col gap-[20px] ">
        <Image src="/../public/images/Logo.png" width="80" height="80" />
        <p className="font-lexnd font-normal w-[740px] text-[14px] leading-[24px] text-gray2 opacity-75">
          We provide information about properties such <br/>as houses,
           villas and apartments to help<br/> people find their dream home
        </p>
        <div className="flex flex-row gap-[10px]">
          <Image
            src="/../public/images/brandico_facebook.png"
            width="30"
            height="30"
          />
          <Image
            src="/../public/images/ant-design_instagram-filled.png"
            width="30"
            height="30"
          />
          <Image
            src="/../public/images/ant-design_twitter-outlined.png"
            width="30"
            height="30"
          />
        </div>
      </div>
      <div className="flex flex-row gap-[60px] ml-[-20px]">
        {footer.map((value, index) => (
          <Details
            key={value.index}
            title={value.title}
            one={value.li1}
            two={value.li2}
            three={value.li3}
            four={value.li4}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
