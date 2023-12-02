import React from 'react'
import './button.scss'

const buttonTypeClasses = {
  google: 'google-sign-in',
  ubverted: 'inverted'
}

const Button = ({ onClick,children, buttonType, ...other }) => {
  return (
    <button 
      onClick={onClick}
      className={`button-container ${buttonTypeClasses[buttonType]}`}
      {...other}
    >
      {children}
    </button>
  )
}
export default Button