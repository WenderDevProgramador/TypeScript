type SpaceShip = {
    name: string
    pilot: string
    crewLimit: number
    crew: string[]
    inMission: boolean
}

const spaceShips: SpaceShip[] = []

/* Utilitários */
function showMessage(msg: string) {
    const mensagens = document.getElementById("mensagens")!
    mensagens.textContent = msg
}

function toggleSection(sectionId: string) {
    document.querySelectorAll("section").forEach(sec => sec.classList.add("hide"))
    document.getElementById(sectionId)?.classList.remove("hide")
}

/* Funções principais */
function addSpaceShip(name: string, pilot: string, crewLimit: number) {
    const spaceShip: SpaceShip = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }
    spaceShips.push(spaceShip)
    showMessage(`A nave ${spaceShip.name} foi registrada.`)
}

function findSpaceShip(name: string) {
    return spaceShips.find(ship => ship.name === name)
}

function addCrewMember(member: string, spaceship: SpaceShip) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        showMessage(`${member} não pode ser adicionado. Limite atingido.`)
    } else {
        spaceship.crew.push(member)
        showMessage(`${member} adicionado à nave ${spaceship.name}.`)
    }
}

function sendInMission(spaceShip: SpaceShip) {
    if (spaceShip.inMission) {
        showMessage(`${spaceShip.name} já está em missão.`)
    } else if (spaceShip.crew.length < Math.floor(spaceShip.crewLimit / 3)) {
        showMessage(`${spaceShip.name} não tem tripulação suficiente.`)
    } else {
        spaceShip.inMission = true
        showMessage(`${spaceShip.name} foi enviada em missão!`)
    }
}

function listSpaceships() {
    const lista = document.getElementById("listaNaves")!
    lista.innerHTML = ""
    spaceShips.forEach(ship => {
        const div = document.createElement("div")
        div.innerHTML = `
      <strong>Nave:</strong> ${ship.name}<br>
      <strong>Piloto:</strong> ${ship.pilot}<br>
      <strong>Em missão:</strong> ${ship.inMission ? "Sim" : "Não"}<br>
      <strong>Limite:</strong> ${ship.crewLimit}<br>
      <strong>Tripulantes:</strong> ${ship.crew.join(", ") || "Nenhum"}<br><hr>
    `
        lista.appendChild(div)
    })
}

/* Eventos do menu */
document.getElementById("btn-registrar")!.addEventListener("click", () => toggleSection("form-registrar"))
document.getElementById("btn-adicionar")!.addEventListener("click", () => toggleSection("form-adicionar"))
document.getElementById("btn-enviar")!.addEventListener("click", () => toggleSection("form-enviar"))
document.getElementById("btn-listar")!.addEventListener("click", () => {
    toggleSection("listagem")
    listSpaceships()
})

/* Eventos de formulário */
document.getElementById("confirmarRegistrar")!.addEventListener("click", () => {
    const name = (document.getElementById("nomeNave") as HTMLInputElement).value
    const pilot = (document.getElementById("pilotoNave") as HTMLInputElement).value
    const crewLimit = Number((document.getElementById("limiteTripulantes") as HTMLInputElement).value)
    if (name && pilot && crewLimit > 0) {
        addSpaceShip(name, pilot, crewLimit)
        toggleSection("menu")
    } else {
        showMessage("Preencha todos os campos corretamente.")
    }
})

document.getElementById("confirmarAdicionar")!.addEventListener("click", () => {
    const member = (document.getElementById("nomeTripulante") as HTMLInputElement).value
    const spaceshipName = (document.getElementById("naveDestino") as HTMLInputElement).value
    const ship = findSpaceShip(spaceshipName)
    if (ship) {
        addCrewMember(member, ship)
        toggleSection("menu")
    } else {
        showMessage("Nave não encontrada.")
    }
})

document.getElementById("confirmarEnviar")!.addEventListener("click", () => {
    const spaceshipName = (document.getElementById("naveEnviar") as HTMLInputElement).value
    const ship = findSpaceShip(spaceshipName)
    if (ship) {
        sendInMission(ship)
        toggleSection("menu")
    } else {
        showMessage("Nave não encontrada.")
    }
})

/* Voltar ao menu */
document.querySelectorAll(".voltar").forEach(btn => {
    btn.addEventListener("click", () => toggleSection("menu"))
})

/* Inicia no menu */
toggleSection("menu")
