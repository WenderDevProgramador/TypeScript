
type PlanetSituation = 'Habitado ' | 'Habitável' | "Inabitável" | 'Inexplorado'

type PlanetCoordenadas = [number,number,number,number]

type Planet = {
    name: string,
    coordenates: PlanetCoordenadas,
    situation: PlanetSituation,
    satellites: string[]
}

const planets : Planet[] = []



