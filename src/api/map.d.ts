export interface GeoJSON extends GeoJSONFeatureCollection<GeoJSONGeometry> {}

interface GeoJSONFeatureCollection<G> {
  type: 'FeatureCollection'
  features: GeoJSONFeature<G>[]
}

export interface GeoJSONFeature<G = GeoJSONGeometry> {
  type: 'Feature'
  id?: string | number
  properties: {
    name?: string
    cp?: number[]
    [key: string]: any
  }
  geometry: G
}

declare type GeoJSONGeometry =
  | GeoJSONGeometryPoint
  | GeoJSONGeometryMultiPoint
  | GeoJSONGeometryLineString
  | GeoJSONGeometryMultiLineString
  | GeoJSONGeometryPolygon
  | GeoJSONGeometryMultiPolygon

interface GeoJSONGeometryPoint {
  type: 'Point'
  coordinates: number[]
}

interface GeoJSONGeometryMultiPoint {
  type: 'MultiPoint'
  coordinates: number[][]
}

interface GeoJSONGeometryLineString {
  type: 'LineString'
  coordinates: number[][]
}

interface GeoJSONGeometryMultiLineString {
  type: 'MultiLineString'
  coordinates: number[][][]
}

interface GeoJSONGeometryPolygon {
  type: 'Polygon'
  coordinates: number[][][]
}

interface GeoJSONGeometryMultiPolygon {
  type: 'MultiPolygon'
  coordinates: number[][][][]
}
