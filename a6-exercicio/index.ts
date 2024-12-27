interface GithubUserResponse {
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    message?: "Not Found"
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
        alert('Usuário não encontrado!');
    } else {
        users.push(user)

        alert(
            `O usuário ${user.login} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`
        )
    }
}

async function showUser(username: string) {
    const user = users.find(user => user.login === username)

    if (typeof user === 'undefined') {
        alert('Usuario não encontrado!')
    } else {
        const response = await fetch(user.repos_url)
        const repos: GithubRepoResponse[] = await response.json()

        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`

        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
        })

        alert(message)
    }
}



