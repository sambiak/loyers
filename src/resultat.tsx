import React, { useEffect, useState } from "react";

interface Props {
  mobilier: string;
  annee: string;
  piece: string;
  secteur: number | null;
  surface: number | null;
  données_meublé: d3.DSVRowArray<string> | null;
  données_non_meublé: d3.DSVRowArray<string> | null;
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
    
  } else if (props.mobilier === "nonmeuble") {
  }
  return null;
}
