const DEGREE_LAT_METERS = 110574;
const DEGREE_LNG_METERS = 111320;

export const degreesToRadians = (deg) => (deg * Math.PI) / 180;
export const degreesLatToMeters = (deg) => deg * DEGREE_LAT_METERS;
export const degreesLngToMeters = (deg, lat) => deg * DEGREE_LNG_METERS * Math.cos(degreesToRadians(lat));
export const metersToDegreesLat = (meters) => meters / DEGREE_LAT_METERS;
export const metersToDegreesLng = (meters, lat) => meters / (DEGREE_LNG_METERS * Math.cos(degreesToRadians(lat)));
