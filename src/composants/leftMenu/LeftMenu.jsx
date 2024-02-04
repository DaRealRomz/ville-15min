import { useState } from 'react';
import './leftMenu.css';
import typesLieux from "../TypesLieux.json";

export default function LeftMenu({changerType}) {

    let [retracted, setRetracted] = useState(false);



    return (<>
        <div id='left-menu-container' style={{ transform: retracted ? 'translateX(calc(-100% + 40px))' : '' }}>
            <div id='left-menu-interior' >
                <input id="input-recherche" type="search" placeholder="  Rechercher un lieu" />
                <div id="div-boutons">
                    <div id="div-boutons">
                        <>
                            {
                                typesLieux.map((lieu) => <button class="bouton-service" type="button" onClick={()=>changerType(lieu.type)}><img src={lieu.icon} />{lieu.nom}</button>)
                            }
                        </>

                    </div>
                    
                </div>
                <div id="transport-commun">
                    <input type="checkbox" class="checkbox2" />
                    <label for="vehicle1"> Présence de vélo</label><br></br>
                    <input type="checkbox" class="checkbox2" />
                    <label for="vehicle1"> Présence de transport en commun</label>
                </div>
            </div>
            <button id="menu-toggle" type="button" onClick={() => setRetracted(isRetracted => !isRetracted)}></button>
        </div>
    </>);

}   