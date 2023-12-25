import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGenViewComponent } from './board-gen-view.component';

describe('BoardGenViewComponent', () => {
  let component: BoardGenViewComponent;
  let fixture: ComponentFixture<BoardGenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardGenViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardGenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
