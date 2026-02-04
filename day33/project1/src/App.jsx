import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [text,changeText] = useState('Hi')
  const [value,setValue] = useState('')
  const [theme,setTheme] = useState(true)

  function add() {
    setCount(prev => prev + 1)
  }

  function sub(){
     setCount(prev => prev - 1)
  }
  function change(){
    changeText('Bye')

  }
  function changeagain(){
    changeText('hi')
  }

  function reset(){
    setCount(0)
   
  }

  function handlechange(e){
    setValue(e.target.value)
  }


  return (
    <div style={{background:theme ?'white' : 'black',
      color:theme ?'black' : 'white',
      height:'100vh',
      width:'100vw',
      textAlign:'center',

    }}>
      <button onClick={()=>setTheme(!theme)}>{theme ? 'dark' : 'light'}</button><br />

      <p>Hello There</p>

      <button onClick={sub}>-</button>

      <p>{count}</p>
      <button onClick={add}>+</button><br /><br />
      <button onClick={reset}>Reset</button>
      <p>{text}</p> 
     <button onClick={change} onDoubleClick={changeagain}>Toggle</button>
     <br />
     <br />
     <form action="">
      <input type="text"
        onChange={handlechange}
       />
      <p>{value}</p>
     </form>

    </div>
  )
}

export default App
