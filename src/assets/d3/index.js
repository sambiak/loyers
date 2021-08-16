import { geoEqualEarth, geoPath, geoContains } from "d3-geo";
import { json, select, csv, tsv, dsv, geoMercator } from "d3";
var d3 = {
    geoEqualEarth: geoEqualEarth,
    geoMercator: geoMercator,
    geoContains: geoContains,
    geoPath: geoPath,
    csv: csv,
    tsv: tsv,
    dsv: dsv,
    json: json,
    select: select,
};
export default d3;
