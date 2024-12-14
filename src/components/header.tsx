import Image from "next/image"
import cross from "../../public/images/Frame.png"


const Header = () => {
  return (
    <div className="w-full h-[38px] bg-[#000000] text-[#ffffff] fixed top-0 z-50">
      <div className="w-[90%] flex justify-around items-center 2xl:w-[1500px] mx-auto">
        <div className="ml-[25rem] text-[14px] pt-2">
            Sign up and get 20% off to your first order. <span className="cursor-pointer underline hover:no-underline">Sign Up Now</span>
        </div>
        <div>
            <Image src={cross} alt="cross" width={20} height={20} className="ml-[18rem] cursor-pointer pt-2"/>
        </div>
      </div>
    </div>
  )
}

export default Header
