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


// Starting the game // 

function start() {
    gameArea.innerHTML = "";
    startScreen.classList.add('hide');
    player.isStart = true;
    player.score = 0;
    window.requestAnimationFrame(play);
    for (i = 0; i < 5; i++) {
        let roadLines = document.createElement('div');
        roadLines.setAttribute('class', 'roadLines');
        roadLines.y = (i * 140);
        roadLines.style.top = roadLines.y + "px";
        gameArea.appendChild(roadLines);
    for (i = 0; i < 3; i++) {
        let Opponents = document.createElement('div');
        Opponents.setAttribute('class', 'Opponents');
        Oppenents.y = ((i) * -300);
        Oppenents.style.top = Oppenents.y + "px";
        gameArea.appendChild(Oppenents);
        Opponents.style.left = Math.floor(Math.random() * 350) + "px";
        Opponents.style.backgroundColor=randomColor();
    }
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    }

    function randomColor() {
        function c(){
            let hex=Math.floor(Math.random()*256).toString(16);
            return ("0"+String(hex)).substr(-2);
        }
        return "#"+c()+c()+c();
    //play the game
    function play() {
        let car = document.querySelector('.car');
        let road = gameArea.getBoundingClientRect();
        if(player.isStart) {
            moveLines();
            moveOppenents();

            if (keys.ArrowUp && player.y > (road.top + 70)) {
                player.y = player.speed
            }
            if (keys.ArrowDown && player.y < (road.height - 75)) {
                player.y += player.speed
            }
            if (keys.ArrowRight && player.x < 350) {
                player.x += player.speed
            }
            if (keys.ArrowLeft && player.x > 0) {
                player.x += player.speed
            }
        }
    }
    }
}