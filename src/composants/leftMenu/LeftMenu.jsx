import { useState } from "react";
import "./leftMenu.css";
import typesLieux from "../TypesLieux.json";

export default function LeftMenu({ changerType, changerRayon }) {
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
    <div id="left-menu-container" style={{ transform: retracted ? "translateX(calc(-100% + 40px))" : "" }}>
      <div id="left-menu-interior">
        <input id="input-recherche" type="search" placeholder="  Rechercher un lieu" />
        <div id="div-boutons">
          <div id="div-boutons">
            {typesLieux.map((lieu) => (
              <button key={lieu.type} className="bouton-service" type="button" onClick={() => changerType(lieu.type)}>
                <img src={lieu.icon} alt="" />
                {lieu.nom}
              </button>
            ))}
          </div>
        </div>
        <div id="transport-commun">
          <input id="velo" type="checkbox" className="checkbox2" onClick={setRayon} />
          <label htmlFor="velo"> Présence de vélo</label>
          <br />
          <input id="transport" type="checkbox" className="checkbox2" onClick={setRayon} />
          <label htmlFor="transport"> Présence de transport en commun</label>
        </div>
      </div>
      <button id="menu-toggle" type="button" onClick={() => setRetracted((isRetracted) => !isRetracted)}>{retracted ? ">" : "x"}</button>
    </div>
  );
}
