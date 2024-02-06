import React from 'react';
import { motion } from "framer-motion";

import Navbar from './components/Navbar';
import Button from './components/Button';



import Dashboard1 from './assets/Dashboard1.png'
import dash3 from './assets/dash3.webp'
import dash2 from './assets/dash2.webp'
import dash5 from './assets/dash5.webp'

import Carousel from './components/Carousel';

const App = () => {

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };


return (
<> 
{/*  Navbar*/}

 <Navbar  items= { ["Home", "About"]} button={[<Button value='login' className='  text-sm hover:text-md hover:bg-orange-600  opacity-100 text-white'/>]}/>
  
  {/* about section */}

  

  
  <motion.main 
   initial="hidden"
   animate="visible"
   exit={{ opacity: 0, transition: { duration: 2 } }}
   variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
   className='  h-auto top-0  w-full overflow-hidden'>
    
    {/* MainSection for Landing Page' getstarted'*/}

    <div className='relative w-full  flex flex-col  justify-between items-start max-xl:px-3 pt-28  mx-auto bg-sky-900  '>
      
      <div className='font-bold  mx-auto md:text-4xl text-lg max-sm:text-[20px] max-sm:leading-[1] '>
       <motion.h1 
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}
       className='text-gray-100 max-sm:text-sm'>Open Source Asset</motion.h1>
      </div>
        <div className='font-bold mx-auto md:text-4xl text-lg max-sm:leading-[1]  max-lg:px mb-3 '>
        
        <motion.h1 
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }} className='text-gray-100 max-sm:text-sm'>Management <span className='text-orange-400'>Software</span></motion.h1>
      </div>

      {/* <div className='relative left-8'>
      <img src={bgimg1} alt="asset image"  className='opacity-20  w-fit bg-center object-center '  /> 
      </div> */}
      <div className='flex mx-auto gap-3 max-sm:gap-1 max-sm:text-center'>
      <div className='bg-orange-300 w-2 h-34 mx-auto  mt-5'>
     </div>

  <div className='font-extralight md:text-2xl max-sm:text-sm max-sm:px-2  max-sm:leading-[1] mt-5  container text-white '> 
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
      {/* carosal section */}
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
 <section className='  '>
   <Carousel />
 </section>
        
  </motion.main>

 

  <section className=' overflow-hidden w-full '>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto velit eligendi veritatis provident temporibus, molestiae nulla quisquam, culpa nobis, obcaecati pariatur iure. Dolorum magni consequuntur eveniet nisi explicabo cupiditate corrupti sed maiores aut.
  </section>
   

{/*  About Section*/}
</>
  )
}

export default App



