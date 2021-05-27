import React from "react";

const TableHeads = (props) => {
  return (
    <thead>
      <tr>
        <th>
          First name
          <button onClick={() => props.onSortChange("A-Ö")}>A-Ö</button>
          <button onClick={() => props.onSortChange("Ö-A")}>Ö-A</button>
        </th>
        <th>Last name</th>
        <th>Phone</th>
        <th>City</th>
        <th>Country</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeads;
