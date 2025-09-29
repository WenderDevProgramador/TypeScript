type PlanetSituation = 'habitado' | 'habitável' | 'Inabitável' | 'Inexplorado'
type PlanetCoordinates = [number, number, number, number]

type Planet = {
    name: string,
    coordinates: PlanetCoordinates,
    situation: PlanetSituation,
    satellites: string[]
}

const planets: Planet[] = []

// Funções principais
function addPlanet(name: string, coordinates: PlanetCoordinates, situation: PlanetSituation) {
    planets.push({ name, coordinates, situation, satellites: [] })
    showMessage(`Planeta ${name} foi adicionado com sucesso!`, 'success')
}

function findPlanet(name: string) {
    return planets.find(p => p.name === name)
}

function updateSituation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation
    showMessage(`Situação de ${planet.name} atualizada para ${situation}`, 'success')
}

function addSatellite(name: string, planet: Planet) {
    planet.satellites.push(name)
    showMessage(`Satélite ${name} adicionado ao planeta ${planet.name}`, 'success')
}

function removeSatellite(name: string, planet: Planet) {
    planet.satellites = planet.satellites.filter(s => s !== name)
    showMessage(`Satélite ${name} removido do planeta ${planet.name}`, 'success')
}

// Helpers
function showMessage(msg: string, type: 'success' | 'error') {
    const div = document.getElementById("message") as HTMLDivElement
    div.innerHTML = `<div class="${type}">${msg}</div>`
    setTimeout(() => div.innerHTML = "", 3000)
}

function showSection(id: string) {
    document.querySelectorAll('.form-container').forEach(div => {
        (div as HTMLElement).style.display = "none"
    })
    const section = document.getElementById(id)
    const listDiv = document.getElementById("planetList") as HTMLDivElement
    listDiv.innerHTML = ""
    if (section) section.style.display = "block"
}

// Opções do menu
function firstMenuOption() {
    const name = (document.getElementById("planetName") as HTMLInputElement).value
    const a = Number((document.getElementById("coordA") as HTMLInputElement).value)
    const b = Number((document.getElementById("coordB") as HTMLInputElement).value)
    const c = Number((document.getElementById("coordC") as HTMLInputElement).value)
    const d = Number((document.getElementById("coordD") as HTMLInputElement).value)
    const situation = (document.getElementById("situation") as HTMLSelectElement).value as PlanetSituation

    if (!name || !situation) return showMessage("Preencha todos os campos corretamente!", "error")

    addPlanet(name, [a, b, c, d], situation)
}

function secondMenuOption() {
    const name = (document.getElementById("updatePlanetName") as HTMLInputElement).value
    const situation = (document.getElementById("newSituation") as HTMLSelectElement).value as PlanetSituation
    const planet = findPlanet(name)

    if (!planet) return showMessage("Planeta não encontrado!", "error")
    if (!situation) return showMessage("Informe a nova situação!", "error")

    updateSituation(situation, planet)
}

function thirdMenuOption() {
    const name = (document.getElementById("addPlanetName") as HTMLInputElement).value
    const satellite = (document.getElementById("satelliteName") as HTMLInputElement).value
    const planet = findPlanet(name)

    if (!planet) return showMessage("Planeta não encontrado!", "error")
    if (!satellite) return showMessage("Informe o satélite!", "error")

    addSatellite(satellite, planet)
}

function fourthMenuOption() {
    const name = (document.getElementById("removePlanetName") as HTMLInputElement).value
    const satellite = (document.getElementById("removeSatelliteName") as HTMLInputElement).value
    const planet = findPlanet(name)

    if (!planet) return showMessage("Planeta não encontrado!", "error")
    if (!satellite) return showMessage("Informe o satélite!", "error")

    removeSatellite(satellite, planet)
}

function listPlanets() {
    const div = document.getElementById("planetList") as HTMLDivElement
    div.innerHTML = "<h2>Lista de Planetas</h2>"

    if (planets.length === 0) {
        div.innerHTML += "<p>Nenhum planeta cadastrado ainda.</p>"
        return
    }

    planets.forEach(p => {
        const [a, b, c, d] = p.coordinates
        let html = `
      <div class="planet-card">
        <h3>${p.name}</h3>
        <p><b>Coordenadas:</b> (${a}, ${b}, ${c}, ${d})</p>
        <p><b>Situação:</b> ${p.situation}</p>
        <p><b>Satélites:</b> ${p.satellites.length}</p>
    `
        if (p.satellites.length > 0) {
            html += `<ul class="satellite-list">`
            p.satellites.forEach(s => {
                html += `<li>${s}</li>`
            })
            html += `</ul>`
        }
        html += `</div>`
        div.innerHTML += html
    })
}

// 👇 exportando funções pro navegador
; (window as any).showSection = showSection
    ; (window as any).firstMenuOption = firstMenuOption
    ; (window as any).secondMenuOption = secondMenuOption
    ; (window as any).thirdMenuOption = thirdMenuOption
    ; (window as any).fourthMenuOption = fourthMenuOption
    ; (window as any).listPlanets = listPlanets
