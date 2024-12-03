import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationBoardComponent } from './congratulation-board.component';

describe('CongratulationBoardComponent', () => {
  let component: CongratulationBoardComponent;
  let fixture: ComponentFixture<CongratulationBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongratulationBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongratulationBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
