import React from "react";
import Card from "./Card";
import { reviews } from "../constants/index.js";
export default function Reviewss() {
  return (
    <div className="flex items-center flex-col mt-[200px]">
      

      <p className="mt-[-100px] text-center font-lexend text-[14px]  leading-[17.5px] font-medium text-orange">
        See Our Review
      </p>
      <h2 className="pt-[20px] text-center font-lexend text-[32px]  leading-[40px] font-bold text-darkblue">
        What Our User Say About Us
      </h2>

      <div className=" flex gap-[56px] pt-[20px]">
        {reviews.map((review, index) => (
          <Card
            key={index}
            title={review.title}
            description={review.description}
            image={review.image}
            userName={review.userName}
            userJob={review.userJob}
            userImage={review.userImage}
            star={review.star}
            rate={review.rate}
          />
        ))}
      </div>
    </div>
  );
}
