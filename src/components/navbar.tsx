// "use client"
// import {useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import profile from "../../public/images/Frame (2).png"
import cart from "../../public/images/Frame (1).png"
import search from "../../public/images/Frame (3).png"
import dropdown from "../../public/images/Frame (4).png"


const NavBar = () => {
    
  return (
    <div className="w-full bg-[#ffffff] fixed top-9 z-50 pb-[1.5rem] border-b-[1px]">
      <div className="w-[90%] h-[5rem] 2xl:w-[1500px] mx-auto flex justify-around 2xl-[w-1500px]">
          <div className='font-bold text-[32px] w-20 mt-[2.2rem] ml-10 tracking-tighter cursor-pointer'>SHOP.CO</div>
          <div className='flex gap-5 mt-[3rem]'>
            <div className="link flex gap-1 hover:font-semibold">
              <Link href={"#"} 
              className="dropdown-button border-none cursor-pointer border-r-[5px] ml-20">Shop </Link>
              <div className='mt-2'> <Image src={dropdown} alt="drop" className=""/> </div>
            </div >
            <div><Link href={"#"} className='link font-semibold'>On Sale</Link></div>
            <div><Link href={"/new_Arival"} className='link font-semibold'>New Arrivals</Link></div>
            <div><Link href={"#"} className='link font-semibold'>Brands</Link></div>
          </div>
          <div className="relative ml-[20px] w-[35rem] mt-[2rem] pt-[0.3rem] rounded-full">
                <input type="text" placeholder="Search for products..." className="absolute p-[0.75rem] pl-12 w-full border-none text-[15px] rounded-full bg-[#F5F5F5] text-black" />
                <span className="absolute inset-y-0 left-4 flex items-center pt-[0rem] cursor-pointer">
                    <Image src={search} alt='icon_send'/>
                </span>
          </div>
          <div className="flex gap-4 w-24 ml-[20px] h-8 mt-[2.5rem] items-center">
            <Link href={"/cart"}><Image src={cart} alt="cross" className='cursor-pointer'/></Link>
            <Image src={profile} alt="cross" className='cursor-pointer'/>
          </div>
      </div>
    </div>
  )
}

export default NavBar
