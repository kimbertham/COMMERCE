import './input-form.scss'
import React from 'react'

const InputForm = ({ label, ...other }) => {
  return (
    <div className='group'>
      <input className='form-input' {...other}/>
      {label && <label className={`form-input-label ${other.value.length ? 'shrink' : ''}`}>{label}</label>}
    </div>
  )
}
export default InputForm