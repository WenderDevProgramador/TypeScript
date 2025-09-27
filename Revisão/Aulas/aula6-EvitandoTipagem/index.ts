
function sendSpaceShip(spaceship: { pilot: string, copilot?: string }) {
    // Logica
}

sendSpaceShip({ pilot: 'Han', copilot: 'Luke' })
sendSpaceShip({ pilot: 'Jão' })

let boo: unknown

//  unknown forma de evitar a tipagem

let input: any

// any desabilita a tipagemm do typescript, não é recomendado usar ele sempre.

input = 'Test'
input = 20
input = []

let text: string = ''

input = text

// never é algo que nunca deveria acontecer

function verification(cidadao: unknown) {
    if (!cidadao) {
        console.log('Não encontrado')
    } else {
        return '_check'
    }

}