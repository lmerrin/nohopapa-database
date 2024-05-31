import { useEffect, useState } from "react";
import "./ExternalResourcePage.css";
import api from "../../../api";
import SubcategoryGroup from "./SubcategoryGroup";
import { useParams } from "react-router";
import { replaceDashesWithSpaces } from "../utils";

const environmentalLandscape = [
  {
    category: "Boundaries",
    links: [
      {
        title: "Maly and Maly - Kumupono Associates",
        url: "https://www.kumupono.com/",
      },
      { title: "Boundary Commission Testimony", url: "#" },
      { title: "Ava Konohiki", url: "http://avakonohiki.weebly.com/" },
      { title: "Papakilo", url: "#" },
      { title: "Ulukau", url: "#" },
      { title: "Kipuka", url: "#" },
      {
        title: "Native or Foreign Registers and Native or Foreign Testimony",
        url: "#",
      },
      {
        title:
          "Department of Account and General Services (DAGS) Historical Maps",
        url: "#",
      },
      { title: "USGS Topo Maps", url: "#" },
    ],
  },
  {
    category: "Soils",
    links: [
      { title: "Five Island Soil Survey", url: "#" },
      { title: "Soil Survey of Hawaiʻi Island", url: "#" },
      { title: "Hawaii Soil Atlas", url: "#" },
      { title: "Soil (SF) - State of Hawaii", url: "#" },
    ],
  },
  {
    category: "Rainfall Data",
    links: [
      { title: "Rainfall Atlas of Hawaiʻi", url: "#" },
      { title: "Giambelluca", url: "#" },
      { title: "National Weather Service", url: "#" },
      { title: "U.S. Climate Data", url: "#" },
    ],
  },
  {
    category: "Names of Ua",
    links: [
      { title: "Akana and Gonzales - Hānau Ka Ua", url: "#" },
      { title: "Hawaiian Language Newspapers", url: "#" },
      { title: "Alvarado 2005 - Index of Rains", url: "#" },
      { title: "Ka Moʻolelo o Hiʻiakaikapoliopele", url: "#" },
      { title: "Laʻieikawai", url: "#" },
      { title: "Maly and Maly (any report) - Kumupono Associates", url: "#" },
    ],
  },
  {
    category: "Names of Makani",
    links: [
      { title: "Na Makani o ka Moku Puni", url: "#" },
      { title: "Joseph Poepoe", url: "#" },
      { title: "Silva 2020 - Lawe i ke ʻŌ", url: "#" },
      { title: "Ka Moʻolelo o Hiʻiakaikapoliopele", url: "#" },
      { title: "Laʻieikawai", url: "#" },
      { title: "Maly and Maly - Kumupono Associates", url: "#" },
    ],
  },
  {
    category: "Plant Species",
    links: [
      {
        title: "Handy and Handy Pukui 1991 - Native Planters In Old Hawaii",
        url: "#",
      },
      { title: "Krauss - Plants in Hawaiian Culture", url: "#" },
      { title: "Bishop Museum Ethnobotany Online Database", url: "#" },
    ],
  },
];

export default function ExternalResourcePage() {
  const [category, setCategory] = useState(null);
  const [enviornmentalResources, setEnviornmentalResources] = useState([]);
  const params = useParams();
  const categoryName = replaceDashesWithSpaces(params.categoryName);

  useEffect(() => {
    console.log("Effect Executed");
    const downloadEnviornmetalResources = async () => {
      try {
        const category = await api.fetchResouceCategoryByName(categoryName);
        console.log("Category is ", category);
        setCategory(category);
        const enviornmentalResources =
          await api.fetchExternalResourcesByCategoryId(category.id);
        console.log(enviornmentalResources);
        setEnviornmentalResources(enviornmentalResources);
      } catch (error) {
        console.log(error);
      }
    };
    downloadEnviornmetalResources();
  }, [categoryName]);

  return (
    category && (
      <div className="environmental-landscape-container">
        <h1>{category.name}</h1>
        <div className="landscape-categories">
          {category.subcategories.map((subcategory) => {
            const resources = enviornmentalResources.filter((resource) => {
              return resource.subcategory === subcategory;
            });
            return (
              <SubcategoryGroup
                key={subcategory}
                title={subcategory}
                links={resources}
              />
            );
          })}
        </div>
      </div>
    )
  );
}
