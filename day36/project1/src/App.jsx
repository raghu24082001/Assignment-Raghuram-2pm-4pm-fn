import React, { useEffect, useState } from 'react'


const App = () => {
  const [value,setValue] = useState([])

  useEffect(()=>{
    const data = async ()=>{
      const first = await fetch('https://thirukkural.senkanthal.org/kural')
      const second = await first.json()

      setValue(second)
     
    }
     data()
  },[])

  useEffect(() => (
    console.log(value)
  )
    
  , [value])

  useEffect(() => {
    const timer = setTimeout(()=>{
        console.log('running')
    },5000)
  }
  , [])

  return (
    <div style={{background:'red',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}>
           <ul>
       {
        value.map(val => (
  <li key={val.id}>{val.kural}</li>
))

       }
     </ul>
 
    </div>
  )
}

export default App