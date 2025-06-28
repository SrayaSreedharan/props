import React from 'react'
import '../pages/Card.css'

const Card = (props) => {
    console.log(props.product)
    const {product} = props
  return (
    <div className='product-card'>
        <img src={product.image} alt={product.title} width="80" height="70" />
        <h3>{product.category} -- {product.price} rs/ </h3>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <button className='btn'>BUY NOW</button>
         
    </div>
  )
}

export default Card
