import { navLinks } from "../constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center  navbar absolute top-0">

      <Image src="/../public/images/Logo.png " width="115" height="40"  />
      

      <ul className="list-none  flex  justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-lexend font-normal cursor-pointer text-[16px]
              ${
                index === navLinks.length - 1
                  ? "mr-0  text-green font-normal  bg-greenl rounded-[32px] w-max h-[43px] px-[18px] py-[10px] text-[14px] leadinng-[22px]  ml-[50px]"
                  : "mr-10  text-white  font-normal   bg-dimWhite border-1 rounded-[32px]  w-max h-[33px] px-[18px] py-[5px] text-[14px] leadinng-[22px]"
              }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
