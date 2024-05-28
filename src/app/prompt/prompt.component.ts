import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})
export class PromptComponent {
  ticTacToeForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ticTacToeForm = this.formBuilder.group({
      size: ['3', [Validators.required, Validators.min(3), Validators.max(9), Validators.pattern("[0-9]"), Validators.maxLength(1)]],
      icon: ['', Validators.required]
    });
  }
}
