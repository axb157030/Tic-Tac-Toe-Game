import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictactoe-form.component.html',
  styleUrl: './tictactoe-form.component.css'
})
export class TictactoeFormComponent implements OnInit {
  tictactoeBoard: String[][] = [];
  boardSize: number = 3;
  currentPlayer = 'X';
  ngOnInit() { 
    this.boardSize = 3;
    //const n = this.tictactoeBoard.length;  // Get the size of the board (rows or columns)
    this.tictactoeBoard = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(''));
    this.currentPlayer = 'X'; // Can assign it anything
    console.log("Hello")
  }


  // Tell which icon wins. // prompt, should send icon to this component
  // 2 icons should be sent. One maps to 2, another maps to 1. blocks that have a different number than that signal empty blocks
  // Returns 2 if first icon wins. 1 if other icon wins or triggers an event to show who wins. Provide animation
  // when win and when reset. After win, give button that resets game,
  // removing event that tells who win, and reset tictacetoeform.

  tictactoeShowWin() {
    // Assumming tictactoeform is a 3 by 3 array
    // If tictactoeform[0][0], tictactoeform[1][0], tictactoeform[2][0], win. first column keeps increasing by 1, second column is same
    // If tictactoeform[0][1], tictactoeform[1][1], tictactoeform[2][1],
    // If tictactoeform[0][2], tictactoeform[1][2], tictactoeform[2][2],

    // If tictactoeform[0][0], tictactoeform[0][1], tictactoeform[0][2], win. second column keeps increasing by 1, first column is same
  
  
  // If tictactoeform[0][0], tictactoeform[1][1], tictactoeform[2][2], win. first and second column keeps increasing by 1.
  // If tictactoeform[2][0], tictactoeform[1][1], tictactoeform[0][2], win. first column keeps decreasing by 1 but second column keeps increasing by 1.
  

  // Check rows
  for (let row = 0; row < this.boardSize; row++) {
      if (this.tictactoeBoard[row].every(cell => cell === this.tictactoeBoard[row][0] && cell !== '')) {
          return true;  // Entire row is the same and not empty
      }
  }

  // Check columns
  for (let col = 0; col < this.boardSize; col++) {
      let columnMatch = true;
      for (let row = 0; row < this.boardSize; row++) {
          if (this.tictactoeBoard[row][col] !== this.tictactoeBoard[0][col] || this.tictactoeBoard[row][col] === ' ') {
              columnMatch = false;
              break;
          }
      }
      if (columnMatch) return true;  // Entire column is the same and not empty
  }

  // Check top-left to bottom-right diagonal
  let diagonalMatch1 = true;
  for (let i = 0; i < this.boardSize; i++) {
      if (this.tictactoeBoard[i][i] !== this.tictactoeBoard[0][0] || this.tictactoeBoard[i][i] === ' ') {
          diagonalMatch1 = false;
          break;
      }
  }
  if (diagonalMatch1) return true;

  // Check top-right to bottom-left diagonal
  let diagonalMatch2 = true;
  for (let i = 0; i < this.boardSize; i++) {
      if (this.tictactoeBoard[i][this.boardSize - 1 - i] !== this.tictactoeBoard[0][this.boardSize - 1] || this.tictactoeBoard[i][this.boardSize - 1 - i] === ' ') {
          diagonalMatch2 = false;
          break;
      }
  }
  if (diagonalMatch2) return true;

  return false;  // No win found
}


handleClick(row: number, col: number): void {
  // If the cell is empty, mark it with the current player's symbol
  console.log("HEY THERE!!! " + row + " " + col)
  if (this.tictactoeBoard[row][col] === '') {
    this.tictactoeBoard[row][col] = this.currentPlayer;
    // Switch to the other player
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }
}

  
  }

  


