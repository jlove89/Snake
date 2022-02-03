import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, onSnake } from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'

// declare your variables
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

// pop up tells you to restart
function main(currentTime) {    
    checkLose()
    if (gameOver) {
    if (confirm('Game Over. Press ok to restart.')) {
    window.location = '/'
    }
    return
}
    
window.requestAnimationFrame(main)
// snake speed each time your moving.
const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)
// snake updates upon eating food or runs into wall or itself
function update() {
    updateSnake()
    updateFood()
    checkDeath()
}
// draws our items on the grid
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
// checks if you ran into wall or ran into self
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}