import React, { useState } from 'react'

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPasswrd: ''
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }


  return (
    <>
      <h1>Sign up wiht you email and password</h1>
      <form onSubmit={() =>null}> 
        <label>Name</label>
        <input required
          name='name'
          value={formFields.name}
          onChange={handleChange} 
          type='text'
        />
        <label>Email</label>
        <input required
          name='email'
          value={formFields.email}
          onChange={handleChange}
          type='email'
        />
        <label>Password</label>
        <input required
          name='password'
          value={formFields.password}
          onChange={handleChange}
          type='password'
        />
        <label>Confirm Password</label>
        <input required
          name='confirmPassword'
          value={formFields.confirmPassword}
          onChange={handleChange}
          type='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
export default SignUp