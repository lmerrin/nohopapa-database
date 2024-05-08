import './LibraryResources.css';


export default function LibraryResources() {
  return (
    <div className="library-resources-container">
    {/* Navigation bar */}
    <nav className="navbar">
      <img src="/path/to/logo.png" alt="Nohopapa Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/library-resources">Library Resources</a></li>
        <li><a href="/search-repository">Search Repository</a></li>
        <li><a href="/contribute">Contribute</a></li>
      </ul>
    </nav>

    {/* Main content section */}
    <section className="resources-section">
      <h1>Library Resources</h1>
      <div className="resource-categories">
        <div className="category">
          <h2>Environmental Landscape</h2>
          <ul>
            <li><a href="URL1">Boundaries</a></li>
            <li><a href="URL2">Soils</a></li>
            <li><a href="URL3">Rainfall</a></li>
            <li><a href="URL4">Names of UA</a></li>
            <li><a href="URL5">Names of Makani</a></li>
            <li><a href="URL6">Plant Species</a></li>
          </ul>
        </div>

        <div className="category">
          <h2>Cultural Landscape</h2>
          <ul>
            <li><a href="URL7">Place Names</a></li>
            <li><a href="URL8">Mele and ʻŌlelo Noʻeau</a></li>
            <li><a href="URL9">Moʻolelo</a></li>
          </ul>
        </div>

        <div className="category">
          <h2>Historical Landscape</h2>
          <ul>
            <li><a href="URL10">Kuleana Act</a></li>
            <li><a href="URL11">Early Historic Period</a></li>
            <li><a href="URL12">Historical Maps and Photographs</a></li>
            <li><a href="URL13">Previous Archaeology</a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);
}
