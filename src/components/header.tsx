import Image from "next/image"
import cross from "../../public/images/Frame.png"

const Header = () => {
  return (
    <div className="w-full h-[38px] bg-[#000000] text-[#ffffff]">
      <div className="w-[95%] flex justify-around items-center 2xl:w-[1500px] mx-auto">
        <div className="ml-[25rem] text-[14px] pt-2">
            Sign up and get 20% off to your first order. Sign Up Now
        </div>
        <div>
            <Image src={cross} alt="cross" width={20} height={20} className="ml-[18rem] pt-2"/>
        </div>
      </div>
    </div>
  )
}

export default Header
