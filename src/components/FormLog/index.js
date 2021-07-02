import React from 'react'
import './FormLog.css'
import Boton from '../Button'
import Input from '../Input'


export default function FormLog({campos, title = null,btnText="Submit"}){
  return(
    <div className="form-box">
      <form>
        <h1>{title}</h1>
        { campos.map(inp => {
          return(
            <Input tipo={inp.tipo} titulo={inp.titulo} id={inp.id} />
          )
        }) }
        <Boton texto={btnText}/>
      </form>
    </div>
  )
}
