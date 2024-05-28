import { Component } from '@angular/core';
enum Player{
  None='',
  X='X',
  O='O'
}


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  cells:Player[]=new Array(9).fill(Player.None);
  currentPlayer:Player=Player.X;
  winner:Player|null=null;
  gameOver: boolean=false;
  board: any;

  winnerPositions: number[][]=[]

  constructor() {
    this.board = [['','',''],
    ['','',''], ['','','']];
    this.winnerPositions=[
      [0,1,2],[3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,2], [2,4,6]
    ];
  }

  makeMove(index:number): void{
    if(!this.cells[index] && !this.gameOver){
      this.cells[index]=this.currentPlayer;
      this.checkWinner();
      this.currentPlayer=this.currentPlayer==Player.X ? Player.O: Player.X
    }
  }

  checkWinner():void {


}

}
