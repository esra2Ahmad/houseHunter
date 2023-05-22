
import Section5 from "./Section5";
import {section5} from "../constants/index.js";
import React from 'react';
import Image from "next/image";

const Col1 = (props) => {
  return (
    <div className="flex flex-row gap-[30px] pt-[30px]">
        <Image src={props.image} width="240" height="190"/>
        <div className="flex flex-col justify-start items-start">
            <div className="flex flex-row justify-between items-center  mb-[-10px]">
                <Image src={props.userImage} className="ml-[-20px]" width="70" height="70"/>
                <p className="font-lexend font-normal text-[14px] leading-[22px] text-span mt-[-10px]">{props.userName}</p>
            </div>
            <p  className="font-lexend font-semibold text-[18px] leading-[32px] text-darkblue">{props.title}</p>
            <div className="flex flex-row justify-between items-center pt-[10px]">
                <Image src={props.oclock} width="20" height="20"/>
                <p  className="font-lexend font-normal text-[14px] leading-[24px] text-graym px-[10px]">{props.time}</p>
            </div>
        </div>

    </div>
  )
}

export default Col1;