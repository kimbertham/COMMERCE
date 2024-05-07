import React from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm'
import SignInForm from '../../components/sign-in-form /SignInForm'
import './authentication.scss'

const Authentication = () => {

  return (
    <div className='auth-container'>
      <SignUpForm/>
      <SignInForm/>
    </div>
  )
}
export default Authentication
