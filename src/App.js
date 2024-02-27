import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Category from './components/catergories/Category'
import Nav from './routes/nav/Nav'
import Authentication from './routes/auth/Authentication'

const App = () => {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/'element={<Category/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Routes>
    </>
  )
}

export default App
