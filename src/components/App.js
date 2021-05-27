import React, { useState } from "react";
import Table from "./Table";
import Details from "./Details";
import myPeople from "../people";

function App() {
  const [currentView, setView] = useState("Table");
  const [personToShow, setPersonToShow] = useState("null");
  const [persons, setPersons] = useState(myPeople);

  function showPersonDetails(person) {
    setPersonToShow(person);
    setView("Details");
  }

  function changeView(viewName) {
    setView(viewName);
  }

  function removePerson(id) {
    console.log("remove id:", id);
    setPersons(
      persons.filter((pers) => {
        return id !== pers.id;
      })
    );
    changeView("Table");
  }

  return (
    <div>
      <header>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {currentView === "Table" ? (
        <Table
          changeView={changeView}
          myPeople={persons}
          showPersonDetails={showPersonDetails}
        />
      ) : null}
      {currentView === "Details" ? (
        <Details
          changeView={changeView}
          myPerson={personToShow}
          fncDeletePerson={removePerson}
        />
      ) : null}
    </div>
  );
}

export default App;
