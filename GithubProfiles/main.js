const API_URL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser("nabendu82");

async function getUser(username) {
    const url = `${API_URL}${username}`;
    const response = await fetch(url);
    const user = await response.json();
    createUserCard(user);
    getRepos(username);
}

async function getRepos(user){
    const url = `${API_URL}${user}/repos`;
    const response = await fetch(url);
    const respData = await response.json();
    console.log(respData);
    addRepostTocard(respData);
}

function addRepostTocard(repos){
    const reposEl = document.getElementById('repos');
    repos.forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.textContent = repo.name;
        reposEl.appendChild(repoEl);
    })
}

function createUserCard(user){
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li><strong>Followers:</strong> ${user.followers}</li>
                    <li><strong>Following:</strong> ${user.following}</li>
                    <li><strong>Repos:</strong> ${user.public_repos}</li>
                    <li><strong>Twitter:</strong> ${user.twitter_username}</li>
                    <li><strong>Location:</strong> ${user.location}</li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = search.value;
    if(username){
        getUser(username);
        search.value = '';
    }
})