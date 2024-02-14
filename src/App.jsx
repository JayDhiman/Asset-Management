import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Features from './pages/Features';
import Login from './pages/Login';
import SignUp from './pages/SignUp';




const App = () => {

return (
<BrowserRouter>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='/Features' element={<Features/>} />
<Route path='/Contact' element={<Contact/>} />
<Route path='/Login' element={<Login/>} />
<Route path='/Login' element={<SignUp/>} />


</Routes>

</BrowserRouter>
  )
}

export default App



