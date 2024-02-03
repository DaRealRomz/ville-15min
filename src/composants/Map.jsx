import { GoogleMap, useJsApiLoader, Circle, Marker } from "@react-google-maps/api";
import { useState } from "react";
import typesLieux from "./TypesLieux.json";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 45.50493439044056,
  lng: -73.61313521788279,
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.MAPS_API_KEY,
  });

  const [map, setMap] = useState();

  const lieu = typesLieux.ecole;

  const optionsCercle = { strokeColor: lieu.contour, strokeOpacity: 0.8, fillOpacity: 0.4, fillColor: lieu.fill };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={{ disableDefaultUI: true }}
      center={center}
      zoom={12}
      onLoad={(m) => setMap(m)}
      onUnmount={() => setMap()}
    >
      <Circle options={optionsCercle} center={center} radius={1500} map={map} />

      <Marker
        position={center}
        map={map}
        options={{ title: "Poly!" }}
        icon={{
          url: lieu.icon,
        }}
      />
    </GoogleMap>
  ) : (
    <h1>Chargement...</h1>
  );
}
