import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import WebsiteLayout from './pages/layouts/WebsiteLayout';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />} >
          <Route index element={<HomePage />} />
          {/* <Route path="product">
            <Route index element={<h1>Hien thi san pham</h1>} />
            <Route path=":id" element={<ProductDetail />} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
