import { GoogleMap, useJsApiLoader, Circle, Marker } from "@react-google-maps/api";
import { useState } from "react";
import typesLieux from "./TypesLieux.json";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Map({ type, centre, locations }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.MAPS_API_KEY,
  });

  const [map, setMap] = useState();

  const lieu = typesLieux[type];

  const optionsCercle = { strokeColor: lieu.contour, strokeOpacity: 0.8, fillOpacity: 0.4, fillColor: lieu.fill };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={{ disableDefaultUI: true }}
      center={centre}
      zoom={12}
      onLoad={(m) => setMap(m)}
      onUnmount={() => setMap()}
    >
      {locations.map((position) => (
        <>
          <Circle options={optionsCercle} center={position} radius={1500} map={map} />
          <Marker
            position={position}
            map={map}
            options={{ title: "Poly!" }}
            icon={{
              url: lieu.icon,
            }}
          />
        </>
      ))}
    </GoogleMap>
  ) : (
    <h1>Chargement...</h1>
  );
}
