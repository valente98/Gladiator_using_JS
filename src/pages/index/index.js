const $ = require('jquery');
const other = require('../../lib/other');

function gladiator(name, health, rage, high_damage, low_damage) {
    var gladiator = {};
    gladiator.name = name;
    gladiator.health = health;
    gladiator.rage = rage;
    gladiator.high_damage = high_damage;
    gladiator.low_damage = low_damage;
    return gladiator;
}
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
function randInt(lo, hi) {
    return lo + Math.floor(Math.random() * (hi - lo));
}

function main() {}
$(main);
