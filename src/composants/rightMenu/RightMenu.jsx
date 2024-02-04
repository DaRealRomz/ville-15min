import { useState } from "react";
import "./rightMenu.css";

export default function RightMenu({ changerRayon }) {
  const [retracted, setRetracted] = useState(false);

  const [rayonMarche, setRayonMarche] = useState(1500);

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
          <input id="velo" type="checkbox" className="checkbox2" onClick={setRayon} />
          <label htmlFor="velo"> Présence de vélo</label>
          <br />
          <input id="transport" type="checkbox" className="checkbox2" onClick={setRayon} />
          <label htmlFor="transport"> Présence de transport en commun</label>
          <br />

        </div>
        <div id="scroll-bar">
          <p>Vitesse de marche</p>
          <input type="range" min="15" max="30" defaultValue={15} onChange={(e) => {
              setRayonMarche(1500 * (e.target.value / 15));
              setRayon();
            }
          } /></div>
        </div>
      <button id="menu-toggle-right" type="button" onClick={() => setRetracted((isRetracted) => !isRetracted)}>{retracted ? ">" : "x"}</button>
    </div>
  );
}
