import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGenShellComponent } from './board-gen-shell.component';

describe('BoardGenShellComponent', () => {
  let component: BoardGenShellComponent;
  let fixture: ComponentFixture<BoardGenShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardGenShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardGenShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
