
let literal: 'Hello, world'
let pi: 2
let mou: true
let mai: false

type Planet =  'Plutão' | 'Venus' |  "Mercurio" | 'Marte'

let planet: Planet

function chekPlanet(planet: Planet) {
    if (planet === 'Marte') {
        console.log( 'Estamos em Marte!')
    }
}


