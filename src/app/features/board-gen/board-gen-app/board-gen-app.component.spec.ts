import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGenAppComponent } from './board-gen-app.component';

describe('BoardGenAppComponent', () => {
  let component: BoardGenAppComponent;
  let fixture: ComponentFixture<BoardGenAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardGenAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardGenAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
