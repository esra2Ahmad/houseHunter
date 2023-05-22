import React from "react";

const Details = (props) => {
  return (

      <div className="flex flex-col gap-[20px] ">
        <p className="font-lexend font-bold text-[18px] leading-[24px] text-bluem">{props.title}</p>
        <p className="font-lexend font-normal text-[14px] leading-[17.5px] text-graym" >{props.one}</p>
        <p className="font-lexend font-normal text-[14px] leading-[17.5px] text-graym">{props.two}</p>
        <p className="font-lexend font-normal text-[14px] leading-[17.5px] text-graym">{props.three}</p>
        <p className="font-lexend font-normal text-[14px] leading-[17.5px] text-graym">{props.four}</p>
      </div>
    
  );
};

export default Details;
