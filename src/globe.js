import { jsx as _jsx } from "react/jsx-runtime";
import d3 from "./assets/d3";
import { useEffect, useRef } from "react";
export function Globe(props) {
    var ref = useRef(null);
    useEffect(function () {
        if (props.carte !== null && props.GPS !== null) {
            var svg = d3.select(ref.current), width = +svg.attr("width"), height = +svg.attr("height");
            var projection = d3
                .geoMercator()
                .center([2.3522, 48.8566]) // GPS of location to zoom on
                .scale(50000) // This is like the zoom
                .translate([width / 2, height / 2]);
            var data = props.carte;
            var cord_1 = props.GPS;
            console.log("executed", data);
            // Draw the map
            console.log(data.features);
            var geoPath_1 = d3.geoPath().projection(projection);
            svg
                .append("g")
                .selectAll("path")
                .data(data.features)
                .enter()
                .append("path")
                .attr("fill", function (d) {
                if (d3.geoContains(d, cord_1)) {
                    props.setQuart(d.properties.c_qu);
                    return "yellow";
                }
                return "blue";
            })
                .attr("d", function (d) { return geoPath_1(d); });
        }
    });
    return (_jsx("div", { children: _jsx("svg", { id: "globe", ref: ref, width: "400", height: "300" }, void 0) }, void 0));
}
