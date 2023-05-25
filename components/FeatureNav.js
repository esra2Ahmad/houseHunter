                import React from 'react'
                import Link from 'next/link'
                import Image from 'next/image'
                import {useState, useEffect, useRef} from 'react';
                import { FeatureNavs } from '@/constants';
                import { BsFillHouseDoorFill } from 'react-icons/bs';
                import { MdVilla, MdApartment } from 'react-icons/md';
                import HouseCard from './HouseCard';
                import { houseInfo } from '@/constants';

                const FeatureNav = () => {
                const [scrolling,setScrolling]=useState(0);

                const [featurNav,setFeatureNav]=useState(FeatureNavs);
                
                const carouselRef =useRef ();

                const navs = FeatureNavs.map(item =>(
                    <Link key={item.type} href={item.link}>
                        <li className={item.active?"bg-greenl text-greenm":""}
                        onClick={()=> makeActive(item.type)}>
                            {item.type==="House"&&<BsFillHouseDoorFill/>}
                            {item.type==="Villa"&&< MdVilla/>}
                            {item.type=="Apartement"&&<MdApartment/>}
                            
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
                return node.scrollTo({ left, behavior: 'smooth' });
            }

            const moveRight = (e) => {
                e.preventDefault();
                if (carouselRef.current) {
                    const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * ((scrolling + 1) / houseInfo.length));
                    scroll(carouselRef.current, scrollLeft);
                }
            }

            const moveLeft = (e) => {
                e.preventDefault();
                if (carouselRef.current) {
                    const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * ((scrolling - 1) / houseInfo.length));
                    scroll(carouselRef.current, scrollLeft);
                }
            }

            const handleScroll = () => {
                if (carouselRef.current) {
                    const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * houseInfo.length);
            
                    setScrolling(index);
                }
            }

            useEffect(() => {
                const handleResize = () => {
                    if (carouselRef.current) {
                        scroll(carouselRef.current, 0);
                    }
                }
            
                window.addEventListener('resize', handleResize);
            }, []);
                return (
                    <div className="relative ">
                <div className="pl-[120px] flex  justify-start items-center gap-[132px]">
                    <div className="w-[294px] h-[70px] flex flex-col justify-between gap-[12px]">
                        <div className="font-lexend font-semibold text-[14px] leading-[18px] text-orange fex gap-[8px] justify-start items-center">
                            <div className=" w-[32px] h-[1px] bg-orange "></div>
                            <p className="font-lexend font-semibold text-[14px] leading-[18px] text-orange flex gap-[8px] justify-start items-center self-start m-0">Our Recommendation</p>
                        </div>
                        <h2 className="m-0 self-end font-lexend font-bold text-[32px] leading-[40px]  text-darkblue">Featured House</h2>
                    </div>
                    <div className="flex items-center justify-start gap-[32px] max-w-[493px] w-[52px]">
                        {navs}
                    </div>
                    <div className="flex gap-[8px] ">
                        <button className="bg-offwhite w-[60px] pl-[15px] h-[30px] rounded-[32px]" onClick={(e) => moveLeft(e)}><Image src="/../public/imgs/s2/eva_arrow-backward.png" width="25" height="25"/></button>
                        <button className="bg-greenm w-[60px] h-[30px]  pl-[15px] rounded-[32px]" onClick={(e) => moveRight(e)}><Image src="/../public/imgs/s2/eva_arrow-forward.png" width="25" height="25"/></button>
                    </div>
                </div>
                <div className="pl-[120px] overflow-auto" ref={carouselRef} onScroll={handleScroll}>
                    <div className="mt-[40px] flex justify-start">
                        {houseInfo.map((house, index) => {
                            return (
                                <HouseCard
                                    key={index}
                                    house={house}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
                )
                }

                export default FeatureNav;