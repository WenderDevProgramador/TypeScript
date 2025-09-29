
type PlanetSituation = 'habitado' | 'habitável' | 'Inabitável' | 'Inexplorado'
type PlanetCoordinates = [number, number, number]

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
    const planet = planets.find(planet => planet.name === name)

    return planet ?? false
}

