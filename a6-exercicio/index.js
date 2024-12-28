"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const users = [];
function fetchUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.github.com/users/${username}`);
        const user = yield response.json();
        if (user.message) {
            alert('Usuário não encontrado!');
        }
        else {
            users.push(user);
            document.getElementById('user-info').textContent = `
Usuário ${user.login} foi salvo.
ID: ${user.id}
Login: ${user.login}
Nome: ${user.name}
Bio: ${user.bio}
Repositórios públicos: ${user.public_repos}
        `;
        }
    });
}
function showAllUsers() {
    const userSection = document.getElementById('user-info');
    userSection.textContent = users.map(user => `- ${user.login}`).join('\n');
}
function showReposTotal() {
    const total = users.reduce((sum, user) => sum + user.public_repos, 0);
    document.getElementById('total-repos').textContent = `Total de repositórios: ${total}`;
}
function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    document.getElementById('top-five').textContent = topFive.map((user, index) => `${index + 1}º - ${user.login}: ${user.public_repos} repositórios`).join('\n');
}
document.getElementById('fetch-user').addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const username = document.getElementById('username').value;
    yield fetchUser(username);
}));
document.getElementById('show-all-users').addEventListener('click', showAllUsers);
