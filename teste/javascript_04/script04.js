var greeting = document.getElementById('greeting');
var username = '';
var profileImage = document.getElementById('profileImage');

function login() {
    username = prompt('Enter your username');
    if (username === '' || username === null) {
        alert('Please enter a username');
    } else {
        greeting.innerHTML = `Bem-vindo ${username}!`;

        let logoutBtn = document.createElement('button');
        logoutBtn.innerText = 'Log out';
        logoutBtn.onclick = logout; // Adiciona a função logout ao clique do botão
        greeting.appendChild(logoutBtn);
    }
}

function logout() {
    alert('You have been logged out');
    greeting.innerHTML = `Até mais ${username}!`;

    profileImage.src = 'https://pipocamoderna.com.br/storage/2019/11/the-end-clipart-looney-toon-362084-2188295.jpg';
}