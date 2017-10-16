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
function gladiator1Html(info) {
    for (item in gladiators(info)){
        for 
        
    }
}

function showGladiator1Info(info) {
    const h = gladiator1Html(info);
    $('#gladiator-one-info').html(h);
}
function addGladiator1Name() {
    const input = $('#Gladiator-one-input');
    input.on('input', function(event) {
        showGladiator1Info(event.value);
        enableButton();
    });
}
function showGladiator2Info(info) {
    const h = gladiator2Html(info);
    $('#gladiator-two-info').html(h);
}
function addGladiator2Name() {
    const input = $('#Gladiator-two-input');
    input.on('input', function(event) {
        showGladiator2Info(event.value);
        enableButton();
    });
}
function main() {}
$(main);
