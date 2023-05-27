import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import Feature from"../components/Feature";
import HouseDetails from "@/components/HouseDetails";
import Reviewss from "@/components/Reviewss";
import Tips from "@/components/Tips";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    
    <div className=" w-full overflow-hidden navbg">
      
      <div className="  flex justify-center items-center  px-[120px]  ">
        <div className="xl:max-w-[1280px] w-full relative z-[5]  ">
          <Navbar />
        </div>
      </div>
        <div>
        <Hero />
        </div>
        <div>
        <Feature/>
        <HouseDetails/>
        <Reviewss/>
        <Tips/>
        <Subscribe/>
        </div>
        <Footer/>

        

    </div>
  );
}
