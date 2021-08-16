import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export function Entree_annee(props) {
    return (_jsxs("div", __assign({ className: "annee" }, { children: [_jsx("label", { children: " A quelle p\u00E9riode votre logement a-t-il \u00E9t\u00E9 construit? " }, void 0), _jsxs("select", __assign({ value: props.annee, onChange: function (e) { return props.setAnnee(e.target.value); } }, { children: [" ", _jsx("option", __assign({ value: "< 1946" }, { children: "Avant 1946" }), void 0), _jsx("option", __assign({ value: "1946-1970" }, { children: "Entre 1946 et 1970" }), void 0), _jsx("option", __assign({ value: "1971-1990" }, { children: "Entre 1971 et 1990" }), void 0), _jsx("option", __assign({ value: "> 1990" }, { children: "Apr\u00E8s 1990" }), void 0)] }), void 0), _jsx("label", { children: props.annee }, void 0)] }), void 0));
}
