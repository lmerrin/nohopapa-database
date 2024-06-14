import React from "react";
import "./MultiSelectCheckBox.css";
import RcCheckbox from "rc-checkbox";

/* Accepts array of item objects, and a key to use as the display value */

export default function MultiSelectCheckBox({
  items,
  displayKey,
  onItemChecked,
  onItemUnchecked,
}) {
  /*const [checkableItems, setCheckableItems] = useState(items.map((first) => { second }))*/

  return (
    <ul className="checkbox-list">
      {items.map((item) => {
        return (
          <li key={item[displayKey]} className="checkable-item">
            <RcCheckbox
              onChange={(e) => {
                if (e.target.checked) {
                  onItemChecked(item);
                } else {
                    onItemUnchecked(item);
                } 
              }}
            />
            <p>{item[displayKey]}</p>
          </li>
        );
      })}
    </ul>
  );
}
