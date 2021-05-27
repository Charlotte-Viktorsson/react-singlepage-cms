import React from "react";

function Details(props) {
  //console.log(props);
  const { myPerson: person } = props;
  console.log("details", props.myPerson);

  return (
    <div>
      <form>
        <label>FirstName</label>
        <input readonly type="text" value={person.FirstName}></input>
        <label>LastName</label>
        <input readonly type="text" value={person.LastName}></input>
        <label>PhoneNr</label>
        <input readonly type="text" value={person.PhoneNumber}></input>
        <label>City</label>
        <input readonly type="text" value={person.City}></input>
        <label>Country</label>
        <input readonly type="text" value={person.Country}></input>
        <label>Languages</label>
        {props.myPerson.Languages.map((language) => (
          <input
            key={language.id}
            type="text"
            readonly
            value={language.name}
          ></input>
        ))}
        <button
          onClick={() => {
            props.fncDeletePerson(props.myPerson.id);
          }}
        >
          Delete person
        </button>
      </form>
      <button onClick={() => props.changeView("Table")}>Back to Table</button>
    </div>
  );
}
export default Details;
