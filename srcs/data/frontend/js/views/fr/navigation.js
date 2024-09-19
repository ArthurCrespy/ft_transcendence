import { getCookie } from '../utils.js';
import { navigateTo } from '../../app.js';
import { getCookie } from '../utils.js';
//import { navigationBar } from './navigation.js';


export function navigationBar(container) {
    container.innerHTML = '';

    // Recuperer les infos de l'utilisateur dans le backend
    fetch(`/api/settings/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
        },
    })
        // Si le status de la reponse est 200, on recupere les donnees sinon on lance une erreur ou on redirige vers la page de connexion
        // Si le status est 307 sans passer dans le bloc de donnees
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            else if (response.status === 307) {
                localStorage.removeItem('token');
                fetch('/api/logout/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCookie('csrftoken'),
                    },
                }).then(r => r.json())
                navigateTo('/login');
                return null;
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then(data => {
            if (!data) {
                return;
            }
            const userData = {
                username: data.username,
                nickname: data.nickname,
                email: data.email,
                language: data.language,
                font_size: data.font_size,
                theme: data.dark_mode,
                avatar: data.avatar,
            }

            const nav = document.createElement('nav');
            nav.className = 'nav fixed-left';
            container.appendChild(nav);


            const divProfil = document.createElement('div');
            divProfil.className = 'divProfil';
            nav.appendChild(divProfil);

            const avatarItem = document.createElement('div');
            avatarItem.className = 'list-group-item imgAvatarContener';

            const avatarImage = document.createElement('img');
            avatarImage.src = `data:image/png;base64, ${userData.avatar}`;
            avatarImage.className = 'img-fluid rounded-circle imgAvatarProfile';
            avatarImage.alt = 'Avatar';
            divProfil.appendChild(avatarItem);
            avatarItem.appendChild(avatarImage);

            const TitleNickname = document.createElement('h4');
            TitleNickname.className = 'TitleNickname';
            TitleNickname.textContent = `${userData.nickname}`;
            divProfil.appendChild(TitleNickname);

            const divNav = document.createElement('div');
            divNav.className = 'divNav';
            nav.appendChild(divNav);
            const NavBarList = document.createElement('ul');
            NavBarList.className = 'NavBarList';
            const PlayElem = document.createElement('li');
            PlayElem.className = 'PlayElem';
            PlayElem.textContent = 'Play';
            const ChatElem  = document.createElement('li');
            ChatElem.className = 'ElemListNavBar';
            ChatElem.textContent = 'Chat';
            const FriendsElem  = document.createElement('li');
            FriendsElem.className = 'ElemListNavBar';
            FriendsElem.textContent = 'Friends';
            const LeaderboardElem  = document.createElement('li');
            LeaderboardElem.className = 'ElemListNavBar';
            LeaderboardElem.textContent = 'Leaderboard';
            divNav.appendChild(NavBarList);
            NavBarList.appendChild(PlayElem);
            NavBarList.appendChild(ChatElem);
            NavBarList.appendChild(FriendsElem);
            NavBarList.appendChild(LeaderboardElem);

            const divListFriends = document.createElement('div');
            divListFriends.className = 'divListFriends';
            divListFriends.textContent = 'Friends list';
            nav.appendChild(divListFriends);

            const divLogout = document.createElement('div');
            divLogout.className = 'divLogout';
            nav.appendChild(divLogout);
            const buttonLogOut = document.createElement('button')
            buttonLogOut.className = 'buttonLogOut';
            // buttonLogOut.addEventListener('click', () => {
            //     const mainSettingsDiv = document.querySelector('.main-settings-div');
            //     mainSettingsDiv.style.display = 'flex';
            // });
            divLogout.appendChild(buttonLogOut);

    const svgFriend = document.createElement('svg');
    svgFriend.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgFriend.setAttribute('width', '30');
    svgFriend.setAttribute('height', '24');
    svgFriend.setAttribute('fill', 'currentColor');
    svgFriend.setAttribute('class', 'bi bi-person-lines-fill');
    svgFriend.setAttribute('viewBox', '0 0 16 16');
    aFriend.appendChild(svgFriend);
    aFriend.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo('/friends');
    });

    const path3 = document.createElement('path');
    path3.setAttribute('d', 'M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z');
    svgFriend.appendChild(path3);

    // Creation d'un bouton pour le chat
    const aChat = document.createElement('a');
    aChat.className = 'navbar-brand';
    div.appendChild(aChat);

    const svgChat = document.createElement('svg');
    svgChat.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgChat.setAttribute('width', '30');
    svgChat.setAttribute('height', '24');
    svgChat.setAttribute('fill', 'currentColor');
    svgChat.setAttribute('class', 'bi bi-chat-dots-fill');
    svgChat.setAttribute('viewBox', '0 0 16 16');
    aChat.appendChild(svgChat);
    aChat.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo('/chat');
    });

    const path4 = document.createElement('path');
    path4.setAttribute('d', 'M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2');
    svgChat.appendChild(path4);

    // Creation d'un bouton pour les parametres
    const aSettings = document.createElement('a');
    aSettings.className = 'navbar-brand';
    div.appendChild(aSettings);

    const svgSettings = document.createElement('svg');
    svgSettings.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgSettings.setAttribute('width', '30');
    svgSettings.setAttribute('height', '24');
    svgSettings.setAttribute('fill', 'currentColor');
    svgSettings.setAttribute('class', 'bi bi-gear-fill');
    svgSettings.setAttribute('viewBox', '0 0 16 16');
    aSettings.appendChild(svgSettings);
    aSettings.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo('/settings');
    });

    // Path c'est l'icone de parametre
    const path5 = document.createElement('path');
    path5.setAttribute('d', 'M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z');
    svgSettings.appendChild(path5);

    // Creation d'un bouton pour les notifications
    const userActionsDiv = document.createElement('div');
    userActionsDiv.className = 'user-actions hidden-xs';

    const aNotification = document.createElement('a');
    aNotification.className = 'navbar-brand notification';
    div.appendChild(aNotification);

    const svgNotification = document.createElement('svg');
    svgNotification.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgNotification.setAttribute('width', '16');
    svgNotification.setAttribute('height', '16');
    svgNotification.setAttribute('fill', 'currentColor');
    svgNotification.setAttribute('class', 'bi bi-bell-fill');
    svgNotification.setAttribute('viewBox', '0 0 16 16');
    aNotification.appendChild(svgNotification);
    aNotification.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo('/notifications');
    });

// TODO: Afficher lorsque l'utilisateur a des notifications
    // Création du compteur de notifications
    const countElement = document.createElement('span');
    countElement.className = 'user-action-count labeled redNotification';
    countElement.setAttribute('data-counter-count', '2');
    countElement.style.display = 'none';
    countElement.textContent = '2'; //TOTO : Websocket pour récupérer le nombre de notifications
    aNotification.appendChild(countElement);

    const path6 = document.createElement('path');
    path6.setAttribute('d', 'M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm2-3a1 1 0 0 0-2 0h2zm-2-4a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z');
    svgNotification.appendChild(path6);

    // Creation d'un formulaire de recherche
    const form = document.createElement('form');
    form.className = 'd-flex';
    form.setAttribute('role', 'search');
    containerFluid.appendChild(form);

    const input = document.createElement('input');
    input.className = 'form-control me-2';
    input.setAttribute('type', 'search');
    input.setAttribute('placeholder', 'Username');
    input.setAttribute('aria-label', 'Search');
    form.appendChild(input);

    const button = document.createElement('button');
    button.className = 'btn btn-outline-success';
    button.setAttribute('type', 'submit');
    form.appendChild(button);

    const svgSearch = document.createElement('svg');
    svgSearch.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgSearch.setAttribute('width', '16');
    svgSearch.setAttribute('height', '16');
    svgSearch.setAttribute('fill', 'currentColor');
    svgSearch.setAttribute('class', 'bi bi-search');
    svgSearch.setAttribute('viewBox', '0 0 16 16');
    button.appendChild(svgSearch);

    const path7 = document.createElement('path');
    path7.setAttribute('d', 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0');
    svgSearch.appendChild(path7);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        navigateTo(`/friends/${input.value}`);
    });
});
}
