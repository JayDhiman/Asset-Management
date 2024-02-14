import React from 'react';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = ({
    items,
    button
}) => {
    
    
    
    
    return (
    <>
    <header>
            <nav className=" absolute top-0 left-0 right-0 bg-transparent py-3 z-30 ">
                <div className=" justify-between flex items-center space-x-6">
                    <div className="  mx-3 rounded-full flex ">
                      <div>
                         <img src={logo} alt="" width={50} className='mx-2 ml-4 mt-2 bg-stone-600 rounded-3xl' />
                        </div>
                        <div className='mt-5 text-white'>
                        <h1 >Company</h1>
                        </div>
                        
                    </div>


                    <ul className="md:flex items-center justify-end text-end space-x-6 hidden">
                        <li className="text-lg flex space-x-3 font-extralight">
                            <div className='text-white'>

                    {/* Added the Link tag for Particular routes  */}
                                {items.map((item, index) => (
                                    <span key={index}  className='hover:shadow-xl px-2'>
                                 
                                   <Link to={`${item.toLowerCase()}`}>
                                    {item}
                                   </Link> 
                                    
                                    </span>
                                ))}
                                   
                            </div>
                        </li>

                        <li className="text-lg flex space-x-3 gap-1 font-extralight ">
                            <div className='text-white'>

                    {/* Added the Link tag for Particular Routes */}
                    
                                {button.map((btn, index) => (
                                    <span key={index}  className='hover:shadow-xl p-1 px-2 bg-orange-500 rounded-lg text-[15px] mx-1 hover:bg-orange-600'>
                                 
                                   <Link to={`${btn.toLowerCase()}`}>
                                    {btn}
                                   </Link> 
                                    
                                    </span>
                                ))}
                                   
                            </div>
                        </li>
                      
                    </ul>
                </div>
            </nav>
            </header>
        </>
    );
}

export default Navbar;
