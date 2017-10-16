const $ = require('jquery');
const other = require('../../lib/other');
// str, int, int, int,int -> NoneType
// creates a new Gladiator
function gladiator(name, health, rage, high_damage, low_damage) {
    var gladiator = {};
    gladiator.name = name;
    gladiator.health = health;
    gladiator.rage = rage;
    gladiator.high_damage = high_damage;
    gladiator.low_damage = low_damage;
    return gladiator;
}

// (gladiator)-> str
// Return the information about the gladiators
function gladiator(gladiator) {
    return (
        '<li>' +
        gladiator.name +
        ':' +
        gladiator.health +
        ' HP ||| ' +
        gladiator.rage +
        ' Rage ||| Low damage: ' +
        gladiator.low_damage +
        ' ||| High damage: ' +
        gladiator.high_damage +
        '</li>'
    );
}

// int, int -> int
// return the randint of the gladiators low and
// high damage
function randInt(lo, hi) {
    return lo + Math.floor(Math.random() * (hi - lo));
}
function attack(self, other) {}

function main() {}
$(main);
