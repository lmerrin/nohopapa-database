import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import LibraryResources from "./Pages/LibraryResources/LibraryResources.jsx";

import "normalize.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Library-Resources" element={<LibraryResources />} />
      </Routes>
    </>
  );
}

export default App;
