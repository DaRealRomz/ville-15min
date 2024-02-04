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
  const [search, setSearch] = useState("");

  return (
    <div className="h-screen">
      <Map type={type} centre={poly} radius={radius} search={search} />
      <LeftMenu changerType={setType} setSearch={setSearch} />
      <RightMenu changerRayon={setRadius}/>
    </div>
  );
}
