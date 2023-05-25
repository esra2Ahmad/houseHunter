  import React from "react";
  import { useState, useEffect, useRef } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import { BsFillHouseDoorFill } from 'react-icons/bs';
  import { MdVilla, MdApartment } from 'react-icons/md';
  import {FeatureNavs} from "../constants/index.js";

  const Feature = () => {
    const [scrolling, setScrolling] = useState(0);
    const [featurNav,setFeatureNav]=useState(FeatureNavs);
                
    const carouselRef = useRef();
    const navs = FeatureNavs.map(item =>(
      <Link key={item.type} href={item.link}>
        
          
          <li className={item.active?"bg-greenl text-greenm  w-[120px] h-[40px] rounded-[32px] flex ":"bg-white border-[1px] border-offwhite w-[120px] h-[40px] rounded-[32px] text-gray flex"}
          
          onClick={()=> makeActive(item.type)}>
              {item.type==="House"&&<BsFillHouseDoorFill className="text-[25px] ml-[15px] mt-[5px]"/>}
              {item.type==="Villa"&&< MdVilla className="text-[25px] ml-[15px] mt-[5px]"/>}
              {item.type=="Apartement"&&< MdApartment className="text-[25px] ml-[15px] mt-[5px]"/>}
              <div className=" pl-[10px] pt-[5px]">{item.type}</div>
              
          </li>
      </Link>

  ))
  const makeActive = (type) => {
    setFeatureNav(prev => {
    return prev.map(item => {
        return item.type === type ? {...item, active:true} : {...item, active:false}
        
    })
})
}


    const scroll = (node, left) => {
      return node.scrollTo({ left, behavior: "smooth" });
    };

    const moveRight = (e) => {
      e.preventDefault();
      if (carouselRef.current) {
        const scrollLeft = Math.floor(
          carouselRef.current.scrollWidth *
            0.7 *
            ((scrolling + 1) / 4)
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
            ((scrolling - 1) / 4)
        );
        scroll(carouselRef.current, scrollLeft);
      }
    };

    const handleScroll = () => {
      if (carouselRef.current) {
        const index = Math.round(
          (carouselRef.current.scrollLeft /
            (carouselRef.current.scrollWidth * 0.7)) *
            4
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
            <button className="bg-offwhite w-[80px] rounded-[32px] h-[50px] pl-[25px]" onClick={(e) => moveLeft(e)}>
              <Image
                src="/../public/images/eva_arrow-ios-forward-fill(1).png"
                width="30"
                height="30"
              />
            </button>
            <button className="bg-greenm w-[80px] rounded-[32px] h-[50px] pl-[25px]" onClick={(e) => moveRight(e)}>
              <Image src="/../public/images/v2.png" width="30" height="30" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto pl-[120px] esraa" ref={carouselRef} onScroll={handleScroll}>
          <div className="flex justify-start gap-[55px] pt-[30px] w-[2000px]">
            <div className="flex flex-col items-start justify-between">
              <Image
                src="/../public/images/Img(1).png"
                width="360"
                height="382"
              />
              <p className="pt-[25px] font-lexend text-[24px]  leading-[32px] font-medium text-bluem">
                Roseland House{" "}
              </p>
              <span className="pt-[15px] font-lexend text-[20px]  leading-[32px] font-medium text-span">
                $ 35.000.000
              </span>
              <div className="flex flex-row items-start gap-[20px] pt-[25px]">
                <Image
                  src="/../public/images/Ellipse 6(1).png"
                  width="50"
                  height="50"
                />
                <div>
                  <h1 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem">
                    Dianne Russell
                  </h1>
                  <h2 className="font-lexend text-[14px]  leading-[22px] font-medium text-graym">
                    Manchester,Kentucky
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between">
              <Image src="/../public/images/img2.png" width="370" height="382" />
              <p className="pt-[25px] font-lexend  text-[24px] leading-[32px] font-medium text-bluem">
                Wood Landside{" "}
              </p>
              <span className="pt-[15px] font-lexend text-[20px]  leading-[32px] font-medium text-span">
                $ 20.000.000
              </span>
              <div className="flex flex-row items-start gap-[20px] pt-[25px]">
                <Image
                  src="/../public/images/Ellipse 6(2).png"
                  width="50"
                  height="50"
                />
                <div>
                  <h1 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem">
                    Robert Fox
                  </h1>
                  <h2 className="font-lexend text-[14px]  leading-[22px] font-medium text-graym">
                    Dr.San Jose,South Dakota
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between">
              <Image src="/../public/images/1mg3.png" width="370" height="382" />
              <p className=" pt-[25px] font-lexend text-[24px]  leading-[32px] font-medium text-bluem">
                Old Lighthouse
              </p>
              <span className=" pt-[15px] font-lexend text-[20px]  leading-[32px] font-medium text-span">
                $ 44.000.000
              </span>
              <div className="flex flex-row items-start gap-[20px] pt-[25px]">
                <Image
                  src="/../public/images/Ellipse 6(3).png"
                  width="50"
                  height="50"
                />
                <div>
                  <h1 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem">
                    Ronald Richards
                  </h1>
                  <h2 className="font-lexend text-[14px]  leading-[22px] font-medium text-graym">
                    Santa Ana,Illinois
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between">
              <Image src="/../public/images/true.png" width="370" height="382" />
              <p className=" pt-[25px] font-lexend text-[24px]  leading-[32px] font-medium text-bluem">
                Cosmos House{" "}
              </p>
              <span className=" pt-[15px] font-lexend text-[20px]  leading-[32px] font-medium text-span">
                $ 22.000.000
              </span>
              <div className="flex flex-row items-start gap-[20px] pt-[25px]">
                <Image
                  src="/../public/images/Ellipse 6(5).png"
                  width="50"
                  height="50"
                />
                <div>
                  <h1 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem">
                    Jenny Wel
                  </h1>
                  <h2 className="font-lexend text-[14px]  leading-[22px] font-medium text-graym">
                    Preston.Rd
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Feature;
