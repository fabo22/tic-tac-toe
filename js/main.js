/*----- constants -----*/
const colors = {
    'null': 'black',
    1: 'red',
    '-1': 'blue'
};

const winningCombos = [
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
const gridEle = Array.from(document.querySelectorAll('#grid-container section'));

/*----- event listeners -----*/
document.getElementById('grid-container').addEventListener('click', handleTurn);

/*----- functions -----*/

function init() {
    board = [
        null, null, null,
        null, null, null,
        null, null, null
    ];

    turn = colors[1];
    winner = null;
    
    render();
}

init();

function handleTurn(e) {
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
