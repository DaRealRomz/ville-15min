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
  const [score, setScore] = useState(0);

  return (
    <div className="h-screen">
      <Map type={type} centre={poly} radius={radius} search={search} setScore={setScore} />
      <LeftMenu changerType={setType} setSearch={setSearch} score={score} />
      <RightMenu changerRayon={setRadius}/>
    </div>
  );
}
