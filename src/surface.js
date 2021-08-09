"use strict";
exports.__esModule = true;
exports.Entree_surface = void 0;
function Entree_surface(props) {
    return (<div className="surface"> 
      <label>La surface de votre logmement (en m²)</label>
      <input type="number" value={props.surface} onChange={function (e) { return props.setSurface(parseInt(e.target.value, 10)); }}/>
     
    </div>);
}
exports.Entree_surface = Entree_surface;
