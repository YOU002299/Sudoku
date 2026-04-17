/**
 Sudoku template
 The board array has 81 elements arranged in a 2d array 9x9
 Each contains either an empty string or a single digit

Follow the sheet that goes with this exercise
 TASK 1 - playing existing sudoku games
 TASK 2 - compiling feature lists of sudoku games
 TASK 3 - determining minimum feature set of a sudoku program
 TASK 4 - complete all the tasks in the comments below. This will give you a basic playable sudoku game, but if won't have win conditions / error checking, essentially you'll just be able to enter numbers into a grid.
  4a - declare variables 
  4b - initialise puzzle
  4c - draw the puzzle (lines and numbers)
  4d - work out where the mouse is in the grid and highlight it
  4e - get user input and put that number into the grid at selected position
*/

// TASK 4a: setup the appropriate variables/constants
const GRIDSIZE = 9
// TODO: Declare a variable called grid
let grid = 81

// TODO: Define a constant called SQUARESIZE with a value of 50,
const SQUARESIZE = 50

// TODO: Define two variables - gridX and gridY - to store the coordinates of current grid position
let gridX = 0
let gridY = 0

// TODO: Define two variables - offsetX and offsetY, give them both a value of 70 
let offsetX = 70
let offsetY = 70

let MouseHover

// Variables to track selected square
let selectedGridX = -1
let selectedGridY = -1
function setup() {
  createCanvas(windowWidth, windowHeight)
  // text properties
  textAlign(CENTER, CENTER)
  textSize(SQUARESIZE)
  initGame()
}

function draw() {
  background('white')

  // highlight hovered row and column
  if (gridX >= 0 && gridX <= 8 && gridY >= 0 && gridY <= 8) {
    push()
    noStroke()
    fill(200, 200, 200, 100)
    rect(offsetX, gridY * SQUARESIZE + offsetY, GRIDSIZE * SQUARESIZE, SQUARESIZE)
    rect(gridX * SQUARESIZE + offsetX, offsetY, SQUARESIZE, GRIDSIZE * SQUARESIZE)
    pop()
  }

  // highlight clicked square
  if (selectedGridX >= 0 && selectedGridX <= 8 && selectedGridY >= 0 && selectedGridY <= 8) {
    push()
    noStroke()
    fill(211, 211, 211, 180)
    pop()
  }

  // this code will draw the board once the variables and constatns are defined
  for (let a = 0; a <= GRIDSIZE; a++) {
    // draw  vertical lines
    if(a % 3 ==0){
      strokeWeight(3)
    }else{
      strokeWeight(1)
    }
    line(a * SQUARESIZE + offsetX, offsetY, a * SQUARESIZE + offsetX, GRIDSIZE * SQUARESIZE + offsetY)
    // draw horizontal lines
    line(offsetX, a * SQUARESIZE + offsetY, GRIDSIZE * SQUARESIZE + offsetX, a * SQUARESIZE + offsetY)
  }

  // TASK 4c: create 2 nested loops to iterate through all elements of the 2d array, and draw the array value at the correct location.

  // TODO: start first loop here, ensure its loop index goes from 0 to 8 - this is the row number

  // TODO: start second loop here, its loop index also should go from 0 to 8 - this is the column number

  // TODO: use text function to draw the content of this element of the array. Calculate its position using row and column number and the squareSize constant

  // TODO: finish the second loop

  // TODO: finish the first loop
    for (let row = 0; row < GRIDSIZE; row++) {
    for (let col = 0; col < GRIDSIZE; col++) {
      const value = grid[row][col]
      if (value !== "") {
        text(value, col * SQUARESIZE + offsetX + 25, row * SQUARESIZE + offsetY + 29)
      }
    }
  }


  // TASK 4c: draw a set of slightly thicker lines to outline the 3squares
  // TODO: use a loop from 0 to 3
  // TODO: draw a horizontal line across the puzzle at correct height
  // TODO: draw a vertical line down the puzzle at correct offset

}
  function mouseMoved() {
    // TASK 4d: convert the mouse coordinates to grid coordinates
    const x = floor((mouseX - offsetX) / SQUARESIZE)
    const y = floor((mouseY - offsetY) / SQUARESIZE)

    if (x >= 0 && x < GRIDSIZE && y >= 0 && y < GRIDSIZE) {
      gridX = x
      gridY = y
    } else {
      gridX = -1
      gridY = -1
    }
  }

  function mousePressed() {
    // Store the clicked square coordinates
    selectedGridX = floor((mouseX - offsetX) / SQUARESIZE)
    selectedGridY = floor((mouseY - offsetY) / SQUARESIZE)
  }

  function keyPressed() {
    // When a key is pressed this function runs, the pressed key as stored in the key variable

    // TASK 4e: insert user input into the grid. 
    // TODO: if it is a single digit in range 1-9 then insert the given value at the currently selected grid coordinate
    if (key >= '1' && key <= '9' && selectedGridX >= 0 && selectedGridX < GRIDSIZE && selectedGridY >= 0 && selectedGridY < GRIDSIZE) {
    
    }

  }

  function initGame() {
    // TASK 4b: prepare 2d array to hold sudoku grid values
    // TODO: modify the grid values to match the sudoku grid.png
    // Leave blank square as ""
    // First line is done for you
    grid = [
      ["5", "3", "", "", "7", "", "", "", ""],
      ["6", "", "", "1", "9", "5", "", "", ""],
      ["", "9", "8", "", "", "", "", "6", ""],
      ["8", "", "", "", "6", "", "", "", "3"],
      ["4", "", "", "8", "", "3", "", "", "1"],
      ["7", "", "", "", "2", "", "", "", "6"],
      ["", "6", "", "", "", "", "2", "8", ""],
      ["", "", "", "4", "1", "9", "", "", "5"],
      ["", "", "", "", "8", "", "", "7", "9"]
    ]
  }