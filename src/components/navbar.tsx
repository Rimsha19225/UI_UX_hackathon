"use client"
import {useState} from 'react'
import Link from "next/link"


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="w-full bg-[#F0F0F0]">
      <div className="w-[90%] 2xl:w-[1500px] mx-auto flex justify-around">
        <div className='font-bold text-[32px]'>SHOP.CO</div>
        {/* <Image src={logo} alt="cross" width={20} height={20} className="ml-[18rem] pt-2 w-20 h-20"/> */}
        <div className='flex'>
          <div className="relative inline-block">
            <Link href={"#"} onClick={toggleDropdown} className="dropdown-button border-none cursor-pointer border-r-[5px] ml-20">Shop  <span className="arrow">{isOpen ? ' ▲ ' : ' ▼ '}</span></Link>
            {isOpen && (
            <div className="absolute bg-[#f9f9f9] border shadow-2xl shadow-[#00000033] w-[120px] z-10 ml-40">
              <Link className='block text-black pt-[10px] pb-[10px] pr-[20px] pl-[20px] hover:bg-[#ddd]' href="#">Option 1</Link>
              <Link className='block text-black pt-[10px] pb-[10px] pr-[20px] pl-[20px] hover:bg-[#ddd]' href="#">Option 2</Link>
              <Link className='block text-black pt-[10px] pb-[10px] pr-[20px] pl-[20px] hover:bg-[#ddd]' href="#">Option 3</Link>
            </div>
            )}
          </div>
          <div><Link href={"#"}>On Sale</Link></div>
          <div><Link href={"#"}>New Arrivals</Link></div>
          <div><Link href={"#"}>Brands</Link></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
