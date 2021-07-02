import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

export default function Menu() {
  return(
    <div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Log-In</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/productos">Listado de Productos</Link></li>          
        </ul>
      </nav>
    </div>
  )
}