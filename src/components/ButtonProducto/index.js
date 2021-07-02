import React from 'react'
import './ButtonProducto.css'

export default function ButtonProducto({text, cssClass='', click=null}) {
  return(
    <div>
      <button className={cssClass} onClick={click}> {text}</button>
    </div>
  )
}