import React, { useEffect, useState } from 'react';
// import Home from './pages/Home';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from './pages/Contact';
// import Features from './pages/Features';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import {login,logout} from './Store/Authslice'

import Header from './components/Header/Header';



const App = () => {
const[loading, setLoading] = useState(true);
const dispatch = useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
.then((userData)=>{
  if(userData){
    dispatch(login({userData}))
  
  }else{
    dispatch(logout())
  }
})
.finally(()=>setLoading(false))
},[])

return !loading ? (


<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
    <Header/>
    
      
      </div>
    </div>

) : null

  
}

export default App



