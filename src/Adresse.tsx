import React, { useState } from "react";


export interface Gps {
    type:        string;
    version:     string;
    features:    Feature[];
    attribution: string;
    licence:     string;
    query:       string;
    limit:       number;
}

export interface Feature {
    type:       string;
    geometry:   Geometry;
    properties: Properties;
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    label:        string;
    score:        number;
    housenumber?: string;
    id:           string;
    name:         string;
    postcode:     string;
    citycode:     string;
    x:            number;
    y:            number;
    city:         string;
    context:      string;
    type:         string;
    importance:   number;
    street?:      string;
}


export function Adresse(props: any) {
  const [name, setName] = useState("");
  const [cordonnés, setCord] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    let requete = `https://api-adresse.data.gouv.fr/search/?q=${name}`
    alert(`Requete ${requete}`);
    fetch(requete)
      .then((response) => response.json())
      .then((data:Gps) => {
        console.log(data);
        setCord(data.features[0].geometry.coordinates.toString());

    });
  };
  return (
      
    <form onSubmit={handleSubmit}>
        <p>
          Vos coordonées : {cordonnés}
      </p>
      <label>
        Adresse:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
