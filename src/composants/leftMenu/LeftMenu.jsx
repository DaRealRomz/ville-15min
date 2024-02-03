import { useState } from 'react';
import './leftMenu.css';

export default function LeftMenu() {

    let [retracted, setRetracted] = useState(false);



    return (<>
        <div id='left-menu-container' style={{ transform: retracted ? 'translateX(calc(-100% + 30px))' : '' }}>
            <div id='left-menu-interior' >
            <input id="input-recherche" type="search" placeholder="Rechercher un lieu" />
                <div id="div-boutons">
                    <button class="bouton-service" type="button">Hôpitaux</button>
                    <button class="bouton-service" type="button">Épiceries</button>
                    <button class="bouton-service" type="button">Écoles</button>
                </div>
                <div id="transport-commun">
                    <input type="checkbox" class="checkbox2"/>
                    <label for="vehicle1"> Présence de vélo</label><br></br>
                    <input type="checkbox" class="checkbox2"/>
                    <label for="vehicle1"> Présence de transport en commun</label>
                </div>
            </div>
            <button id="menu-toggle" type="button" onClick={() => setRetracted(isRetracted => !isRetracted)}></button>
        </div>
    </>);

}   