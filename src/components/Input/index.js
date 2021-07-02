import React from 'react'
import './Input.css'

export default function Input({tipo = 'text', titulo , id}){

  return(
    <div className="form-group">
      <input id={id} name={id} type={tipo} />
      <label>{titulo}</label>
    </div>
  )
}