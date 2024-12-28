class Spaceship {
    constructor(name, captain) {
        this.name = name
        this.captain = captain
        this.speed = 0
    }

    accelerate(rate, time) {
        this.speed = rate * time
    }
}

class Fighter extends Spaceship {
    constructor(name, captain, weapons) {
        super(name, captain)
        this.weapons = weapons
    }

    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!')
        }
    }

    erase() {
        this.name = ''
        this.captain = ''
    }
}

let ship = new Spaceship('USS Enterprise', 'James T. Kirk')

ship.speed = 50
ship.accelerate(50, 10)