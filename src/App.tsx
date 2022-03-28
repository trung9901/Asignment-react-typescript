import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />} />
      </Routes>
    </div>
  )
}

export default App
