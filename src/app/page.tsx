import Image from "next/image";
import hero from "../../public/images/hero.png"
import star_1 from "../../public/images/Vector (2).png"
import star_2 from "../../public/images/Vector (3).png"
import New_Arival from "./new_Arival/page";
// import parada from "../../public/images/prada-logo-1 1.png"
// import gucci from "../../public/images/gucci-logo-1 1.png"
// import calvin from "../../public/images/Group (1).png"
// import zara from "../../public/images/zara-logo-1 1.png"
// import versace from "../../public/images/Group.png"

export default function Home() {
  return (
    <div className="relative w-full bg-[#F2F0F1] h-[80vh] mt-[7.5rem]">
      <div className="w-[90%] 2xl:w-[1500px] mx-auto flex justify-around 2xl-[w-1500px]">
        <div>
          <div className="mr-20">
            <h1 className="w-[25rem] font-bold text-[55.5px] tracking-tighter leading-none mt-[5rem]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="w-[25rem] text-[0.72rem] mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className=" mt-[1.5rem] p-2 rounded-full bg-[#000000] text-[#ffffff] w-36 hover:w-[9.5rem]">Shop Now</button>
            <div className="flex gap-12 mt-[2.5rem] w-[28rem]">
              <div className="hover:text-[#565252]">
                <h2 className="text-[30px] font-semibold cursor-pointer">200+</h2>
                <p className="text-[10px]">International Brands</p>
              </div>
              <div className="hover:text-[#565252]">
                <h2 className="text-[30px] font-semibold cursor-pointer">2,000+</h2>
                <p className="text-[10px]">High-Quality Products</p>
              </div>
              <div className="hover:text-[#565252]">
                <h2 className="text-[30px] font-semibold cursor-pointer">30,000+</h2>
                <p className="text-[10px]">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative w-[40rem]">
          <Image src={star_1} height={20} width={25} alt="hero_section_image" className="flex top-60 left-5 absolute w-[3rem]"/>
          <Image src={hero} height={700} width={908} alt="hero_section_image" className="absolute w-[100%] h-[80vh]"/>
          <Image src={star_2} height={70} width={35} alt="hero_section_image" className="absolute right-5 top-24 w-[6rem]"/>
        </div>
      </div>
      <div className='bg-[#000000] flex justify-center gap-[8rem] h-[13vh] mt-[6.6rem]'>
        <h2 className="logo text-[45px] text-white mt-[1rem] tracking-tighter">VERSACE</h2>
        <h2 className="logo text-[45px] text-white mt-[1rem] tracking-[-0.12em]">ZARA</h2>
        <h2 className="logo text-[45px] text-white mt-[1rem]">GUCCI</h2>
        <h2 className="logo text-[45px] text-white mt-[1rem]">PARADA</h2>
        <h2 className="logo text-[45px] text-white mt-[1rem] tracking-tighter font-thin">Calvin Klein</h2>
      {/* <Image src={versace} alt="versace_logo" width={23} height={10} className='cursor-pointer w-[5rem] h-[5vh]'/> */}
      {/* <Image src={zara} alt="zara_logo" width={23} height={10} className='cursor-pointer'/>
      <Image src={gucci} alt="gucci_logo" width={23} height={10} className='cursor-pointer'/>
      <Image src={parada} alt="parada_logo" width={23} height={10} className='cursor-pointer'/>
      <Image src={calvin} alt="calvin_logo" width={23} height={10} className='cursor-pointer'/> */}
      </div>
      <New_Arival/>
    </div>
  );
}
