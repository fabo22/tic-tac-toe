/*----- constants -----*/
// variables that cannot be changed
const KEY = {
    '1': 'X', //player 1
    '-1': 'O', //player 2
    'null': ''// empty square on the grid
};

const COMBOS = [
    [0, 1, 2], [0, 3, 6],
    [0, 4, 8], [1, 4, 7],
    [2, 4, 6], [2, 5, 8],
    [3, 4, 5], [6, 7, 8]
];

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;

/*----- cached element references -----*/
const gridEle = Array.from(document.querySelectorAll('.grid-item'));
const messageEle = document.getElementById('message');

/*----- event listeners -----*/
document.getElementById('grid-container').addEventListener('click', handleClick);

/*----- functions -----*/

function init() {
    // then need to visualize what a new game should look like
    board = new Array(9).fill(null); // same as [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = false;
    render();
}

init();

function handleClick(e) {

    console.log(e.target.dataset.index);
    let idx = e.target.dataset.index;
    board[idx] = turn;
    // toggle turn
    turn *= -1;
    // check if winner
    winner = checkWinner();
    render();
}

function checkWinner() {
    // write logic to determine winner
    // return true or false
    render();
}

function render() {
    // draws the game board
    board.forEach(function(mark, index){
        gridEle[index].textContent = KEY[mark];
        console.log('Board: ', board);
        console.log('Turn: ', turn);
    });
    // transfer the state of the app to the DOM
    // what data do we use to draw the board?
}
