import './leftMenu.css';

export default function LeftMenu() {
    return (
        <div id='left-menu-container'>
            <div id='left-menu-interior'>
                <h1>Menu</h1>
                <ul class="list-service">
                    <li><button class="option-service" type="button">Hôpitaux</button></li>
                    <li><button class="option-service" type="button">Épiceries</button></li>
                    <li><button class="option-service" type="button">Écoles</button></li>
                </ul>
            </div>
        </div>

    );

}   