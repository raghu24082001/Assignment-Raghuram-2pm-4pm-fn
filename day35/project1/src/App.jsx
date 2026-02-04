import React from 'react'
import { useState } from 'react'

const App = () => {

  const [value,setValue] = useState({
    email:'',
    password:''
  })

  const [final,setfinal] = useState('')

  function change(e){
    setValue({...value, [e.target.name]:e.target.value})
    
  }

    function show(){
      setfinal(value)

      setValue({
    email: '',
    password: ''
  });
    }
  return (
    <>
    <form action=""  onSubmit={(e)=>e.preventDefault()
      
    }>
      <input type="text" 
       name='email'
       value={value.email}
       onChange={change}
      /> <br /> <br />
      <input type="text" 
       name='password'
       value={value.password}
       onChange={change}
      />
      <br /> <br />
      <button onClick={show} >submit</button>
    </form>
    <br />
    <p>{final.email}</p>
     <p>{final.password}</p>
    
    </>
  )
}

export default App