import React, {useState, useEffect} from 'react'
import './DetalleProducto.css'
import ButtonProducto from '../ButtonProducto'
import MsgSuccess from '../MsgSuccess'
import getProducto from '../../services/getProducto'

export default function DetalleProducto(props) {
  const [producto,setProducto] = useState({data:[]
  })
  const [msg,setMsg] = useState({show: false})
  // console.log('off funtion',props.match.params.id)

  useEffect(() => {
    getProducto(props.match.params.id).then((prod) => { 
      setProducto({data:prod})
    })
  } ,[props.match.params.id])

 const handleClick1 = () => {
    setMsg({show: true})
  }

  return(
    <div className="detalle-producto">
      {!msg.show &&
        <div className="detalle-container">
          <div className="item-img">
            <img src={producto.data.photo_url} alt={producto.data.name} />
          </div>
          <div className="item-data">
            <div className="data-element">
              <span className="nombre">{producto.data.name}</span>
            </div>
            <div className="data-element">
              <span className="precio">{producto.data.price}</span>
            </div>
            <div className="data-element">
              <p>Stock disponible: <span>{producto.data.stock}</span></p>
            </div>
            <div className="data-element">
              <p className="sku">SKU: {props.match.params.id}</p>
            </div>
            <div className="bordet-t descripcion data-element">
              <p>Descripción</p>
              <p>{producto.data.description}</p>
            </div>
            <div className="data-element">
              <ButtonProducto
               cssClass="btn-compra" 
               text="Comprar ahora" 
               click={() => handleClick1() }

              />
            </div>
          </div>
        </div>
      }
      {msg.show &&
        <MsgSuccess msg="Gracias por su compra. Vuelva pronto" btnTxt="Volver" action=""/>
      }
    </div>
  )
}
