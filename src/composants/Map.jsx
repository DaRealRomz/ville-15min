import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.MAPS_API_KEY,
  });
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}></GoogleMap>
  ) : (
    <h1>Chargement...</h1>
  );
}
