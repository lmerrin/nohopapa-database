import ResourceCategory from "./ResourceCategory";
import "./LibraryResources.css";

//If Navigation Breaks
const categoryPageLinks = {
  "Environmental Landscape": "Environmental-Landscape",
  "Cultural Landscape": "Cultural-Landscape",
  "Historical Landscape": "Historical-Landscape",
};

export default function LibraryResources({ categories }) {
  return (
    <div className="library-resources-container">
      <div className="library-background"></div>

      {/* Main content section */}
      <section className="resources-section">
        <h1>Library Resources</h1>
        <div className="resource-categories">
          {categories.map((category) => {
            return (
              <ResourceCategory
                key={category.id}
                title={category.name}
                subcategories={category.subcategories}
                link={categoryPageLinks[category.name]}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
