import './leftMenu.css';

export default function LeftMenu() {
    return (
        <div id='left-menu-container'>
            <div id='left-menu-interior'>
                <div>
                <h1 id="menu-title">Menu</h1>
                <button class="bouton-service" type="button">Hôpitaux</button>
                <button class="bouton-service" type="button">Épiceries</button>
                <button class="bouton-service" type="button">Écoles</button>
                </div>
            </div>
            <button id="menu-toggle" type="button"></button>
        </div>

    );

}   