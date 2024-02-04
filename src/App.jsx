import { useState } from "react";
import LeftMenu from "./composants/leftMenu/LeftMenu";
import Map from "./composants/Map";
import "./style.css";

export default function App() {
  const [type, setType] = useState("sante");

  const locations = [
    {
      lat: 45.50493439044056,
      lng: -73.61313521788279,
    },
    {
      lat: 45.50442924805278,
      lng: -73.60058255034939,
    },
    {
      lat: 45.55442924805278,
      lng: -73.63058255034939,
    },
    {
      lat: 45.52442924805278,
      lng: -73.6205825503493,
    },
  ];

  return (
    <div className="h-screen">
      <Map type={type} locations={locations} centre={locations[0]} />
      <LeftMenu changerType={setType} />
    </div>
  );
}
