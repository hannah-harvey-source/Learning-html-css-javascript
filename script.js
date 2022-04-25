const score = document.querySelector('.score');
const highScore = document.querySelector('.highScore');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const ClickToStart = document.querySelector('.ClickToStart');
ClickToStart.addEventListener('click', start);
document.addEventListener('click', start);
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);

let key = {
    ArrowUp: false,
    ArrowDown: false, 
    ArrowLeft: false,
    ArrowRight: false,
}
let player = {
    speed: 5,
    score: 0,
    highScore: 0,
};
function keydown(e) {
    keys[e.key] = true
}
function keyup(e) {
    keys[e.key] = false;
}
