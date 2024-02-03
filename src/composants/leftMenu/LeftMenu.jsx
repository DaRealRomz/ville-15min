import './leftMenu.css';

export default function LeftMenu() {
    return (
        <div id='left-menu-container'>
            <div id='left-menu-interior'>
                <h1>Menu</h1>
                <ul class="list-service">
                    <li class="option-service"><button class="bouton-service" type="button">Hôpitaux</button></li>
                    <li class="option-service"><button class="bouton-service" type="button">Épiceries</button></li>
                    <li class="option-service"><button class="bouton-service" type="button">Écoles</button></li>
                </ul>
            </div>
            <div></div>
        </div>

    );

}   