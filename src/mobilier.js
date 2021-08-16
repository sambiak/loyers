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
export function Entree_mobilier(props) {
    return (_jsxs("div", __assign({ className: "mobilier" }, { children: [_jsx("label", { children: " Votre logement a \u00E9t\u00E9 lou\u00E9 : " }, void 0), _jsxs("select", __assign({ value: props.mobilier, onChange: function (e) { return props.setMobilier(e.target.value); } }, { children: [" ", _jsx("option", __assign({ value: "meuble" }, { children: "Meubl\u00E9" }), void 0), _jsx("option", __assign({ value: "nonmeuble" }, { children: "Non meubl\u00E9" }), void 0)] }), void 0), _jsx("label", { children: props.mobilier }, void 0)] }), void 0));
}
