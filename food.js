import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

// food moves at random after eating
let food = getRandomFoodPosition()

// turn up difficulty here.
const EXPANSION_RATE = 1

// adds segment to snake
export function update() {
    if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
    // scoring works
    const scoreBoard = document.getElementById('score-board')
    const score = parseInt(scoreBoard.innerText)
    const newScore = score + 1
    scoreBoard.innerText = newScore.toString()
    }
}
// draws snake to our gameboard.
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}
// moves the food random on grid
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}