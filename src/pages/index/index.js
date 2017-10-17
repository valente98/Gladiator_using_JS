const $ = require('jquery');
const appRoot = $('#app');
// str, int, int, int,int -> NoneType
// creates a new Gladiator
function gladiatormaker(name) {
    this.name = name;
    this.health = health;
    this.rage = rage;
    this.low_damage = randInt(1, 25);
    this.high_damage = randInt(this.low_damage, 25);
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
//This function will show the user the gladiator info
function showgladiator(gladiator) {
    var h = gladiator(gladiator);
    $('#war').html(h);
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
        gladiator.rage = Math.max(gladiator.rage - 10, 0);
        gladiator.health = Math.min(gladiator.health + 5, 200);
    }
}

// this function checks if the gladiator is dead
function is_dead(gladiator) {
    if (gladiator.health <= 0) {
        return true;
    } else {
        return false;
    }
}
//this function add 30 points to the gladiator rage if the pass thier turn
function pass(gladiator) {
    gladiator.rage += 30;
}

// shows the choice the user can choose
function view() {
    return [
        '<div><button id="attack">Attack</button></div>',
        '<br><div><button id="heal">Heal</button></div>',
        '<br><div><button id="pass">Pass</button></div>'
    ].join('');
}
function attachhandlers() {
    $('#heal').click(function() {
        heal();
        draw();
    });
    $('#attack').click(function() {
        attack();
        is_dead();
        draw();
    });
    $('#pass').click(function() {
        pass();
        draw();
    });
}
function draw() {
    appRoot.html(view());
    attachhandlers();
}

function main() {
    $('#glad-input').click(function() {
        var player_1 = new gladiatormaker($('#Gladiator-two-input').val());
        var player_2 = new gladiatormaker($('#Gladiator-one-input').val());
    });
    while (true) {
        showgladiator(player_1);
        draw();
        showgladiator(player_2);
        draw();
    }
}
$(main);
