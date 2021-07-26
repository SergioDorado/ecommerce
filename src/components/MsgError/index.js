import './MsgError.css'


const MsgError = ({msg}) => {
  return(
    <div className="msj-error">
      <p>{msg}</p>
    </div>
  )
}

export default MsgError