"use strict";
exports.__esModule = true;
exports.Entree_mobilier = void 0;
function Entree_mobilier(props) {
    return (<div className="mobilier"> 
      <label> Votre logement a été loué : </label>
      <select value={props.mobilier} onChange={function (e) { return props.setMobilier(e.target.value); }}>
        {" "}
        <option value="meuble">Meublé</option>
        <option value="nonmeuble">Non meublé</option>
      </select>
      <label>{props.mobilier}</label>

      </div>);
}
exports.Entree_mobilier = Entree_mobilier;
