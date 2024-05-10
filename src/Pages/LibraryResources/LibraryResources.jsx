import './LibraryResources.css';
import { Link } from 'react-router-dom';


export default function LibraryResources() {
  return (
    <div className="library-resources-container">
    <div className="library-background"></div>
 
    {/* Main content section */}
    <section className="resources-section">
      <h1>Library Resources</h1>
      <div className="resource-categories">
        <div className="category">
          <h2>Environmental Landscape</h2>
          <ul>
            <li><Link to="/Enviornmental-Landscape">Boundaries</Link></li>
            <li><Link to="/Enviornmental-Landscape">Soils</Link></li>
            <li><Link to="/Enviornmental-Landscape">Rainfall</Link></li>
            <li><Link to="/Enviornmental-Landscape">Names of Ua</Link></li>
            <li><Link to="/Enviornmental-Landscape">Names of Makani</Link></li>
            <li><Link to="/Enviornmental-Landscape">Plant Species</Link></li>
          </ul>
        </div>

        <div className="category">
          <h2>Cultural Landscape</h2>
          <ul>
            <li><Link to="/Cultural-Landscape">Place Names</Link></li>
            <li><Link to="/Cultural-Landscape">Boundary Commission Testimony</Link></li>
            <li><Link to="/Cultural-Landscape">Mele and ʻŌlelo Noʻeau</Link></li>
            <li><Link to="/Cultural-Landscape">Moʻolelo</Link></li>
          </ul>
        </div>

        <div className="category">
          <h2>Historical Landscape</h2>
          <ul>
          <li><Link to="/Historical-Landscape">General Links</Link></li>
          <li><Link to="/Historical-Landscape">Early Historic Period</Link></li>
          <li><Link to="/Historical-Landscape">Kuleana Act</Link></li>
          <li><Link to="/Historical-Landscape">Plantation and Ranching Eras</Link></li>
          <li><Link to="/Historical-Landscape">Historical Maps and Photographs</Link></li>
          <li><Link to="/Historical-Landscape">Previous Archaeology</Link></li>
          <li><Link to="/Historical-Landscape">Property Records Search</Link></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);
}
