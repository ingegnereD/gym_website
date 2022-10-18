import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Trainer from './pages/trainer/Traniner'
import Plans from './pages/plans/Plans'

import NavBar from './component/NavBar'

const App = () => {
  useEffect(()=>{
    document.title = "irg-workout"
  })

  return (
    <section className="container">
      <div className="container-wrapper">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='gallery' element={<Gallery />}/>
            <Route path='plans' element={<Plans />}/>
            <Route path='trainer' element={<Trainer />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  )
}

export default App
