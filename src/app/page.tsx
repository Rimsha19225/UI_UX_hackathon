import Image from "next/image";
import hero from "../../public/images/hero.png"
import star_1 from "../../public/images/Vector (2).png"
import star_2 from "../../public/images/Vector (3).png"
import New_Arival from "./new_Arival/page";
import parada from "../../public/images/parada.png"
import gucci from "../../public/images/gucci.png"
import calvin from "../../public/images/calvin.png"
import zara from "../../public/images/zara.png"
import versace from "../../public/images/versace.png"

export default function Home() {
  return (
    <div className="relative w-full bg-[#F2F0F1] h-[80vh] mt-[8.6rem]">
      <div className="w-[90%] 2xl:w-[1500px] mx-auto flex justify-around">
        <div>
          <div className="mr-20 mb-[35px]">
            <h1 className="integral w-[30rem] font-bold text-[48px] leading-none mt-[5rem]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="satoshi w-[25rem] text-[0.72rem] mt-7">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="satoshi card mt-[1.5rem] p-2 rounded-full bg-[#000000] text-[#ffffff] w-36 hover:w-[9.5rem]">Shop Now</button>
            <div className="font-bold flex gap-12 mt-[2.5rem] w-[28rem]">
              <div className="hover:text-[#565252]">
                <h2 className="satoshi1 text-[30px] font-semibold cursor-pointer">200+</h2>
                <p className="satoshi text-[10px]">International Brands</p>
              </div>
              <div className="hover:text-[#565252]">
                <h2 className="satoshi1 text-[30px] font-semibold cursor-pointer">2,000+</h2>
                <p className="satoshi text-[10px]">High-Quality Products</p>
              </div>
              <div className="hover:text-[#565252]">
                <h2 className="satoshi1 text-[30px] font-semibold cursor-pointer">30,000+</h2>
                <p className="satoshi text-[10px]">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative w-[40rem]">
          <Image src={star_1} alt="hero_section_image" className="shake flex top-60 left-5 absolute w-[3rem]"/>
          <Image src={hero} alt="hero_section_image" className="absolute w-[100%] h-[78.5vh]"/>
          <Image src={star_2} alt="hero_section_image" className="shake absolute right-5 top-24 w-[6rem]"/>
        </div>
      </div>
      <div className='bg-[#000000] flex justify-center items-center gap-[8rem] h-[13vh] mt-[4rem]'>
        {/* <h2 className="logo text-[45px] text-white tracking-tighter">VERSACE</h2>
        <h2 className="logo text-[45px] text-white tracking-[-0.12em]">ZARA</h2>
        <h2 className="logo text-[45px] text-white">GUCCI</h2>
        <h2 className="logo text-[45px] text-white">PARADA</h2>
        <h2 className="logo text-[45px] text-white tracking-tighter font-thin">Calvin Klein</h2> */}
        <Image src={versace} alt="versace_logo" className='cursor-pointer'/>
        <Image src={zara} alt="zara_logo" className='cursor-pointer'/>
        <Image src={gucci} alt="gucci_logo" className='cursor-pointer'/>
        <Image src={parada} alt="parada_logo" className='cursor-pointer'/>
        <Image src={calvin} alt="calvin_logo" className='cursor-pointer'/>
      </div>
      <New_Arival/>
    </div>
  );
}
