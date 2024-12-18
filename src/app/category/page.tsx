import Link from "next/link"
import Image from "next/image"
import arrowToRight from "../../../public/images/arrowToRight.png"
import trade from "../../../public/images/trade.png"

const Categories = () => {
  return (
    <div>
        <div className="mt-[180px] w-[85%] m-auto mb-[10rem]">
            <div className="flex mb-[40px] gap-5 items-center">
                <div className="flex items-center gap-2">
                    <Link href={"/"}><p className="font-[400] cursor-pointer text-[16px] hover:text-[#000000] leading-[21.6px] text-[#00000099]">Home</p></Link>
                    <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
                </div>
                <div className="flex items-center gap-2">
                    <Link href={"/cart"}><p className="font-[400] cursor-pointer hover:text-[#000000] text-[16px] leading-[21.6px] text-[#00000099]">Causal</p></Link>
                    <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-[25%] border rounded-2xl p-3">
                    <div className="flex mb-[0.5rem]">
                        <div className="text-[23px] font-bold">Filters</div>
                        <Image className="ml-[13rem]" src={trade} alt="trade"></Image>
                    </div>
                    <hr />
                    <div className="flex text-[13px] mt-6">
                        <div className="text-[0.9rem]">T-shirts</div>
                        <Image className="ml-[15rem]" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex text-[13px] mt-4">
                        <div>Shorts</div>
                        <Image className="ml-[15.3rem]" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex text-[13px]">
                        <div>Shirts</div>
                        <Image className="ml-[15.5rem]" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex text-[13px]">
                        <div>Hoodie</div>
                        <Image className="ml-[14.9rem]" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                    <div className="flex text-[13px]">
                        <div>Jeans</div>
                        <Image className="ml-[15.5rem]" src={arrowToRight} alt="arrowToRight"></Image>
                    </div>
                </div>
                <div className="w-[75%] border rounded-2xl"></div>
            </div>
        </div>
    </div>
  )
}

export default Categories
