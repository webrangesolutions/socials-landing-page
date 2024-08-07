import React,{useState} from 'react'

import { useLocation } from 'react-router-dom';
import Logo from '../assets/logo.webp'
import "../styles/norwester.otf"
const NavbarMain = () => {
  const { pathname } = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    setSelectedItem(id);
  };
   
  return (
    <div className=' bg-[#00000099] fixed w-full h-20 sm:h-10 z-50  justify-center items-center'>

<nav class="text-white w-full z-50 h-20 sm:h-10 items-center">

  <div class="w-full flex flex-row items-center justify-between  px-10 sm:px-4 md:px-4">
  
  <a href="/" className="flex items-center ">
  <img src={Logo} alt="logo" />
 {/* <h1 className='Norwester text-[#FFF528] text-[35px] sm:text-lg' style={{ fontFamily: 'Norwester' }} >socials</h1> */}
  </a>

  <div class="items-center justify-between   flex flex-row md:w-auto " id="mobile-menu-2">
  
  <ul className="flex font-medium p-4 md:p-0 sm:p-0 ml-4 gap-6 md:gap-1 sm:gap-1 font-league-spartan text-base items-center  flex-row md:space-x-1 sm:space-x-1 md:mt-0 md:border-0">
      <li >
      <a href="#about-us" class="block py-3 pl-4 pr-4 sm:py-1 sm:px-0.5 md:py-2 md:px-2 text-white text-base sm:text-[8px] hover:bg-white hover:text-[#1B1C1C] active:text-[#1B1C1C] active:bg-white rounded-[16px] flex items-center">
    <span class="whitespace-nowrap">About us</span>
</a>
  </li>
      <li >
        <a href="#features" className= 'block py-3 pl-4 pr-4 sm:py-1 sm:px-0.5 md:py-2 md:px-2 text-white text-base sm:text-[8px] hover:bg-white hover:text-[#1B1C1C] active:text-[#1B1C1C] active:bg-white rounded-[16px] '>Features</a>
      </li>
      <li >
        <a href="#contact" className= 'block py-3 pl-4 pr-4 sm:py-1 sm:px-0.5 md:py-2 md:px-2 text-white text-base sm:text-[8px] hover:bg-white hover:text-[#1B1C1C] active:text-[#1B1C1C] active:bg-white rounded-[16px] '>
        <span class="whitespace-nowrap">Contact us </span>
        </a>
      </li>
      <a data-icon="Contactus" href="#Contactus" className= 'ml-16 sm:h-fit sm:ml-0 block py-3 pl-6 pr-6 sm:py-1 sm:px-0.5 md:py-2 md:px-2 text-[#000] font-bold text-base md:text-xs sm:text-[8px]  bg-[#FFF528] rounded-lg sm:rounded-md '>
      <span class="whitespace-nowrap">Sign Up</span>
      </a>
 
      </ul>
 
  </div>
  
     
 
  </div>

</nav>
 
    </div>
  )
}

export default NavbarMain