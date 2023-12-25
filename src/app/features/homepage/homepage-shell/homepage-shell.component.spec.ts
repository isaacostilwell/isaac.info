import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageShellComponent } from './homepage-shell.component';

describe('HomepageShellComponent', () => {
  let component: HomepageShellComponent;
  let fixture: ComponentFixture<HomepageShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
