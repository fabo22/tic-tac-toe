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
document.getElementById('reset').addEventListener('click', init); //says when Reset Board is clicked, call init(which starts the code over)

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
    let idx = e.target.dataset.index;
    if (winner || board[idx]) return;
    board[idx] = turn;
    
    
    // toggle turn
    turn *= -1;
    // check if winner
    winner = checkWinner();
    render();
}

function checkWinner() {
    // write logic to determine winner
    
    for (let i = 0; i < COMBOS.length; i++) {
        if (Math.abs(board[COMBOS[i][0]] + board[COMBOS[i][1]] + board[COMBOS[i][2]]) === 3) return board[COMBOS[i][0]];
        // ^ grabbing the absolute value of each value of combos, either 1 or -1, and sees if they add up to 3
    };
    if (board.includes(null)) return false; // checks if there is any empty space on the board
    return 'T'; //if none, return T for tie
}

function render() {
    // draws the game board
    board.forEach(function(mark, index){
        gridEle[index].textContent = KEY[mark];
        message();
    });
    // transfer the state of the app to the DOM
    // what data do we use to draw the board?
    
}

function message() {
    if (!winner) {
        messageEle.textContent = `${KEY[turn]}'s Turn!`;
        messageEle.style.color = 'white';
    } else if (winner === 'T') {
        messageEle.textContent = "It's a tie!";
        messageEle.style.color = "gold";
    } else {
        messageEle.textContent = `${KEY[winner]} Wins!`;
        messageEle.style.color = 'aquamarine';
    }
}

