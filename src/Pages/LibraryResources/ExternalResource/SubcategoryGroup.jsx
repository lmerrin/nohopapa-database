import React from "react";
import { capitalizeWords } from "../utils";

export default function SubcategoryGroup({ title, links = [] }) {
  return (
    <div className="category">
      <h2>{capitalizeWords(title)}</h2>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url} target="_blank">
                {capitalizeWords(link.title)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
