"use strict";
exports.__esModule = true;
var react_1 = require("react");
var d3_1 = require("./assets/d3");
require("./App.css");
var Adresse_1 = require("./Adresse");
var surface_1 = require("./surface");
var piece_1 = require("./piece");
var annee_1 = require("./annee");
var mobilier_1 = require("./mobilier");
var resultat_1 = require("./resultat");
var montantloyer_1 = require("./montantloyer");
function App() {
    var _a = react_1.useState(null), données_meublé = _a[0], setMeublé = _a[1];
    var _b = react_1.useState(null), données_non_meublé = _b[0], setNonMeublé = _b[1];
    var _c = react_1.useState(0), surface = _c[0], setSurface = _c[1];
    var _d = react_1.useState("1"), piece = _d[0], setPiece = _d[1];
    var _e = react_1.useState("< 1946"), annee = _e[0], setAnnee = _e[1];
    var _f = react_1.useState("meuble"), mobilier = _f[0], setMobilier = _f[1];
    var _g = react_1.useState(null), secteur = _g[0], setSecteur = _g[1];
    var _h = react_1.useState(0), montant = _h[0], setMontant = _h[1];
    var rempli = !données_meublé ||
        !données_non_meublé ||
        !secteur ||
        !surface ||
        piece === "" ||
        annee === "" ||
        mobilier === "";
    react_1.useEffect(function () {
        d3_1["default"].dsv(";", "loyersdereferencemeuble.csv").then(function (data) {
            setMeublé(data);
        });
    }, []);
    react_1.useEffect(function () {
        d3_1["default"].dsv(";", "loyersdereferencenonmeuble.csv").then(function (data) {
            setNonMeublé(data);
        });
    }, []);
    var questions = (<div>
      <surface_1.Entree_surface surface={surface} setSurface={setSurface}/>
      <piece_1.Entree_piece piece={piece} setPiece={setPiece}/>
      <annee_1.Entree_annee annee={annee} setAnnee={setAnnee}/>
      <mobilier_1.Entree_mobilier mobilier={mobilier} setMobilier={setMobilier}/>
      <montantloyer_1.Entree_montant montant={montant} setMontant={setMontant}/>
    </div>);
    return (<div className="App">
      {rempli && questions}
      <Adresse_1.Adresse secteur={secteur} setSecteur={setSecteur}/>
      <resultat_1.Resultat mobilier={mobilier} annee={annee} piece={piece} secteur={secteur} surface={surface} données_meublé={données_meublé} données_non_meublé={données_non_meublé} montant={montant}></resultat_1.Resultat>

      
      
    </div>);
}
exports["default"] = App;
