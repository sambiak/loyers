import d3 from "./assets/d3";
import { useEffect, useRef } from "react";
import { CartesArrondissement, Feature } from "./assets/carte";

interface prop {
  GPS: [number, number] | null;
  carte: null | CartesArrondissement;
  setQuart: React.Dispatch<React.SetStateAction<number | null>>;
  quartier: number|null

}

export function Globe(props: prop) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (props.carte !== null && props.GPS !== null) {
      const svg = d3.select(ref.current),
        width = +svg.attr("width"),
        height = +svg.attr("height");
      const projection = d3
        .geoMercator()
        .center([2.3522, 48.8566]) // GPS of location to zoom on
        .scale(50000) // This is like the zoom
        .translate([width / 2, height / 2]);
      let data = props.carte;
      let cord = props.GPS;
      console.log("executed", data);
      // Draw the map
      console.log(data.features);
      let geoPath = d3.geoPath().projection(projection);
      svg
        .append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("fill", (d: Feature) => {
          if (d3.geoContains(d, cord)) {
            props.setQuart(d.properties.c_qu);
            return "yellow";
          }
          return "blue";
        })
        .attr("d", (d: any) => geoPath(d));
    }
  });

  return(
  <div>
    <svg id="globe" ref={ref} width="400" height="300"></svg>
  </div>);
}
