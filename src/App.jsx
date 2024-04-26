import { Routes, Route } from "react-router" 
import Home from "./Pages/Home/Home.jsx"
import "normalize.css"
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
