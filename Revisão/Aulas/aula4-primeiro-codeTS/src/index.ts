
function sendSpaceShip(name: string, capitain: string) {
    const spaceship = {
        name,
        capitain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.capitain} foi enviada em uma missão!`)

    return spaceship
}

function accelerate(targetSpeed: number, spaceship: {name: string, speed: number}) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da nave ${spaceship.name} para ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da nave ${spaceship.name} para ${targetSpeed}`)
    } else {
        alert(`Velocidade da nave ${spaceship.name} mantida.`)
    }
}

const spaceShipName = prompt(`Insira o nome da nave a ser enviada: `)
const spaceshipCapitain = prompt('Insira o nome do capitão: ')

const currentSip = sendSpaceShip(spaceShipName, spaceshipCapitain)

const speed = Number(prompt('Insira a velocida que deseja acelerar: '))

accelerate(speed, currentSip)

