"use client"
import {useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import profile from "../../public/images/Frame (1).png"
import cart from "../../public/images/Frame (2).png"
import search from "../../public/images/Frame (3).png"
import dropdown from "../../public/images/Frame (4).png"


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="w-full bg-[#ffffff] fixed top-10 z-40 pb-[0.75rem]">
      <div className="w-[90%] 2xl:w-[1500px] mx-auto flex justify-around 2xl-[w-1500px]">
          <div className='font-bold text-[32px] w-20 mt-[2.2rem] ml-10 tracking-tighter cursor-pointer'>SHOP.CO</div>
          <div className='flex gap-8 mt-[3rem]'>
            <div className="link flex gap-1 hover:font-semibold">
              <Link href={"#"} onClick={toggleDropdown} className="dropdown-button border-none cursor-pointer border-r-[5px] ml-20">Shop </Link>
              <div className='mt-2'> <Image src={dropdown} alt="drop" width={15} height={15} className=""/> </div>
              {/* <span className="arrow">{isOpen ? ' ▲ ' : ' ▼ '}</span> */}
              {/* </Link> */}
              {/* {isOpen && (
              <div className="absolute bg-[#f9f9f9] border shadow-2xl shadow-[#00000033] w-[120px] z-10 ml-40">
                <Link className='block text-black pt-[10px] pb-[10px] pr-[20px] pl-[20px] hover:bg-[#ddd]' href="#">Option 1</Link>
                <Link className='block text-black pt-[10px] pb-[10px] pr-[20px] pl-[20px] hover:bg-[#ddd]' href="#">Option 2</Link>
                <Link className='block text-black pt-[10px] pb-[10px] pr-[20px] pl-[20px] hover:bg-[#ddd]' href="#">Option 3</Link>
              </div>
              )} */}
            </div >
            <div><Link href={"#"} className='link hover:font-semibold'>On Sale</Link></div>
            <div><Link href={"/new_Arival"} className='link hover:font-semibold'>New Arrivals</Link></div>
            <div><Link href={"#"} className='link hover:font-semibold'>Brands</Link></div>
          </div>
          <div className="relative w-[35rem] mt-[2rem] pt-[0.3rem] rounded-full">
                <input type="text" placeholder="Search for products..." className="absolute p-[0.75rem] pl-12 w-full border-none text-[15px] rounded-full bg-[#F5F5F5] text-black" />
                <span className="absolute inset-y-0 left-4 flex items-center pt-[0.2rem] cursor-pointer">
                    <Image src={search} alt='icon_send' width={25} height={25}/>
                </span>
          </div>
          <div className="flex gap-4 w-24 h-8 mt-[2.5rem]">
            <Image src={profile} alt="cross" width={23} height={10} className='cursor-pointer'/>
            <Image src={cart} alt="cross" width={25} height={10} className='cursor-pointer'/>
          </div>
      </div>
    </div>
  )
}

export default NavBar
