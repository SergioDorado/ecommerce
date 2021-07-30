import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'
import UserContext from '../../context/userContext'

export default function Menu() {
  const contexto = useContext(UserContext)
  const handleLogOut = () => {
    contexto.logoutUser()
  }
  return(
  <UserContext.Consumer>
    { context =>
      <div>
        <nav>
          <ul className="nav-links">
            { !context.userLogin && <li><Link to="/">Log-In</Link></li> }
            <li><Link to="/registro">Registro</Link></li>
            <li><Link to="/productos">Listado de Productos</Link></li>          
            { context.userLogin && <li><Link onClick={() => handleLogOut()}>Log-Out</Link></li> }
          </ul>
        </nav>
      </div>
    }
  </UserContext.Consumer>
  )
}