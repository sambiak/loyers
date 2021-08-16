import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import d3 from "./assets/d3";
import "./App.css";
import { Adresse } from "./Adresse";
import { Entree_surface } from "./surface";
import { Entree_piece } from "./piece";
import { Entree_annee } from "./annee";
import { Entree_mobilier } from "./mobilier";
import { Resultat } from "./resultat";
import { Entree_montant } from "./montantloyer";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function App() {
    var _a = useState(null), données_meublé = _a[0], setMeublé = _a[1];
    var _b = useState(null), données_non_meublé = _b[0], setNonMeublé = _b[1];
    var _c = useState(0), surface = _c[0], setSurface = _c[1];
    var _d = useState("1"), piece = _d[0], setPiece = _d[1];
    var _e = useState("< 1946"), annee = _e[0], setAnnee = _e[1];
    var _f = useState("meuble"), mobilier = _f[0], setMobilier = _f[1];
    var _g = useState(null), secteur = _g[0], setSecteur = _g[1];
    var _h = useState(0), montant = _h[0], setMontant = _h[1];
    var rempli = !données_meublé ||
        !données_non_meublé ||
        !secteur ||
        !surface ||
        piece === "" ||
        annee === "" ||
        mobilier === "";
    useEffect(function () {
        d3.dsv(";", "loyersdereferencemeuble.csv").then(function (data) {
            setMeublé(data);
        });
    }, []);
    useEffect(function () {
        d3.dsv(";", "loyersdereferencenonmeuble.csv").then(function (data) {
            setNonMeublé(data);
        });
    }, []);
    var questions = (_jsxs("div", { children: [_jsx(Entree_surface, { surface: surface, setSurface: setSurface }, void 0), _jsx(Entree_piece, { piece: piece, setPiece: setPiece }, void 0), _jsx(Entree_annee, { annee: annee, setAnnee: setAnnee }, void 0), _jsx(Entree_mobilier, { mobilier: mobilier, setMobilier: setMobilier }, void 0), _jsx(Entree_montant, { montant: montant, setMontant: setMontant }, void 0)] }, void 0));
    return (_jsxs("div", __assign({ className: "App" }, { children: [rempli && questions, _jsx(Adresse, { secteur: secteur, setSecteur: setSecteur }, void 0), _jsx(Resultat, { mobilier: mobilier, annee: annee, piece: piece, secteur: secteur, surface: surface, "donn\u00E9es_meubl\u00E9": données_meublé, "donn\u00E9es_non_meubl\u00E9": données_non_meublé, montant: montant }, void 0)] }), void 0));
}
export default App;
