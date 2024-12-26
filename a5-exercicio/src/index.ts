
type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

type PlanetCoordinates = [number, number, number, number]

type Planet = {
    name: string,
    coordinates: PlanetCoordinates,
    situation: PlanetSituation,
    satellites: string[]
}

const planets: Planet[] = []

function addPlanet(name: string, coordinates: PlanetCoordinates, situation: PlanetSituation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    })

    alert(`O planeta ${name} foi adicionado com sucesso!`)
}

function findPlanet(name: string) {
    const planet = planets.find(plane => plane.name === name)

    return planet ?? false
}

function updateSituation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`)
}

function addSatellite(name: string, planet: Planet) {
    planet.satellites.push(name)

    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`)
}

function removeSatellite(name: string, planet: Planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name)

    alert(`O satelite ${name} foi removido do planeta ${planet.name}.`)
}



function promptValidSituation() {
    let situation: PlanetSituation = 'Inexplorado'
    let validSituation = false

    while (!validSituation) {
        const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')

        switch (situationInput) {
            case '1':
                situation = 'Habitado'
                validSituation = true
                break;
            case '2':
                situation = 'Habitável'
                validSituation = true
                break;
            case '3':
                situation = 'Inabitável'
                validSituation = true
                break;
            case '4':
                situation = 'Inexplorado'
                validSituation = true
                break;
            default:
                alert('Situação inválida!')
                break;
        }
    }

    return situation
}


function promptValidPlanet(callbackfn: (Planet: Planet) => void) {
    const planetName = prompt('Informe o nome do planeta:')
    const planet = findPlanet(planetName)

    if (planet) {
        callbackfn(planet)
    } else {
        alert(`Planeta não encontrado! Retornado ao menu.`)
    }
}

// Opções do Menu

function firstMenuOption() {
    const name = prompt('Informe o nome do planeta:')
    const coordinateA = Number(prompt('Informe a primeira coordenada:'))
    const coordinateB = Number(prompt('Informe a segunda coordenada:'))
    const coordinateC = Number(prompt('Informe a terceira coordenada:'))
    const coordinateD = Number(prompt('Informe a quarta coordenada:'))

    // Aqui a nossa função ajuda a ter um código mais organizado
    const situation = promptValidSituation()

    const confirmation = confirm(`Confirma o registro do planeta ${name}?
    Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
    Situação: ${situation}`)

    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation)
    }
}






