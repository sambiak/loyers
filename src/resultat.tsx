import React from "react";

interface Props {
  mobilier: string;
  annee: string;
  piece: string;
  secteur: number | null;
  surface: number | null;
  données_meublé: d3.DSVRowArray<string> | null;
  données_non_meublé: d3.DSVRowArray<string> | null;
  montant : number | null;
}

export function Resultat(props: Props) {
  if (
    !props.données_meublé ||
    !props.données_non_meublé ||
    !props.secteur ||
    !props.surface ||
    props.piece === "" ||
    props.annee === "" ||
    props.mobilier === ""
  ) {
    return null;
  }
  if (props.mobilier === "meuble") {
    let tableau = props.données_meublé
      .filter(
        (d) =>
          parseInt(d["Secteur géographique"]!, 10) === props.secteur &&
          d["Epoque de construction"] === props.annee &&
          d["Nombre de pièces"] === props.piece
      )
      .map((d, i) => (
        <tr key={i}>
          <td>{d["Secteur géographique"]}</td>
          <td>{d["Loyer de référence"]}</td>
          <td>{parseInt(d["Loyer de référence"]!, 10)*props.surface! }</td>
          <td>{props.montant}</td>
        </tr>
      ));
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
      .map((d, i) => (
        <tr key={i}>
          <td>{d["Secteur géographique"]}</td>
          <td>{d["Loyer de référence"]}</td>
          <td>{parseInt(d["Loyer de référence"]!, 10)*props.surface! }</td>
          <td>{props.montant}</td>
        </tr>
      ));
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
