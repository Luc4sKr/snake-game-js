export const SNAKE_SPEED = 2; // Se move 2 vezes por segundo
const snakeBody = [{x: 11, y: 11}];

// Atualiza a cobra
export function update() {
    for (let i=snakeBody.length - 2; i>=0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
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