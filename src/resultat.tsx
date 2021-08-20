import React, { useState } from "react";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import Nom from "./exemple_pdf/fiche_nom";

const télecharger = () => {
  const doc = new jsPDF("p", "mm", "a4");
  console.log(ReactDOMServer.renderToStaticMarkup(Nom()));
  doc.html(ReactDOMServer.renderToStaticMarkup(Nom()), {
    callback: function (doc) {
      doc.save("monguideloyer.pdf");
    },
    x: 10,
    y: 10,
    html2canvas: {
      width: 10000,
    },
  });
  
};

interface Props {
  mobilier: string;
  annee: string;
  piece: string;
  secteur: number | null;
  surface: number | null;
  données_meublé: d3.DSVRowArray<string> | null;
  données_non_meublé: d3.DSVRowArray<string> | null;
  montant: number | null;
}

export function Resultat(props: Props) {
  const [loyer, setLoyer] = useState<number | null>(null);

  if (
    !props.données_meublé ||
    !props.données_non_meublé ||
    !props.secteur ||
    !props.surface ||
    props.piece === "" ||
    props.annee === "" ||
    props.mobilier === "" ||
    !props.montant
  ) {
    return null;
  }




  if (loyer && loyer < props.montant) {
    return (
      <div className= "resultats">
<p>Loyer maximal autorisé: {loyer}euros </p>
  <br>
  </br>
<p>
  Votre propriétaire ne respecte pas l'encadrement des loyers. Retrouvez notre guide pour faire respecter vos droits sur le bouton ci-dessous. 
 
</p>
<button type="button" onClick={télecharger}>
            Votre guide
          </button>
      </div>
    );
  }
  else if (loyer && loyer > props.montant) {
    return(
<div className= "resultats">
<p>Loyer maximal autorisé: {loyer}euros </p>
  <br>
  </br>
  <p>
    Ton propriétaire respecte l'encadrement des loyers.
  </p>
  

        
      </div>
    );
  } 
  else if (loyer && loyer === props.montant) {
    return (
<div className= "resultats">
<p>Loyer maximal autorisé: {loyer}euros </p>
  <br>
  </br>
  <p>
    Ton propriétaire respecte l'encadrement des loyers.
  </p>
  

        
</div>
    );

  }



  if (props.mobilier === "meuble") {
    let tableau = props.données_meublé
      .filter(
        (d) =>
          parseInt(d["Secteur géographique"]!, 10) === props.secteur &&
          d["Epoque de construction"] === props.annee &&
          d["Nombre de pièces"] === props.piece
      )
      .map((d, i) => {
        setLoyer(parseFloat(d["Loyer de référence majoré"]!) * props.surface!);
        return (
          <tr key={i}>
            <td>{d["Secteur géographique"]}</td>
            <td>{d["Loyer de référence majoré"]}</td>
            <td>{loyer}</td>
            <td>{props.montant}</td>
          </tr>
        );
      });
    return (
      <table>
        <tbody>
          <tr>
            <th>Secteur géographique</th>
            <th>Loyer de référence</th>
            <th>Loyer calculé</th>
            <th>Votre loyer</th>
          </tr>
          {tableau}
        </tbody>
      </table>
    );
  } else if (props.mobilier === "nonmeuble") {
    let tableau = props.données_non_meublé
      .filter(
        (d) =>
          parseInt(d["Secteur géographique"]!, 10) === props.secteur &&
          d["Epoque de construction"] === props.annee &&
          d["Nombre de pièces"] === props.piece
      )
      .map((d, i) => {
        setLoyer(parseFloat(d["Loyer de référence majoré"]!) * props.surface!);
        return (
          <tr key={i}>
            <td>{d["Secteur géographique"]}</td>
            <td>{d["Loyer de référence majoré"]}</td>
            <td>{loyer}</td>
            <td>{props.montant}</td>
          </tr>
        );
      });
    return (
      <table>
        <tbody>
          <tr>
            <th>Secteur géographique</th>
            <th>Loyer de référence</th>
            <th>Loyer calculé</th>
            <th>Votre loyer</th>
          </tr>
          {tableau}
        </tbody>
      </table>
    );
  }
  alert("ERREUR : logique non atteignable dans resultats atteint");
  return null;
}
