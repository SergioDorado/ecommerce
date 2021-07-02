import React, {useState,useEffect} from 'react'
import getProductos from '../../services/getProductos'
import Spinner from '../../components/spinner'
import Producto from '../../components/product'
import './ProductoLista.css'

export default function ProductoLista() {
  const [products, setProducts] = useState({loading: true,data:[]})

  useEffect(() => {
    getProductos().then((listOfProducts) => {setProducts({loading: false,data:listOfProducts})})
  },[])

  if(products.loading){
    return(
      <div className="product-list">
        <Spinner />
      </div>
    )
  }
  if(!products.loading){
    return(
      <div className="product-list">
        <ol>
          {products.data.map(product => {
            return(
              <li key={product.id}>
                <Producto producto={product} />
              </li>
            )
          }) }
        </ol>
      </div>
    )
  }
}