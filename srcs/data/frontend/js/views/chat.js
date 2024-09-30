import { getCookie } from './utils.js';
import { DEBUG } from '../app.js';
import { navigationBar } from './navigation.js';
import { createGlobalContainer, createUserCard } from '../component/chat/visual.js';

export async function chatView(container) {
    container.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'd-flex h-100';
    container.appendChild(div);

    const navBarContainer = navigationBar(container);
    div.appendChild(navBarContainer);

    const viewContainer = await createGlobalContainer();
    div.appendChild(viewContainer);

    // Create the WebSocket for user status
    const statusSocket = new WebSocket('ws://' + window.location.host + '/ws/status/');

    // Onopen event
    statusSocket.onopen = function(event) {
        if (DEBUG) {console.log('Status socket opened');}
    };

    // On message received from the server (status of a user)
    statusSocket.onmessage = function(event) {
        // FIXME: Handle the message properly, if I'm the one who sent the message, don't send an error
        const data = JSON.parse(event.data);
        if (DEBUG) {console.log('Message received:', data);}
        // Update the user list with the new status
        const userList = document.getElementById('user-list');
        createUserCard(data, userList);
    };

    // Onclose event
    statusSocket.onclose = function(event) {
        if (DEBUG) {console.error('Status socket closed', event);}
    };

    const userList = document.getElementById('user-list');

    // Call API to get the list of users
    fetch('/api/users/', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
        },
    })
    .then(response => response.json())
    .then(data => {
        // For each user, create a user card
        data.forEach(user => {
            createUserCard(user, userList);
        });
    })
    .catch(error => {
        if (DEBUG) {console.error('Error:', error);}
    });
}