import React from "react";

import "./Person.css";
const Person = ({ person }) => {
  console.log(person);
  const { name, gender, country, birthday, deathday, image } = person?.person;
  return (
    <div className="person">
      <h1>{name}</h1>
      <div className={`person__center ${!image} && person__noimage`}>
        {image ? (
          <img src={image?.original} alt="person" />
        ) : (
          <h1>Opps!!, No image for {name}</h1>
        )}
      </div>

      <div className="person__details">
        <div className="person__details__row">
          <span>Country</span>
          <span>{country ? country?.name : "Unknown"}</span>
        </div>
        <div className="person__details__row">
          <span>Birthday</span>
          <span>{birthday ? birthday : "Unknown"}</span>
        </div>
        <div className="person__details__row">
          <span>Deathday</span>
          <span>{deathday ? deathday : "Unknown"}</span>
        </div>
        <div className="person__details__row">
          <span>Gender</span>
          <span>{gender ? gender : "Unknown"}</span>
        </div>
      </div>
    </div>
  );
};

export default Person;
