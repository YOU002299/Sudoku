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
const grid = []

// TODO: Define a constant called SQUARESIZE with a value of 50,
const SQUARESIZE = 50

// TODO: Define two variables - gridX and gridY - to store the coordinates of current grid position
let gridX = 0
let gridY = 0

// TODO: Define two variables - offsetX and offsetY, give them both a value of 70 
let offsetX = 70
let offsetY = 70

function setup() {
  createCanvas(windowWidth, windowHeight)
  // text properties
  textAlign(LEFT, TOP)
  textSize(SQUARESIZE)
  initGame()
}

function draw() {
  background('white')
  // this code will draw the board once the variables and constatns are defined
  for (let a = 0; a <= GRIDSIZE; a++) {
    // draw  vertical lines
    line(a * SQUARESIZE + offsetX, offsetY, a * SQUARESIZE + offsetX, GRIDSIZE * SQUARESIZE + offsetY)
    // draw horizontal lines
    line(offsetX, a * SQUARESIZE + offsetY, GRIDSIZE * SQUARESIZE + offsetX, a * SQUARESIZE + offsetY)
  }

  // TASK 4d: indicate mouse position in grid
  // TODO: if gridX and gridY are in bounds (between 0 and 8) draw a coloured square in the grid to highlight that part


  // TASK 4c: create 2 nested loops to iterate through all elements of the 2d array, and draw the array value at the correct location.

  // TODO: start first loop here, ensure its loop index goes from 0 to 8 - this is the row number

  // TODO: start second loop here, its loop index also should go from 0 to 8 - this is the column number

  // TODO: use text function to draw the content of this element of the array. Calculate its position using row and column number and the squareSize constant

  // TODO: finish the second loop

  // TODO: finish the first loop


  // TASK 4c: draw a set of slightly thicker lines to outline the 3squares
  // TODO: use a loop from 0 to 3
  // TODO: draw a horizontal line across the puzzle at correct height
  // TODO: draw a vertical line down the puzzle at correct offset

}

function mouseMoved() {
  // TASK 4d: convert the mouse coordinates to grid coordinates
  // TODO: use division and floor function to calculate which row and column of the grid the mouse is in, store these in gridY and gridX respectively

}

function keyPressed() {
  // When a key is pressed this function runs, the pressed key as stored in the key variable

  // TASK 4e: insert user input into the grid. 
  // TODO: if it is a single digit in range 1-9 then insert the given value at the currently selected grid coordinate

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
    ["4", "", "", "8", "", "3", "", "", ""],
    ["7", "", "", "", "2", "", "", "", "6"],
    ["", "6", "", "", "", "", "2", "8", ""],
    ["", "", "", "4", "1", "9", "", "", "5"],
    ["", "", "", "", "8", "", "", "7", "9"]
  ]
}