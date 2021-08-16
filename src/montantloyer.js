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
export function Entree_montant(props) {
    return (_jsxs("div", __assign({ className: "loyer" }, { children: [_jsx("label", { children: "Montant de votre loyer actuel (Charges non comprises)" }, void 0), _jsx("input", { type: "number", value: props.montant, onChange: function (e) { return props.setMontant(parseInt(e.target.value, 10)); } }, void 0)] }), void 0));
}
