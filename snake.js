import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 3
const snakeBody =  [{ x: 11, y: 11 },
    //{ x: 12, y: 11 },
    //{ x: 13, y: 11 },
    //{ x: 14, y: 11 }
]

export function update() {
    const inputDirection = getInputDirection()
    for (let i =  snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
}
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
    
    //console.log('update snake')
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
        //console.log('draw snake')
    })
}