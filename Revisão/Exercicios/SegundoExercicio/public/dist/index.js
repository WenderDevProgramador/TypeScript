const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`O planeta ${name} foi adicionado com sucesso!`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet ?? false;
}
