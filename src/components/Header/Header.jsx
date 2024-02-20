import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'


const Header = () => {
 const authStatus  = useSelector((state) => {
  console.log(state);
  state.Auth.status})
 const navigate = useNavigate();

 const navItems = [
    {
      name: 'Home',
      url: "/",
      active: true
    }, 
    {
      name: "Login",
      url: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      url: "/signup",
      active: !authStatus,
  },
  
  ]



  return (
    <header className='py-3 shadow bg-gray-500'>
     
        <nav className='flex  justify-center items-center absolute top-0 left-0 right-0 bg-transparent py-3 z-30'>
          
          <div className='mr-4'>
            <Link to='/'>
            <img src={logo} alt="" width={50} className='mx-2 ml-4 mt-2 bg-stone-600 rounded-3xl' />

              </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.url)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      
    </header>
  )
}


export default Header