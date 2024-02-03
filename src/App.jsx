import LeftMenu from "./composants/leftMenu/LeftMenu";
import Map from "./composants/Map";
import "./style.css"

export default function App() {
  return (
    <div className="h-screen">
      <Map />
      <LeftMenu />
    </div>
  );
}
