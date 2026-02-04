import React from 'react'

const App = () => {
  const cities=['chennai','madurai','trichy','thanjavur']

  const users = [
    { id: 1, name: "Arun" },
    { id: 2, name: "Kumar" },
    { id: 3, name: "Ravi" }
  ];

  const product=[]

  const district=['df','fg','jl']

  

  return (
    <>
      <ul>
        {cities.map((ans,val)=>
           <li key={val}>{ans}</li>
        )}
      </ul>
      <ul>
        {users.map((ans)=>(
          <li key={ans.id}>{ans.name}</li>
        ))}
      </ul>
      {product.length > 0 ? (
        <ul>
            {products.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> 
      ): (<h3>There is no data</h3>)}
      <ul>
        {district && <h2>React</h2>}
      </ul>
    </>
  )
}

export default App