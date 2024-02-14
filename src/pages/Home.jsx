import React from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar'
import { CiMobile1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdWebAsset } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Button from '../components/Button';
import logo from '../assets/logo.png'



import Dashboard1 from '../assets/Dashboard1.png'
import dash3 from '../assets/dash3.webp'
import dash2 from '../assets/dash2.webp'
import dash5 from '../assets/dash5.webp'

import Carousel from '../components/Carousel';

const Home = () => {

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

return (
<> 

{/* Navbar */}

 <Navbar  items= { ["Features", "Contact"]} button={['Login','SignUp']} />
  
 {/* Main section */}
 {/* I have added the Framer Motion moton-div for the animation */}
 
 <motion.main 
  initial="hidden"
  animate="visible"
  exit={{ opacity: 0, transition: { duration: 2 } }}
  variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
  className='  h-auto top-0  w-full overflow-hidden'>
   
   

   <div className='relative w-full  flex flex-col  justify-between items-start max-xl:px-3 pt-28  mx-auto bg-sky-900  '>
     
     <div className='font-bold  mx-auto md:text-4xl text-lg max-sm:text-[20px] max-sm:leading-[1] '>
      <motion.h1 
       variants={{
         hidden: { opacity: 0, y: -20 },
         visible
       }}
      className='text-gray-100 max-sm:text-sm font-bold' >Open Source Asset</motion.h1>
     </div>
       <div className='font-bold mx-auto md:text-4xl text-lg max-sm:leading-[1]  max-lg:px mb-3 '>
       
       <motion.h1 
       variants={{
         hidden: { opacity: 0, y: -20 },
         visible
       }} className='text-gray-100 max-sm:text-sm'>Management <span className='text-orange-400 font-thin'>Software</span></motion.h1>
     </div>

     
     <div className='flex mx-auto gap-3 max-sm:gap-1 max-sm:text-center'>
     <div className='bg-orange-300 w-2 h-34 mx-auto  mt-5'>
    </div>

 <div className='font-thin md:text-2xl max-sm:text-sm max-sm:px-2  max-sm:leading-[1] mt-5  container text-white '> 
  <p className='max-sm:text-sm'><span className='text-green-300 font-normal'>Asset</span> and <span className='text-green-300 font-normal'>Equipment</span> tracking software used by <span className='text-green-300 font-normal'>teams</span>
  <span className='max-sm:hidden'> who value clarity.</span> 
   </p>
  <p className='max-sm:text-sm'>Company is an open source asset management system
  <span className='max-sm:hidden'>
  that lets you create,
   </span></p>
  <p className='max-sm:hidden'> manage and overview your assets across
  locations.</p>
 </div>  
   </div>
  
     <div className='mx-auto mb-12'>
     <Button value='GET STARTED' className='text-sm md:text-lg font-light hover:font-medium hover:bg-orange-600 mt-3 md:mx-4 md:px-4 '/>
     </div>

     </div> 
     {/* Image section  Dashboard img */}
     <div className=''>
       <div className='container mx-auto mt-5 '>
       <img src={Dashboard1} alt="" className='opacity-90 px1- py-10 shadow-xl' />
       </div>
     {/* small images */}
       <div className='container xl:mx-auto relative bottom-20 left-5 max-md:hidden  '>
         <div className='my-4 '>
         <img src={dash3} alt=""  className='shadow-2xl max-xl:w-64 max-xl:h-20'/>
         
         </div>
        
         <div className='mr-4'>
          <img src={dash2} alt=""  className='shadow-2xl max-xl:w-64 max-xl:h-20'/>
         </div>
         
             
           

      
         
         <div className='my-4'>
         <img src={dash5} alt=""  className='shadow-2xl max-xl:w-64 max-xl:h-20'/>
         
         </div>
       </div>
     </div>


 
 {/* Service Section */}

<section className=''>
  <Carousel />
</section>
 </motion.main>
       


{/* Card section */}


<section className=' overflow-hidden w-full mt-12 pt-12'>

 
<h1 className='text-lg pt-4 max-sm:text-center max-sm:text-lg mx-1 text-center xl:text-2xl md:pt-2 xl:my-4 pb-8 '>
  
Use our Programmable QR Code Tags and track & mantain your assets</h1>
<div className=' flex max-sm:flex-col gap-6 justify-center p-1 flex-wrap'>

 {/* wrapper */}
<div className=' flex max-sm:flex-col items-center'>

{/* items */}
<div className=" xl:w-96 xl:h-96 md:w-64 md:h-64 flex flex-col items-center shadow-lg bg-slate-100 rounded-xl max-sm:w-fit max-sm:h-fit  mb-4  hover:shadow-2xl hover:shadow-black hover:border-spacing-3 hover:-translate-y-2 hover:duration-200 hover:delay-300">
       <h1 className='text-lg pt-4 max-sm:text-center max-sm:text-lg mx-1 text-center xl:text-2xl md:pt-2 xl:my-4'>Ready for mobile Devices</h1>
       <div className='py-3 text-orange-300 '>
        <CiMobile1 className="2xl:text-[120px] xl:text-[100px] lg:text-[80px] md:text-[60px] max-md:text-[40px]" />
       </div>
       <p className='font-thin text-sm  text-center pt-3 xl:text-lg'>No extra hardware needed. Most </p>
       <p className='font-extralight text-sm xl:text-lg'> smartphones support Company.</p>
      
        
</div>

</div>


<div className='flex max-sm:flex-col items-center  '>

{/* items */}
<div className=" xl:w-96 xl:h-96 md:w-64 md:h-64 flex flex-col items-center shadow-lg bg-slate-100 rounded-xl max-sm:w-fit max-sm:h-fit  mb-4  hover:shadow-2xl hover:shadow-black hover:border-spacing-3 hover:-translate-y-2 hover:duration-300 hover:delay-200">
       <h1 className='text-lg pt-4 max-sm:text-center max-sm:text-lg mx-1 text-center xl:text-2xl md:pt-2 xl:my-4'>Location tracking</h1>
       <div className='py-3 text-orange-300 drop-shadow-xl decoration-purple-100'>
        <CiLocationOn className="2xl:text-[120px] xl:text-[100px] lg:text-[80px] md:text-[60px] max-md:text-[40px]" />
       </div>
       <p className='font-thin text-sm  text-center pt-3 xl:text-lg'>Each scan updates your asset's location.</p>
       <p className='font-extralight text-sm xl:text-lg'>Know where things last were.</p>
        
</div>

</div>

<div className=' flex max-sm:flex-col items-center '>

{/* items */}
<div className="xl:w-96 xl:h-96 md:w-64 md:h-64 flex flex-col items-center shadow-lg bg-slate-100 rounded-xl max-sm:w-fit max-sm:h-fit  mb-4   hover:shadow-2xl hover:shadow-black hover:border-spacing-3 hover:-translate-y-2 hover:duration-300 hover:delay-200">
       <h1 className='text-lg pt-4 max-sm:text-center max-sm:text-lg mx-1 text-center xl:text-2xl md:pt-2 xl:my-4'>Create and Program Your Assets</h1>
       <div className='py-3 text-orange-300 drop-shadow-xl decoration-purple-100'>
        <MdWebAsset className="2xl:text-[120px] xl:text-[100px] lg:text-[80px] md:text-[60px] max-md:text-[40px]" />
       </div>
       <p className='font-thin text-sm  text-center pt-3 xl:text-lg'>Print your own.Attach them to anything </p>
      <p className='font-extralight text-sm xl:text-lg'>  you want to track.</p>

        
</div>

</div>


<div className=' flex max-sm:flex-col items-center '>

{/* items */}
<div className="xl:w-96 xl:h-96 md:w-64 md:h-64 flex flex-col items-center shadow-lg bg-slate-100 rounded-xl max-sm:w-fit max-sm:h-fit  mb-4  hover:shadow-2xl hover:shadow-black hover:border-spacing-3 hover:-translate-y-2 hover:duration-300 hover:delay-200">
 <h1 className='text-lg pt-4 max-sm:text-center max-sm:text-lg mx-1 text-center xl:text-2xl md:pt-2 xl:my-4'>Create and Program Your Assets</h1>
 <div className='py-3 text-orange-300 drop-shadow-xl decoration-purple-100'>
        <MdWebAsset className="2xl:text-[120px] xl:text-[100px] lg:text-[80px] md:text-[60px]  max-md:text-[40px]" />
       </div>
       <p className='font-thin text-sm  text-center pt-3 xl:text-lg'>Print your own.Attach them to anything </p>
      <p className='font-extralight text-sm xl:text-lg'>  you want to track.</p>

        
</div>

</div>

</div>




</section>
  

{/*  Footer Section*/}

<footer className='relative w-full  flex flex-col  justify-between items-start max-xl:px-3   mx-auto bg-sky-900 mt-40 pb-12 overflow-hidden' >
<div className=' xl:container mx-auto flex items-start justify-center gap-6 max-sm:gap-3 max-sm:flex-col overflow-hidden flex-wrap'>




<div className='w-fit  mx-10 max-sm:mx-auto'>
  
  {/* logo */}
<div className='flex items-center justify-start gap-1 max-sm:flex-col mt-4  '>

<div className='text-xl mx-3 pt-2 max-sm:mx-'>
<img src={logo} alt="Logo" className='' width={50}/>
</div>

<div className='pt-3 '>
  <h1 className='text-orange-300 text-2xl'>Company</h1>
</div>
</div>

 {/* about the company */}
<div className=' mx-5 mt-4 text-white font-thin text-sm'>

<div className='w-64 overflow-hidden'>
<p>The Company makes it easy to keep track of what you own. Our asset management software lets you create, categorize, and search your inventory quickly 
  
    and easily. With powerful reporting features, you'll have a clear picture of what you own and where it's located.</p>
</div>
</div>
</div>



{/* features desciption */}
<div className='flex max-sm:flex-row gap-1  max-sm:mx-auto'>



<div className='mt-5 w-fit h-auto mx-10 px-5 max-sm:mx-auto '>
<div className='pt-4'>
  <h1 className='text-orange-400 text-lg font-semibold'>Features</h1>
</div>

<div className='pt-6'>
  <ul className='text-white text-sm '>
    <li className='hover:text-orange-300'>Location tracking</li>
    <li className='hover:text-orange-300'>Asset Search</li>
    <li className='hover:text-orange-300'>Asset Custody</li>
    <li className='hover:text-orange-300'>Workspaces</li>
    <li className='hover:text-orange-300'>Dashboard</li>

  </ul>
</div>

</div>


<div className='mt-5 w-fit h-auto mx-10 px-5 max-sm:mx-auto'>
<div className='pt-4'>
  <h1 className='text-orange-400 text-lg font-semibold'>Quik Links</h1>
</div>

<div className='pt-6'>
  <ul className='text-white text-sm '>
    <li className='hover:text-orange-300 '>About us</li>
    <li className='hover:text-orange-300 '>Contact Us</li>
    <li className='hover:text-orange-300 '>Blogs</li>


 </ul>
</div>

</div>
</div>
  
<div>

<div className='flex items-center justify-center mt-4 mx-12 pt-4 px-12 max-sm:px-1 max-sm:overflow-hidden max-sm:flex-wrap'>
<div className='pt-10 px-4 mx-4 text-white hover:text-gray-200 hover:-translate-y-2 hover:duration-200 hover:delay-300'>
  <FaFacebook fontSize={40}/>
</div>
<div className='pt-10 px-4 mx-4 text-white hover:-translate-y-2 hover:duration-200 hover:delay-300'>
  <FaGithub fontSize={40}/>
</div>
<div className='pt-10 px-4 mx-4 text-white hover:-translate-y-2 hover:duration-200 hover:delay-300 '>
  <FaLinkedin fontSize={40}/>
</div>


<div className='pt-10 px-4 mx-4 text-white hover:-translate-y-2 hover:duration-200 hover:delay-300'>
  <IoLogoYoutube fontSize={40}/>
</div>

</div>
</div>
</div>
</footer>

</>
  )
}

export default Home