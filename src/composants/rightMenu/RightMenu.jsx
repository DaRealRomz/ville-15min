import { useState } from "react";
import "./rightMenu.css";

export default function LeftMenu({ changerType }) {
  const [retracted, setRetracted] = useState(false);

  return (
    <div id="right-menu-container" style={{ transform: retracted ? "translateX(calc(100% - 40px))" : "" }}>
      <div id="right-menu-interior">    
        <div id="transport-commun">
          <input id="velo" type="checkbox" className="checkbox2" />
          <label htmlFor="velo"> Présence de vélo</label>
          <br />
          <input id="transport" type="checkbox" className="checkbox2" />
          <label htmlFor="transport"> Présence de transport en commun</label>
        </div>
      </div>
      <button id="menu-toggle-right" type="button" onClick={() => setRetracted((isRetracted) => !isRetracted)}>{retracted ? ">" : "x"}</button>
    </div>
  );
}
