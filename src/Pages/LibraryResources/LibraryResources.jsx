import ResourceCategory from "./ResourceCategory";
import "./LibraryResources.css";
import { useState, useEffect } from "react";
import api from "../../api";

//If Navigation Breaks
const categoryPageLinks = {
  "Environmental Landscape": "Environmental-Landscape",
  "Cultural Landscape": "Cultural-Landscape",
  "Historical Landscape": "Historical-Landscape",
};

export default function LibraryResources() {
  const [categories, setCategories] = useState([]);
  const [activeSubcategories, setActiveSubcategories] = useState([]);

  //Added Form Variable here
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    title: "",
    url: "",
  });

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

  //Added For Handle Change and Submit Here
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    if (categoryId === formData.category) return;
    console.log(categoryId);

    setFormData({
      ...formData,
      category: categoryId,
      subcategory: "",
    });
    const activeCategory = categories.find(
      (category) => category.id === categoryId
    );
    console.log(activeCategory);
    setActiveSubcategories(activeCategory.subcategories);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newResource = {
        category: formData.category,
        subcategory: formData.subcategory,
        title: formData.title,
        url: formData.url,
      };
      await api.addResource(newResource);
      setFormData({
        category: "",
        subcategory: "",
        title: "",
        url: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

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

      {/*Form section*/}
      <section className="resource-form-section">
        <h2>Add New Resource</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Subcategory:
            <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              required
              disabled={!formData.category}
            >
              <option value="">Select Subcategory</option>
              {formData.category &&
                activeSubcategories.map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
            </select>
          </label>

          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            URL:
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              placeholder="https://"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </section>
      <footer className="footer">
        <p>© 2024 by Created by Lilia Merrin </p>
      </footer>
    </div>
  );
}
