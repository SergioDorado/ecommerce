import './MsgSuccess.css'
import {Link} from 'react-router-dom'

const MsgSuccess = ({msg, btnTxt= ''}) => {
  return(
    <div className="msj-success">
      <p>{msg}</p>
      {
        {btnTxt} === '' ? null :
        <p><Link to="/productos">{btnTxt}</Link></p>
      }
    </div>
  )
}

export default MsgSuccess