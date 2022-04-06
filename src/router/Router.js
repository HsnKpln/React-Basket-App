import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import BasketPage from '../pages/BasketPage'
import Home from '../pages/Home'

function Router() {
    
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/basketPage' element={<BasketPage/>}/>
      </Routes>
  )
}

export default Router