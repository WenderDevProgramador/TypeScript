const users = [];
// Função auxiliar para escrever no DOM
function printMessage(message) {
    const output = document.getElementById("output");
    output.innerHTML = `<pre>${message}</pre>`;
}
async function fetchUser(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const user = await response.json();
    if (user.message) {
        printMessage("Usuário não encontrado!");
    }
    else {
        users.push(user);
        printMessage(`O usuário ${user.login} foi salvo.\n\n` +
            `id: ${user.id}\n` +
            `login: ${user.login}\n` +
            `Nome: ${user.name}\n` +
            `Bio: ${user.bio}\n` +
            `Repositórios públicos: ${user.public_repos}`);
    }
}
async function showUser(userName) {
    const user = users.find(user => user.login === userName);
    if (!user) {
        printMessage("Usuário não encontrado na lista!");
        return;
    }
    const response = await fetch(user.repos_url);
    const repos = await response.json();
    let message = `id: ${user.id}\n` +
        `login: ${user.login}\n` +
        `Nome: ${user.name}\n` +
        `Bio: ${user.bio}\n` +
        `Repositórios públicos: ${user.public_repos}\n\nRepositórios:\n`;
    repos.forEach(repo => {
        message +=
            `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description ?? "Sem descrição"}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? "Sim" : "Não"}\n`;
    });
    printMessage(message);
}
function showAllUsers() {
    let message = "Usuários salvos:\n";
    users.forEach(user => {
        message += `\n- ${user.login}`;
    });
    printMessage(message);
}
function showReposTotal() {
    const reposTotal = users.reduce((accu, user) => accu + user.public_repos, 0);
    printMessage(`O grupo possui um total de ${reposTotal} repositórios públicos!`);
}
function showTopFive() {
    const topFive = users
        .slice()
        .sort((a, b) => b.public_repos - a.public_repos)
        .slice(0, 5);
    let message = "Top 5 usuários com mais repositórios públicos:\n";
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    printMessage(message);
}
// Eventos
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("usernameInput");
    const fetchBtn = document.getElementById("fetchUserBtn");
    const showAllBtn = document.getElementById("showAllBtn");
    const reposTotalBtn = document.getElementById("reposTotalBtn");
    const topFiveBtn = document.getElementById("topFiveBtn");
    fetchBtn.addEventListener("click", () => {
        const userName = input.value.trim();
        if (userName)
            fetchUser(userName);
    });
    showAllBtn.addEventListener("click", showAllUsers);
    reposTotalBtn.addEventListener("click", showReposTotal);
    topFiveBtn.addEventListener("click", showTopFive);
});
