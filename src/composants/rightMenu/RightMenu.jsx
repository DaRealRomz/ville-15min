import { useState } from "react";
import "./rightMenu.css";

export default function RightMenu({ changerType, changerRayon }) {
  const [retracted, setRetracted] = useState(false);

  let rayonMarche = 1500;

  function setRayon() {
    const veloChkbx = document.getElementById('velo');
    const transportChkbx = document.getElementById('transport');

    if (transportChkbx.checked) {
      changerRayon(4500);
    } else if (veloChkbx) {
      changerRayon(3500);
    } else {
      changerRayon(rayonMarche);
    }
  }

  return (
    <div id="right-menu-container" style={{ transform: retracted ? "translateX(calc(100% - 40px))" : "" }}>
      <div id="right-menu-interior">
        <div id="transport-commun">
          <input id="velo" type="checkbox" className="checkbox2" onClick={setRayon} />
          <label htmlFor="velo"> Présence de vélo</label>
          <br />
          <input id="transport" type="checkbox" className="checkbox2" onClick={setRayon} />
          <label htmlFor="transport"> Présence de transport en commun</label>
        </div>
      </div>
      <button id="menu-toggle-right" type="button" onClick={() => setRetracted((isRetracted) => !isRetracted)}>{retracted ? ">" : "x"}</button>
    </div>
  );
}
