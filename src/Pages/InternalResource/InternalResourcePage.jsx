import "./InternalResourcePage.css";
import placeholderimage from "../../assets/placeholder.png";
import api from "../../api";
import { useState, useEffect } from "react";
import { formatAuthors } from "./utils";

export default function InternalResourcePage() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const fetchedResources = await api.fetchInternalResources();
        setResources(fetchedResources);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResources();
  }, []);

  return (
    <div className="internal-resource-container">
      <h1>ALL RESOURCES</h1>


     {/*Form section*/}
     <section className="resource-form-section">
     <h2>Add New Report</h2>
     <form>
 <label></label>
 <label></label>
 <label></label>
 <label></label>
     </form>
   </section>


      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-item">
            <div className="left-section">
              <img
                className="resource-img"
                src={placeholderimage}
                alt="Report Placeholder Image"
              />
              <div className="resource-details">
                <h2>{resource.title}</h2>
                <p>Island: {resource.island}</p>
                <p>Moku: {resource.moku.join(", ")}</p>
                <p>Ahupuaʻa: {resource.ahupuaa.join(", ")}</p>
                <p>Company: {resource.company}</p>
                <p>Author(s): {formatAuthors(resource.author)}</p>
                <p>Year: {resource.year}</p>
              </div>
            </div>
            <button className="resource-btn" onClick={()=> window.open(resource.url,"")}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
}

//Add Internal Resource Search 
//Author, Year, Location - Filter / Drop Down 

//Page add external Resource 