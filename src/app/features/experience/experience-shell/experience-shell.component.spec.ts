import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceShellComponent } from './experience-shell.component';

describe('ExperienceShellComponent', () => {
  let component: ExperienceShellComponent;
  let fixture: ComponentFixture<ExperienceShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
