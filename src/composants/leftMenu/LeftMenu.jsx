import { useState } from "react";
import typesLieux from "../TypesLieux.json";
import "./leftMenu.css";

export default function LeftMenu({ changerType, setSearch, score }) {
  const [retracted, setRetracted] = useState(false);

  return (
    <div id="left-menu-container" style={{ transform: retracted ? "translateX(calc(-100% + 40px))" : "" }}>
      <div id="left-menu-interior">
        <p>{score}</p>
        <input
          id="input-recherche"
          type="search"
          placeholder="Rechercher une ville"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearch(e.target.value);
              e.target.value = "";
            }
          }}
        />

        <div id="div-boutons">
          {typesLieux.map((lieu) => (
            <button
              key={lieu.type}
              className="bouton-service"
              type="button"
              onClick={() => {
                changerType(lieu.type);
              }}
            >
              <img src={lieu.icon} alt="" />
              {lieu.nom}
            </button>
          ))}
        </div>
      </div>
      <button id="menu-toggle" type="button" onClick={() => setRetracted((isRetracted) => !isRetracted)}>
        {retracted ? ">" : "x"}
      </button>
    </div>
  );
}
