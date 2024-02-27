import React, { useState, useContext } from 'react'
import { createUserDocumentFromAuth, signInEmailPassword } from '../../utils/firebase/firebase'
import { signInWithGooglePopup } from '../../utils/firebase/firebase'
import InputForm from '../input-form/InputForm'
import Button from '../button/button'
import { UserContext } from '../../contexts/user'

import './sign-in.scss'


const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }

  const { setCurrentUser } = useContext(UserContext)

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user } = await signInEmailPassword(formFields.email, formFields.password)
      setCurrentUser(user)
    } catch (err){
      console.log(err)
      if (err.code === 'auth/invalid-login-credentials') alert('incorrect password')
    }
    setFormFields(defaultFormFields)
  }



  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}> 
        <InputForm required
          label='Email'
          name='email'
          value={formFields.email}
          onChange={handleChange}
          type='email'
        />        
        <InputForm required
          label='Password'
          name='password'
          value={formFields.password}
          onChange={handleChange}
          type='password'
        />   

        <div className='buttons-container'>
          <Button >Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
        </div>
      </form>
    </div>
  )
}
export default SignInForm