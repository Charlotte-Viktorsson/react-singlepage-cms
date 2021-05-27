import React from "react";

function TableBody(props) {
  const { people, currentSort } = props;

  //const rows = [...people].sort(sortTypes[currentSort].fn).map((row, index) => (
  const rows = [...people]
    .sort((a, b) => {
      if (a.FirstName < b.FirstName) {
        return currentSort === "up" ? -1 : 1;
      } else if (a.FirstName > b.FirstName) {
        return currentSort === "up" ? 1 : -1;
      } else {
        return 0;
      }
    })
    .map((row, index) => (
      <tr key={index}>
        <td>{row.FirstName}</td>
        <td>{row.LastName}</td>
        <td>{row.PhoneNumber}</td>
        <td>{row.City}</td>
        <td>{row.Country}</td>
        <td>
          <button onClick={() => props.fncPersonDetails(row.id)}>
            Details
          </button>
        </td>
      </tr>
    ));
  return <tbody>{rows}</tbody>;
}

export default TableBody;
