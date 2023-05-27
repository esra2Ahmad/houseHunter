import React from 'react';
import Image from 'next/image'

export default function Card(props){
    return (
        <div className="w-[740px] flex flex-col  items-center h-[505px]">
            <Image src={props.image} width='740' height='400'/>
            <div className=" flex flex-col items-start py-[32px] bg-white box rounded-[16px] relative top-[-130px] w-[612px]">
                <h4 className=" px-[20px] font-lexend text-[20px] leading-[25px] text-darkblue">{props.title}</h4>
                <p className="font-lexend text-[14px] leading-[24px] font-normal text-gray2 px-[20px] py-[20px]">{props.description}</p>
                <div className="flex flex-row justify-center gap-[350px]">
                    <div className="flex flex-row justify-start gap-[15px]" >
                        <Image src={props.userImage}  width='40' height='20'/>
                        <div>
                            <p className="font-lexend font-semibold text-[14px] leading-[22px] text-darkblue" >{props.userName}</p>
                            <p className="font-lexend font-semibold text-[14px] leading-[22px] text-graym pt-[5px]">{props.userJob}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center">
                        
                        <Image src={props.star} width='20' height='20'/>
                       <p className="font-lexend font-bold text-[22px] leading-[28px] text-span">{props.rate}</p>
                    </div>
                    </div>
            </div>
        </div>
      )
}