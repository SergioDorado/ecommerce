import React from 'react'
import ButtonProducto from '../ButtonProducto'
import {Link} from 'react-router-dom'
import './Producto.css'

export default function Produt(props){
  const { description , photo_url, price, name, id } = props.producto
  return(
    <div className="product-container">
      <div className="img-container">
        <img className="product-img" src={photo_url} alt={name} />
        <p className="product-sku">SKU: {id}</p>
      </div>
      <div className="text-container">
        <p className="product-price">$ {price}</p>
        <p className="product-name">{name}</p>
        <div className="product-description">
          <p>{description}</p>
        </div>
        <Link to={"/producto/" + id}> 
          <ButtonProducto cssClass="btn-compra btn-compra-d-none" text="Detalle" />
        </Link>
      </div>
    </div>
  )
}