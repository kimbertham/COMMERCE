import React, { useState } from 'react'
import { createEmailPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import InputForm from '../../components/input-form/InputForm'
import Button from '../../components/button/button'
import './sign-up.scss'


const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formFields.password !== formFields.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      const { user } = await createEmailPassword(formFields.email, formFields.password)
      await createUserDocumentFromAuth(user, { displayName: formFields.name })
    } catch (err){
      console.log('user created error', err)
    }
    setFormFields(defaultFormFields)
  }

  return (
    <div className='sign-up-container'>
      <h2>Dont have an account?</h2>
      <span>Sign up with you email and password</span>
      <form onSubmit={handleSubmit}> 
        <InputForm required
          label='Name'
          name='name'
          value={formFields.name}
          onChange={handleChange} 
          type='text'
        />
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
        <InputForm required
          label='Confirm Password'
          name='confirmPassword'
          value={formFields.confirmPassword}
          onChange={handleChange}
          type='password'
        />
        <Button>Submit</Button>
      </form>
    </div>
  )
}
export default SignUp