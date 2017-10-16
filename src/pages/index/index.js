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

//this function is to attack the other gladiator
// gladiator, other -> Nonetype
// updates the gladiators after one of the gladiators attack
function attack(gladiator, other) {
    var damage_dealt = randInt(gladiator.low_damage, gladiator.high_damage);
    if (randInt(1, 100) <= gladiator.rage) {
        other.health -= 2 * damage_dealt;
        gladiator.rage = 0;
    } else {
        other.health -= damage_dealt;
        gladiator.rage += 15;
    }
}

// this function is to heal if the user wants their gladiator to heal
// (gladiator) -> Nonetype
// updates the gladiators healthe when the user wants their gladiator to heal
function heal(gladiator) {
    if (gladiator.rage >= 10) {
        gladiator.rage = (gladiator.rage - 10, 0);
        gladiator.health = (gladiator.health + 5, 200);
    }
}

function main() {}
$(main);
