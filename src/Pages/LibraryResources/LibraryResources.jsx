import ResourceCategory from "./ResourceCategory";
import "./LibraryResources.css";
import api from "../../api";
import { useEffect, useState } from "react";

//If Navigation Breaks
const categoryPageLinks = {
  "Environmental Landscape":"/Enviornmental-Landscape",
  "Cultural Landscape" : "/Cultural-Landscape",
  "Historical Landscape" : "/Historical-Landscape",
}

export default function LibraryResources() {
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
    <div className="library-resources-container">
      <div className="library-background"></div>

      {/* Main content section */}
      <section className="resources-section">
        <h1>Library Resources</h1>
        <div className="resource-categories">
          {categories.map((category) => {
           return(<ResourceCategory key={category.id} title={category.name} subcategories={category.subcategories} link={categoryPageLinks[category.name]}/>);
          })}
        </div>
      </section>
    </div>
  );
}
