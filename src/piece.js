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
export function Entree_piece(props) {
    return (_jsxs("div", __assign({ className: "piece" }, { children: [_jsx("label", { children: " Combien de pi\u00E8ces votre logement poss\u00E8de-t-il? " }, void 0), _jsxs("select", __assign({ value: props.piece, onChange: function (e) { return props.setPiece(e.target.value); } }, { children: [" ", _jsx("option", __assign({ value: "1" }, { children: "1 pi\u00E8ce" }), void 0), _jsx("option", __assign({ value: "2" }, { children: "2 pi\u00E8ces" }), void 0), _jsx("option", __assign({ value: "3" }, { children: "3 pi\u00E8ces" }), void 0), _jsx("option", __assign({ value: "4 et +" }, { children: "4 pi\u00E8ces et +" }), void 0)] }), void 0), _jsx("label", { children: props.piece }, void 0)] }), void 0));
}
