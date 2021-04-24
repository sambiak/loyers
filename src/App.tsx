import React, { useEffect, useState } from "react";
import d3 from "./assets/d3";
import "./App.css";
import { Adresse } from "./Adresse";
import { Entree_surface } from "./surface";
import { Entree_piece } from "./piece";
import { Entree_annee } from "./annee";
import { Entree_mobilier } from "./mobilier";
import { Resultat } from "./resultat";

function App() {
  const [données_meublé, setMeublé] = useState<d3.DSVRowArray<string> | null>(null);
  const [données_non_meublé, setNonMeublé] = useState<d3.DSVRowArray<string> | null>(null);
  const [surface, setSurface] = useState<number>(0);
  const [piece, setPiece] = useState<string>("");
  const [annee, setAnnee] = useState<string>("");
  const [mobilier, setMobilier] = useState<string>("");
  const [secteur, setSecteur] = useState<number | null>(null);

  useEffect(() => {
    d3.dsv(";", "loyersdereferencemeuble.csv").then((data) => {
      setMeublé(data);
    });
  }, []);

  useEffect(() => {
    d3.dsv(";", "loyersdereferencenonmeuble.csv").then((data) => {
      setNonMeublé(data);
    });
  }, []);

  return (
    <div className="App">
      <Adresse secteur={secteur} setSecteur={setSecteur} />
      <Entree_surface surface={surface} setSurface={setSurface} />
      <Entree_piece piece={piece} setPiece={setPiece} />
      <Entree_annee annee={annee} setAnnee={setAnnee} />
      <Entree_mobilier mobilier={mobilier} setMobilier={setMobilier} />
      <Resultat 
        mobilier={mobilier} 
        annee={annee} 
        piece={piece} 
        secteur={secteur}
        surface={surface}
        données_meublé={données_meublé}
        données_non_meublé={données_non_meublé}        
        ></Resultat>
    </div>
  );
}

export default App;
