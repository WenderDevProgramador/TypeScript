
let literal: 'Hello, world'
let pi: 2
let mou: true


type Planet =  'Plutão' | 'Venus' |  "Mercurio" | 'Marte'

let planet: Planet

function chekPlanet(planet: Planet) {
    if (planet === 'Marte') {
        console.log( 'Estamos em Marte!')
    }
}


type GreetingCllback = (name:string) => void

function greet(callbeckFn: GreetingCllback) {
    let name = "Isack"
    callbeckFn(name)
}


