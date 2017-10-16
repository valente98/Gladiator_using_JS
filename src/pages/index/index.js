const $ = require('jquery');
const other = require('../../lib/other');

function gladiators(info, info_2) {
    var State = {
        gladiator_1: {
            name: info,
            Health: 100,
            rage: 0,
            Damage_high: 20,
            Damage_low: 12
        },
        gladiator_2: {
            name: info_2,
            Health: 100,
            Rage: 0,
            Damgae_high: 30,
            Damage_low: 5
        }
    };
    return State;
}
function main() {}
$(main);
