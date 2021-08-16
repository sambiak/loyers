import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import Nom from "./exemple_pdf/fiche_nom";
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

var télecharger = function () {
    var doc = new jsPDF("p", "mm", "a4");
    console.log(ReactDOMServer.renderToStaticMarkup(Nom()));
    doc.html(ReactDOMServer.renderToStaticMarkup(Nom()), {
        callback: function (doc) {
            doc.save("monguideloyer.pdf");
        },
        x: 10,
        y: 10,
        html2canvas: {
            width: 10000,
        },
    });
};
export function Resultat(props) {
    var _a = useState(null), loyer = _a[0], setLoyer = _a[1];
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
        return (_jsxs("div", __assign({ className: "resultats" }, { children: [_jsxs("p", { children: ["Loyer maximal autoris\u00E9: ", loyer, "euros "] }, void 0), _jsx("br", {}, void 0), _jsx("p", { children: "Votre propri\u00E9taire ne respecte pas l'encadrement des loyers. Retrouvez notre guide pour faire respecter vos droits sur le bouton ci-dessous." }, void 0), _jsx("button", __assign({ type: "button", onClick: télecharger }, { children: "Votre guide" }), void 0)] }), void 0));
    }
    else if (loyer && loyer > props.montant) {
        return (_jsxs("div", __assign({ className: "resultats" }, { children: [_jsxs("p", { children: ["Loyer maximal autoris\u00E9: ", loyer, "euros "] }, void 0), _jsx("br", {}, void 0), _jsx("p", { children: "Ton propri\u00E9taire respecte l'encadrement des loyers." }, void 0)] }), void 0));
    }
    else if (loyer && loyer === props.montant) {
        return (_jsxs("div", __assign({ className: "resultats" }, { children: [_jsxs("p", { children: ["Loyer maximal autoris\u00E9: ", loyer, "euros "] }, void 0), _jsx("br", {}, void 0), _jsx("p", { children: "Ton propri\u00E9taire respecte l'encadrement des loyers." }, void 0)] }), void 0));
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
            return (_jsxs("tr", { children: [_jsx("td", { children: d["Secteur géographique"] }, void 0), _jsx("td", { children: d["Loyer de référence majoré"] }, void 0), _jsx("td", { children: loyer }, void 0), _jsx("td", { children: props.montant }, void 0)] }, i));
        });
        return (_jsx("table", { children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("th", { children: "Secteur g\u00E9ographique" }, void 0), _jsx("th", { children: "Loyer de r\u00E9f\u00E9rence" }, void 0), _jsx("th", { children: "Loyer calcul\u00E9" }, void 0), _jsx("th", { children: "Votre loyer" }, void 0)] }, void 0), tableau] }, void 0) }, void 0));
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
            return (_jsxs("tr", { children: [_jsx("td", { children: d["Secteur géographique"] }, void 0), _jsx("td", { children: d["Loyer de référence majoré"] }, void 0), _jsx("td", { children: loyer }, void 0), _jsx("td", { children: props.montant }, void 0)] }, i));
        });
        return (_jsx("table", { children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("th", { children: "Secteur g\u00E9ographique" }, void 0), _jsx("th", { children: "Loyer de r\u00E9f\u00E9rence" }, void 0), _jsx("th", { children: "Loyer calcul\u00E9" }, void 0), _jsx("th", { children: "Votre loyer" }, void 0)] }, void 0), tableau] }, void 0) }, void 0));
    }
    alert("ERREUR : logique non atteignable dans resultats atteint");
    return null;
}
