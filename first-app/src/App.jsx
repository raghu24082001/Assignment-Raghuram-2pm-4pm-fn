import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Content from './Content'
import Navbar from './Navbar'

const App = () => {
  const [data, setData] = useState('')

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Content data={data} setData={setData} />}
        />
      </Routes>
    </>
  )
}

export default App
