import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSidebarComponent } from './resume-sidebar.component';

describe('ResumeSidebarComponent', () => {
  let component: ResumeSidebarComponent;
  let fixture: ComponentFixture<ResumeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
