import React from 'react'
import './button.scss'

const buttonTypeClasses = {
  google: 'google-sign-in',
  ubverted: 'inverted'
}

const Button = ({ children, buttonType, ...other }) => {
  return (
    <button 
      className={`button-container ${buttonTypeClasses[buttonType]}`}
      {...other}
    >
      {children}
    </button>
  )
}
export default Button