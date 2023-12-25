import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationShellComponent } from './education-shell.component';

describe('EducationShellComponent', () => {
  let component: EducationShellComponent;
  let fixture: ComponentFixture<EducationShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
