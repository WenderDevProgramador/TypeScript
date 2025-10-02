"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var xwing = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    speed: 100,
    wepons: 4
};
console.log(_.camelCase(xwing.name));
console.log(_.camelCase(xwing.pilot));
