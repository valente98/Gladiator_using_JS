const $ = require('jquery');
const other = require('../../lib/other');

function gladiator(name, health, high_damage, low_damage) {
    var gladiator = {};
    gladiator.name = name;
    gladiator.health = health;
    gladiator.high_damage = high_damage;
    gladiator.low_damage = low_damage;
    return gladiator;
}

function main() {}
$(main);
