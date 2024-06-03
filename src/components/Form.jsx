import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { firestore } from '../firebase.config.js'; // Adjust the path to your firebase.js file
import { addDoc, collection } from 'firebase/firestore';
import "../styles/coniccircle.css"
const Form = () => {
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
       
        await addDoc(collection(firestore, `contactInfo`), data );
       
        resetForm();
        setopen(true)
      } catch (error) {
        console.error('Error sending data to Firestore:', error);
      }
    },
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = '../assets/bgg-2.webp'; // Replace 'path/to/your/image.webp' with the actual path to your image
  }, []);
 
  return (
    <div id="form" className=' w-full  flex flex-col justify-center  items-center   '>
    <div className='justify-center items-center text-center pt-10 w-[20%] lg:w-[43%] sm:w-full sm:px-10'>
      <h1 className='text-2xl lg:text-3xl sm:text-lg md:text-lg font-bold text-[#001749] '>Join Our Elite Buyers Club for FREE– Sign Up Now!</h1>
      </div>
      <p className='text-xl lg:text-2xl sm:text-base md:text-base sm:px-5  font-normal text-center text-[#001749] mt-4 mb-10'>Just fill out the form now and Seize the Future!</p>
    <form onSubmit={formik.handleSubmit} className=' flex flex-col gap-5 mb-10'>
        <input   id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name} type='text' placeholder='Full Name' className=' bg-[#F5F4F8] rounded-xl w-[450px] sm:w-[327px] md:w-[327px] h-[70px] placeholder:text-[#A1A5C1] text-lg sm:text-lg md:text-lg lg:text-2xl font-normal font-["Raleway"] px-5 items-center'/>
         {formik.touched.name && formik.errors.name ? (
          <p className='text-[#FF0000]'>{formik.errors.name}</p>
        ) : null}
        <input type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} placeholder='Email' className=' bg-[#F5F4F8] rounded-xl w-[450px] h-[70px]  sm:w-[327px] md:w-[327px] placeholder:text-[#A1A5C1] text-lg lg:text-2xl sm:text-lg md:text-lg font-normal font-["Raleway"] px-5 items-center'/>
        {formik.touched.email && formik.errors.email ? (
          <div className='text-[#FF0000]'>{formik.errors.email}</div>
        ) : null}

        <input  type="tel"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone} placeholder='Phone Number' className=' bg-[#F5F4F8] rounded-xl w-[450px]  sm:w-[327px] md:w-[327px] h-[70px] placeholder:text-[#A1A5C1] text-lg lg:text-2xl md:text-lg sm:text-lg font-normal font-["Raleway"] px-5 items-center'/>
        {formik.touched.phone && formik.errors.phone ? (
          <div className='text-[#FF0000] '>{formik.errors.phone}</div>
        ) : null}
        <input  type="text"
          id="city"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city} placeholder='City ' className=' bg-[#F5F4F8] rounded-xl w-[450px] h-[70px]  sm:w-[327px] md:w-[327px] placeholder:text-[#A1A5C1] text-lg lg:text-2xl md:text-lg sm:text-lg font-normal font-["Raleway"] px-5 items-center'/>
        {formik.touched.city && formik.errors.city ? (
          <div className='text-[#FF0000]'>{formik.errors.city}</div>
        ) : null}

        <input  type="text"
          id="companyName"
          name="companyName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyName} placeholder='Company Name' className=' bg-[#F5F4F8] rounded-xl w-[450px] h-[70px]  sm:w-[327px] md:w-[327px] placeholder:text-[#A1A5C1] text-lg md:text-lg sm:text-lg  lg:text-2xl font-normal font-["Raleway"] px-5 items-center'/>
        {formik.touched.companyName && formik.errors.companyName ? (
          <div className='text-[#FF0000]'>{formik.errors.companyName}</div>
        ) : null}
        <input type="text"
          id="companyLicense"
          name="companyLicense"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyLicense} placeholder='Company license number' className=' bg-[#F5F4F8] rounded-xl w-[450px] h-[70px]  sm:w-[327px] md:w-[327px] placeholder:text-[#A1A5C1] md:text-lg text-lg sm:text-lg lg:text-2xl font-normal font-["Raleway"] px-5 items-center'/>
        {formik.touched.companyLicense && formik.errors.companyLicense ? (
          <div className='text-[#FF0000]'>{formik.errors.companyLicense}</div>
        ) : null}
        <button  type="submit" className=' bg-[#FFAA45] rounded-xl w-[450px] h-[70px] text-[#001749] text-xl lg:text-3xl  md:text-lg sm:text-xl font-bold  sm:w-[327px] md:w-[327px]  px-5 items-center justify-center'>Join For Free </button>
    </form>
    {open &&
   <div onClick={()=>setopen(false)}  class="fixed inset-0 z-50 flex justify-center items-end bg-white  ">
   <div onClick={()=>setopen(false)}  className='flex flex-row w-full justify-center items-end'>
     <div onClick={()=>setopen(false)} className={`flex  flex-col justify-center main-background w-full px-[400px] sm:px-4 items-center ${loaded ? 'loaded' : ''}`}>
      
       {/* <div onClick={()=>setopen(false)} className=' cursor-pointer w-16 h-1 my-10 bg-[#53587A] rounded-full' ></div> */}
      

<div className='w-full flex  flex-col justify-center bg-white rounded-[10px] pb-14 items-center text-center'>
  <h1 className='text-[28px] sm:text-lg font-inter font-bold text-[#001749] mt-14 mb-4 w-[50%] sm:w-full'>Thank you  </h1>
  <h1 className='text-[16px] sm:text-sm font-inter font-medium text-[#252b5c] sm:px-2 w-[41%] sm:w-full'>One of our agents will contact you to activate the membership before the platform launch. For more details contact us at: +971526931043
</h1>

</div>
     </div>
   </div>
 </div>
}
{/* <div class="fixed inset-0 z-50 flex justify-center items-end bg-white  ">
   <div className='flex flex-row w-full justify-center items-end'>
     <div className='flex flex-col main-background w-full h-[467px]  bg-white  items-center'>
      
       <div onClick={()=>setopen(false)} className=' cursor-pointer w-16 h-1 my-10 bg-[#53587A] rounded-full' ></div>
       <div className='w-[142px] h-[142px] gradient rounded-full  flex justify-center items-center'>
        
 <img src={tick} className='w-6 h-6 rounded-full'/>
   
</div>

<div className='w-full flex flex-col justify-center items-center text-center'>
  <h1 className='text-[28px] font-medium text-[#252b5c] mt-14 w-[60%]'>Form <span className='text-[#ffaa45] font-bold'>submitted!</span>  </h1>
  <h1 className='text-[28px] font-medium text-[#252b5c]  w-[60%]'>Await our response. </h1>

</div>
     </div>
   </div>
 </div> */}
      </div>
  )
}

export default Form