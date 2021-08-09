"use strict";
exports.__esModule = true;
exports.Entree_annee = void 0;
function Entree_annee(props) {
    return (<div className="annee"> 
      <label> A quelle période votre logement a-t-il été construit? </label>
      <select value={props.annee} onChange={function (e) { return props.setAnnee(e.target.value); }}>
        {" "}
        <option value="< 1946">Avant 1946</option>
        <option value="1946-1970">Entre 1946 et 1970</option>
        <option value="1971-1990">Entre 1971 et 1990</option>
        <option value="> 1990">Après 1990</option>
      </select>
      <label>{props.annee}</label>

      </div>);
}
exports.Entree_annee = Entree_annee;
