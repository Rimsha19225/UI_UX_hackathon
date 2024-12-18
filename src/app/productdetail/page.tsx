import Image from "next/image"
import arrowToRight from "../../../public/images/arrowToRight.png"
import gg1 from "../../../public/images/gg1.png"
import gg2 from "../../../public/images/gg2.png"
import gg3 from "../../../public/images/gg3.png"
import gg4 from "../../../public/images/gg4.png"
import ye from "../../../public/images/ye.png"
import color1 from "../../../public/images/color1.png"
import color2 from "../../../public/images/color2.png"
import color3 from "../../../public/images/color3.png"
import minus from "../../../public/images/minus.png"
import plus from "../../../public/images/plus.png"
import filter from "../../../public/images/filter.png"
import pulldown from "../../../public/images/pulldown.png"
import sar1 from "../../../public/images/sar1.png"
import grup from "../../../public/images/grup.png"
import dots from "../../../public/images/dots.png"
import card1 from '../../../public/images/shirt11.png'
import card2 from '../../../public/images/shirt22.png'
import card3 from '../../../public/images/shirt33.png'
import card4 from '../../../public/images/shirt44.png'
import m1 from '../../../public/images/fourrr.png'
import m2 from '../../../public/images/m2.png'
import m3 from '../../../public/images/m3.png'
import m4 from '../../../public/images/fiveee.png'
import Footer from "@/components/footer"
import Link from "next/link"

const Cart = () => {
  return (
    <div>
    <div className="mt-[160px] w-[85%] m-auto">
        <div className="satoshi flex mb-[40px] gap-5 items-center">
            <div className="flex items-center gap-2">
                <Link href={"/"}><p className="font-[400] cursor-pointer text-[16px] hover:text-[#000000] leading-[21.6px] text-[#00000099]">Home</p></Link>
                <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-[400] cursor-pointer hover:text-[#000000] text-[16px] leading-[21.6px] text-[#00000099]">Shop</p>
                <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-[400] cursor-pointer hover:text-[#000000] text-[16px] leading-[21.6px] text-[#00000099]">Men</p>
                <Image className="mt-[3px]" src={arrowToRight} alt="arrowToRight"></Image>
            </div>
            <div>
                <p className="font-[400] cursor-pointer ml-[-2px] text-[16px] leading-[21.6px] text-[#000000]">T-shirts</p>
            </div>
        </div>
        <div className="flex gap-5">
            <div>
                <Image className="mb-[15px]" src={gg1} alt="gg1"></Image>
                <Image className="mb-[15px]" src={gg2} alt="gg2"></Image>
                <Image src={gg3} alt="gg3"></Image>
            </div>
            <div>
                <Image src={gg4} alt="gg4"></Image>
            </div>
            <div>
                <h2 className="integral font-[700] text-[40px] mb-[5px] text-[#000000] leading-[48px]">ONE LIFE GRAPHIC <strong>&ndash;</strong>TSHIRT</h2>
                <div className="flex gap-2 mb-[5px] items-center">
                    <Image src={ye} alt="ye"></Image>
                    <p className="satoshi text-[#000000] text-[16px] leading-[21.6px] font-[400]">4.5<span className="text-[#00000099] font-[400] text-[16px] leading-[21.6px]">/5</span></p>
                </div>
                <div className='satoshi flex gap-3 mb-[10px] items-center'>
                    <h2 className="text-[32px] leading-[43.2px] font-[700]">$260</h2>
                    <h2 className="text-[32px] leading-[43.2px] line-through font-[700] text-[#0000004D]">$300</h2>
                    <h3 className="bg-[#FF33331A] w-[72px] h-[34px] flex items-center justify-center rounded-[62px] font-[500] text-[16px] leading-[21.6px] text-[#FF3333]">-40%</h3>
                </div>
                <p className="satoshi text-[16px] font-[400] text-[#00000099] leading-[22px] w-[590px] mb-[10px]">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                <hr className="border-[#0000001A] mb-[10px]" />
                <p className="satoshi text-[#00000099] mb-[10px] text-[16px] font-[400] leading-[21.6px]">Select Colors</p>
                <div className="flex mb-[15px] gap-4">
                    <Image className="cursor-pointer" src={color1} alt="color1"></Image>
                    <Image className="cursor-pointer" src={color2} alt="color2"></Image>
                    <Image className="cursor-pointer" src={color3} alt="color3"></Image>
                </div>
                <hr className="border-[#0000001A] mb-[10px]" />
                <p className="satoshi text-[#00000099] mb-[10px] text-[16px] font-[400] leading-[21.6px]">Choose Size</p>
                <div className="satoshi flex mb-[15px] ml-[5px] items-center gap-5">
                    <button className="bg-[#F0F0F0] w-[86px] h-[46px] rounded-[62px] text-[16px] text-[#00000099] leading-[21.6px] font-[400] flex items-center justify-center cursor-pointer hover:bg-[#cecbcb] hover:text-[#242323] focus:bg-[#000000] focus:text-[white]">Small</button>
                    <button className="bg-[#F0F0F0] w-[104px] h-[46px] rounded-[62px] text-[16px] text-[#00000099] leading-[21.6px] font-[400] flex items-center justify-center cursor-pointer hover:bg-[#cecbcb] hover:text-[#242323] focus:bg-[#000000] focus:text-[white]">Medium</button>
                    <button className="bg-[#F0F0F0] w-[89px] h-[46px] rounded-[62px] text-[16px] text-[#00000099] leading-[21.6px] font-[400] flex items-center justify-center cursor-pointer hover:bg-[#cecbcb] hover:text-[#242323] focus:bg-[#000000] focus:text-[white]">Large</button>
                    <button className="bg-[#F0F0F0] w-[104px] h-[46px] rounded-[62px] text-[16px] text-[#00000099] leading-[21.6px] font-[400] flex items-center justify-center cursor-pointer hover:bg-[#cecbcb] hover:text-[#242323] focus:bg-[#000000] focus:text-[white]">X-Large</button>
                </div>
                <hr className="border-[#0000001A] mb-[20px]" />
                <div className="flex gap-5">
                    <div className="flex justify-around w-[170px] h-[52px] rounded-[62px] bg-[#F0F0F0] items-center">
                        <Image className="w-[18.75px] h-[18.75px] cursor-pointer" src={minus} alt="minus"></Image>
                        <p className="text-[16px] text-[#000000] leading-[21.6px] font-[500]">1</p>
                        <Image className="w-[18.75px] h-[18.75px] cursor-pointer" src={plus} alt="plus"></Image>
                    </div>
                    <button className="card satoshi bg-[#000000] rounded-[62px] w-[400px] h-[52px] text-[#FFFFFF] text-[16px] leading-[21.6px] font-[500] active:bg-[#575656] active:text-[black]">Add to Cart</button>
                </div>
            </div>
        </div>
        <div className="mt-[60px]">
            <div className="satoshi flex pb-[20px] justify-around border-b-[1px] mb-[30px]">
                <h3 className="text-[20px] cursor-pointer text-[#00000099] leading-[22px] font-[400] hover:text-[#000000]">Product Details</h3>
                <h3 className="text-[20px] cursor-pointer border-b-[#000000] pl-[100px] pr-[100px] border-b-[2px] pb-[20px] mb-[-21px] leading-[22px] font-[500] text-[#000000]">Rating & Reviews</h3>
                <h3 className="text-[20px] cursor-pointer leading-[22px] font-[400] text-[#00000099] hover:text-[#000000]">FAQs</h3>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <h3 className="text-[#000000] text-[24px] font-[700] leading-[32.4px]">All Reviews</h3>
                    <p className="text-[#00000099] mt-[5px] text-[16px] font-[400] leading-[22px]">(451)</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-[#F0F0F0] rounded-[62px] w-[48px] h-[48px] flex items-center justify-center cursor-pointer hover:bg-[#cecbcb] hover:text-[#242323]">
                        <Image src={filter} alt="filter"></Image>
                    </div>
                    <div className="flex justify-around items-center w-[120px] h-[48px] rounded-[62px] bg-[#F0F0F0] cursor-pointer hover:bg-[#cecbcb] hover:text-[#242323]">
                        <p>Latest</p>
                        <Image src={pulldown} alt="pulldown"></Image>
                    </div>
                    <div className="card bg-[#000000] w-[166px] h-[48px] rounded-[62px] flex justify-center items-center cursor-pointer">
                        <p className="text-[#FFFFFF] text-[16px] font-[500] leading-[21.6px]">Write a Review</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="satoshi mt-[20px]  grid grid-cols-2 gap-5">
            <div className="card w-[565px] p-[30px] h-[241.58px] rounded-[20px] border border-[#0000001A]">
                <div className="flex mb-[15px] justify-between items-center">
                    <Image src={sar1} alt="sar1"></Image>
                    <Image className="cursor-pointer" src={dots} alt="dots"></Image>
                </div>
                <div className="flex mb-[15px] gap-2">
                    <p className="text-[20px] leading-[22px] text-[#000000] font-[700]">Samantha D.</p>
                    <Image src={grup} alt="grup"></Image>
                </div>
                <p className="text-[16px] leading-[22px] font-[400] text-[#00000099] mb-[30px] w-[510px]">&quot;I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.&quot;</p>
                <p className="text-[16px] leading-[22px] font-[500] text-[#00000099]">Posted on August 14, 2023</p>
            </div>
            <div className="card w-[565px] p-[30px] h-[241.58px] rounded-[20px] border border-[#0000001A]">
                <div className="flex mb-[15px] justify-between items-center">
                    <Image src={sar1} alt="sar1"></Image>
                    <Image className="cursor-pointer" src={dots} alt="dots"></Image>
                </div>
                <div className="flex mb-[15px] gap-2">
                    <p className="text-[20px] leading-[22px] text-[#000000] font-[700]">Alex M.</p>
                    <Image src={grup} alt="grup"></Image>
                </div>
                <p className="text-[16px] leading-[22px] font-[400] text-[#00000099] mb-[30px] w-[510px]">&quot;The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.&quot;</p>
                <p className="text-[16px] leading-[22px] font-[500] text-[#00000099]">Posted on August 15, 2023</p>
            </div>
            <div className="card w-[565px] p-[30px] h-[241.58px] rounded-[20px] border border-[#0000001A]">
                <div className="flex mb-[15px] justify-between items-center">
                    <Image src={sar1} alt="sar1"></Image>
                    <Image className="cursor-pointer" src={dots} alt="dots"></Image>
                </div>
                <div className="flex mb-[15px] gap-2">
                    <p className="text-[20px] leading-[22px] text-[#000000] font-[700]">Ethan R.</p>
                    <Image src={grup} alt="grup"></Image>
                </div>
                <p className="text-[16px] leading-[22px] font-[400] text-[#00000099] mb-[30px] w-[510px]">&quot;This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&apos;s touch in every aspect of this shirt.&quot;</p>
                <p className="text-[16px] leading-[22px] font-[500] text-[#00000099]">Posted on August 16, 2023</p>
            </div>
            <div className="card w-[565px] p-[30px] h-[241.58px] rounded-[20px] border border-[#0000001A]">
                <div className="flex mb-[15px] justify-between items-center">
                    <Image src={sar1} alt="sar1"></Image>
                    <Image className="cursor-pointer" src={dots} alt="dots"></Image>
                </div>
                <div className="flex mb-[15px] gap-2">
                    <p className="text-[20px] leading-[22px] text-[#000000] font-[700]">Olivia P.</p>
                    <Image src={grup} alt="grup"></Image>
                </div>
                <p className="text-[16px] leading-[22px] font-[400] text-[#00000099] mb-[30px] w-[530px]">&quot;As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out.&quot;</p>
                <p className="text-[16px] leading-[22px] font-[500] text-[#00000099]">Posted on August 17, 2023</p>
            </div>
            <div className="card w-[565px] p-[30px] h-[241.58px] rounded-[20px] border border-[#0000001A]">
                <div className="flex mb-[15px] justify-between items-center">
                    <Image src={sar1} alt="sar1"></Image>
                    <Image className="cursor-pointer" src={dots} alt="dots"></Image>
                </div>
                <div className="flex mb-[15px] gap-2">
                    <p className="text-[20px] leading-[22px] text-[#000000] font-[700]">Liam K.</p>
                    <Image src={grup} alt="grup"></Image>
                </div>
                <p className="text-[16px] leading-[22px] font-[400] text-[#00000099] mb-[30px] w-[510px]">&quot;This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer&apos;s skill. It&apos;s like wearing a piece of art that reflects my passion for both design and fashion.&quot;</p>
                <p className="text-[16px] leading-[22px] font-[500] text-[#00000099]">Posted on August 18, 2023</p>
            </div>
            <div className="card w-[565px] p-[30px] h-[241.58px] rounded-[20px] border border-[#0000001A]">
                <div className="flex mb-[15px] justify-between items-center">
                    <Image src={sar1} alt="sar1"></Image>
                    <Image className="cursor-pointer" src={dots} alt="dots"></Image>
                </div>
                <div className="flex mb-[15px] gap-2">
                    <p className="text-[20px] leading-[22px] text-[#000000] font-[700]">Ava H.</p>
                    <Image src={grup} alt="grup"></Image>
                </div>
                <p className="text-[16px] leading-[22px] font-[400] text-[#00000099] mb-[30px] w-[510px]">&quot;I&apos;m not just wearing a t-shirt; I&apos;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.&quot;</p>
                <p className="text-[16px] leading-[22px] font-[500] text-[#00000099]">Posted on August 19, 2023</p>
            </div>
        </div>
        <div className="satoshi flex justify-center mt-[40px]">
            <button className='card w-[230px] h-[52px] mb-[60px] text-[16px] text-[#000000] font-[500] border-[2px] hover:bg-[#ececec] rounded-full p-2'>Load More Reviews</button>
        </div>
        <div>
            <h1 className="integral text-[#000000] mb-[50px] text-[48px] leading-[45px] font-bold text-center">YOU MIGHT ALSO LIKE</h1>
        </div>
        <div className='flex gap-5 mb-[50px] justify-center'>
        <div className="transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 cursor-pointer">
            <Image className="rounded-[20px]" src={card1} alt="cross" />
            <h3 className="satoshi text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Polo with Contrast Trims</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m1} alt="m1"></Image>
              <p className="satoshi text-[#000000] text-[14px] leading-[18.9px] font-[400]">4.0<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='satoshi flex ml-[5px] gap-2 items-center'>
                <h4 className="text-[24px] ml-[5px] leading-[32.4px] font-[700]">$212</h4>
                <h2 className="text-[24px] leading-[32.4px] line-through font-[700] text-[#BFBFBF]">$242</h2>
                <h3 className="bg-[#FFEBEB] w-[58px] h-[28px] flex items-center justify-center rounded-[62px] text-[12px] leading-[16.2px] text-[#FF3333]">-20%</h3>
            </div>
        </div>
        <div className="satoshi transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 cursor-pointer">
            <Image className="rounded-[20px]" src={card2} alt="cross" />
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Gradient Graphic T-shirt</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m2} alt="m2"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">3.5<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='flex ml-[5px] gap-2 items-center'>
                <h2 className="text-[24px] leading-[32.4px] font-[700]">$145</h2>
            </div>
        </div>
        <div className="satoshi transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 cursor-pointer">
            <Image className="rounded-[20px]" src={card3} alt="cross" />
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Polo with Tipping Details</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m3} alt="m3"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">4.5<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <h4 className="text-[24px] ml-[5px] leading-[32.4px] font-[700]">$180</h4>
        </div>
        <div className="satoshi transition-transform duration-[0.3s] ease-in-out hover:transform hover:scale-105 cursor-pointer">
            <Image className="rounded-[20px]" src={card4} alt="cross"/>
            <h3 className="text-[20px] leading-[27px] mt-[10px] ml-[5px] mb-[5px] text-[#000000] font-[700]">Black Striped T-shirt</h3>
            <div className="flex gap-3 ml-[5px] mb-[5px]">
              <Image src={m4} alt="m4"></Image>
              <p className="text-[#000000] text-[14px] leading-[18.9px] font-[400]">5.0<span className="text-[14px] text-[#BFBFBF] font-[400]">/5</span></p>
            </div>
            <div className='flex gap-2 ml-[5px] items-center mb-20'>
                <h2 className="text-[24px] leading-[32.4px] font-[700]">$120</h2>
                <h2 className="text-[24px] leading-[32.4px] line-through font-[700] text-[#BFBFBF]">$150</h2>
                <h3 className="bg-[#FFEBEB] w-[58px] h-[28px] flex items-center justify-center rounded-[62px] text-[12px] leading-[16.2px] text-[#FF3333]">-30%</h3>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Cart