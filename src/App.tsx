import React, { useEffect, useState } from "react";
import d3 from "./assets/d3";
import "./App.css";
import { Adresse } from "./Adresse";
import { EntreeSurface } from "./surface";
import { EntreePiece } from "./piece";
import { EntreeAnnee } from "./annee";
import { EntreeMobilier } from "./mobilier";
import { Resultat } from "./resultat";
import { EntreeMontant } from "./montantloyer";


function App() {
  const [données_meublé, setMeublé] = useState<d3.DSVRowArray<string> | null>(
    null
  );
  const [
    données_non_meublé,
    setNonMeublé,
  ] = useState<d3.DSVRowArray<string> | null>(null);
  const [surface, setSurface] = useState<number>(0);
  const [piece, setPiece] = useState<string>("1");
  const [annee, setAnnee] = useState<string>("< 1946");
  const [mobilier, setMobilier] = useState<string>("meuble");
  const [secteur, setSecteur] = useState<number | null>(null);
  const [montant, setMontant] = useState<number>(0); 
  let rempli =
    !données_meublé ||
    !données_non_meublé ||
    !secteur ||
    !surface ||
    piece === "" ||
    annee === "" ||
    mobilier === "";

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

  let questions = (
    <div>
      <EntreeSurface surface={surface} setSurface={setSurface} />
      <EntreePiece piece={piece} setPiece={setPiece} />
      <EntreeAnnee annee={annee} setAnnee={setAnnee} />
      <EntreeMobilier mobilier={mobilier} setMobilier={setMobilier} />
      <EntreeMontant montant={montant} setMontant={setMontant}/>
    </div>
  );

  return (
    <div className="App">
      {rempli && questions}
      <Adresse secteur={secteur} setSecteur={setSecteur} />
      <Resultat
        mobilier={mobilier}
        annee={annee}
        piece={piece}
        secteur={secteur}
        surface={surface}
        données_meublé={données_meublé}
        données_non_meublé={données_non_meublé}
        montant = {montant}
      ></Resultat>

      
      
    </div>
  );
}

export default App;
