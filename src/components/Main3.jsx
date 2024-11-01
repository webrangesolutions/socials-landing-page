import React, {useState, useEffect} from "react";
import "../styles/main.css";

import "react-lazy-load-image-component/src/effects/opacity.css"; // Optional CSS for image effects
import Images from './images'
import bg from "../assets/bg2.webp";

import WaitlistForm from './emailForm'
const Mainbg3 = ({isDownloaded, setIsDownloaded, showForm, setShowForm}) => {
  const [marginTop, setMarginTop] = useState('32%');

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 340) { // Assuming 'sm' breakpoint is 640px
        setMarginTop('49%');
      }
      else if (window.innerWidth <= 640) { // Assuming 'sm' breakpoint is 640px
        setMarginTop('42%');
      } else {
        setMarginTop('30%');
      }
    };

    handleResize(); // Call once to set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
     className=" w-full h-50 p-6 bg-gradient-radial-30 bg-opacity-30 flex flex-col pt-10   px-10 sm:px-5 "
     style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFF528', // Add the background color

    // backgroundSize: 'cover', // Ensure the image covers the entire div without repeating
    backgroundSize: '90% auto', // Adjust this value to decrease the width of the image
    backgroundPosition: 'center 90px', // Adjust the second value to set the margin from the top
 
  }}
    >
      <div className="absolute"></div>

      <div className="flex flex-col items-center" style={{ marginTop }}>
        <h1
          style={{ fontFamily: "Norwester" }}
          className="text-[72px] text-black mb-2 xl:text-[62px] text-center  lg:text-5xl sm:text-2xl md:text-2xl w-[80%] xl:w-[90%] lg:w-[80%] md:w-[80%] sm:w-[95%]     font-bold leading-[90px] xl:leading-[80px] lg:leading-[80px]  sm:leading-10 md:leading-10"
        >
          Unleash the Power of Fan Content in Sports Broadcasting
        </h1>

        {/* <p className="font-league-spartan text-center text-[32px] sm:text-xl sm:w-[80%] text-black mb-10 w-[60%] leading-[40px] xl:leading-[30px] xl:w-[70%]">
          Transform your broadcasts with authentic fan perspectives and expand
          your audience engagement
        </p> */}
        {/* <a
          href=""
          className=" w-fit mt-10 sm:mt-4 sm:mx-0 my-5 items-center justify-center text-[#FFF528] text-center px-10 py-4 sm:py-3 sm:px-6 md:py-3 md:px-8 bg-black rounded-xl  font-bold sm:text-base md:text-lg text-xl xl:text-xl lg:text-xl"
        >
          Join Waitlist
        </a> */}

        <div className="flex gap-x-3">
        <button
          onClick={() => setShowForm(true)}
          className=" w-fit mt-10 sm:mt-4 sm:mx-0 my-5 items-center justify-center text-center px-10 py-4 sm:py-3 sm:px-6 md:py-3 md:px-8 bg-black rounded-xl  font-bold text-[#FFF528] sm:text-base md:text-lg text-xl xl:text-xl lg:text-xl"
        >
          Join Waitlist
        </button>
        { isDownloaded == false && (
          <button
          onClick={()=> setIsDownloaded(true)}
          href=""
          className=" w-fit mt-10 sm:mt-4 sm:mx-0 my-5 items-center justify-center text-center px-10 py-4 sm:py-3 bg-none border border-3 border-black sm:px-6 md:py-3 md:px-8 rounded-xl  font-bold text-black sm:text-base md:text-lg text-xl xl:text-xl lg:text-xl"
        >
          Download App
        </button>
        )}
       
        </div>
        <div className="flex flex-row pt-8 gap-6 sm:gap-3 items-center">
         <Images />

          <div className="h-[72px] sm:h-[50px] w-[2px] bg-[#000]"> </div>
          <div>
            <p className="text-[#000]   font-league-spartan sm:text-base text-xl font-semibold">
              3000+{" "}
            </p>
            <p className="text-[#000]  font-league-spartan text-sm sm:text-xs font-normal">
              on Waitlist
            </p>
          </div>
        </div>
       
        <div className="w-full mt-10 flex flex-col justify-center items-center">
          {/* <h1 className="text-[#000]  font-league-spartan text-2xl sm:text-base font-normal">
            Scroll down
          </h1> */}
          <div className="bg-[#000] flex w-11 h-11 sm:w-7 sm:h-7 justify-center items-center rounded-full">
            <a href="#features">
              <svg
                className="w-[11px] h-[19px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="#FFF528" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* {showForm == true && (
        <>
          <WaitlistForm />
        </>
      )} */}
    </div>
  );
};

export default Mainbg3;
