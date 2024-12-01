import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeFormComponent } from './tictactoe-form.component';

describe('TictactoeFormComponent', () => {
  let component: TictactoeFormComponent;
  let fixture: ComponentFixture<TictactoeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TictactoeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TictactoeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Test
