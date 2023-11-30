import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Category from './components/catergories/Category'
import Nav from './components/routes/nav/Nav'
import SignIn from './components/routes/sign-in/SignIn'

const App = () => {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/'element={<Category/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
      </Routes>
    </>
  )
}

export default App
