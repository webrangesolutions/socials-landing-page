import React, { useState } from 'react'
import google from "../assets/Store download button.webp"
import app from "../assets/Store download button (1).webp"
import facebook from "../assets/facebook.webp"
import insta from "../assets/Instagram.webp"
import twitter from "../assets/X.webp"
import linkedin from "../assets/LinkedIn.webp"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import captcha from "../assets/Logo (1).webp"
const Contact = () => {
  const [open,setopen] = useState(false)
 
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      city:'',
      companyName: '',
      companyLicense:'',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      companyName: Yup.string().required('Required'),
      companyLicense: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const data={
          name: values.name,
          email: values.email,
          phone: values.phone,
          city: values.city,
          companyName: values.companyName,
          companyLicense: values.companyLicense,
        }
       
       
        resetForm();
        setopen(true)
      } catch (error) {
        console.error('Error sending data to Firestore:', error);
      }
    },
  });
  const footerStyle = {
   
    color: '#FFF528',
    padding: '10px',
   
    bottom: '0',
    width: '100%',
  };
  
  return (
    <div>
  <div className="flex sm:flex sm:flex-col  z-50 sm:h-fit h-[543px]" id="Contactus">
    <div className="w-[50%] sm:w-full sm:h-[450px] h-[543px] pl-20 sm:pl-8 py-10 flex flex-col justify-between">
   <div>
    <h1 style={{ fontFamily: 'Norwester' }} className='text-[48px]  text-[#FFF528] xl:text-[48px]  lg:text-5xl sm:text-2xl md:text-2xl w-[100%] xl:w-[100%] lg:w-[100%] md:w-[80%] sm:w-[82%] font-medium leading-[90px] xl:leading-[80px] lg:leading-[80px]  sm:leading-[80px] md:leading-10'>
      Download the app now
      </h1> 
     <div className='flex gap-4'>
      <img src={google} className='w-[168px] h-[56px] sm:w-[120px] sm:h-[40px]'/>
      <img src={app} className='w-[168px] h-[56px] sm:w-[120px] sm:h-[40px]'/>
     </div>
     </div>
     <div className='flex flex-col  gap-2'>
     <p style={{ fontFamily: 'Norwester' }} className=' text-[24px] text-[#FFF528]   leading-[40px] xl:leading-[30px]'>Also follow us on
</p>
<div className='flex gap-5 sm:gap-2 sm:grid sm:grid-cols-2'>
<div className='flex gap-1 items-center'>
  <img src={facebook}/>
  <p  className='font-league-spartan text-[16px] text-[#FFF528]   text-center  leading-[40px] xl:leading-[30px] '>Facebook
</p>
</div>
<div className='flex gap-1 items-center'>
  <img src={insta}/>
  <p  className='font-league-spartan text-[16px] text-[#FFF528]   text-center  leading-[40px] xl:leading-[30px] '>Instagram
</p>
</div>
<div className='flex gap-1 items-center'>
  <img src={twitter}/>
  <p  className='font-league-spartan text-[16px] text-[#FFF528]   text-center  leading-[40px] xl:leading-[30px] '>Twitter
</p>
</div>
<div className='flex gap-1 items-center'>
  <img src={linkedin}/>
  <p  className='font-league-spartan text-[16px] text-[#FFF528]   text-center  leading-[40px] xl:leading-[30px] '>Linkedin
</p>
</div>
</div>
<footer style={footerStyle} className='text-sm sm:mt-4 font-league-spartan text-[#FFF528] sm:text-sm lg:text-sm'>
     Copyright &copy; {new Date().getFullYear()} Socials. All Rights Reserved.
    </footer>
     </div>
      </div>

    <div className="w-[50%] h-[543px] sm:h-fit sm:w-full sm:border-t  sm:border-[#FFF528] px-10 sm:pl-5 sm:pr-5 flex flex-col justify-start relative sm:static">
    <div className="h-full absolute sm:border-t sm:hidden sm:border-[#FFF528]  left-0 border-r border-[#FFF528]"></div> 

    {/* broadcaster wait list */}
    
      
    <form onSubmit={formik.handleSubmit} className=' flex flex-col gap-5 mb-10 '>
       <div className='mt-8 flex sm:flex sm:flex-col gap-4'>
        <div className='w-[50%] sm:w-full'>
        <p  className='font-league-spartan text-[24px] text-[#FFF]   leading-[40px] xl:leading-[30px] '>Name
</p>
        <input   id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name} type='text' placeholder='Full Name' className=' bg-[#1B1B1B] rounded-xl w-full h-[70px] placeholder:text-[#A1A5C1] text-2xl sm:text-lg md:text-lg lg:text-2xl font-normal font-league-spartan px-5 items-center'/>
         {formik.touched.name && formik.errors.name ? (
          <p className='text-[#FF0000]'>{formik.errors.name}</p>
        ) : null}
       </div>
       <div className='w-[50%] sm:w-full'>
        <p  className='font-league-spartan text-[24px] text-[#FFF]   leading-[40px] xl:leading-[30px] '>Phone no
</p>
         <input  type="tel"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone} placeholder='Phone Number' className=' bg-[#1B1B1B] rounded-xl w-full h-[70px] placeholder:text-[#A1A5C1] text-2xl lg:text-2xl md:text-lg sm:text-lg font-normal font-league-spartan px-5 items-center'/>
        {formik.touched.phone && formik.errors.phone ? (
          <div className='text-[#FF0000] '>{formik.errors.phone}</div>
        ) : null}
        </div>
</div>
<div>
        <p  className='font-league-spartan text-[24px] text-[#FFF]   leading-[40px] xl:leading-[30px] '>Email
</p>
<input type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} placeholder='Email' className=' bg-[#1B1B1B] rounded-xl w-full h-[70px]   placeholder:text-[#A1A5C1] text-2xl lg:text-2xl sm:text-lg md:text-lg font-normal font-league-spartan px-5 items-center'/>
        {formik.touched.email && formik.errors.email ? (
          <div className='text-[#FF0000]'>{formik.errors.email}</div>
        ) : null}
       </div>
       <div className='bg-[#1B1B1B] items-center w-[302px] sm:w-full h-fit rounded-md flex justify-between py-2 px-2'>
        <div className='pl-5 flex gap-2'>
        <input type='checkbox' className='w-[32px] h-[32px] border border-[#FFF528] bg-[#1B1B1B]'/>
 <p  className='font-league-spartan text-[12px] text-[#ffffff80]   leading-[30px] xl:leading-[30px] '>I am human
</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-1'>
          <img src={captcha} className='w-[46px] h-[54px]'/>
          <p  className='font-league-spartan text-[12px] text-[#ffffff80] '>Privacy - Terms
</p>
        </div>

       </div>
      
        <button  type="submit" className=' w-fit sm:w-full sm:h-[70px] items-center justify-center text-center px-10 py-4 sm:py-3 sm:px-8 md:py-3 md:px-8 bg-[#FFF528] rounded-lg  font-medium text-[#000] sm:text-base md:text-base text-base xl:text-base lg:text-base'>Join Waitlist </button>
    </form>  
    <div className='flex gap-5 sm:gap-5 justify-end items-center sm:pb-10 sm:pr-0 pr-10'>

  <p  className='font-league-spartan text-[14px] text-[#FFF528]   text-center  leading-[40px] xl:leading-[30px] '>Privacy Policy
</p>


  <p  className='font-league-spartan text-[14px] text-[#FFF528]   text-center  leading-[40px] xl:leading-[30px] '>Terms of Service
</p>

  <p  className='font-league-spartan text-[14px] text-[#FFF528]   text-center  leading-[40px] xl:leading-[30px] '>Cookie Settings
</p>


</div>
      </div>

   </div>

<div className=' flex justify-between w-full sm:px-8 px-20 bg-[#FFF528] h-[240px] sm:h-[160px]  items-center'>
      <h1 style={{ fontFamily: 'Norwester' }} className='text-[64px] text-[#000] border-b-8 sm:border-b-2 md:border-b-4  border-[#000] xl:text-[64px] lg:text-5xl sm:text-2xl md:text-2xl   font-medium leading-[90px] xl:leading-[80px] lg:leading-[80px]  sm:leading-10 md:leading-10'>Contact us</h1>
      <div className='w-20 h-20 sm:w-10 sm:h-10 md:w-10 md:h-10 rounded-full bg-[#000] justify-center  items-center flex'>
      <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="#FFF528" class="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
      </div>
     </div>

    </div>
  )
}

export default Contact