import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGenSidebarComponent } from './board-gen-sidebar.component';

describe('BoardGenSidebarComponent', () => {
  let component: BoardGenSidebarComponent;
  let fixture: ComponentFixture<BoardGenSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardGenSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardGenSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
