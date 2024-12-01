import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PromptComponent } from './prompt/prompt.component';
import { TictactoeFormComponent } from './tictactoe-form/tictactoe-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PromptComponent, TictactoeFormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tic-tac-toe-app';
  showBoard: boolean = false;
  showBoardFromPrompt(value: boolean) {
    this.showBoard = value;
    console.log("this.showBoard " + this.showBoard)
  }
}
