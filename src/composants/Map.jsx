import { Circle, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Fragment, useEffect, useState } from "react";
import typesLieux from "./TypesLieux.json";

const DEBOUNCE_DELAY = 500;
const libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapStyles = [
  [
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
];

export default function Map({ type, centre }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.MAPS_API_KEY,
    libraries,
  });

  const [locations, setLocations] = useState([]);
  const [map, setMap] = useState(null);
  const [bounds, setBounds] = useState(null);

  const lieu = typesLieux.find((l) => l.type === type);

  useEffect(() => {
    if (!map || !bounds) return () => {};
    const timeout = setTimeout(() => {
      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch({ bounds, type: lieu.filter }, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK)
          setLocations(
            results.map((result) => ({
              id: result.reference,
              name: result.name,
              location: result.geometry.location,
            })),
          );
      });
    }, DEBOUNCE_DELAY);
    return () => clearTimeout(timeout);
  }, [map, bounds, lieu]);

  const optionsCercle = { strokeColor: lieu.contour, strokeOpacity: 0.8, fillOpacity: 0.4, fillColor: lieu.fill };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={{ disableDefaultUI: true }}
      center={centre}
      zoom={12}
      stylers={mapStyles}
      onLoad={(m) => setMap(m)}
      onUnmount={() => setMap(null)}
      onBoundsChanged={() => setBounds(map?.getBounds())}
    >
      {locations.map((location) => (
        <Fragment key={location.id}>
          <Circle options={optionsCercle} center={location.location} radius={1500} map={map} />
          <Marker
            position={location.location}
            map={map}
            options={{ title: location.name }}
            icon={{
              url: lieu.icon,
            }}
          />
        </Fragment>
      ))}
    </GoogleMap>
  ) : (
    <h1>Chargement...</h1>
  );
}
