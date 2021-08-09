"use strict";
exports.__esModule = true;
exports.Globe = void 0;
var d3_1 = require("./assets/d3");
var react_1 = require("react");
function Globe(props) {
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        if (props.carte !== null && props.GPS !== null) {
            var svg = d3_1["default"].select(ref.current), width = +svg.attr("width"), height = +svg.attr("height");
            var projection = d3_1["default"]
                .geoMercator()
                .center([2.3522, 48.8566]) // GPS of location to zoom on
                .scale(50000) // This is like the zoom
                .translate([width / 2, height / 2]);
            var data = props.carte;
            var cord_1 = props.GPS;
            console.log("executed", data);
            // Draw the map
            console.log(data.features);
            var geoPath_1 = d3_1["default"].geoPath().projection(projection);
            svg
                .append("g")
                .selectAll("path")
                .data(data.features)
                .enter()
                .append("path")
                .attr("fill", function (d) {
                if (d3_1["default"].geoContains(d, cord_1)) {
                    props.setQuart(d.properties.c_qu);
                    return "yellow";
                }
                return "blue";
            })
                .attr("d", function (d) { return geoPath_1(d); });
        }
    });
    return (<div>
    <svg id="globe" ref={ref} width="400" height="300"></svg>
  </div>);
}
exports.Globe = Globe;
