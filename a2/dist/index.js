function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o!"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, " ..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, " ..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, " ..."));
    }
}
var spaceshioName = prompt('Insira o nome da nave a ser enviada.');
var spaceshipCapition = prompt('Insira o nome do capitão da nave.');
sendSpaceship(spaceshioName, spaceshipCapition);
var currenShip = sendSpaceship(spaceshioName, spaceshipCapition);
var speed = Number(prompt('Insira a velocidade para a qual deseja acelerar.'));
accelerate(speed, currenShip);
