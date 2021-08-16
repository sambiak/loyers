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
export function Entree_surface(props) {
    return (_jsxs("div", __assign({ className: "surface" }, { children: [_jsx("label", { children: "La surface de votre logmement (en m\u00B2)" }, void 0), _jsx("input", { type: "number", value: props.surface, onChange: function (e) { return props.setSurface(parseInt(e.target.value, 10)); } }, void 0)] }), void 0));
}
