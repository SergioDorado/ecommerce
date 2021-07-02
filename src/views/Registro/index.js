import React from 'react'
import './Registro.css'
import FormLog from '../../components/FormLog'

export default function Registro(){
  const campos = [
    {tipo: 'texto', id: 'name', titulo: 'Nombre'},
    {tipo: 'texto', id: 'lastname', titulo: 'Apellido'},
    {tipo: 'mail', id: 'mail', titulo: 'E-mail'},
    {tipo: 'texto', id: 'tel', titulo: 'Teléfono'},
    {tipo: 'texto', id: 'username', titulo: 'Usuario'},
    {tipo: 'password', id: 'pass', titulo: 'Contraseña'},
  ]

  return(
    <div className="registro-layout" >
      <FormLog campos={campos} title="Registro" btnText="REGISTRAR" />
    </div>
  )
}