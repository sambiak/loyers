import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Globe } from "./globe";
import d3 from "./assets/d3";
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

export function Adresse(props) {
    var _a = useState(""), name = _a[0], setName = _a[1];
    var _b = useState(null), cordonnés = _b[0], setCord = _b[1];
    var _c = useState(null), carte = _c[0], setCarte = _c[1];
    var _d = useState(null), quartier = _d[0], setQuartier = _d[1];
    var _e = useState(null), quartiers = _e[0], setQuartiers = _e[1];
    useEffect(function () {
        fetch("quartier_paris.geojson")
            .then(function (response) { return response.json(); })
            .then(function (response) { return setCarte(response); })
            .catch(function (error) { return console.log("erreur chargement", error); });
    }, []);
    useEffect(function () {
        d3.csv("quartiers_paris.csv")
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
        })
            .catch(function (error) { return console.log("erreur chargement", error); });
    }, []);
    useEffect(function () {
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
    return (_jsxs("form", __assign({ onSubmit: handleSubmit }, { children: [_jsx("div", __assign({ className: "adresse" }, { children: _jsxs("label", { children: ["Adresse:", _jsx("input", { type: "text", value: name, onChange: function (e) { return setName(e.target.value); } }, void 0)] }, void 0) }), void 0), _jsx("input", { type: "submit", value: "Submit" }, void 0), _jsx(Globe, { carte: carte, GPS: cordonnés, quartier: quartier, setQuart: setQuartier }, void 0)] }), void 0));
}
