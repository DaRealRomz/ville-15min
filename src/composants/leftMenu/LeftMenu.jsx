import { useState } from "react";
import "./leftMenu.css";
import typesLieux from "../TypesLieux.json";

export default function LeftMenu({ changerType }) {
  const [retracted, setRetracted] = useState(false);

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
          <input id="velo" type="checkbox" className="checkbox2" />
          <label htmlFor="velo"> Présence de vélo</label>
          <br />
          <input id="transport" type="checkbox" className="checkbox2" />
          <label htmlFor="transport"> Présence de transport en commun</label>
        </div>
      </div>
      <button id="menu-toggle" type="button" onClick={() => setRetracted((isRetracted) => !isRetracted)}>{retracted ? ">" : "x"}</button>
    </div>
  );
}
