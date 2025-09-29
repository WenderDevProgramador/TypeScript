const planets = [];
// Funções principais
function addPlanet(name, coordinates, situation) {
    planets.push({ name, coordinates, situation, satellites: [] });
    showMessage(`Planeta ${name} foi adicionado com sucesso!`, 'success');
}
function findPlanet(name) {
    return planets.find(p => p.name === name);
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    showMessage(`Situação de ${planet.name} atualizada para ${situation}`, 'success');
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    showMessage(`Satélite ${name} adicionado ao planeta ${planet.name}`, 'success');
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(s => s !== name);
    showMessage(`Satélite ${name} removido do planeta ${planet.name}`, 'success');
}
// Helpers
function showMessage(msg, type) {
    const div = document.getElementById("message");
    div.innerHTML = `<div class="${type}">${msg}</div>`;
    setTimeout(() => div.innerHTML = "", 3000);
}
function showSection(id) {
    document.querySelectorAll('.form-container').forEach(div => {
        div.style.display = "none";
    });
    const section = document.getElementById(id);
    const listDiv = document.getElementById("planetList");
    listDiv.innerHTML = "";
    if (section)
        section.style.display = "block";
}
// Opções do menu
function firstMenuOption() {
    const name = document.getElementById("planetName").value;
    const a = Number(document.getElementById("coordA").value);
    const b = Number(document.getElementById("coordB").value);
    const c = Number(document.getElementById("coordC").value);
    const d = Number(document.getElementById("coordD").value);
    const situation = document.getElementById("situation").value;
    if (!name || !situation)
        return showMessage("Preencha todos os campos corretamente!", "error");
    addPlanet(name, [a, b, c, d], situation);
}
function secondMenuOption() {
    const name = document.getElementById("updatePlanetName").value;
    const situation = document.getElementById("newSituation").value;
    const planet = findPlanet(name);
    if (!planet)
        return showMessage("Planeta não encontrado!", "error");
    if (!situation)
        return showMessage("Informe a nova situação!", "error");
    updateSituation(situation, planet);
}
function thirdMenuOption() {
    const name = document.getElementById("addPlanetName").value;
    const satellite = document.getElementById("satelliteName").value;
    const planet = findPlanet(name);
    if (!planet)
        return showMessage("Planeta não encontrado!", "error");
    if (!satellite)
        return showMessage("Informe o satélite!", "error");
    addSatellite(satellite, planet);
}
function fourthMenuOption() {
    const name = document.getElementById("removePlanetName").value;
    const satellite = document.getElementById("removeSatelliteName").value;
    const planet = findPlanet(name);
    if (!planet)
        return showMessage("Planeta não encontrado!", "error");
    if (!satellite)
        return showMessage("Informe o satélite!", "error");
    removeSatellite(satellite, planet);
}
function listPlanets() {
    const div = document.getElementById("planetList");
    div.innerHTML = "<h2>Lista de Planetas</h2>";
    if (planets.length === 0) {
        div.innerHTML += "<p>Nenhum planeta cadastrado ainda.</p>";
        return;
    }
    planets.forEach(p => {
        const [a, b, c, d] = p.coordinates;
        let html = `
      <div class="planet-card">
        <h3>${p.name}</h3>
        <p><b>Coordenadas:</b> (${a}, ${b}, ${c}, ${d})</p>
        <p><b>Situação:</b> ${p.situation}</p>
        <p><b>Satélites:</b> ${p.satellites.length}</p>
    `;
        if (p.satellites.length > 0) {
            html += `<ul class="satellite-list">`;
            p.satellites.forEach(s => {
                html += `<li>${s}</li>`;
            });
            html += `</ul>`;
        }
        html += `</div>`;
        div.innerHTML += html;
    });
}
// 👇 exportando funções pro navegador
;
window.showSection = showSection;
window.firstMenuOption = firstMenuOption;
window.secondMenuOption = secondMenuOption;
window.thirdMenuOption = thirdMenuOption;
window.fourthMenuOption = fourthMenuOption;
window.listPlanets = listPlanets;
