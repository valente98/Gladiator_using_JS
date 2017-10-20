const $ = require('jquery');
const appRoot = $('#app');
// int, int -> int
// return the randint of the gladiators low and
// high damage
function randInt(lo, hi) {
    return lo + Math.floor(Math.random() * (hi - lo));
}

// str, int, int, int,int -> NoneType
// creates a new Gladiator
function gladiatormaker(name, health, rage, lo, hi) {
    this.name = name;
    this.health = health;
    this.rage = rage;
    this.lo = lo;
    this.hi = hi;

    this.attack = function attack(other) {
        var damage_dealt = randInt(this.lo, this.hi);
        if (randInt(1, 100) <= this.rage) {
            other.health -= 2 * damage_dealt;
            this.rage = 0;
        } else {
            other.health -= damage_dealt;
            this.rage += 15;
        }
    };

    this.heal = function heal() {
        if (this.rage >= 10) {
            this.rage = Math.max(this.rage - 10, 0);
            this.health = Math.min(this.health + 5, 200);
        }
    };
    this.pass = function pass() {
        this.rage += 30;
    };
    this.is_dead = function is_dead(other) {
        if (this.health <= 0) {
            this.health = Math.max(0);
            showwinner(other.name);
            showGameOver();
            disable();
        }
    };
    this.super_heal = function super_heal() {
        if (this.health <= 200 && this.rage >= 30) {
            this.health += 20;
            this.rage -= 30;
        } else {
            $('#superheal').prop(disable, true);
        }
    };
}
//this disable buttons
function disable() {
    $('#attack').prop(disabled, true);
    $('#heal').prop(disabled, true);
    $('#pass').prop(disabled, true);
    $('#superheal').prop(disable, true);
}

//This allows the user to rematch
function viewGameOver() {
    return '<br><div><button class="btn" id="Rematch" onclick="document.location.reload()">Rematch</button></div>';
}
function showGameOver() {
    var h = viewGameOver();
    $('#restart').html(h);
}
//This show the users who the winner is.
function winner(gladiator) {
    return '<h2>' + gladiator + ' is the Winner!!';
}

function showwinner(gladiator) {
    var h = winner(gladiator);
    $('#winner').html(h);
}
// (gladiator)-> str
// Return the information about the gladiators
function viewGladiator(gladiator) {
    return (
        '<li>' +
        gladiator.name +
        ' :' +
        gladiator.health +
        ' HP ||| ' +
        gladiator.rage +
        ' Rage ||| Low damage: ' +
        gladiator.lo +
        ' ||| High damage: ' +
        gladiator.hi +
        '</li>'
    );
}
//This function will show the user the gladiator info
function showgladiator1(gladiator) {
    var h = viewGladiator(gladiator);
    $('#War1').html(h);
}
function showgladiator2(gladiator) {
    var h = viewGladiator(gladiator);
    $('#War2').html(h);
}

// shows the choice the user what they can choose to do
function view() {
    return [
        '<div><h3 id="turn"> Gladiator: ' + whosturn().name + '<h3></div>',
        '<div><button class="btn" id="attack">Attack</button><button class="btn" id="heal">Heal</button><button class="btn" id="pass">Pass</button></div>',
        '<div><button class="btn" id="superheal">Super Heal</button></div>'
    ].join('');
}
function attachhandlers() {
    $('#heal').click(function() {
        whosturn().heal();
        opponent().is_dead(whosturn());
        opponentturn();
        draw();
    });
    $('#attack').click(function() {
        whosturn().attack(opponent());
        opponent().is_dead(whosturn());
        opponentturn();
        draw();
    });
    $('#pass').click(function() {
        whosturn().pass();
        opponent().is_dead(whosturn());
        opponentturn();
        draw();
    });
    $('#superheal').click(function() {
        whosturn().super_heal();
        opponent().is_dead(whosturn());
        opponentturn();
        draw();
    });
}

function draw() {
    showgladiator1(STATE.player_1);
    showgladiator2(STATE.player_2);
    appRoot.html(view());
    attachhandlers();
}

function opponentturn() {
    if (STATE.turn === 1) {
        STATE.turn = 2;
    } else {
        STATE.turn = 1;
    }
}
function opponent() {
    if (STATE.turn === 1) {
        return STATE.player_2;
    } else {
        return STATE.player_1;
    }
}
function whosturn() {
    if (STATE.turn === 1) {
        return STATE.player_1;
    } else {
        return STATE.player_2;
    }
}
// This creates the gladiaters
const STATE = {
    player_1: new gladiatormaker(
        $('#Gladiator-one-input').val(),
        200,
        0,
        5,
        30
    ),
    player_2: new gladiatormaker(
        $('#Gladiator-two-input').val(),
        200,
        0,
        12,
        20
    ),

    turn: 1
};
function main() {
    $('#glad-input').click(function() {
        STATE.player_1.name = $('#Gladiator-one-input').val();
        STATE.player_2.name = $('#Gladiator-two-input').val();
        draw();
    });
}
$(main);
