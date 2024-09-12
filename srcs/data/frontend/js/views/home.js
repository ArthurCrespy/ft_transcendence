import { navigateTo } from '../app.js';
import { changeLanguage } from './utils.js';

export function homeView(container) {
    // Vider le contenu du conteneur
    container.innerHTML = '';

    // Création de la div base
    const base = document.createElement('div');
    base.className = 'base';
    container.appendChild(base);

    // Création du titre
    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = 'Welcome to the Pong Game!';
    base.appendChild(title);

    // Création du bouton LOGIN
    const loginButton = document.createElement('button');
    loginButton.className = 'btn-theme';
    loginButton.textContent = 'LOGIN';
    loginButton.onclick = () => navigateTo('/login');
    base.appendChild(loginButton);

    // Création du bouton REGISTER
    const registerButton = document.createElement('button');
    registerButton.className = 'btn-theme';
    registerButton.textContent = 'REGISTER';
    base.appendChild(registerButton);

    // Ajouter un peu de style pour les boutons
    loginButton.style.marginRight = '20px';

    // Création de l'overlay pour le formulaire
    const formOverlay = document.createElement('div');
    formOverlay.className = 'form-overlay';
    container.appendChild(formOverlay);

    // Création du formulaire d'inscription
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';
    formContainer.innerHTML = `
        <h2>Register</h2>
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" id="back-btn" class="btn btn-secondary">Back</button>
        </form>
    `;
    formOverlay.appendChild(formContainer);

    // Afficher le formulaire lorsque l'on clique sur "REGISTER"
    registerButton.addEventListener('click', () => {
        formOverlay.style.display = 'flex'; // Afficher l'overlay et centrer le formulaire
    });

    // Gestion du bouton "Back"
    document.getElementById('back-btn').addEventListener('click', () => {
        formContainer.style.animation = 'slide-out 0.5s ease forwards'; // Animation de disparition
        setTimeout(() => {
            formOverlay.style.display = 'none'; // Cacher l'overlay après l'animation
            formContainer.style.animation = ''; // Réinitialiser l'animation
        }, 500);
    });

























    //
    // // SELECTEUR DE LANGUE
    // const languageDiv = document.createElement('div');
    // languageDiv.id = 'language';
    //
    // const languageLabel = document.createElement('label');
    // languageLabel.htmlFor = 'language-selector';
    // languageLabel.setAttribute('data-i18n', 'language_selector');
    // languageLabel.textContent = 'Language: ';
    // languageLabel.className = 'languageLabel';
    // languageDiv.appendChild(languageLabel);
    //
    // const languageSelector = document.createElement('select');
    // languageSelector.id = 'language-selector';
    //
    // const optionEn = document.createElement('option');
    // optionEn.value = 'en';
    // optionEn.innerHTML = '🇬🇧';
    //
    // const optionFr = document.createElement('option');
    // optionFr.value = 'fr';
    // optionFr.innerHTML = '🇫🇷';
    //
    // const optionEs = document.createElement('option');
    // optionEs.value = 'sp';
    // optionEs.innerHTML = '🇪🇸';
    //
    // languageSelector.appendChild(optionEn);
    // languageSelector.appendChild(optionFr);
    // languageSelector.appendChild(optionEs);
    // languageDiv.appendChild(languageSelector);
    // base.appendChild(languageDiv);
    //
    // let choiceLanguage = 'en';
    // document.querySelector("#language-selector").addEventListener("change", function() {
    //     choiceLanguage = this.value;
    //     changeLanguage(choiceLanguage);
    // });
}
