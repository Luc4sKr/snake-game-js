import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from "./snake.js";


let lastRendertime = 0;
const gameBoard = document.getElementById("game-board");


function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRendertime) / 1000; // É dividido por 1000 para converter de milésimos para segundos

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRendertime = currentTime;

    update();
    draw();
}


window.requestAnimationFrame(main)


function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = ""; // Limpa a tela
    drawSnake(gameBoard);
}