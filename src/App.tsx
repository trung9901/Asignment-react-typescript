import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
      </Routes>
    </div>
  )
}

export default App
