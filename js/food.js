import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";


let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;


// Verifica se a cobra tocou a comida
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

// Desenha a comida
export function draw(gameBoard) {
    const foodElement = document.createElement("div"); // Cria uma div para a comida
    foodElement.style.gridRowStart = food.y; // Posição y da comida
    foodElement.style.gridColumnStart = food.x; // Posição x da comida
    foodElement.classList.add("food"); // Adiciona a comida na classe "food" no css
    gameBoard.appendChild(foodElement); // Adiciona como uma classe filha do game-board
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }

    return newFoodPosition;
}