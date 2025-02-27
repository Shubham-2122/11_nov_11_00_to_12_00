import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Read from "./Component/Read"
import Create from "./Component/Create"
import Update from "./Component/Update"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/read" element={<Read />} />
        <Route path="/" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
