import React from 'react'
import Card from './Card'

const Product = ({ name, price }) => {
  return (
    <Card>
    
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    
    </Card>
  )
}

export default Product
