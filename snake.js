import { getInputDirection } from "./input.js"

// adjust difficulty
export const SNAKE_SPEED = 5
const snakeBody =  [{ x: 11, y: 11 }]
let newSegments = 0

// updates game and +1 segment is added to snake
export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i =  snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
}
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y  
}
// draws snake on our grid
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
    })
}

// add +1 to segment on snake. tracking food ate.
export function expandSnake(amount) {
    newSegments += amount
}

// 
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
    })
}

//
export function getSnakeHead() {
    return snakeBody[0]
}

// 
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}
// adds new segment to snake
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
}