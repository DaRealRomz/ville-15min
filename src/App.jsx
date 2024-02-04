import { useState } from "react";
import LeftMenu from "./composants/leftMenu/LeftMenu";
import RightMenu from "./composants/rightMenu/RightMenu";
import Map from "./composants/Map/Map";

const poly = {
  lat: 45.5047939,
  lng: -73.615758,
};

export default function App() {
  const [type, setType] = useState("sante");
  const [radius, setRadius] = useState(1500);

  return (
    <div className="h-screen">
      <Map type={type} centre={poly} radius={radius} />
      <LeftMenu changerType={setType}  />
      <RightMenu changerType={setType} changerRayon={setRadius}/>
    </div>
  );
}
