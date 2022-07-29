import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 2; // Se move 2 vezes por segundo
const snakeBody = [{ x:11, y:11 }];
let newSegments = 0;

// Atualiza a cobra
export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i=snakeBody.length - 2; i>=0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

// Desenha a cobra
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div"); // Cria uma div para cada quadrado da cobra
        snakeElement.style.gridRowStart = segment.y; // Posição y da cobra
        snakeElement.style.gridColumnStart = segment.x; // Posição x da cobra
        snakeElement.classList.add("snake"); // Adiciona o quadrado na classe "snake" no css
        gameBoard.appendChild(snakeElement); // Adiciona como uma classe filha do game-board
    })
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPosition(segment, position);
    });
}

function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
    for (let i=0; i<newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length -1 ] });
    }

    newSegments = 0;
}