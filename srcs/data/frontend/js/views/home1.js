import { navigateTo } from '../app.js';
import { changeLanguage } from './utils.js';

export function homeView(container) {
    // Vider le contenu du conteneur
    container.innerHTML = '';

    // Création de la div base
    const base = document.createElement('div');
    base.className = 'base';
    container.appendChild(base);


    const title = document.createElement('span');
    title.className = 'TitleSite';
    title.setAttribute('data-i18n', 'home');
    title.textContent = 'Pong Site';
    base.appendChild(title);

    // Création du sous-titre
    const loginButton = document.createElement('button');
    loginButton.className = 'btn ButtonLogin2 buttonForm';
    loginButton.setAttribute('data-i18n', 'login');

    const loginText = document.createElement('span');
    loginText.textContent = 'Login';
    loginText.className = 'loginText';
    loginButton.appendChild(loginText);

    const loginForm = document.createElement('div');
    loginForm.className = 'loginForm';
    loginForm.innerHTML = `
    <input type="text" placeholder="Email" class="login-input">
    <input type="password" placeholder="Password" class="login-input">
    <button type="submit" class="submit-btn">Submit</button>
    <button type="button" class="connect-42-btn">Se connecter avec 42</button>
`;
    loginButton.appendChild(loginForm);

    loginButton.addEventListener('click', function() {
        loginButton.classList.toggle('expanded');
    });


    base.appendChild(loginButton);

    document.querySelector('.loginForm').addEventListener('click', function(event) {
        event.stopPropagation();
    });




    const registerButton = document.createElement('button');
    registerButton.className = 'btn ButtonRegister2 buttonForm';
    registerButton.setAttribute('data-i18n', 'register');
    // registerButton.textContent = 'Register';
    const registerText = document.createElement('span');
    registerText.textContent = 'Register';
    registerText.className = 'registerText';
    registerButton.appendChild(registerText);
    base.appendChild(registerButton);







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
