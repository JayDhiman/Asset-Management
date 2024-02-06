import React from 'react';
import logo from '../assets/logo.png'


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
                                {/* Map through items and apply spacing */}
                                {items.map((item, index) => (
                                    <span key={index}  className='hover:shadow-xl px-2'>{item}</span>
                                ))}
                            </div>
                        </li>
                        <li className=" flex space-x-3 font-extralight">
                            <div className=''>
                               {button.map((val,index)=>(
                                <span key={index}  className='mr-2 p-3'>{val}</span>
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
