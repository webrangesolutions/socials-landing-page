import React from 'react'
import avt1 from "../assets/avt1.jpg";
import avt2 from "../assets/avt2.webp";
import avt3 from "../assets/avt3.webp";
import avt4 from "../assets/avt4.jpg";

const images = () => {
  return (
    <div className="flex flex-row -space-x-14 sm:-space-x-9">
            <div className="w-[92px] h-[92px] sm:w-[50px] sm:h-[50px] rounded-full ">
              <img
                src={avt1}
                style={{ objectFit: "cover" }}
                className="w-[80px] h-[80px] sm:w-[50px] sm:h-[50px] rounded-full"
              />
            </div>
            <div className="w-[92px] h-[92px] sm:w-[50px] sm:h-[50px] rounded-full ">
              <img
                src={avt2}
                style={{ objectFit: "cover" }}
                className="w-[80px] h-[80px] sm:w-[50px] sm:h-[50px] rounded-full"
              />
            </div>
            <div className="w-[92px] h-[92px] sm:w-[50px] sm:h-[50px] rounded-full ">
              <img
                src={avt3}
                style={{ objectFit: "cover" }}
                className="w-[92px] h-[92px] sm:w-[50px] sm:h-[50px] rounded-full"
              />
            </div>
            <div className="w-[92px] h-[92px] sm:w-[50px] sm:h-[50px] rounded-full">
              <img
                src={avt4}
                style={{ objectFit: "cover" }}
                className="w-[74px] h-[74px] sm:w-[50px] sm:h-[50px] rounded-full"
              />
            </div>
          </div>
  )
}

export default images
