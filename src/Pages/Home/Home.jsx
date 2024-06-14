import wkipImage from "../../assets/WKIP.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-background"></div>
      <header className="header-section">
        <h1>NOHOPAPA DATABASE</h1>
<div className="welcome-section-container">
        <section className="welcome-section">
        <p>Welina mai</p>
        <p>
          The Nohopapa Database is a centralized database
          for the purpose of being able to organize resources within our hui.
          While this repository only contains reports and links at this time, it
          is with hope that it will expand to having all of our historic images,
          maps, and other collections in the future.
        </p>
        </section>
        </div>

      </header>

      <main className="main-content">
        <section className="get-started">
          <h2>How to get started</h2>
          <ol>
            <li>
              <p>1. USE THE REPOSITORY </p>
              <p>
              You can use the
                Library resources page for a list of external online resources and
                repositories that can be used for primary research!
              </p>
              <p>Feel free to also check out our Nohopapa Database to see 
                our internal reports weʻve created. </p>
            </li>
            <li>
              <p>2. CONTRIBUTE</p>
              <p>
                Help grow the our research resources! 
              </p>
              <p>
             To add a new resource, head to the Library Resources page and filling out the form.
              </p>
            </li>
          </ol>
        </section>

        <div className="image-placeholder">
            <img src={wkipImage} alt="Placeholder Image" />
        </div>

        <aside className="explore-section">
          <h2>Quick Links</h2>
          <ul>
            <li>PLACE NAMES</li>
            <li>BOUNDARY COMMISSION TESTIMONY</li>
            <li>MELE AND ʻOLELO NOʻEAU</li>
            <li>MOʻOLELO</li>

            <li>BOUNDARIES</li>
            <li>SOILS</li>
            <li>NAME OF UA</li>
            <li>NAME OF MAKANI</li>
            <li>PLANT SPECIES</li>

            <li>EARLY HISTORIC PERIOD</li>
            <li>KULEANA ACT</li>
            <li>PLANTATION AND RANCHING ERAS</li>
            <li>PREVIOUS ARCHEOLOGY GENERAL RESOURCES</li>
            <li>GENERAL</li>

          </ul>
        </aside>

      </main>

      <footer className="footer">
        <p>© 2024 by Created by Lilia Merrin </p>
      </footer>

    </div>
  );
}
