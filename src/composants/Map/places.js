import { degreesLatToMeters, degreesLngToMeters } from "./coordinates";

const matchesKeyword = (name, keywords) => {
  const normalized = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  for (const keyword of keywords) {
    if (normalized.includes(keyword)) {
      return true;
    }
  }
  return false;
};

const getLocalPlaces = (service, bounds, type) =>
  new Promise((resolve) => {
    service.nearbySearch({ bounds, type: [type] }, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        resolve(results);
      } else {
        resolve([]);
      }
    });
  });

const getSmallBounds = (largeBounds, size) => {
  const smallBounds = [];
  const ne = largeBounds.getNorthEast();
  const sw = largeBounds.getSouthWest();
  const degLat = ne.lat() - sw.lat();
  const degLng = ne.lng() - sw.lng();

  const nLat = Math.ceil(degreesLatToMeters(degLat) / size);
  for (let i = 0; i < nLat; i++) {
    const south = sw.lat() + (i / nLat) * degLat;
    const north = sw.lat() + ((i + 1) / nLat) * degLat;

    const nLng = Math.ceil(degreesLngToMeters(degLng, (north + south) / 2) / size);
    for (let j = 0; j < nLng; j++) {
      const west = sw.lng() + (j / nLng) * degLng;
      const east = sw.lng() + ((j + 1) / nLng) * degLng;
      smallBounds.push({ north, south, east, west });
    }
  }

  return smallBounds;
};

export default async function getPlaces(map, bounds, lieu, radius) {
  const service = new window.google.maps.places.PlacesService(map);
  const smallBounds = getSmallBounds(bounds, radius * 2);
  const requests = [];
  for (const bound of smallBounds) {
    for (const type of lieu.filter) {
      requests.push(getLocalPlaces(service, bound, type));
    }
  }
  const results = await Promise.all(requests);
  return results
    .flat()
    .filter((result) => !lieu.keywords || matchesKeyword(result.name, lieu.keywords))
    .map((result) => ({
      id: result.reference,
      name: result.name,
      location: result.geometry.location,
    }));
}
