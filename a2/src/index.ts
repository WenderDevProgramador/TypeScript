function sendSpaceship(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão!`)

    return spaceship
}

function accelerate(targetSpeed: number, spaceship: { name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed} ...`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed} ...`)
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name} ...`)
    }
}

const spaceshioName = prompt('Insira o nome da nave a ser enviada.')
const spaceshipCapition = prompt('Insira o nome do capitão da nave.')

sendSpaceship(spaceshioName, spaceshipCapition)

const currenShip = sendSpaceship(spaceshioName, spaceshipCapition)

const speed = Number(prompt('Insira a velocidade para a qual deseja acelerar.'))

accelerate(speed, currenShip)