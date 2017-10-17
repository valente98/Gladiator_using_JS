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
        var damage_dealt = randInt(this.low_damage, this.high_damage);
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
    this.is_dead = function is_dead() {
        if (this.health <= 0) {
            return true;
        } else {
            return false;
        }
    };
}

// (gladiator)-> str
// Return the information about the gladiators
function gladiatorinfo(gladiator) {
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
    var h = gladiatorinfo(gladiator);
    $('#War').html(h);
}

function attacker(gladiator, other) {
    gladiator.attack(other);
    other.is_dead();
}
function heal(gladiator) {
    gladiator.heal();
}
function pass(gladiator) {
    gladiator.pass();
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
        attacker();
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
        var player_1 = new gladiatormaker(
            $('#Gladiator-two-input').val(),
            200,
            0,
            12,
            20
        );
        var player_2 = new gladiatormaker(
            $('#Gladiator-one-input').val(),
            200,
            0,
            5,
            30
        );
    });
    draw();
}
$(main);
