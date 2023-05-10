import React, { memo } from "react";
import clsx from "clsx";

const Item = ({ name, color, selected, onClick }) => {
  console.log("render");
  const handleClick = () => {
    if (onClick) {
      onClick(name);
    }
  };
  return (
    <li
      key={name}
      className={clsx(`List__item List__item--${color}`, {
        "List__item--selected": selected,
      })}
      onClick={handleClick}
    >
      {name}
    </li>
  );
};

export default memo(Item);
