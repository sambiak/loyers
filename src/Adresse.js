"use strict";
exports.__esModule = true;
exports.Adresse = void 0;
var react_1 = require("react");
var globe_1 = require("./globe");
var d3_1 = require("./assets/d3");
function Adresse(props) {
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState(null), cordonnés = _b[0], setCord = _b[1];
    var _c = react_1.useState(null), carte = _c[0], setCarte = _c[1];
    var _d = react_1.useState(null), quartier = _d[0], setQuartier = _d[1];
    var _e = react_1.useState(null), quartiers = _e[0], setQuartiers = _e[1];
    react_1.useEffect(function () {
        fetch("quartier_paris.geojson")
            .then(function (response) { return response.json(); })
            .then(function (response) { return setCarte(response); })["catch"](function (error) { return console.log("erreur chargement", error); });
    }, []);
    react_1.useEffect(function () {
        d3_1["default"].csv("quartiers_paris.csv")
            .then(function (data) {
            console.log(data[0]);
            var map = {};
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var entry = data_1[_i];
                var quartier_1 = parseInt(entry["Quartier administratif"], 10);
                var secteur = parseInt(entry["Secteur géographique"], 10);
                console.log(entry); // 1, "string", false
                map[quartier_1] = secteur;
            }
            console.log(map);
            setQuartiers(map);
        })["catch"](function (error) { return console.log("erreur chargement", error); });
    }, []);
    react_1.useEffect(function () {
        console.log("dom modified", quartier, quartiers);
        if (quartier && quartiers) {
            props.setSecteur(quartiers[quartier]);
        }
    }, [quartiers, quartier, props]);
    var handleSubmit = function (evt) {
        evt.preventDefault();
        var requete = "https://api-adresse.data.gouv.fr/search/?q=" + (name + "Paris");
        fetch(requete)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log(data);
            setCord(data.features[0].geometry.coordinates);
        });
    };
    return (<form onSubmit={handleSubmit}>
       <div className="adresse">
      <label>
        Adresse:
        <input type="text" value={name} onChange={function (e) { return setName(e.target.value); }}/>
      


      </label>
      </div>
     
      <input type="submit" value="Submit"/>
      <globe_1.Globe carte={carte} GPS={cordonnés} quartier={quartier} setQuart={setQuartier}></globe_1.Globe>
    </form>);
}
exports.Adresse = Adresse;
