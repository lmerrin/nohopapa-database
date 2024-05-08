import "./Home.css";
import wkipImage from "../../assets/WKIP.png"

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-background"></div>
      <header className="header-section">
        <h1>NOHOPAPA DATABASE</h1>
        <p>Welina mai</p>
        <p>
          The Nohopapa Database is a centralized and fully searchable database
          for the purpose of being able to organize resources within our hui.
          While this repository only contains reports and links at this time, it
          is with hope that it will expand to having all of our historic images,
          maps, and collections in the future
        </p>
      </header>

      <main className="main-content">
        <section className="get-started">
          <h2>How to get started</h2>
          <ol>
            <li>
              <p>1. USE THE REPOSITORY </p>
              <p>
                You can use the search bar in the repository to look anything
                up—reports, authors, names, places. Feel free to also use the
                resources page for a list of other external online resources and
                repositories that can be used for primary research!
              </p>
            </li>
            <li>
              <p>2. CONTRIBUTE</p>
              <p>
                Help grow the database by clicking contribute and filling out
                the form.
              </p>
            </li>
          </ol>
        </section>

        <div className="image-placeholder">
            <img src={wkipImage} alt="Placeholder Image" />
        </div>

        <aside className="explore-section">
          <h2>Explore</h2>
          <ul>
            <li>ENVIRONMENTAL LANDSCAPE</li>
            <li>CULTURAL LANDSCAPE</li>
            <li>HISTORICAL LANDSCAPE</li>
            <li>KULEANA ACT</li>
            <li>EARLY HISTORIC PERIOD</li>
            <li>HISTORIC MAPS</li>
          </ul>
        </aside>

      </main>

      <footer>
        <p>Copyright © 2024 Lilia Website Designs</p>
      </footer>

    </div>
  );
}
