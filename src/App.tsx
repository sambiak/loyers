import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import d3 from "./assets/d3";
import "./App.css";
import { Adresse } from "./Adresse";
import { Entree_surface } from "./surface";
import { Entree_piece } from "./piece";
import { Entree_annee } from "./annee";
import { Entree_mobilier } from "./mobilier";

function App() {
  const [meublé, setMeublé] = useState<d3.DSVRowArray<string> | null>(null);
  const [surface, setSurface] = useState<number>(0);
  const [piece, setPiece] = useState<string>("");
  const [annee, setAnnee] = useState<string>("");
  const [mobilier, setMobilier] = useState<string>("");

  useEffect(() => {
    d3.dsv(";", "loyersdereferencemeuble.csv").then((data) => {
      
      setMeublé(data);
      console.log("meublé:", meublé, data);

    });
  }, []);

  return (
    <div className="App">
      <Adresse></Adresse>
      <Entree_surface surface={surface} setSurface={setSurface} />
      <Entree_piece piece={piece} setPiece={setPiece} />
      <Entree_annee annee={annee} setAnnee={setAnnee} />
      <Entree_mobilier mobilier={mobilier} setMobilier={setMobilier} />
    </div>
  );
}

export default App;
