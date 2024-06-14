import { useCallback, useEffect, useState } from "react";
import "./ExternalResourcePage.css";
import api from "../../../api";
import SubcategoryGroup from "./SubcategoryGroup";
import { useNavigate, useParams } from "react-router";
import { replaceDashesWithSpaces } from "../utils";
import ConfirmDialog from "../../../Components/ConfirmDialoge/ConfirmDialog";
import { and } from "firebase/firestore";

export default function ExternalResourcePage() {
  const [category, setCategory] = useState(null);
  const [externalResources, setExternalResources] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [onDeleteResourceHandler, setOnDeleteResourceHandler] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const categoryName = replaceDashesWithSpaces(params.categoryName);

  const downloadExternalResources = useCallback(async () => {
    try {
      const category = await api.fetchResouceCategoryByName(categoryName);
      console.log("Category is ", category);
      setCategory(category);
      const externalResources = await api.fetchExternalResourcesByCategoryId(
        category.id
      );
      console.log(externalResources);
      setExternalResources(externalResources);
    } catch (error) {
      console.log(error);
    }
  }, [categoryName]);

  useEffect(() => {
    console.log("Effect Executed");
    downloadExternalResources();
  }, [downloadExternalResources]);

  return (
    category && (
      <div className="landscape-container">
        <div className="landscape-background"></div>

        <section className="resources-section">
          <h1>{category.name}</h1>
          <div className="landscape-categories">
            {category.subcategories.map((subcategory) => {
              const resources = externalResources.filter((resource) => {
                return resource.subcategory === subcategory;
              });
              return (
                <SubcategoryGroup
                  key={subcategory}
                  title={subcategory}
                  links={resources}
                  onDeleteResourceHandler={(resourceId) => {
                    setShowDialog(true);
                    const handler = async () => {
                      await api.deleteExternalResourceById(resourceId);
                      downloadExternalResources();
                      setShowDialog(false);
                    };
                    setOnDeleteResourceHandler(() => {
                      return handler;
                    });
                  }}
                />
              );
            })}
          </div>
        </section>
        {showDialog && (
          <ConfirmDialog
            message={"Are you sure you want to delete this resource?"}
            onDelete={onDeleteResourceHandler}
            onCancel={() => {
              setShowDialog(false);
            }}
          />
        )}
        <button
          className="back-button"
          onClick={() => navigate("/Library-Resources")}
        >
          Back to Library Resources
        </button>

        <footer className="footer">
          <p>© 2024 by Created by Lilia Merrin</p>
        </footer>
      </div>
    )
  );
}
