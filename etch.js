// Needs logic for having a maximum input


// Creates a button to resize the grid at the top of the screen

const button = document.createElement('button');
button.textContent = 'Resize Grid';
document.body.appendChild(button);
button.addEventListener('click', () => {

    do {
        var input = parseInt(prompt('How many squares between 1 and 100 should the sides of the grid have?'));
    } while (isNaN(input) || (input < 1) || (input > 100));

    let node = document.getElementById('container');
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    gridSize(input);
    fill(input);
    listen();
});


// Creates the initial grid

const container = document.createElement('div');
container.setAttribute('id','container');
let number = 4;
gridSize(number);
fill(number);
listen();

// Creates a container in the DOM and creates the grid based on the grid size

function gridSize(number) {
    container.style.gridTemplateColumns = 'repeat('+number+', 1fr)';
    container.style.gridTemplateRows = 'repeat('+number+', 1fr)';
    document.body.appendChild(container);
}

// Adds enoughs divs to fill the grid

function fill(number) {
    for ( i = 0; i < (number*number); i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'hover');
        div.classList.add('square');
        container.appendChild(div);
    }
}

// Listens for the transition end event and adds the active class

function listen() {
const hover = document.querySelectorAll('#hover');

hover.forEach((div) => {
    div.addEventListener('mouseover', function(e) {
        div.classList.add('active');
        console.log(e);
    });
});

// Listens for the transition end event and removes the active class

hover.forEach((div) => {
    div.addEventListener('transitionend', function(e) {
        div.classList.remove('active');
        console.log(e);
    });
});

}