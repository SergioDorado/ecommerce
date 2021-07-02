import React from 'react'
import './LogIn.css'
import FormLog from '../../components/FormLog'

export default function Login(){
  const campos = [
    {tipo: 'texto', id: 'username', titulo: 'Usuario'},
    {tipo: 'password', id: 'pass', titulo: 'Contraseña'},
  ]

  return(
    <div className="registro-layout" >
      <FormLog campos={campos} title="LogIn" btnText="LOG-IN" />
    </div>
  )
}