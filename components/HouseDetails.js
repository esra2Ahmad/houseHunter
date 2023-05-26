import Image from "next/image";
import { BsTelephoneFill,BsPlayFill} from 'react-icons/bs';
import YouTube, { YouTubeProps } from 'react-youtube';

const HouseDetails = () => {
  const opts = {
    height: "488",
    width: "416",
    playerVars: {
    autoplay: 1,
    },
};

  return (
    <div>
      <section className="pt-[100px] px-[120px] w-[1500px] ">
      <p className="font-lexend text-[14px]  leading-[17.5px] font-medium text-orange">
        Ready To Sell!!
      </p>
      <div className="flex flex-row gap-[40px] ">
        <div className="">
          <h1 className=" pt-[10px] font-lexend text-[37px]  leading-[40px] font-bold text-bluem">
            Lets Tour And See Our House!
          </h1>
          <p className=" py-[25px] w-[413px] font-lexend text-[16px]  leading-[28px] font-normal text-graym">
            Houses recomended by our partners that have <br></br>been curated to
            becomethe home of you dreams!
          </p>
          <h2 className="font-lexend text-[16px]  leading-[28px] font-bold text-darkblue">
            House Detail
          </h2>
          <div className="flex flex-row  flex-wrap ">
              <div className="flex flex-row items-center w-1/2 py-[25px] ">
              <Image src="/../public/images/bed 1.png" width="30" height="30" />
              <p  className="px-[20px] font-lexend text-[16px]  leading-[20px] font-medium text-span"> 4 Bedrooms</p>
              </div>
              <div className="flex flex-row items-center  py-[25px]">
              <Image
                src="/../public/images/car-garage 1.png"
                width="30"
                height="30"
              />
              <p  className="px-[20px] font-lexend text-[16px]  leading-[20px] font-medium text-span">1 Carport</p>
              </div>
              <div className="flex flex-row items-center w-1/2" >
              <Image
                src="/../public/images/Group 12.png"
                width="30"
                height="30"
              />
              <p  className="px-[20px] font-lexend text-[16px]  leading-[20px] font-medium text-span">2 Bathrooms</p>
              </div>
              <div className="flex flex-row items-center w-1/2 ">
              <Image
                src="/../public/images/stairs-with-handrail 1.png"
                width="30"
                height="30"
              />
              <p className="px-[20px] font-lexend text-[16px]  leading-[20px] font-medium text-span">2 floors</p>
              </div>
          </div>
          <div className="flex flex-row gap-[20px] pt-[50px]">
            <Image
              src="/../public/images/Ellipse 6(1).png"
              width="50"
              height="50"
            
            />
            <div>
              <h3 className="font-lexend text-[18px]  leading-[24px] font-medium text-bluem">Dianne Russell</h3>
              <h4 className="font-lexend text-[16px]  leading-[24px] font-medium text-graym pt-[5px]">Manger Director</h4>
            </div>
            <div className="px-[70px]">
           
            <button className="bg-greenm  text-white w-[180px] h-[50px] rounded-[32px] flex flex-row ">
              <BsTelephoneFill className="text-[35px] ml-[20px] pt-[15px]"/>
              <p className="pt-[13px] pl-[15px] items-center font-lexend font-semibold text-[16px] leading-[22px]">contact Now</p>
            </button>
            </div>
            
          </div>
        </div>
        <div className="w-[528px]   relative left-[100px] ">
                <div className="  absolute left-0 bottom-0 flex justify-end items-end gap-[12px] z-[1] object-cover">
   
  
                    <Image src='/../public/images/Rectangle18.jpg' className="rounded-[4px] w-[296px] h-[150px] " width='296' height='168'/>
                    <Image src='/../public/images/Rectangle19.jpg' className="rounded-[4px] h-[80px] w-[96px] " width='96' height='80'/>
                    <Image src='/../public/images/Rectangle20.jpg' className="rounded-[4px] h-[80px] w-[96px]" width='96' height='80'/>
                
                </div>
                <div className="absolute right-0 top-0 w-[488px] h-[416px] video">
                <YouTube 
                        videoId="zumJJUL_ruM" 
                        opts={{
                                height: '352',
                                width: '488',
                                playerVars: {
                                autoplay: 0,
                                },
                            }} 
                        onReady={(event) => { event.target.pauseVideo(); }}
                        // onPlay={handleOnPlay}
                    />
                    

                    {/*<Image src='/../public/images/Rectangle17.jpg' className="rounded-[4px] w-[488px] h-[352px] object-cover" width='488' height='416'/>
                    <button className="vediob"><BsPlayFill /></button>*/}
                </div>
            </div>
      </div>
      </section>
    </div>
  );
};
export default HouseDetails;
