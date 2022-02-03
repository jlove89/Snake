// your snake won't move without this
let inputDirection = { x: 0, y: 0}
let lastInputDirection = { x: 0, y: 0}

// event listener for arrow key controls
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp' : 
          if (lastInputDirection.y !== 0) break
          inputDirection = { x: 0, y: -1}
          break
        case 'ArrowDown' : 
          if (lastInputDirection.y !== 0) break
          inputDirection = { x: 0, y: 1}
          break
        case 'ArrowLeft' : 
          if (lastInputDirection.x !== 0) break
          inputDirection = { x: -1, y: 0}
          break
        case 'ArrowRight' : 
          if (lastInputDirection.x !== 0) break
          inputDirection = { x: 1, y: 0}
          break
    
    }
})

// stores last direction taken
export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}