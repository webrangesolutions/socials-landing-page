import React from 'react'
import bg from "../assets/Resources (1).webp"
import aboutus from "../assets/aboutus.webp"
import ourmission from "../assets/ourvision.webp"
import ourvision from "../assets/ourmission.webp"
const Aboutus = () => {
  return (
    <div className='relative h-[1998px] sm:mb-20 sm:h-fit overflow-y-hidden overflow-x-hidden'>
    <img src={bg}  className='absolute top-0 left-0 z-10 w-[432px] sm:object-cover sm:w-[130px] sm:h-[600px] h-[1728px] my-20 ml-5'/>
    <div className='pt-40 sm:pt-20 sm:pl-10 sm:pr-2 pl-20 pr-10 z-20 relative'>
        <div className='w-[100%] overflow-x-hidden flex sm:flex sm:flex-col sm:items-start items-center'>
            <div className='w-[45%] xl:w-[44%] sm:w-[80%]'>
                <h1 style={{ fontFamily: 'Norwester' }} className='text-[54px] text-[#FFF528] mb-2 xl:text-[45px]  lg:text-5xl sm:text-xl md:text-2xl w-[80%] xl:w-[90%] lg:w-[80%] md:w-[80%] sm:w-[82%]  font-semibold leading-[60px] xl:leading-[50px] lg:leading-[50px]  sm:leading-10 md:leading-10'>ABOUT US</h1>
                <p className='font-league-spartan text-[24px]  xl:text-[18px] sm:text-sm  text-white mb-10 sm:mb-2 w-[95%] leading-[30px] xl:leading-[30px] xl:w-[95%]'>
                At vupop, we are driven by a single goal: to bridge the gap
between sports fans and broadcasters. Founded by a team of passionate
sports enthusiasts and media experts, 
vupop leverages cutting-edge technology 
to amplify the voices of fans and enhance the reach of broadcasters
                </p>
            </div>
            <div className='w-[55%] xl:w-[70%] sm:w-[100%] flex sm:items-end justify-end'>
              <img src={aboutus}  className='sm:h-[100px] sm:w-full sm:object-cover'/>
            </div>
        </div>

        <div className='w-[85%] sm:w-full overflow-x-hidden ml-64 sm:ml-0 xl:ml-56 mt-32 sm:mt-14 flex sm:flex sm:flex-col sm:items-start items-center'>
            <div className='w-[42%] xl:w-[45%] sm:w-[80%]'>
                <h1 style={{ fontFamily: 'Norwester' }} className='text-[54px] text-[#FFF528] mb-2 xl:text-[45px]  lg:text-5xl sm:text-xl md:text-2xl w-[80%] xl:w-[90%] lg:w-[80%] md:w-[80%] sm:w-[82%]  font-semibold leading-[60px] xl:leading-[50px] lg:leading-[50px]  sm:leading-10 md:leading-10'>OUR MISSION</h1>
                <p className='font-league-spartan text-[24px]  xl:text-[18px] sm:text-sm text-white mb-10 sm:mb-2 w-[95%] leading-[30px] xl:leading-[30px] xl:w-[95%]'>
                To revolutionize sports media by enabling fans to share their experiences and
broadcasters to tell deeper, more engaging stories. We provide the tools to make 
every match more interactive and every fan's cheer heard around the world. </p>
            </div>
            <div className='w-[58%] xl:w-[55%] sm:w-full sm:flex sm:items-end'>
              <img src={ourmission}  className='sm:h-[150px] sm:w-full sm:object-cover'/>
            </div>
        </div>

        <div className='w-[100%] sm:w-full overflow-x-hidden xl:w-[70%] ml-[430px] sm:ml-0 xl:ml-[400px] mt-32 sm:mt-14 sm:flex sm:flex-col sm:items-start flex items-center overflow-hidden'>
            <div className='w-[45%] xl:w-[47%] sm:w-[80%]'>
                <h1 style={{ fontFamily: 'Norwester' }} className='text-[54px] text-[#FFF528] mb-2 xl:text-[45px]  lg:text-5xl sm:text-xl md:text-2xl w-[80%] xl:w-[90%] lg:w-[80%] md:w-[80%] sm:w-[82%]  font-semibold leading-[60px] xl:leading-[50px] lg:leading-[50px]  sm:leading-10 md:leading-10'>OUR VISION</h1>
                <p className='font-league-spartan text-[24px]  xl:text-[18px] sm:text-sm  text-white mb-10 sm:mb-2 w-[95%] leading-[30px] xl:leading-[30px] xl:w-[95%]'>
                Imagine a world where every great sports moment can be shared 
and celebrated by a global community. At vupop, we are making that world
a reality, one game at a time, ensuring that fan content not only supports
but leads the narrative in sports broadcasting.
As well as rewarding Fans with money in their pocket.

</p>
            </div>
            <div className='w-[65%] xl:w-[53%] sm:w-full  sm:flex sm:items-end'>
              <img src={ourvision} className='sm:h-[150px] sm:w-full sm:object-cover'/>
            </div>
        </div>

        <div className='w-full flex flex-col mt-64 sm:mt-20 items-center justify-center'>
        <h1 style={{ fontFamily: 'Norwester' }} className='text-[141px] text-center text-[#FFF528] mb-14 sm:mb-3 xl:text-[111px]  lg:text-[110px] sm:text-2xl md:text-2xl   font-semibold leading-[67px] xl:leading-[67px] lg:leading-[47px]  sm:leading-10 md:leading-10'>VUPOP</h1>
        <p className='font-league-spartan text-[24px]  xl:text-[18px] text-center  text-white mb-14 sm:mb-6 w-[45%] sm:w-[80%] leading-[30px] xl:leading-[30px] xl:w-[50%]'>Join our exclusive waitlist today and be among the first to experience the future of fan-driven sports media
</p>   
<div className='flex gap-2 w-[45%] xl:w-[40%] sm:w-[90%]'>
<input className='border border-[#FFF528] w-[80%] xl:w-[75%] sm:w-[70%] font-league-spartan h-[56px] sm:h-[40px] p-2 items-center bg-[#000000] placeholder:text-[#fff] text-[#fff]' placeholder='abc@gmail.com'/>
<a data-icon="Contactus" href="#Contactus" className= 'w-fit text-center items-center flex font-league-spartan py-3 pl-6 pr-6 xl:px-2 sm:py-1 sm:px-2 md:py-2 md:px-2 text-[#000] font-bold text-base md:text-xs sm:text-[8px]  bg-[#FFF528] '>Join Waitlist</a>
 
  </div>  
        </div>
    </div>
</div>

  )
}

export default Aboutus