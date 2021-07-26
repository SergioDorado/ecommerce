import React from 'react'
import './Input.css'

export default function Input({tipo = 'text', titulo , id, value, onChange}){

  return(
    <div className="form-group">
      <input id={id} name={id} type={tipo} value={value} onChange={onChange} />
      <label>{titulo}</label>
    </div>
  )
}