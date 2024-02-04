import { useState } from "react";
import "./rightMenu.css";

export default function RightMenu({ changerType, changerRayon }) {
  const [retracted, setRetracted] = useState(false);

  let rayonMarche = 1500;

  function setRayon() {
    const veloChkbx = document.getElementById('velo');
    const transportChkbx = document.getElementById('transport');

    if (transportChkbx.checked) {
      changerRayon(4500 * (rayonMarche / 1500));
    } else if (veloChkbx.checked) {
      changerRayon(3500 * (rayonMarche / 1500));
    } else {
      changerRayon(rayonMarche);
    }
  }

  return (
    <div id="right-menu-container" style={{ transform: retracted ? "translateX(calc(100% - 40px))" : "" }}>
      <div id="right-menu-interior">
        <div id="transport-commun">
          <label htmlFor="velo"> Présence de vélo</label>
          <input id="velo" type="checkbox" className="checkbox2" onClick={setRayon} />
          <br />
          <label htmlFor="transport"> Présence de transport en commun</label>
          <input id="transport" type="checkbox" className="checkbox2" onClick={setRayon} />
          <br />

        </div>
        <div id="scroll-bar">
          <p>Temps de déplacement:</p>
          <input type="range" min="15" max="30" value="15" /></div>
        </div>
      <button id="menu-toggle-right" type="button" onClick={() => setRetracted((isRetracted) => !isRetracted)}>{retracted ? ">" : "x"}</button>
    </div>
  );
}
