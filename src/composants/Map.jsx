import { GoogleMap, Marker, Polygon, useJsApiLoader } from "@react-google-maps/api";
import { Fragment, useEffect, useState } from "react";
import typesLieux from "./TypesLieux.json";

const EARTH_RADIUS = 6371000;
const DEBOUNCE_DELAY = 50;
const libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const createCircle = (location, radius) => {
  const latRadius = ((radius / EARTH_RADIUS) * 180) / Math.PI;
  const lngRadius = latRadius / Math.cos((location.lat() * Math.PI) / 180);

  const points = [];
  for (let i = 0; i < 50; i++) {
    const angle = (i / 50) * 2 * Math.PI;
    const lng = location.lng() + Math.cos(angle) * lngRadius;
    const lat = location.lat() + Math.sin(angle) * latRadius;
    points.push({ lng, lat });
  }
  return points;
};

export default function Map({ type, centre, radius }) {
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

  useEffect(() => {
    setLocations([]);
  }, [type]);

  const optionsCercle = {
    strokeColor: lieu.contour,
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillOpacity: 0.4,
    fillColor: lieu.fill,
  };

  // function pointAleatoire() {
  //   return centre;
  // }

  // function plusProche(position, type) {
  //   const pointsDuType = locations.filter((endroit) => endroit.type === type);
  //   for ()
  // }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={{ disableDefaultUI: true }}
      center={centre}
      zoom={12}
      onLoad={(m) => setMap(m)}
      onUnmount={() => setMap(null)}
      onBoundsChanged={() => setBounds(map?.getBounds())}
    >
      <Polygon
        paths={locations.map(({ location }) => createCircle(location, radius))}
        options={optionsCercle}
        map={map}
      />
      {locations.map((location) => (
        <Fragment key={location.id}>
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
