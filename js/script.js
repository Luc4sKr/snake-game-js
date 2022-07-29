import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood} from "./food.js";
import { outsideGrid } from "./grid.js";

let gameOver = false;
let lastRendertime = 0;
const gameBoard = document.getElementById("game-board");


function main(currentTime) {
    if (gameOver) {
        if (confirm("YOU LOSE. PRESS 'OK' TO RESTART.")) {
            window.location = "/";
        }
        return
    }


    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRendertime) / 1000; // É dividido por 1000 para converter de milésimos para segundos

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRendertime = currentTime;

    update();
    draw();
}


window.requestAnimationFrame(main);


// Função resposável pela atualização
function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

// Função responsável por desenhar tudo na tela
function draw() {
    gameBoard.innerHTML = ""; // Limpa a tela
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

// Checa se a cobra colidiu com a borda ou com ela mesma
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
