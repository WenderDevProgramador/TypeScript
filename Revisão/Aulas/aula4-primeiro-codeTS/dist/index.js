function sendSpaceShip(name, capitain) {
    var spaceship = {
        name: name,
        capitain: capitain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.capitain, " foi enviada em uma miss\u00E3o!"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da nave ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da nave ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Velocidade da nave ".concat(spaceship.name, " mantida."));
    }
}
var spaceShipName = prompt("Insira o nome da nave a ser enviada: ");
var spaceshipCapitain = prompt('Insira o nome do capitão: ');
var currentSip = sendSpaceShip(spaceShipName, spaceshipCapitain);
var speed = Number(prompt('Insira a velocida que deseja acelerar: '));
accelerate(speed, currentSip);
