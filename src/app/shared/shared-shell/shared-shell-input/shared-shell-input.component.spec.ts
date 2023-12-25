import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedShellInputComponent } from './shared-shell-input.component';

describe('SharedShellInputComponent', () => {
  let component: SharedShellInputComponent;
  let fixture: ComponentFixture<SharedShellInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedShellInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedShellInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
