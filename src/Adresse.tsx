import React, { useEffect, useState } from "react";
import { CartesArrondissement } from "./assets/carte";
import { Globe } from "./globe";
import d3 from "./assets/d3";

export interface Gps {
  type: string;
  version: string;
  features: Feature[];
  attribution: string;
  licence: string;
  query: string;
  limit: number;
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: [number, number];
}

export interface Properties {
  label: string;
  score: number;
  housenumber?: string;
  id: string;
  name: string;
  postcode: string;
  citycode: string;
  x: number;
  y: number;
  city: string;
  context: string;
  type: string;
  importance: number;
  street?: string;
}

interface Props{
  secteur:number|null
  setSecteur:React.Dispatch<React.SetStateAction<number | null>>
}

export function Adresse(props: Props) {
  const [name, setName] = useState("");
  const [cordonnés, setCord] = useState<[number, number] | null>(null);
  const [carte, setCarte] = useState<CartesArrondissement | null>(null);
  const [quartier, setQuartier] = useState<number | null>(null);
  const [quartiers, setQuartiers] = useState<Record<number, number> | null>(
    null
  );

  useEffect(() => {
    fetch("quartier_paris.geojson")
      .then((response) => response.json())
      .then((response) => setCarte(response))
      .catch((error) => console.log("erreur chargement", error));
  }, []);

  useEffect(() => {
    d3.csv("quartiers_paris.csv")
      .then((data) => {
        console.log(data[0]);
        let map: Record<number, number> = {};
        for (let entry of data) {
          let quartier = parseInt(entry["Quartier administratif"]!, 10);
          let secteur = parseInt(entry["Secteur géographique"]!, 10);
          console.log(entry); // 1, "string", false
          map[quartier] = secteur;
        }
        console.log(map);
        setQuartiers(map);
      })
      .catch((error) => console.log("erreur chargement", error));
  }, []);

  useEffect(() => {
    console.log("dom modified", quartier, quartiers);
    if (quartier && quartiers) {
      props.setSecteur(quartiers[quartier]);
    }
  }, [quartiers, quartier, props]);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    let requete = `https://api-adresse.data.gouv.fr/search/?q=${name + "Paris"}`;
    fetch(requete)
      .then((response) => response.json())
      .then((data: Gps) => {
        console.log(data);
        setCord(data.features[0].geometry.coordinates);
      });
  };
  return (
   
    <form onSubmit={handleSubmit}>
       <div className ="adresse">
      <label>
        Adresse:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      


      </label>
      </div>
     
      <input type="submit" value="Submit" />
      <Globe
        carte={carte}
        GPS={cordonnés}
        quartier={quartier}
        setQuart={setQuartier}
      ></Globe>
    </form>
  );
}
