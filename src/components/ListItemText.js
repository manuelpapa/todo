import React from "react";

function ListItemText({ primary, secondary, third }) {
  return (
    <div className="listItemText">
      <span className="listItemText___primary">{primary}</span>
      <span className="listItemText___secondary">{secondary}</span>
      <span className="third">{third}</span>
    </div>
  );
}

export default ListItemText;
