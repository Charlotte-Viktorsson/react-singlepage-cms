import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table(props) {
  const persons = props.myPeople;
  const [currentSort, setSort] = useState("default");

  function onSortChange(clickedSign) {
    console.log("onSortChange", clickedSign);
    if (clickedSign === "A-Ö") {
      setSort("up");
    } else if (clickedSign === "Ö-A") {
      setSort("down");
    } else {
      setSort("default");
    }
  }

  function personDetails(id) {
    console.log("Table. personDetails", id);
    let personToShow = persons.filter((pers) => {
      return id === pers.id;
    });
    props.showPersonDetails(personToShow[0]);
  }

  return (
    <div>
      <table>
        <TableHeader onSortChange={onSortChange} />
        <TableBody
          people={persons}
          fncPersonDetails={personDetails}
          currentSort={currentSort}
        />
      </table>
    </div>
  );
}

export default Table;
