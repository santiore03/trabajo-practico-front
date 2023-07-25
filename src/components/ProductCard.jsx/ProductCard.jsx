import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

const ProductCard = ({producto}) => {
  return (
    <>
    <div className='Card'>
        <div className='CardImg'>{producto.imagen}</div>
        <p>{producto.categoria}</p>   
        <h2>{producto.nombre}</h2>
        <h3>${producto.precio}</h3>
        
        <Link to={'/detail/' + producto.id} className='linkDetail'>See Details</Link>
        <br />

    </div>
    </>
  )
}

export default ProductCard