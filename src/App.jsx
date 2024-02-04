import { useState } from "react";
import LeftMenu from "./composants/leftMenu/LeftMenu";
import RightMenu from "./composants/rightMenu/RightMenu";
import Map from "./composants/Map";

const poly = {
  lat: 45.5047939,
  lng: -73.615758
}

export default function App() {
  const [type, setType] = useState("sante");

  return (
    <div className="h-screen">
      <Map type={type} centre={poly} />
      <LeftMenu changerType={setType} />
      <RightMenu changerType={setType} />
    </div>
  );
}
