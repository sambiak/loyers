import d3 from "./assets/d3";
import { useEffect, useRef } from "react";
import { GeoPath } from "d3-geo";
import { threadId } from "node:worker_threads";

export function Globe(props: any) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(ref.current),
      width = +svg.attr("width"),
      height = +svg.attr("height");
    const projection = d3.geoMercator()
      .center([2, 47])                // GPS of location to zoom on
      .scale(980)                       // This is like the zoom
      .translate([ width/2, height/2 ])
      d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then( function(data:any){
        console.log("executed", data)
        // Filter data
        data.features = data.features.filter(function(d:any){console.log(d.properties.name) ; return d.properties.name=="France"})
        // Draw the map
        console.log(data.features)
        let geoPath = d3.geoPath().projection(projection)
        const sphere = { type: "Sphere" }
        svg.append("g")
            .selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
              .attr("fill", "grey")
              .attr("d", (d:any) =>geoPath(d)    );
        svg.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
    })

    
  }, []);

  return <svg id="globe" ref={ref} width="400" height="300"></svg>;
}
