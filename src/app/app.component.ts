import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PromptComponent } from './prompt/prompt.component';
import { TictactoeFormComponent } from './tictactoe-form/tictactoe-form.component';
import { CommonModule } from '@angular/common';
import { CongratulationBoardComponent } from './congratulation-board/congratulation-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PromptComponent, TictactoeFormComponent, CongratulationBoardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tic-tac-toe-app';
  showBoard: boolean = false;
  playerSigns = "";
  resetBoard: boolean = false;
  congratulations: boolean = false;
  boardSize:number = 3;
  getPlayerSignsFromPrompt(value: string) {
    this.playerSigns = value;
  }
  showBoardFromPrompt(value: boolean) {
    this.showBoard = value;
  }
  resetBoardEmitterFromPrompt(value: boolean) {
    this.resetBoard = value;
  }

  setSizeOfBoard(value:number) {
    this.boardSize = value;
  }
  onCongratulation(value: boolean) {
      this.congratulations = value;
  }
}
