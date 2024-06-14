import { Routes, Route } from "react-router";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import LibraryResources from "./Pages/LibraryResources/LibraryResources.jsx";
import ExternalResourcePage from "./Pages/LibraryResources/ExternalResource/ExternalResourcePage.jsx";
import InternalResourcePage from "./Pages/InternalResource/InternalResourcePage.jsx";

import api from "./api.js";
import { useEffect, useState } from "react";
import "normalize.css";
import "./App.css";

function App() {

  useEffect(() => {
    const runApiTest = async () => {
      try {
        const testResults = await api.fetchIslands();
        console.log(testResults);
      } catch (error) {
        console.log(error);
      }
    };
    runApiTest();
  }, []);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Library-Resources"
          element={<LibraryResources/>}
        />
        <Route
          path="Library-Resources/:categoryName"
          element={<ExternalResourcePage />}
        />
        <Route
        path="Internal-Resources"
        element={<InternalResourcePage />}
        />
      </Routes>
    </>
  );
}

export default App;
