import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Header } from './layout/header/header';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/users" element={<Users />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<h1 className='not_title'>Not Found</h1>} />
      </Routes >
    </>

  )
}

export default App
