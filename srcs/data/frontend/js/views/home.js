
import { navigateTo } from '../app.js';
import { changeLanguage } from './utils.js';

export function homeView(container) {
    // Vider le contenu du conteneur
    container.innerHTML = '';

    // Créer la structure de la navbar
    const divFlex = document.createElement('div');
    divFlex.className = 'd-flex';
    container.appendChild(divFlex);

    // Créer la navbar
    const navBar = document.createElement('div');
    navBar.className = 'Nav_bar';
    divFlex.appendChild(navBar);

    // Créer le bouton Login
    const loginButton = document.createElement('button');
    loginButton.className = 'btn btn-light Nav_button_Login';
    loginButton.textContent = 'Login';
    loginButton.addEventListener('click', (event) => {
        navigateTo('/login');
    });

    // Créer le bouton Register
    const registerButton = document.createElement('button');
    registerButton.className = 'btn btn-light Nav_button_Register';
    registerButton.textContent = 'Register';

    // Injecter les boutons dans la navbar
    navBar.appendChild(loginButton);
    navBar.appendChild(registerButton);


    // Créer le contenu principal
    const mainContent = document.createElement('div');
    mainContent.className = 'flex-grow-1 bg-dark';
    divFlex.appendChild(mainContent);
}


