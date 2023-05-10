import React, { useCallback, useState, useEffect, useMemo } from "react";

import Item from "./Item";
import "./App.css";

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const App = ({ items }) => {
  const [itemList, setItemList] = useState([]);

  const selectedItems = useMemo(() => {
    return itemList
      .reduce((acc, item) => {
        if (item.selected) {
          return [...acc, item.name];
        }
        return acc;
      }, [])
      .join(",");
  }, [itemList]);

  useEffect(() => {
    setItemList(
      items.map((item) => ({
        ...item,
        selected: false,
      }))
    );
  }, [items]);

  const handleClickItem = useCallback((name) => {
    setItemList((prevItems) =>
      prevItems.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      })
    );
  }, []);

  return (
    <>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        {selectedItems}
      </h3>
      <ul className="List">
        {itemList.map((item) => (
          <Item
            key={item.name}
            name={item.name}
            color={item.color}
            selected={item.selected}
            onClick={handleClickItem}
          />
        ))}
      </ul>
    </>
  );
};

export default App;
