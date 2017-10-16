const $ = require('jquery');
const appRoot = $('#app');

// application State

const State = {
    count: 0
};

// application view

function view() {
    return [
        '<div><button id="up">+</button></div>',
        State.count,
        '<div><button id="down">-</button></div>'
    ].join('');
}
// application update setup

function attachhandlers() {
    $('#down').click(function() {
        State.count -= 1;
        draw();
    });
    $('#up').click(function() {
        State.count += 1;
        draw();
    });
}
function draw() {
    appRoot.html(view());
    attachhandlers();
}

function main() {
    draw();
}
$(main);
