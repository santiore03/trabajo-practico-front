import React from 'react'
import './ProductCartCard.css'

const ProductCartCard = ({producto}) => {
  return (
    <div className="cardCart"> 
        <div className='cartCardImg'>{producto.imagen}</div>
        <h2>{producto.nombre}</h2>
        <h3>precio: ${producto.precio}</h3>
        <p>Cantidad: {producto.quantity}</p>
        <hr />
    </div>
  )
}

export default ProductCartCard