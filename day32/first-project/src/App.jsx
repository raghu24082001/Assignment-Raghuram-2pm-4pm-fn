import React from 'react'
import Card from './Card'
import Product from './Product'
import Profile from './Profile'

const App = () => {
  return (
    <div style={{ display: 'flex' , flexDirection:'column'}}>
      
      
        <Product name="Laptop" price={1200} />
        <Product name="Phone" price={800} />
      
      <Profile name="John Doe" role="Frontend Developer" />
      <Profile name="Jane Smith" role="UI Designer" />

    </div>
  )
}

export default App
