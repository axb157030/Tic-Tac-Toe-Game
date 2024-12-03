import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf, etc.
import confetti from 'canvas-confetti';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-congratulation-board',
  standalone: true,  // This makes the component standalone
  imports: [CommonModule],  // Import Angular's CommonModule to use *ngIf and other common features
  templateUrl: './congratulation-board.component.html',
  styleUrls: ['./congratulation-board.component.css'],
  animations: [
    trigger('fade', [
      // On leave (when the element is removed from the DOM), apply the fade-out animation
      transition(':leave', [
        style({ opacity: 1 }), // Start with full opacity
        animate('500ms', style({ opacity: 0 })) // Animate to 0 opacity (fade out)
      ])
    ])
  ]
})
export class CongratulationBoardComponent implements  OnChanges {
  @Input() showCongrats = false;
  closeCongrats: boolean = false;




// Trigger the celebration (showing the board and confetti)
ngOnChanges(changes: SimpleChanges): void {
  if (changes['showCongrats']) {
    this.closeCongrats = false;
    //this.showCongrats = changes['showCongrats'].currentValue;
    if(this.showCongrats) {
      this.triggerConfetti();
    }
    
  }
  }

  closeCongratulation(): void {
    this.closeCongrats = true;
  }

  // Trigger the confetti animation
  triggerConfetti() {
    confetti({
      particleCount: 800,
      spread: 120,
      origin: { y: 0.6 },
      colors: ['#ff6347', '#ff4500', '#ff1493', '#ffa500', '#32cd32'],
      angle: 90,
      gravity: 1.5,
      drift: 0.4,
      shapes: ['circle']
    });

    confetti({
      particleCount: 800,
      spread: 180,
      origin: { y: 0.6 },
      colors: ['#ff6347', '#ff4500', '#ff1493', '#ffa500', '#32cd32'],
      angle: 120,
      gravity: 1.2,
      drift: 0.3,
      shapes: ['circle']
    });

    confetti({
      particleCount: 1000,
      spread: 200,
      origin: { y: 0.8 },
      colors: ['#ff1493', '#ffff00', '#00ff00', '#ff6347'],
      angle: 45,
      gravity: 1.8,
      drift: 0.2,
      shapes: ['square']
    });
  }
}
