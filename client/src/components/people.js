import React, { useEffect, useState } from "react";
import axios from "axios";

export default function People() {
  const URL = "http://swapi.dev/api/people/";
  const [people, setPeople] = useState([]);

  const newPerson = async () => {
    await axios.get(URL).then((res) => {
      // console.log(res.data.results);
      setPeople(res.data.results);
    });
  };

  useEffect(() => {
    newPerson();
  }, [setPeople]);
  console.log(people);

  let newCard;
  if (people.length >= 0) {
    newCard = people.map(function (person, index) {
      console.log(person);
      return (
        <div className="people__card-div" key={index}>
          <div className="people__card-info">
            <h4 className="people__card-info--name">{person.name}</h4>
            <p className="people__card-info--name">
              Birth Year: {person.birth_year}
            </p>
            <p className="people__card-info--name">Mass: {person.mass}</p>
            <p className="people__card-info--name">Gender: {person.gender}</p>
            <p className="people__card-info--name">
              Skin Colour: {person.skin_color}
            </p>
            <p className="people__card-info--name">
              Hair Colour: {person.hair_color}
            </p>
            <p className="people__card-info--name">
              Eye Colour: {person.eye_color}
            </p>
            <p className="people__card-info--name">
              Home World: <a href={person.homeworld}>Click here</a>
            </p>
          </div>
        </div>
      );
    });
  }

  return <div className="people">{newCard}</div>;
}
