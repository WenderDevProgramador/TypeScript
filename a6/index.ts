interface CelestialBody {
    name: string
    mass: number
}

interface Star extends CelestialBody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
}

let sun: Star 

sun.name = 'Sol'
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10**9)
sun.planets = []

class MilkyWayPlanet implements Planet {
    population: number
    name: string
    mass: number

    constructor(name: string, mass: number, population: number) {
        this.mass = mass
        this.name = name 
        this.population = population
    }

    createSatellite: (name: string) => void
    
}
