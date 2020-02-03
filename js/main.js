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
    board = [
        null, null, null,
        null, null, null,
        null, null, null
    ];

    turn = KEY[1];
    winner = null;
    
    render();
}

init();

function handleClick(e) {

    let idx = gridEle.findIndex(function(eachGrid) {
    return eachGrid === e.target;
    });
    board[idx] = turn;

    turn = turn === 'X' ? 'O' : 'X';
    render();
}

function render() {
    board.forEach(function(playerMark, index){
        gridEle[index].textContent = playerMark;
        console.log(index);
    });
}
