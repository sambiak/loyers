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
  const [secteur, setSecteur] = useState<number | null>(null);

  useEffect(() => {
    d3.dsv(";", "loyersdereferencemeuble.csv").then((data) => {
      setMeublé(data);
      console.log("meublé:", data);
    });
  }, []);

  return (
    <div className="App">
      <Adresse secteur={secteur} setSecteur={setSecteur} />
      <Entree_surface surface={surface} setSurface={setSurface} />
      <Entree_piece piece={piece} setPiece={setPiece} />
      <Entree_annee annee={annee} setAnnee={setAnnee} />
      <Entree_mobilier mobilier={mobilier} setMobilier={setMobilier} />
      <table>
        <tbody>
          <tr>
            <th>Secteur géographique</th>
            <th>Loyer de référence</th>
          </tr>

          {meublé &&
            meublé
              .filter(
                (d) => parseInt(d["Secteur géographique"]!, 10) === secteur
              )
              .map((d,i) => (
                <tr key={i}>
                  <td>{d["Secteur géographique"]}</td>
                  <td>{d["Loyer de référence"]}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
