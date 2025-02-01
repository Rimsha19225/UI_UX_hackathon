"use client"
import Image from "next/image"
import sub from "../../public/images/subtract.png"
import add from "../../public/images/addition.png"
import { useState } from "react"

const Button = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <div>
      <button className="w-[6rem] h-[2rem] bg-[#d5d2d2] whitespace-nowrap flex justify-center items-center gap-3 rounded-2xl mt-[2rem] hover:bg-[#c2bfbf]"><Image onClick={()=>{if(count>=1){setCount(count - 1)}}} src={sub} alt="subtraction"/> {count} <Image onClick={()=>{if(count<=9){setCount(count + 1)}}} src={add} alt="addition"/></button>
    </div>
  )
}

export default Button
