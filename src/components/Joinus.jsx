import "../styles/main.css"
import filter from "../assets/DottedFilter.webp"
const Joinus = () => {
  return (
    <div className='w-full h-[928px] sm:h-[650px] bg-[#FFF528] flex flex-col'>
     <div className='absolute'>
        <img style={{ objectFit: 'cover' }} src={filter} className="h-[928px] sm:h-[650px] w-full"/>
      </div>
      
        <div className=' z-50 justify-center items-center mt-20 flex flex-col'>
        <h1 style={{ fontFamily: 'Norwester' }} className='text-[72px] text-black mb-10 sm:mb-4 xl:text-[72px]  lg:text-5xl sm:text-2xl md:text-2xl  font-medium leading-[170px] xl:leading-[170px] lg:leading-[170px]  sm:leading-10 md:leading-10'>
      Join us now
      </h1>
      <h1 style={{ fontFamily: 'Norwester' }} className='text-[64px] text-center text-black mb-6 sm:mb-4 xl:text-[64px]  lg:text-5xl sm:text-2xl md:text-2xl w-[100%] xl:w-[100%] lg:w-[100%] md:w-[80%] sm:w-[82%] font-medium leading-[90px] xl:leading-[80px] lg:leading-[80px]  sm:leading-10 md:leading-10'>
      Be Part of the Revolution in Sports Broadcasting
      </h1>
      <p className='font-league-spartan text-[32px] sm:text-lg text-black   text-center w-[70%] leading-[40px] xl:leading-[30px] xl:w-[90%]'>Take the first step towards transforming how sports stories are told and experienced.
</p>
 <p className='font-league-spartan text-[32px] sm:text-lg text-black mb-20 sm:mb-10 text-center w-[55%] leading-[40px] xl:leading-[30px] xl:w-[90%]'>
Join vupop today, and contribute to a community that
 values authenticity and rewards Fans for their vupop content</p>
   
  
     
      
      
      </div>
      <div className="flex sm:gap-4 z-50 gap-10">
    <div className="w-[50%] flex flex-col justify-end">
    <h1 style={{ fontFamily: 'Norwester' }} className='text-[64px] text-end text-black mb-6 xl:text-[64px]  lg:text-5xl sm:text-lg md:text-2xl w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] font-medium leading-[90px] xl:leading-[80px] lg:leading-[80px]  sm:leading-10 md:leading-10'>
      For Fans
      </h1> 
     
       <button className="w-full bg-black h-[56px] text-[#FFF528] items-start font-league-spartan text-[24px] sm:text-base text-center">Download the vupop app soon</button>
      </div>

    <div className="w-[50%] flex flex-col justify-start">
    <h1 style={{ fontFamily: 'Norwester' }} className='text-[64px] text-start text-black mb-6 xl:text-[64px]  lg:text-5xl sm:text-lg md:text-2xl w-[100%] xl:w-[100%] lg:w-[100%] md:w-[80%] sm:w-[82%] font-medium leading-[90px] xl:leading-[80px] lg:leading-[80px]  sm:leading-10 md:leading-10'>
      For Broadcasters
      </h1> 
      <button className="w-full  bg-black h-[56px] text-[#FFF528] font-league-spartan text-[24px] sm:text-base text-center items-center">Broadcasters Book a Demo Now</button>
    </div>

   </div>
      </div>
     
   
  )
}
export default Joinus