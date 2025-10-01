

interface CelestialBody {
    name: string,
    mass: number,
}

interface Star extends CelestialBody {
    age: number,
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number,
    createSatellite: (name: string) => void
}

let sun: Star = {
    name: 'Sol',
    mass: 1.989 * (10 ** 30),
    age: 4.603 * (10 ** 9),
    planets: []
}

class MilkWayPlanet implements Planet {
    name: string;
    mass: number;
    population: number;
    satellites: string[];

    constructor (name: string, mass: number, population: number, satellites: string[]) {
        this.name = name
        this.mass = mass
        this.population = population
        this.satellites = satellites
    }

    createSatellite(name: string) {
        
    }

}

interface Planet {
    satellites: string[]
}