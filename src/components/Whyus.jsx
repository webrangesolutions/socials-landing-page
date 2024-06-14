import React from 'react'
import webapp from "../assets/Webapp 1.webp"
import discovery from "../assets/discovery.webp"
import timeline from "../assets/Timeline 1.webp"
import video from "../assets/video.webp"
import line1 from "../assets/line1.webp"
import line2 from "../assets/line2.webp"
import fans from "../assets/fans.webp"
import share from "../assets/share.webp"
import earning from "../assets/earning.webp"
import saving from "../assets/saving.webp"
const Whyus = () => {
  return (
    <div className='relative  overflow-y-hidden overflow-x-hidden'>
   <h1 style={{ fontFamily: 'Norwester' }} className='text-[72px] items-center text-center text-[#FFF528]  xl:text-[72px]  lg:text-[72px] sm:text-2xl md:text-2xl   font-semibold leading-[67px] xl:leading-[67px] lg:leading-[47px]  sm:leading-10 md:leading-10'>Why US?</h1>
       
    <div className='pt-20 sm:pt-10  pr-0 z-20 relative'>
        <div className='w-[100%] overflow-x-hidden flex items-center'>
            <div className='w-[45%] sm:w-[55%] pl-40 sm:pl-8 xl:w-[44%]'>
              <img src={discovery} className='sm:w-[40px] sm:h-[40%]'/>
                <h1 style={{ fontFamily: 'Norwester' }} className='text-[24px] text-[#FFF528] mb-2 xl:text-[24px]  lg:text-2xl sm:text-base md:text-2xl w-[80%] xl:w-[90%] lg:w-[80%] md:w-[80%] sm:w-[92%]  font-semibold leading-[60px] xl:leading-[50px] lg:leading-[50px]  sm:leading-10 md:leading-10'>Streamline Discovery</h1>
               <p className='font-league-spartan text-[20px]  xl:text-[20px] sm:text-sm text-white mb-10 sm:mb-2 w-[50%] sm:w-[90%] leading-[30px] xl:leading-[30px] xl:w-[70%]'>Quickly find and incorporate relevant fan-generated content that resonates with your viewers. </p>
          <img src={line1} className='absolute left-0 w-[55%]'/>
            </div>
            <div className='w-[55%] sm:w-[45%] xl:w-[55%] sm:h-fit h-[774px] flex justify-end'>
              <img src={webapp}  className='sm:h-[300px] sm:w-full sm:object-cover'/>
            </div>
        </div>
        <h1 style={{ fontFamily: 'Norwester' }} className='text-[96px] items-center text-center text-[#a6a6a6] stroke-black my-10  xl:text-[96px]  lg:text-[96px] sm:text-2xl md:text-2xl   font-medium leading-[130px] xl:leading-[130px] lg:leading-[130px]  sm:leading-10 md:leading-10'>For Broadcasters</h1>
  
        <div className='w-[100%] overflow-x-hidden flex items-center'>
       
        <div className='w-[55%] sm:w-[45%] xl:w-[55%] sm:h-fit flex justify-start'>
              <img src={timeline} className='sm:h-[250px] sm:w-full sm:object-cover'/>
            </div>
            <div className='w-[45%] sm:w-[55%] flex flex-col justify-end items-end   xl:w-[45%]'>
             <div className='w-full pl-40 sm:pl-8 sm:pr-4 pr-20 justify-center items-start flex flex-col'>
              <img src={video} className='sm:w-[40px] sm:h-[40%]'/>
                <h1 style={{ fontFamily: 'Norwester' }} className='text-[24px]  text-[#FFF528] mb-2 xl:text-[24px]  lg:text-2xl  sm:text-base md:text-2xl   font-semibold leading-[60px] xl:leading-[50px] lg:leading-[50px]  sm:leading-10 md:leading-10'>Edit & Engage Authentically</h1>
               <p className='font-league-spartan text-[20px]  xl:text-[20px] sm:text-sm  text-white mb-10 sm:mb-2 sm:pb-2 pb-10 w-[80%] sm:w-[100%]  leading-[30px] xl:leading-[30px] xl:w-[95%]'>Instantly edit videos in a real time manner, use UGC in a as live way for highlights and recaps of key moments in a game to enhance your broadcast storytelling.</p>
         
          </div>
          <img src={line2} className='absolute  w-[55%] right-0'/>
            </div>
          
        </div>
       
        <h1 style={{ fontFamily: 'Norwester' }} className='text-[96px] items-center text-center text-[#a6a6a6] stroke-black my-10   xl:text-[96px]  lg:text-[96px] sm:text-2xl md:text-2xl   font-medium leading-[130px] xl:leading-[130px] lg:leading-[130px]  sm:leading-10 md:leading-10'>For Fans</h1>
        <div className='w-[100%] pt-10 sm:pt-0 overflow-x-hidden flex items-center'>
            <div className='w-[45%] sm:w-[55%] pl-40 sm:pl-8 xl:w-[44%]'>
              <img src={share}  className='sm:w-[40px] sm:h-[40%]'/>
                <h1 style={{ fontFamily: 'Norwester' }} className='text-[24px] text-[#FFF528] mb-2 xl:text-[24px]  lg:text-2xl sm:text-base md:text-2xl    font-semibold leading-[60px] xl:leading-[50px] lg:leading-[50px]  sm:leading-10 md:leading-10'>Capture & Share</h1>
               <p className='font-league-spartan text-[20px]  xl:text-[20px] sm:text-sm text-white mb-10 sm:mb-2 w-[54%] sm:w-[90%] leading-[30px] xl:leading-[30px] xl:w-[70%]'>Record your live sports experiences and Post like you would in any vupop media platform </p>
          <img src={line1}  className='absolute   w-[55%] left-0'/>
            </div>
            <div className='w-[55%] xl:w-[55%] sm:w-[45%] h-[932px] sm:h-fit flex justify-end'>
              <img src={fans} className='sm:h-[200px] sm:w-full sm:object-cover'/>
            </div>
        </div>

        <div className='w-[100%] overflow-x-hidden flex items-center'>
       
       <div className='w-[704px] sm:w-[45%] xl:w-[704px] sm:h-fit h-[1038px] pl-10 sm:pl-2 flex justify-start'>
             <img src={saving} className='sm:h-[450px]'/>
           </div>
           <div className='w-[55%] sm:w-[55%] flex flex-col justify-end items-end   xl:w-[45%]'>
            <div className='w-full pl-80 xl:pl-40 sm:pl-8 justify-center items-start flex flex-col'>
             <img src={earning} className='sm:w-[40px] sm:h-[40%]'/>
               <h1 style={{ fontFamily: 'Norwester' }} className='text-[24px]  text-[#FFF528] mb-2 xl:text-[24px]  lg:text-2xl  sm:text-base md:text-2xl   font-semibold leading-[60px] xl:leading-[50px] lg:leading-[50px]  sm:leading-10 md:leading-10'>Monetize Your Passion</h1>
              <p className='font-league-spartan text-[20px]  xl:text-[20px] sm:text-sm  text-white mb-10 sm:mb-2 pb-10 sm:pb-2 w-[47%] sm:w-[95%] leading-[30px] xl:leading-[30px] xl:w-[70%]'>Get paid if your content gets featured in broadcasts globally.</p>
        
         </div>
         <img src={line2} className='absolute  w-[55%] right-0'/>
           </div>
         
       </div>
       

        
    </div>
</div>

  )
}

export default Whyus