import './Button.css'

function Boton({texto, tipo="button"}) {
  return(
    <button className="btn" type={tipo}>{texto}</button>
  )
}

export default Boton