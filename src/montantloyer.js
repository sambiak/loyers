"use strict";
exports.__esModule = true;
exports.Entree_montant = void 0;
function Entree_montant(props) {
    return (<div className="loyer">
        <label>Montant de votre loyer actuel (Charges non comprises)</label>
        <input type="number" value={props.montant} onChange={function (e) { return props.setMontant(parseInt(e.target.value, 10)); }}/>
       
      </div>);
}
exports.Entree_montant = Entree_montant;
