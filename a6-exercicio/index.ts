interface GithubUserResponse {
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    message?: string
}

interface GithubRepoResponse {
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}

const users: GithubUserResponse[] = []

async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: GithubUserResponse = await response.json()

    if (user.message) {
        alert('Usuário não encontrado!')
    } else {
        users.push(user)
        document.getElementById('user-info')!.textContent = `
Usuário ${user.login} foi salvo.
ID: ${user.id}
Login: ${user.login}
Nome: ${user.name}
Bio: ${user.bio}
Repositórios públicos: ${user.public_repos}
        `
    }
}

function showAllUsers() {
    const userSection = document.getElementById('user-info')!
    userSection.textContent = users.map(user => `- ${user.login}`).join('\n')
}

function showReposTotal() {
    const total = users.reduce((sum, user) => sum + user.public_repos, 0)
    document.getElementById('total-repos')!.textContent = `Total de repositórios: ${total}`
}

function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)
    document.getElementById('top-five')!.textContent = topFive.map(
        (user, index) => `${index + 1}º - ${user.login}: ${user.public_repos} repositórios`
    ).join('\n')
}

document.getElementById('fetch-user')!.addEventListener('click', async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value
    await fetchUser(username)
})

document.getElementById('show-all-users')!.addEventListener('click', showAllUsers)
