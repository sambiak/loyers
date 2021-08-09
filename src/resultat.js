"use strict";
exports.__esModule = true;
exports.Resultat = void 0;
var react_1 = require("react");
var jspdf_1 = require("jspdf");
var server_1 = require("react-dom/server");
var fiche_nom_1 = require("./exemple_pdf/fiche_nom");
var télecharger = function () {
    var doc = new jspdf_1["default"]("p", "mm", "a4");
    console.log(server_1["default"].renderToStaticMarkup(fiche_nom_1["default"]()));
    doc.html(server_1["default"].renderToStaticMarkup(fiche_nom_1["default"]()), {
        callback: function (doc) {
            doc.save("monguideloyer.pdf");
        },
        x: 10,
        y: 10,
        html2canvas: {
            width: 10000
        }
    });
};
function Resultat(props) {
    var _a = react_1.useState(null), loyer = _a[0], setLoyer = _a[1];
    if (!props.données_meublé ||
        !props.données_non_meublé ||
        !props.secteur ||
        !props.surface ||
        props.piece === "" ||
        props.annee === "" ||
        props.mobilier === "" ||
        !props.montant) {
        return null;
    }
    if (loyer && loyer < props.montant) {
        return (<div className="resultats">
        <p>Loyer maximal autorisé: {loyer}euros </p>
  <br>
  </br>
        <p>
  Votre propriétaire ne respecte pas l'encadrement des loyers. Retrouvez notre guide pour faire respecter vos droits sur le bouton ci-dessous. 
 
        </p>
        <button type="button" onClick={télecharger}>
            Votre guide
          </button>
      </div>);
    }
    else if (loyer && loyer > props.montant) {
        return (<div className="resultats">
        <p>Loyer maximal autorisé: {loyer}euros </p>
  <br>
  </br>
  <p>
    Ton propriétaire respecte l'encadrement des loyers.
  </p>
  

        
      </div>);
    }
    else if (loyer && loyer === props.montant) {
        return (<div className="resultats">
        <p>Loyer maximal autorisé: {loyer}euros </p>
  <br>
  </br>
  <p>
    Ton propriétaire respecte l'encadrement des loyers.
  </p>
  

        
        </div>);
    }
    if (props.mobilier === "meuble") {
        var tableau = props.données_meublé
            .filter(function (d) {
            return parseInt(d["Secteur géographique"], 10) === props.secteur &&
                d["Epoque de construction"] === props.annee &&
                d["Nombre de pièces"] === props.piece;
        })
            .map(function (d, i) {
            setLoyer(parseFloat(d["Loyer de référence majoré"]) * props.surface);
            return (<tr key={i}>
            <td>{d["Secteur géographique"]}</td>
            <td>{d["Loyer de référence majoré"]}</td>
            <td>{loyer}</td>
            <td>{props.montant}</td>
          </tr>);
        });
        return (<table>
        <tbody>
          <tr>
            <th>Secteur géographique</th>
            <th>Loyer de référence</th>
            <th>Loyer calculé</th>
            <th>Votre loyer</th>
          </tr>
          {tableau}
        </tbody>
      </table>);
    }
    else if (props.mobilier === "nonmeuble") {
        var tableau = props.données_non_meublé
            .filter(function (d) {
            return parseInt(d["Secteur géographique"], 10) === props.secteur &&
                d["Epoque de construction"] === props.annee &&
                d["Nombre de pièces"] === props.piece;
        })
            .map(function (d, i) {
            setLoyer(parseFloat(d["Loyer de référence majoré"]) * props.surface);
            return (<tr key={i}>
            <td>{d["Secteur géographique"]}</td>
            <td>{d["Loyer de référence majoré"]}</td>
            <td>{loyer}</td>
            <td>{props.montant}</td>
          </tr>);
        });
        return (<table>
        <tbody>
          <tr>
            <th>Secteur géographique</th>
            <th>Loyer de référence</th>
            <th>Loyer calculé</th>
            <th>Votre loyer</th>
          </tr>
          {tableau}
        </tbody>
      </table>);
    }
    alert("ERREUR : logique non atteignable dans resultats atteint");
    return null;
}
exports.Resultat = Resultat;
