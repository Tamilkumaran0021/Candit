import Logo from "../../public/Candit.png"
import { FaApple } from 'react-icons/fa6';

import Image from "next/image";
import { FaAndroid } from "react-icons/fa6";

export const NavBar = ()=>{
    
    return(
    <div className="flex flex-row justify-between w-full px-3">
        <div>
        <Image src={Logo} alt="logo" className="w-[80px]"/>
        </div>

        <div className="flex flex-row "> 
        <div className='w-[60px] h-[40px] flex items-center justify-center text-white bg-black rounded-l-full mr-1'>
                <FaApple size={20} />
              </div>
              <div className='w-[60px] h-[40px] flex items-center justify-center text-white  bg-black rounded-r-full'>
                <FaAndroid size={20} className="text-white"/>
              </div>
        </div>
    </div>
)
}