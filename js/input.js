let inputDirection = { x:0, y:0 };
let lastInputDirection = { x:0, y:0 };

// Checa os inputs
window.addEventListener("keydown", e => {
    switch (e.key) {
        case "w":
            if (lastInputDirection.y !== 0) break // Não deixa a cobra virar em 180°
            inputDirection = { x:0, y:-1 };
            break
        case "s":
            if (lastInputDirection.y !== 0) break // Não deixa a cobra virar em 180°
            inputDirection = { x:0, y:1 };
            break
        case "a":
            if (lastInputDirection.x !== 0) break // Não deixa a cobra virar em 180°
            inputDirection = { x:-1, y:0 };
            break
        case "d":
            if (lastInputDirection.x !== 0) break // Não deixa a cobra virar em 180°
            inputDirection = { x:1, y:0 };
            break
    }
})


export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}