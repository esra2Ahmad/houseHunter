import React from "react";
import Card from "./Card";
import { reviews } from "../constants/index.js";
import  {useState, useRef, useEffect} from 'react';
export default function Reviewss() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
      return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
      e.preventDefault();
      if (carouselRef.current) {
          const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7* (i / reviews.length));
          scroll(carouselRef.current, scrollLeft);
      }
  }

  const handleScroll = () => {
      if (carouselRef.current) {
          const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * reviews.length);
          setActiveIndex(index);
      }
  }
  
  useEffect(() => {
      const handleResize = () => {
          if (carouselRef.current) {
              scroll(carouselRef.current, carouselRef.current.scrollWidth * 0.21);
          }
      }
      handleResize();
      window.addEventListener('resize', handleResize);
  }, []);
  return (
    

    <div className="">
      
      <div  className=" items-center mb-[50px] mt-[200px]">
      <p className="mt-[-100px] text-center font-lexend text-[14px]  leading-[17.5px] font-medium text-orange">
        See Our Review
      </p>
      <h2 className="pt-[20px] text-center font-lexend text-[32px]  leading-[40px] font-bold text-darkblue">
        What Our User Say About Us
      </h2>
      </div>

      <div className=" flex  gap-[56px] pt-[20px] h-[550px]  max-w-max overflow-x-auto  review " ref={carouselRef} onScroll={handleScroll} >

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
            onClick={(e) => handleClick(e, index)}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-[16px] mb-[50px] cursor-pointer">
  
                {reviews.map((item, index) => {
                    return (
                    <button
                        key={index}
                        className={`button ${
                            index === activeIndex
                            ? "bg-blue-700"
                            : "bg-yellow-400"
                        }`}
                        onClick={(e) => handleClick(e, index)}
                    >
                    </button>
                    );
                })}
            </div>
    </div>
  );
}
