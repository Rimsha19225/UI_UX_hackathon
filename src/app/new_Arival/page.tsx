import Image from "next/image"
import card1 from '../../../public/images/Frame 32.png'
import card2 from '../../../public/images/Frame 33.png'
import card3 from '../../../public/images/Frame 34.png'
import card4 from '../../../public/images/Frame 38.png'


const New_Arival = () => {
  return (
    <div className=''>
      <h1 className='text-center mt-12 mb-8 text-[45px] font-bold tracking-[-0.1em]'>NEW ARRIVALS</h1>
      <div className='flex justify-around'>
        <div>
            <Image src={card1} alt="cross" width={50} height={50}/>
            <h3>T-shirt With Tape Details</h3>
            <h4>$120</h4>
        </div>
        <div>
            <Image src={card2} alt="cross" width={50} height={50}/>
            <h3>Skiny Fit Jeans</h3>
            <div className='flex'>
                <h2>$240</h2>
                <h2>$260</h2>
                <h3>-20%</h3>
            </div>
        </div>
        <div>
            <Image src={card3} alt="cross" width={50} height={50}/>
            <h3>Checkered Shirt</h3>
            <h4>$180</h4>
        </div>
        <div>
            <Image src={card4} alt="cross" width={50} height={50}/>
            <h3>Sleeve Striped T-shirt</h3>
            <div className='flex'>
                <h2>$130</h2>
                <h2>$160</h2>
                <h3>-30%</h3>
            </div>
        </div>
      </div>
      <button className='w-40 bg-[#ececec] rounded-full p-2'>View All</button>
    </div>
  )
}

export default New_Arival
