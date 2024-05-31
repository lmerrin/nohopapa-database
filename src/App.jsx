import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import LibraryResources from "./Pages/LibraryResources/LibraryResources.jsx";
import ExternalResourcePage from "./Pages/LibraryResources/ExternalResource/ExternalResourcePage.jsx";

import api from "./api.js";
import { useEffect, useState } from "react";
import "normalize.css";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const downloadResourceCategories = async () => {
      try {
        const resourceCategories = await api.fetchResouceCategories();
        console.log(resourceCategories);
        setCategories(resourceCategories);
      } catch (error) {
        console.log(error);
      }
    };
    downloadResourceCategories();
  }, []);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Library-Resources"
          element={<LibraryResources categories={categories} />}
        />
        <Route
          path="Library-Resources/:categoryName"
          element={<ExternalResourcePage />}
        />
      </Routes>
    </>
  );
}

export default App;
