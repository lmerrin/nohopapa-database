import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import LibraryResources from "./Pages/LibraryResources/LibraryResources.jsx";
import EnviornmentalLandscape from "./Pages/LibraryResources/EnviornmentalLandscape/EnviornmentalLandscape.jsx";
import CulturalLandscape from "./Pages/LibraryResources/CulturalLandscape/CulturalLandscape.jsx";
import HistoricalLandscape from "./Pages/LibraryResources/HistoricalLandscape/HistoricalLandscape.jsx";

import "normalize.css";
import "./App.css";




function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Library-Resources" element={<LibraryResources />} />
        <Route path="/Enviornmental-Landscape" element={<EnviornmentalLandscape />} />
        <Route path="/Cultural-Landscape" element={<CulturalLandscape/>} />
        <Route path="/Historical-Landscape" element={<HistoricalLandscape/>} />
      </Routes>
    </>
  );
}

export default App;
