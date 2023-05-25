import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdVilla } from "react-icons/md";
import { MdApartment } from "react-icons/md";
import HouseCard from "./HouseCard.js";
import styles from "../styles/HouseCard.module.css";
import { houseInfo } from "../constants/index.js";
import { propertyNavs } from "../constants/index.js";

const Feature = () => {
  const [scrolling, setScrolling] = useState(0);
  const [sectionNavs, setSectionNavs] = useState(propertyNavs);
  const carouselRef = useRef();

  let houseInfoFiltered = filterProperties(houseInfo, sectionNavs);

  function filterProperties(properties, sectionNavs) {
    let sectionNavsFiltered = sectionNavs.filter((nav) => nav.active);
    console.log("sectionNavsFiltered: ", sectionNavsFiltered);

    let sectionNavsFilters = sectionNavsFiltered.map((nav) => nav.type);
    console.log("sectionNavsFilters: ", sectionNavsFilters);

    let filteredProperties = properties.filter((property) =>
      sectionNavsFilters.includes(property.type)
    );
    console.log("filteredProperties: ", filteredProperties);

    filteredProperties = filteredProperties.length
      ? filteredProperties
      : properties;
    console.log("filteredProperties: ", filteredProperties);

    return filteredProperties;
  }
  const navs = sectionNavs.map((item) => (
    <button key={item.type} href={item.link}>
      <li
        className={
          item.active
            ? "bg-greenl text-greenm w-[120px] h-[40px] rounded-[32px] flex  "
            : "bg-white border-[1px] border-offwhite w-[120px] h-[40px] rounded-[32px]  text-gray flex"
        }
        onClick={() => makeActive(item.type)}
      >
        {item.type === "House" && (
          <BsFillHouseDoorFill className="text-[25px] ml-[15px] mt-[5px]" />
        )}
        {item.type === "Villa" && (
          <MdVilla className="text-[25px] ml-[15px] mt-[5px]" />
        )}
        {item.type == "Apartement" && (
          <MdApartment className="text-[25px] ml-[15px] mt-[5px]" />
        )}
        <div className=" pl-[10px] pt-[5px]">{item.type}</div>
      </li>
    </button>
  ));
  const makeActive = (type) => {
    setSectionNavs((prev) => {
      return prev.map((item) => {
        return item.type === type
          ? { ...item, active: !item.active }
          : { ...item };
      });
    });
  };

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const moveRight = (e) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth *
          0.7 *
          ((scrolling + 1) / houseInfo.length)
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const moveLeft = (e) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth *
          0.7 *
          ((scrolling - 1) / houseInfo.length)
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          houseInfo.length
      );
      setScrolling(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        scroll(carouselRef.current, 0);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <h3 className="font-lexend text-[14px] leading-[17.5px] font-medium pl-[120px] text-orange pb-[30px]">
        Our Recomindation
      </h3>
      <div className="flex flex-row justify-between items-center w-full pl-[120px]">
        <h1 className="font-lexend text-[32px] leading-[40px] font-bold text-darkblue">
          Featured House
        </h1>
        <div>
          <div className="flex items-center justify-start gap-[32px] max-w-[493px] w-[52px] mr-[120px]">
            <div className="mr-[180px] flex  gap-[20px]"> {navs} </div>
          </div>
        </div>
        <div className="flex flex-row gap-[10px] mr-[110px]">
          <button
            className="bg-offwhite w-[80px] rounded-[32px] h-[50px] pl-[25px]"
            onClick={(e) => moveLeft(e)}
          >
            <Image
              src="/../public/images/eva_arrow-ios-forward-fill(1).png"
              width="30"
              height="30"
              alt="evaa-arrow"
            />
          </button>
          <button
            className="bg-greenm w-[80px] rounded-[32px] h-[50px] pl-[25px]"
            onClick={(e) => moveRight(e)}
          >
            <Image
              src="/../public/images/v2.png"
              width="30"
              height="30"
              alt="imagepuplic"
            />
          </button>
        </div>
      </div>
      <div
        className="overflow-x-auto pl-[120px] esraa w-[2000px]"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        <div className="flex  justify-start items-center pt-[30px]">
          {houseInfoFiltered.map((house, index) => {
            return <HouseCard key={index} house={house} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
