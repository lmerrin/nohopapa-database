import { Routes, Route } from "react-router" 
import Home from "./Pages/Home/Home.jsx"
import LibraryResources from "./Pages/LibraryResources/LibraryResources.jsx"

import "normalize.css"
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Library-Resource" element={<LibraryResources/>} />
    </Routes>
    </>
  )
}

export default App
