import React from 'react'

const Card = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      width: '250px',
      margin: '10px'
    }}>
      {children}
    </div>
  )
}

export default Card
