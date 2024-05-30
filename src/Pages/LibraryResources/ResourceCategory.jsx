import React from "react";
import { Link } from "react-router-dom";
import { capitalizeWords } from "./utils";

export default function ResourceCategory({ title, subcategories = [], link }) {
  return (
    <div className="category">
      <h2>{title}</h2>
      <ul>
        {subcategories.map((subcategory) => {
          return (
            <li key={subcategory}>
              <Link to={link}>{capitalizeWords(subcategory)}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
