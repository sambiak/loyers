export interface CartesArrondissement {
    type:     string;
    features: Feature[];
}

export interface Feature {
    type:       FeatureType;
    geometry:   Geometry;
    properties: Properties;
}

export interface Geometry {
    type:        GeometryType;
    coordinates: Array<Array<number[]>>;
}

export enum GeometryType {
    Polygon = "Polygon",
}

export interface Properties {
    n_sq_qu:   number;
    n_sq_ar:   number;
    geom_x_y:  number[];
    c_qu:      number;
    surface:   number;
    l_qu:      string;
    perimetre: number;
    c_quinsee: number;
    c_ar:      number;
}

export enum FeatureType {
    Feature = "Feature",
}
