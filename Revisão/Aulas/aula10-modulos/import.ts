import {Spaceship} from './index.ts'
import * as _ from 'lodash'

interface BattleSpaceship extends Spaceship {
    wepons: number
}

let xwing: BattleSpaceship = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    speed: 100,
    wepons: 4
}

console.log(_.camelCase(xwing.name))
console.log(_.camelCase(xwing.pilot))